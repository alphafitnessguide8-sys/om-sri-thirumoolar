import { Link, createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { useReveal } from "@/hooks/use-reveal";
import { GoldDivider } from "@/components/site/GoldDivider";
import { FloatingLeaves } from "@/components/site/FloatingLeaves";
import { useEffect, useRef, useState } from "react";
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
  Quote,
  Award,
  Users,
} from "lucide-react";
import logo from "@/assets/stm-logo.jpeg";
import heroImg from "@/assets/hero-herbs.jpg";
import leafImg from "@/assets/leaf-accent.jpg";
import imgSiddha from "@/assets/treatment-siddha.jpg";
import imgAyurveda from "@/assets/treatment-ayurveda.jpg";
import imgVarma from "@/assets/treatment-varma.jpg";
import imgYoga from "@/assets/treatment-yoga.jpg";
import imgGalleryHerbs from "@/assets/gallery-herbs.jpg";
import imgGalleryMassage from "@/assets/gallery-massage.jpg";
import imgGalleryKizhi from "@/assets/gallery-kizhi.jpg";
import imgGalleryYoga from "@/assets/gallery-yoga.jpg";
import imgParallaxGarden from "@/assets/parallax-garden.jpg";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import avatar4 from "@/assets/avatar-4.jpg";
import avatar5 from "@/assets/avatar-5.jpg";

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
  { icon: Leaf, title: "Siddha", desc: "Tamil Nadu's ancient science of life — restoring the rhythm of body and breath.", img: imgSiddha },
  { icon: Sparkles, title: "Ayurveda", desc: "Time-honoured therapies that align the doshas and rebuild vitality from within.", img: imgAyurveda },
  { icon: HeartPulse, title: "Varma Therapy", desc: "Subtle pressure on vital points to release pain, paralysis and energy blocks.", img: imgVarma },
  { icon: Sun, title: "Yoga Therapy", desc: "Personalised āsana and prāṇāyāma to renew strength, calm and clarity.", img: imgYoga },
];

const gallery = [
  { img: imgGalleryHerbs, label: "Herbal Formulations", tag: "Siddha" },
  { img: imgGalleryMassage, label: "Abhyanga Therapy", tag: "Ayurveda" },
  { img: imgGalleryKizhi, label: "Kizhi & Varma", tag: "Varma" },
  { img: imgGalleryYoga, label: "Yoga & Pranayama", tag: "Yoga" },
  { img: imgSiddha, label: "Traditional Preparations", tag: "Siddha" },
  { img: imgAyurveda, label: "Shirodhara", tag: "Ayurveda" },
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
  { name: "Lakshmi R.", note: "Years of sciatica eased within weeks. The care felt sacred — not clinical.", role: "Puducherry", avatar: avatar1 },
  { name: "Arun K.", note: "After my stroke, Varma therapy at STM gave my hand back to me. Forever grateful.", role: "Cuddalore", avatar: avatar2 },
  { name: "Meera S.", note: "Their fertility care is gentle, patient and deeply rooted in tradition.", role: "Villupuram", avatar: avatar3 },
  { name: "Ravi P.", note: "Chronic migraines that pills could not touch — calmed by their patient protocols.", role: "Chennai", avatar: avatar4 },
  { name: "Anitha V.", note: "A truly soulful clinic. You feel held from the moment you arrive.", role: "Karaikal", avatar: avatar5 },
];

// Subtle particle field — pure CSS, very light
function Particles() {
  const dots = Array.from({ length: 18 });
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {dots.map((_, i) => {
        const size = 2 + ((i * 7) % 5);
        const left = (i * 53) % 100;
        const top = (i * 37) % 100;
        const dur = 14 + ((i * 3) % 12);
        const delay = (i % 7) * 1.2;
        return (
          <span
            key={i}
            className="absolute rounded-full bg-gold/40 blur-[1px]"
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              top: `${top}%`,
              animation: `drift ${dur}s ease-in-out ${delay}s infinite`,
              opacity: 0.5,
            }}
          />
        );
      })}
    </div>
  );
}

function HomePage() {
  useReveal();
  const heroRef = useRef<HTMLDivElement>(null);
  const [py, setPy] = useState(0);

  useEffect(() => {
    const onScroll = () => setPy(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <SiteLayout>
      {/* HERO */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden bg-hero text-primary-foreground pt-28"
      >
        {/* Parallax image layer */}
        <img
          src={heroImg}
          alt=""
          className="absolute inset-0 w-full h-[120%] object-cover opacity-40 will-change-transform"
          style={{ transform: `translate3d(0, ${py * 0.25}px, 0)` }}
          width={1920}
          height={1080}
        />
        {/* Gradient depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.14_0.04_158)/0.88] via-[oklch(0.18_0.05_158)/0.7] to-[oklch(0.12_0.04_158)/0.98]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,_oklch(0.45_0.12_150/0.35),_transparent_60%)]" />

        {/* Particles & floating accents */}
        <Particles />
        <FloatingLeaves density={7} />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ transform: `translate3d(0, ${py * -0.12}px, 0)` }}
        >
          <div className="absolute top-24 left-10 w-40 h-40 rounded-full bg-accent/30 blur-3xl animate-float" />
          <div className="absolute bottom-32 right-16 w-56 h-56 rounded-full bg-gold/20 blur-3xl animate-float-slow" />
          <Leaf className="absolute top-1/3 left-[8%] text-accent/40 animate-float" size={32} />
          <Leaf className="absolute top-1/4 right-[14%] text-gold/40 animate-float-slow" size={28} />
          <Leaf className="absolute bottom-[18%] left-[20%] text-accent/30 animate-float-slow" size={22} />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-10 items-center pb-24">
          <div className="lg:col-span-7 space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs tracking-[0.22em] uppercase text-gold">
              <Sparkles size={14} /> Survive · Triumph · Merriment
            </div>
            <h1 className="heading-aura font-serif text-6xl md:text-8xl leading-[1.02] tracking-tight text-aura">
              Ancient healing,<br />
              <span className="text-gradient-gold italic">gracefully</span> renewed.
            </h1>
            <div className="energy-line w-40 rounded-full" />
            <p className="text-lg md:text-xl text-white/75 max-w-xl leading-[1.8]">
              At STM — Om Sri Thirumoolar — we restore balance through Siddha, Ayurveda, Varma
              and Yoga. A sanctuary in Puducherry where tradition listens to your body.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link to="/appointment" className="btn-gold breathe inline-flex items-center gap-2">
                Book a Consultation <ArrowRight size={16} />
              </Link>
              <a href="tel:9952232078" className="btn-outline-ivory inline-flex items-center gap-2">
                <Phone size={16} /> 9952232078
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-6 text-sm text-white/65">
              <div className="flex items-center gap-2"><ShieldCheck size={16} className="text-gold" /> No Side Effects</div>
              <div className="flex items-center gap-2"><Leaf size={16} className="text-accent" /> 100% Natural</div>
              <div className="flex items-center gap-2"><Award size={16} className="text-gold" /> 15+ Years</div>
              <div className="flex items-center gap-2"><Users size={16} className="text-accent" /> 10,000+ Patients</div>
            </div>
          </div>

          {/* Floating glass logo card with parallax tilt */}
          <div className="lg:col-span-5 relative">
            <div
              className="relative mx-auto w-[22rem] h-[22rem] md:w-[28rem] md:h-[28rem]"
              style={{ transform: `translate3d(0, ${py * -0.08}px, 0)` }}
            >
              {/* Sun glow */}
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,_oklch(0.85_0.18_85/0.55)_0%,_oklch(0.75_0.2_75/0.35)_30%,_transparent_65%)] blur-2xl animate-pulse" />
              <div className="absolute inset-[-10%] rounded-full bg-[conic-gradient(from_0deg,_oklch(0.9_0.15_85/0.25),_transparent_20%,_oklch(0.85_0.18_75/0.3)_40%,_transparent_60%,_oklch(0.9_0.15_85/0.25)_80%,_transparent)] blur-xl animate-spin-slow opacity-70" />
              <div className="absolute inset-[6%] rounded-full bg-gold/20 blur-3xl" />
              <div className="absolute inset-4 rounded-full border border-gold/40 animate-spin-slow" />
              <div className="absolute inset-10 rounded-full border border-accent/25 animate-spin-slow [animation-direction:reverse]" />

              {/* Rotating 3D leaf */}
              <Leaf
                className="absolute -top-4 left-1/2 -translate-x-1/2 text-gold/70 drop-shadow-[0_0_20px_oklch(0.85_0.15_85/0.6)]"
                size={36}
                style={{ animation: "tilt 6s ease-in-out infinite" }}
              />
              <Leaf
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 rotate-180 text-accent/60"
                size={28}
                style={{ animation: "tilt 8s ease-in-out infinite reverse" }}
              />

              <div className="absolute inset-0 grid place-items-center">
                <div className="relative rounded-full p-4 bg-ivory/95 shadow-elevated ring-1 ring-gold/30">
                  <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,_oklch(0.95_0.12_85/0.6),_transparent_70%)] blur-md" />
                  <img
                    src={logo}
                    alt="STM Clinic logo"
                    className="relative w-60 h-60 md:w-72 md:h-72 rounded-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 text-[10px] tracking-[0.4em] uppercase animate-pulse">
          Scroll
        </div>
      </section>

      {/* INTRO */}
      <section className="relative py-32 overflow-hidden layered-section">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-gold/10 blur-3xl" />
        <div className="mx-auto max-w-5xl px-6 text-center reveal">
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-5">Our Promise</p>
          <h2 className="heading-aura font-serif text-4xl md:text-6xl text-primary leading-[1.1]">
            Healing that honours the body's <span className="text-gradient-emerald italic">own quiet intelligence.</span>
          </h2>
          <div className="mt-8"><GoldDivider /></div>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground leading-[1.9] max-w-3xl mx-auto">
            For over a decade, STM has offered a slower, more thoughtful path to wellness —
            grounded in Siddha and Ayurveda, refined by experience, and delivered with the
            warmth of a family practice.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative py-28 bg-secondary/40 layered-section">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-16 reveal">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">Disciplines</p>
              <h2 className="heading-aura font-serif text-4xl md:text-6xl text-primary leading-[1.05]">Four traditions, one path.</h2>
            </div>
            <Link to="/services" className="text-primary hover:text-accent inline-flex items-center gap-2 group">
              Explore all services <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {services.map((s, i) => (
              <div key={s.title} className="reveal" style={{ transitionDelay: `${i * 120}ms` }}>
                <div className="card-tilt group relative h-full bg-card rounded-3xl shadow-soft border border-border/60 overflow-hidden hover:border-gold/40 transition-colors flex flex-col">
                  <div className="img-zoom relative aspect-[4/3] overflow-hidden">
                    <img
                      src={s.img}
                      alt={`${s.title} therapy at STM Puducherry`}
                      loading="lazy"
                      width={800}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />
                    <div className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-ivory/90 backdrop-blur text-primary grid place-items-center shadow-soft ring-1 ring-gold/30">
                      <s.icon size={20} />
                    </div>
                  </div>
                  <div className="relative p-7 flex-1 flex flex-col">
                    <div className="absolute inset-x-6 top-0 h-px gold-rule opacity-0 group-hover:opacity-100 transition" />
                    <h3 className="font-serif text-2xl md:text-3xl text-primary">{s.title}</h3>
                    <p className="mt-3 text-sm md:text-base text-muted-foreground leading-[1.8] flex-1">{s.desc}</p>
                    <Link to="/services" className="mt-6 inline-flex items-center gap-2 text-sm text-accent font-medium">
                      Learn more <ArrowRight size={14} className="group-hover:translate-x-1 transition" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TREATMENT GALLERY */}
      <section className="relative py-32 layered-section">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16 reveal">
            <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">Gallery</p>
            <h2 className="heading-aura font-serif text-4xl md:text-6xl text-primary leading-[1.05]">Glimpses of our practice.</h2>
            <div className="mt-6"><GoldDivider /></div>
            <p className="mt-6 text-muted-foreground max-w-xl mx-auto leading-[1.8]">
              Inside the rituals, herbs and quiet moments that define healing at STM.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {gallery.map((g, i) => {
              const tall = i === 0 || i === 4;
              return (
                <div
                  key={i}
                  className={`reveal img-zoom relative rounded-3xl overflow-hidden shadow-soft border border-border/50 group ${tall ? "row-span-2 aspect-[3/4] md:aspect-[3/5]" : "aspect-[4/3]"}`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <img
                    src={g.img}
                    alt={`${g.label} — ${g.tag} treatment`}
                    loading="lazy"
                    width={800}
                    height={1000}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/20 to-transparent opacity-90 group-hover:opacity-95 transition" />
                  <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 text-primary-foreground">
                    <p className="text-[10px] tracking-[0.3em] uppercase text-gold mb-1">{g.tag}</p>
                    <p className="font-serif text-xl md:text-2xl">{g.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SPECIALIZATIONS */}
      <section className="relative py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16 reveal">
            <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">Specialisations</p>
            <h2 className="heading-aura font-serif text-4xl md:text-6xl text-primary leading-[1.05]">Conditions we care for.</h2>
            <div className="mt-6"><GoldDivider /></div>
            <p className="mt-6 text-muted-foreground max-w-xl mx-auto leading-[1.8]">
              From persistent pain to deeper organic concerns — every protocol is personal.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {specs.map((s, i) => (
              <div
                key={s.label}
                className="reveal glass-hover group relative bg-card rounded-2xl p-7 border border-border/60 hover:shadow-glow"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="absolute inset-x-5 top-0 h-px gold-rule opacity-0 group-hover:opacity-100 transition" />
                <s.icon className="text-accent mb-4 group-hover:scale-110 group-hover:text-gold transition-all duration-500" size={28} />
                <p className="font-serif text-lg md:text-xl text-primary">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARALLAX QUOTE */}
      <section className="relative py-36 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${leafImg})` }}
        />
        <div className="absolute inset-0 bg-[oklch(0.14_0.04_158)/0.85]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_oklch(0.45_0.12_150/0.3),_transparent_70%)]" />
        <div className="relative mx-auto max-w-3xl px-6 text-center text-primary-foreground reveal">
          <Quote className="mx-auto text-gold mb-6 opacity-80" size={36} />
          <p className="font-serif text-3xl md:text-5xl italic leading-[1.25] text-aura">
            "Food is medicine. Breath is medicine. Touch is medicine. We have only forgotten how to listen."
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gold/60" />
            <p className="text-xs text-gold tracking-[0.4em] uppercase">Siddha Wisdom</p>
            <span className="h-px w-10 bg-gold/60" />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS — auto-sliding marquee */}
      <section className="py-32 bg-secondary/40 layered-section overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16 reveal">
            <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">Voices of Healing</p>
            <h2 className="heading-aura font-serif text-4xl md:text-6xl text-primary leading-[1.05]">Stories from our patients.</h2>
            <div className="mt-6"><GoldDivider /></div>
          </div>
        </div>

        <div className="relative marquee-mask reveal">
          <div className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused]">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="w-[340px] md:w-[420px] shrink-0 glass-light rounded-3xl p-8 shadow-soft border border-gold/20 relative overflow-hidden"
              >
                <Quote className="absolute -top-3 -right-3 text-gold/15" size={96} />
                <div className="flex gap-1 text-gold mb-4 relative">
                  {Array.from({ length: 5 }).map((_, k) => <Star key={k} size={16} fill="currentColor" />)}
                </div>
                <p className="font-serif text-lg md:text-xl text-foreground/85 leading-[1.7] relative">"{t.note}"</p>
                <div className="mt-6 pt-5 border-t border-border/60 relative">
                  <p className="font-medium text-primary">{t.name}</p>
                  <p className="text-xs text-muted-foreground tracking-wider uppercase">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-hero text-primary-foreground p-12 md:p-20 shadow-elevated">
            <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-accent/30 blur-3xl animate-float" />
            <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-gold/20 blur-3xl animate-float-slow" />
            <div className="absolute inset-x-12 top-0 h-px gold-rule" />
            <div className="absolute inset-x-12 bottom-0 h-px gold-rule" />
            <div className="relative grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Begin Your Healing</p>
                <h2 className="heading-aura font-serif text-4xl md:text-6xl leading-[1.05] text-aura">
                  Your body remembers wellness. Let us help it return.
                </h2>
              </div>
              <div className="flex flex-col sm:flex-row lg:justify-end gap-4">
                <Link to="/appointment" className="btn-gold breathe inline-flex items-center justify-center gap-2">
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
