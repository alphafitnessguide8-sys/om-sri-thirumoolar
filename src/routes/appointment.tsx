import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { useReveal } from "@/hooks/use-reveal";
import { useState } from "react";
import { Phone, MessageCircle, Send, Check, AlertCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import leafImg from "@/assets/leaf-accent.jpg";

export const Route = createFileRoute("/appointment")({
  head: () => ({
    meta: [
      { title: "Book Appointment — STM Siddha & Ayurveda Clinic Puducherry" },
      { name: "description", content: "Book your consultation at STM Puducherry. Personalised Siddha, Ayurveda, Varma & Yoga therapy. Call 9952232078 or message us on WhatsApp." },
      { property: "og:title", content: "Book Appointment — STM Puducherry" },
      { property: "og:description", content: "Begin your healing journey with a personal consultation." },
    ],
  }),
  component: AppointmentPage,
});

function AppointmentPage() {
  useReveal();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", treatment: "Siddha Treatment", message: "" });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSaving(true);
    const { error: dbError } = await supabase.from("appointment_requests").insert({
      name: form.name,
      phone: form.phone,
      treatment: form.treatment,
      message: form.message || null,
    });
    setSaving(false);
    if (dbError) {
      setError("We couldn't save your request just now. Please try again, or call us on 9952232078.");
      return;
    }
    const text = `Hello STM, I'd like to book an appointment.%0A%0AName: ${form.name}%0APhone: ${form.phone}%0ATreatment: ${form.treatment}%0ANote: ${form.message}`;
    window.open(`https://wa.me/919952232078?text=${text}`, "_blank");
    setSent(true);
  };

  return (
    <SiteLayout>
      <section className="relative pt-40 pb-32 overflow-hidden bg-hero text-primary-foreground min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${leafImg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.14_0.04_158)/0.85] to-[oklch(0.18_0.05_158)/0.95]" />
        <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-accent/30 blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-72 h-72 rounded-full bg-gold/20 blur-3xl animate-float-slow" />

        <div className="relative mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up space-y-6">
            <p className="text-xs tracking-[0.3em] uppercase text-gold">Book a Visit</p>
            <h1 className="font-serif text-5xl md:text-6xl leading-tight">
              Begin your <span className="text-gradient-gold italic">healing</span> with us.
            </h1>
            <p className="text-white/75 leading-relaxed max-w-md">
              Share a few details and we'll reach out to confirm your appointment — usually within
              a few hours.
            </p>
            <div className="space-y-3 pt-4">
              <a href="tel:9952232078" className="flex items-center gap-3 text-white/90 hover:text-gold transition">
                <span className="w-10 h-10 rounded-full glass grid place-items-center"><Phone size={16} /></span>
                <span>9952232078</span>
              </a>
              <a href="https://wa.me/919952232078" className="flex items-center gap-3 text-white/90 hover:text-gold transition">
                <span className="w-10 h-10 rounded-full glass grid place-items-center"><MessageCircle size={16} /></span>
                <span>WhatsApp us directly</span>
              </a>
            </div>
          </div>

          <div className="animate-fade-up [animation-delay:200ms]">
            <div className="glass rounded-3xl p-8 md:p-10 shadow-elevated">
              {sent ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-gold to-accent grid place-items-center text-white shadow-glow">
                    <Check size={28} />
                  </div>
                  <h3 className="font-serif text-2xl mt-5">Thank you</h3>
                  <p className="text-white/70 mt-2">Your request has been received. We've also opened WhatsApp — send the message there to confirm faster.</p>
                </div>
              ) : (
                <form onSubmit={submit} className="space-y-5">
                  <div>
                    <label htmlFor="appt-name" className="text-xs tracking-widest uppercase text-gold">Full Name</label>
                    <input
                      required
                      id="appt-name"
                      name="name"
                      autoComplete="name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="mt-2 w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:border-gold focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold transition"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="appt-phone" className="text-xs tracking-widest uppercase text-gold">Phone</label>
                    <input
                      required
                      type="tel"
                      id="appt-phone"
                      name="phone"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="mt-2 w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:border-gold focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold transition"
                      placeholder="+91"
                    />
                  </div>
                  <div>
                    <label htmlFor="appt-treatment" className="text-xs tracking-widest uppercase text-gold">Treatment Interest</label>
                    <select
                      id="appt-treatment"
                      name="treatment"
                      value={form.treatment}
                      onChange={(e) => setForm({ ...form, treatment: e.target.value })}
                      className="mt-2 w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white focus:border-gold focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold transition"
                    >
                      {["Siddha Treatment","Ayurveda Treatment","Varma Therapy","Yoga Therapy","Pain Management","Paralysis Care","Fertility Care","General Consultation"].map(o => (
                        <option key={o} className="bg-primary text-white">{o}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="appt-message" className="text-xs tracking-widest uppercase text-gold">Message (optional)</label>
                    <textarea
                      id="appt-message"
                      name="message"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={3}
                      className="mt-2 w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:border-gold focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold transition resize-none"
                      placeholder="Tell us a little about your concern…"
                    />
                  </div>
                  {error && (
                    <p role="alert" className="flex items-start gap-2 text-sm text-red-200 bg-red-500/15 border border-red-400/30 rounded-xl px-4 py-3">
                      <AlertCircle size={16} className="mt-0.5 shrink-0" />
                      <span>{error}</span>
                    </p>
                  )}
                  <button type="submit" disabled={saving} className="btn-gold w-full inline-flex items-center justify-center gap-2 disabled:opacity-60">
                    {saving ? "Sending…" : "Send via WhatsApp"} <Send size={16} />
                  </button>
                  <p className="text-xs text-white/50 text-center">By submitting you agree to be contacted by STM.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
