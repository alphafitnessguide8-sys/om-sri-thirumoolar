import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { useReveal } from "@/hooks/use-reveal";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact STM — Siddha & Ayurveda Clinic in Thattanchavady, Puducherry" },
      { name: "description", content: "Visit STM at No: 3, F-Lane, V.V.P Nagar, Thattanchavady, Puducherry – 605009. Call 9952232078. Open Mon–Sat 9am–8pm." },
      { property: "og:title", content: "Contact STM — Puducherry" },
      { property: "og:description", content: "Find us in Thattanchavady, Puducherry. Call or message us on WhatsApp." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  useReveal();
  return (
    <SiteLayout>
      <section className="pt-40 pb-16 bg-hero text-primary-foreground relative overflow-hidden">
        <div className="absolute -top-20 right-20 w-80 h-80 rounded-full bg-accent/20 blur-3xl animate-float" />
        <div className="mx-auto max-w-5xl px-6 text-center animate-fade-up">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-5">Contact</p>
          <h1 className="font-serif text-5xl md:text-6xl leading-tight">
            Come, <span className="text-gradient-gold italic">visit us</span>.
          </h1>
          <p className="mt-6 text-white/75 max-w-xl mx-auto">
            We're in the heart of Puducherry — ready to listen, advise and care.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-6 reveal">
            {[
              { icon: MapPin, title: "Address", text: "No: 3, F-Lane, V.V.P Nagar, Thattanchavady, Puducherry – 605009" },
              { icon: Phone, title: "Phone", text: "9952232078", href: "tel:9952232078" },
              { icon: MessageCircle, title: "WhatsApp", text: "Chat with us instantly", href: "https://wa.me/919952232078" },
              { icon: Clock, title: "Hours", text: "Monday – Saturday · 9:00 am to 8:00 pm" },
            ].map((c) => (
              <div key={c.title} className="bg-card rounded-2xl p-6 border border-border/60 shadow-soft hover:shadow-elevated transition">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-grad text-primary-foreground grid place-items-center shadow-glow shrink-0">
                    <c.icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-accent">{c.title}</p>
                    {c.href ? (
                      <a href={c.href} className="font-serif text-lg text-primary hover:text-accent">{c.text}</a>
                    ) : (
                      <p className="font-serif text-lg text-primary">{c.text}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3 reveal">
            <div className="relative rounded-3xl overflow-hidden shadow-elevated border border-border/60 h-[480px]">
              <iframe
                title="STM Clinic location"
                src="https://www.google.com/maps?q=WRR3%2BRP+Puducherry&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
