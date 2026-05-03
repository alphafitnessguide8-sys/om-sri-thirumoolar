import { Link, createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { useReveal } from "@/hooks/use-reveal";
import {
  Leaf,
  Sparkles,
  HeartPulse,
  Brain,
  Bone,
  Droplets,
  Flame,
  Sun,
  ShieldCheck,
  Star,
  ArrowRight,
  Phone,
} from "lucide-react";
import logo from "@/assets/stm-logo.jpeg";
import heroImg from "@/assets/hero-herbs.jpg";
import leafImg from "@/assets/leaf-accent.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "STM — Siddha & Ayurveda Clinic in Puducherry | Natural Healing" },
      {
        name: "description",
        content:
          "Premium Siddha, Ayurveda, Varma & Yoga therapy clinic in Puducherry. Natural healing, traditional care, lasting results. Book a consultation with STM today.",
      },
      { property: "og:title", content: "STM — Siddha & Ayurveda Clinic in Puducherry" },
      {
        property: "og:description",
        content:
          "Holistic Siddha & Ayurveda treatments rooted in tradition. Pain, paralysis, nerve, kidney, liver, skin & fertility care.",
      },
    ],
  }),
  component: HomePage,
});

const services = [
  {
    icon: Leaf,
    title: "Siddha",
    desc: "Tamil Nadu's ancient science of life — restoring the rhythm of body and breath.",
  },
  {
    icon: Sparkles,
    title: "Ayurveda",
    desc: "Time-honoured therapies that align the doshas and rebuild vitality from within.",
  },
  {
    icon: HeartPulse,
    title: "Varma Therapy",
    desc: "Subtle pressure on vital points to release pain, paralysis and energy blocks.",
  },
  {
    icon: Sun,
    title: "Yoga Therapy",
    desc: "Personalised āsana and prāṇāyāma to renew strength, calm and clarity.",
  },
];

const specs = [
  { icon: Bone, label: "Pain Management" },
  { icon: Brain, label: "Paralysis & Nerves" },
  { icon: Droplets, label: "Kidney Care" },
  { icon: Flame, label: "Liver Care" },
  { icon: Sparkles, label: "Skin Wellness" },
  { icon: HeartPulse, label: "Fertility Care" },
  { icon: Sun, label: "Stress & Sleep" },
  { icon: Leaf, label: "Natural Healing" },
];

const testimonials = [
  {
    name: "Lakshmi R.",
    note: "Years of sciatica eased within weeks. The care felt sacred — not clinical.",
    role: "Puducherry",
  },
  {
    name: "Arun K.",
    note: "After my stroke, Varma therapy at STM gave my hand back to me. Forever grateful.",
    role: "Cuddalore",
  },
  {
    name: "Meera S.",
    note: "Their fertility care is gentle, patient and deeply rooted in tradition.",
    role: "Villupuram",
  },
];

function HomePage() {
  useReveal();
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-hero text-primary-foreground pt-28">
        <img
          src={heroImg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.14_0.04_158)/0.85] via-[oklch(0.18_0.05_158)/0.7] to-[oklch(0.14_0.04_158)/0.95]" />

        {/* Floating leaves */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-24 left-10 w-40 h-40 rounded-full bg-accent/30 blur-3xl animate-float" />
          <div className="absolute bottom-32 right-16 w-56 h-56 rounded-full bg-gold/20 blur-3xl animate-float-slow" />
          <Leaf className="absolute top-1/3 left-[8%] text-accent/40 animate-float" size={32} />
          <Leaf className="absolute top-1/4 right-[14%] text-gold/40 animate-float-slow" size={28} />
          <Leaf className="absolute bottom-[18%] left-[20%] text-accent/30 animate-float-slow" size={22} />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-10 items-center pb-24">
          <div className="lg:col-span-7 space-y-7 animate-fade-up">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs tracking-[0.22em] uppercase text-gold">
              <Sparkles size={14} /> Survive · Triumph · Merriment
            </div>
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.05]">
              Ancient healing,<br />
              <span className="text-gradient-gold italic">gracefully</span> renewed.
            </h1>
            <p className="text-lg text-white/75 max-w-xl leading-relaxed">
              At STM — Om Sri Thirumoolar — we restore balance through Siddha, Ayurveda, Varma
              and Yoga. A sanctuary in Puducherry where tradition listens to your body.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/appointment" className="btn-gold inline-flex items-center gap-2">
                Book a Consultation <ArrowRight size={16} />
              </Link>
              <a href="tel:9952232078" className="btn-outline-ivory inline-flex items-center gap-2">
                <Phone size={16} /> 9952232078
              </a>
            </div>
            <div className="flex items-center gap-6 pt-6 text-sm text-white/60">
              <div className="flex items-center gap-2"><ShieldCheck size={16} className="text-gold" /> No side effects</div>
              <div className="flex items-center gap-2"><Leaf size={16} className="text-accent" /> 100% Natural</div>
              <div className="flex items-center gap-2"><Star size={16} className="text-gold" /> Trusted care</div>
            </div>
          </div>

          {/* Floating glass logo card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto w-[22rem] h-[22rem] md:w-[26rem] md:h-[26rem]">
              <div className="absolute inset-0 rounded-full bg-emerald-grad blur-3xl opacity-50 animate-pulse" />
              <div className="absolute inset-4 rounded-full border border-gold/30 animate-spin-slow" />
              <div className="absolute inset-10 rounded-full border border-accent/20 animate-spin-slow [animation-direction:reverse]" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="glass rounded-full p-6 shadow-elevated">
                  <img
                    src={logo}
                    alt="STM Clinic logo"
                    className="w-56 h-56 md:w-64 md:h-64 rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="mx-auto max-w-5xl px-6 text-center reveal">
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-5">Our Promise</p>
          <h2 className="font-serif text-4xl md:text-5xl text-primary leading-tight">
            Healing that honours the body's own quiet intelligence.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            For over a decade, STM has offered a slower, more thoughtful path to wellness —
            grounded in Siddha and Ayurveda, refined by experience, and delivered with the
            warmth of a family practice.
          </p>
        </div>
      </section>

      {/* SERVICES — 3D tilt cards */}
      <section className="relative py-24 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-14 reveal">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">Disciplines</p>
              <h2 className="font-serif text-4xl md:text-5xl text-primary">Four traditions, one path.</h2>
            </div>
            <Link to="/services" className="text-primary hover:text-accent inline-flex items-center gap-2 group">
              Explore all services <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <div key={s.title} className="reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="card-tilt group relative h-full bg-card rounded-3xl p-8 shadow-soft border border-border/60 overflow-hidden">
                  <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-accent/10 group-hover:bg-accent/20 transition blur-2xl" />
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-grad text-primary-foreground grid place-items-center shadow-glow">
                      <s.icon size={24} />
                    </div>
                    <h3 className="mt-6 font-serif text-2xl text-primary">{s.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                    <div className="mt-6 inline-flex items-center gap-2 text-sm text-accent font-medium">
                      Learn more <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIALIZATIONS */}
      <section className="relative py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-14 reveal">
            <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">Specialisations</p>
            <h2 className="font-serif text-4xl md:text-5xl text-primary">Conditions we care for.</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              From persistent pain to deeper organic concerns — every protocol is personal.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {specs.map((s, i) => (
              <div
                key={s.label}
                className="reveal group relative bg-card rounded-2xl p-6 border border-border/60 hover:border-accent/50 hover:shadow-glow transition-all duration-500"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <s.icon className="text-accent mb-4 group-hover:scale-110 transition-transform" size={28} />
                <p className="font-serif text-lg text-primary">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARALLAX QUOTE */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${leafImg})` }}
        />
        <div className="absolute inset-0 bg-[oklch(0.14_0.04_158)/0.82]" />
        <div className="relative mx-auto max-w-3xl px-6 text-center text-primary-foreground reveal">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-6">A Living Tradition</p>
          <p className="font-serif text-3xl md:text-4xl italic leading-snug">
            "Food is medicine. Breath is medicine. Touch is medicine. We have only forgotten how to listen."
          </p>
          <p className="mt-6 text-sm text-white/60 tracking-widest uppercase">— Siddha Wisdom</p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-28 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-14 reveal">
            <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">Voices of Healing</p>
            <h2 className="font-serif text-4xl md:text-5xl text-primary">Stories from our patients.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="reveal glass-light rounded-3xl p-8 shadow-soft border border-border/40"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex gap-1 text-gold mb-4">
                  {Array.from({ length: 5 }).map((_, k) => <Star key={k} size={16} fill="currentColor" />)}
                </div>
                <p className="font-serif text-lg text-foreground/85 leading-relaxed">"{t.note}"</p>
                <div className="mt-6 pt-5 border-t border-border/60">
                  <p className="font-medium text-primary">{t.name}</p>
                  <p className="text-xs text-muted-foreground tracking-wider uppercase">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-hero text-primary-foreground p-12 md:p-20 shadow-elevated">
            <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-accent/30 blur-3xl animate-float" />
            <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-gold/20 blur-3xl animate-float-slow" />
            <div className="relative grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Begin Your Healing</p>
                <h2 className="font-serif text-4xl md:text-5xl leading-tight">
                  Your body remembers wellness. Let us help it return.
                </h2>
              </div>
              <div className="flex flex-col sm:flex-row lg:justify-end gap-4">
                <Link to="/appointment" className="btn-gold inline-flex items-center justify-center gap-2">
                  Book Appointment <ArrowRight size={16} />
                </Link>
                <a href="https://wa.me/919952232078" className="btn-outline-ivory text-center">
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
