import { Link, createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { useReveal } from "@/hooks/use-reveal";
import { GoldDivider } from "@/components/site/GoldDivider";
import { useRef } from "react";
import {
  Leaf,
  Sparkles,
  HeartPulse,
  Brain,
  Bone,
  Droplets,
  Flame,
  Sun,
  ArrowRight,
  Quote,
  Star,
  ChevronDown,
  Users,
} from "lucide-react";

import heroForest from "@/assets/hero-forest-bg.jpg";
import heroHerbsLeft from "@/assets/hero-herbs-left.png";
import heroHerbsRight from "@/assets/hero-herbs-right.png";
import heroMortar from "@/assets/hero-mortar.jpg";
import stmLogo from "@/assets/stm-logo.jpeg";
import organHeart from "@/assets/organ-heart.png";
import organBrain from "@/assets/organ-brain.png";
import organLungs from "@/assets/organ-lungs.png";
import organKnee from "@/assets/organ-knee.png";
import organSpine from "@/assets/organ-spine.png";
import organStomach from "@/assets/organ-stomach.png";

import imgParallaxGarden from "@/assets/parallax-garden.jpg";

import imgSiddha from "@/assets/treatment-siddha.jpg";
import imgAyurveda from "@/assets/treatment-ayurveda.jpg";
import imgVarma from "@/assets/treatment-varma.jpg";
import imgYoga from "@/assets/treatment-yoga.jpg";
import imgGalleryHerbs from "@/assets/gallery-herbs.jpg";
import imgGalleryMassage from "@/assets/gallery-massage.jpg";
import imgGalleryKizhi from "@/assets/gallery-kizhi.jpg";
import imgGalleryYoga from "@/assets/gallery-yoga.jpg";
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

function LotusIcon({ className = "", size = 20 }: { className?: string; size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 4c1.6 2.2 2.4 4.4 2.4 6.6 0 1.4-.8 2.6-2.4 3.4-1.6-.8-2.4-2-2.4-3.4C9.6 8.4 10.4 6.2 12 4z" />
      <path d="M4.5 9.5c2.4.4 4.2 1.4 5.4 2.8.8 1 .8 2.3-.2 3.7-1.7-.2-3-.8-3.9-1.8-1.1-1.2-1.5-2.8-1.3-4.7z" />
      <path d="M19.5 9.5c-2.4.4-4.2 1.4-5.4 2.8-.8 1-.8 2.3.2 3.7 1.7-.2 3-.8 3.9-1.8 1.1-1.2 1.5-2.8 1.3-4.7z" />
      <path d="M4 15c2.4 0 4.6.7 6.4 2-.4 1.4-1.4 2.3-3 2.7-1.6.4-3-.2-4-1.8.1-1 .3-2 .6-2.9z" />
      <path d="M20 15c-2.4 0-4.6.7-6.4 2 .4 1.4 1.4 2.3 3 2.7 1.6.4 3-.2 4-1.8-.1-1-.3-2-.6-2.9z" />
      <path d="M12 14v6" />
    </svg>
  );
}

function HomePage() {
  useReveal();
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <SiteLayout>
      {/* HERO — premium STM */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16 text-[#F5F5F2]"
        style={{ backgroundColor: "#0a1a0e" }}
      >
        {/* Background image — deep forest */}
        <img
          src={heroForest}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Deeper green wash */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#0d2010_0%,#0a1a0e_55%,#06140c_100%)] mix-blend-multiply pointer-events-none" />
        {/* Top fade behind real nav */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#06140c] via-[#06140c]/70 to-transparent pointer-events-none" />
        {/* Strong left-side darkening for text legibility */}
        <div className="absolute inset-y-0 left-0 w-[55%] bg-gradient-to-r from-[#0a1a0e] via-[#0a1a0e]/95 to-transparent pointer-events-none" />
        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#06140c] via-[#06140c]/60 to-transparent pointer-events-none" />

        {/* Decorative overlays removed per request — keep the hero background clean */}

        <div className="relative mx-auto max-w-7xl w-full px-6 lg:px-10 grid lg:grid-cols-2 gap-10 items-center">
          {/* LEFT — text */}
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-[11px] tracking-[0.28em] uppercase text-[#F7F2E8]/90 bg-white/5 border border-[#D4A24C]/40 backdrop-blur">
              <LotusIcon size={13} className="text-[#D4A24C]" /> Puducherry · Since 2009
            </div>

            <h1 className="mt-8 font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight text-[#F7F2E8] font-bold">
              Ancient Healing,
              <br />
              <span
                className="italic font-normal text-[1.05em]"
                style={{
                  backgroundImage: "linear-gradient(135deg,#F5D78A 0%,#E2C06B 45%,#C9A84C 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Gracefully Renewed
              </span>
            </h1>

            <div className="mt-10 flex items-center gap-3">
              <span className="h-px w-24 bg-gradient-to-r from-[#D4A24C]/80 to-transparent" />
              <Leaf size={14} className="text-[#D4A24C]" />
            </div>

            <p className="mt-10 max-w-xl text-base md:text-lg text-[#F5F5F2]/85 leading-[1.85] font-light">
              Restoring balance through Siddha, Ayurveda, Varma and Yoga therapies — a sanctuary of holistic wellness in the heart of Puducherry.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/appointment"
                className="inline-flex items-center gap-2 rounded-full px-7 py-[0.95rem] font-medium tracking-wide transition-all duration-500 hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg,#E2C06B 0%,#C9A84C 50%,#A87528 100%)",
                  color: "#18392B",
                  boxShadow: "0 12px 40px -10px rgba(212,162,76,0.65), inset 0 1px 0 rgba(255,255,255,0.4)",
                }}
              >
                Book Consultation <ArrowRight size={16} />
              </Link>
              <Link
                to="/treatments"
                className="inline-flex items-center gap-2 rounded-full px-7 py-[0.9rem] border border-[#F7F2E8]/50 text-[#F7F2E8] bg-[#06140c]/40 backdrop-blur hover:bg-[#06140c]/60 hover:border-[#D4A24C]/60 transition-all duration-500"
              >
                Explore Treatments
              </Link>
            </div>

            {/* Stats with lotus icons */}
            <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-xl">
              {[
                { value: "15+", label: "Years Experience" },
                { value: "10k+", label: "Patients Healed" },
                { value: "4", label: "Disciplines" },
                { value: "100%", label: "Natural Care" },
              ].map((s) => (
                <div key={s.label}>
                  <LotusIcon size={20} className="text-[#D4A24C] mb-2" />
                  <p className="font-serif text-2xl md:text-3xl text-[#F7F2E8]">{s.value}</p>
                  <p className="text-[10px] tracking-[0.22em] uppercase text-[#F5F5F2]/65 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — 3D floating organ ring with center logo */}
          <div className="relative hidden lg:flex items-center justify-center h-[640px]">
            {/* Orbital golden rings */}
            <div className="absolute inset-0 grid place-items-center pointer-events-none">
              {[560, 440, 320].map((s, i) => (
                <div
                  key={s}
                  className="absolute rounded-full animate-spin-slow"
                  style={{
                    width: s,
                    height: s,
                    border: "1.5px solid rgba(226,192,107,0.7)",
                    boxShadow:
                      "0 0 40px rgba(212,162,76,0.5), 0 0 80px rgba(245,215,138,0.25), inset 0 0 50px rgba(226,192,107,0.22)",
                    animationDuration: `${70 + i * 25}s`,
                    animationDirection: i % 2 ? "reverse" : "normal",
                    willChange: "transform",
                  }}
                >
                  {/* Sparkle stars riding each ring */}
                  {Array.from({ length: 6 }).map((_, k) => {
                    const angle = (k / 6) * Math.PI * 2;
                    const x = Math.cos(angle) * (s / 2);
                    const y = Math.sin(angle) * (s / 2);
                    return (
                      <span
                        key={k}
                        className="absolute"
                        style={{
                          left: "50%",
                          top: "50%",
                          width: 6,
                          height: 6,
                          transform: `translate(${x - 3}px, ${y - 3}px) rotate(45deg)`,
                          background:
                            "linear-gradient(135deg,#F5D78A,#E2C06B)",
                          boxShadow:
                            "0 0 12px 3px rgba(245,215,138,0.9), 0 0 28px 8px rgba(212,162,76,0.5)",
                          animation: `breathe ${3 + k * 0.3}s ease-in-out ${k * 0.25}s infinite`,
                        }}
                      />
                    );
                  })}
                </div>
              ))}
              {/* Soft golden aura behind logo */}
              <div
                className="absolute w-[340px] h-[340px] rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(245,215,138,0.45) 0%, rgba(212,162,76,0.18) 40%, transparent 70%)",
                  filter: "blur(24px)",
                }}
              />
            </div>

            {/* Free-floating sparkle dots scattered across the ring area */}
            {Array.from({ length: 10 }).map((_, i) => {
              const left = 10 + ((i * 17) % 80);
              const top = 8 + ((i * 23) % 84);
              const size = 2 + (i % 4);
              const dur = 2.2 + (i % 5) * 0.5;
              return (
                <span
                  key={`spk-${i}`}
                  className="absolute rounded-full pointer-events-none"
                  style={{
                    left: `${left}%`,
                    top: `${top}%`,
                    width: size,
                    height: size,
                    background: "#F5D78A",
                    boxShadow:
                      "0 0 8px 2px rgba(245,215,138,0.9), 0 0 18px 5px rgba(212,162,76,0.5)",
                    animation: `breathe ${dur}s ease-in-out ${(i % 6) * 0.3}s infinite`,
                  }}
                />
              );
            })}

            {/* Center STM logo medallion */}
            <div
              className="relative z-10 w-56 h-56 rounded-full overflow-hidden bg-[#F7F2E8] animate-[breathe_5s_ease-in-out_infinite]"
              style={{
                border: "4px solid #D4A24C",
                boxShadow:
                  "0 0 0 6px rgba(212,162,76,0.18), 0 0 70px 12px rgba(245,215,138,0.55), inset 0 0 30px rgba(212,162,76,0.25)",
              }}
            >
              <img
                src={stmLogo}
                alt="STM Ayurveda Clinic Logo"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating 3D organs — mathematically placed on the 560px orbit */}
            {[
              { src: organHeart, alt: "Heart", angle: -90, size: 110, delay: "0s", dur: "6s" },
              { src: organLungs, alt: "Lungs", angle: -30, size: 110, delay: "0.6s", dur: "6.5s" },
              { src: organSpine, alt: "Spine", angle: 30, size: 100, delay: "1.6s", dur: "8s" },
              { src: organStomach, alt: "Stomach", angle: 90, size: 105, delay: "2.4s", dur: "6.8s" },
              { src: organKnee, alt: "Knee", angle: 150, size: 95, delay: "2s", dur: "7.5s" },
              { src: organBrain, alt: "Brain", angle: -150, size: 100, delay: "1.2s", dur: "7s" },
            ].map((o) => {
              const R = 280; // radius of the outer 560px ring
              const rad = (o.angle * Math.PI) / 180;
              const x = Math.cos(rad) * R;
              const y = Math.sin(rad) * R;
              return (
                <div
                  key={o.alt}
                  className="absolute z-20 left-1/2 top-1/2"
                  style={{
                    width: o.size,
                    height: o.size,
                    marginLeft: x - o.size / 2,
                    marginTop: y - o.size / 2,
                    animation: `float ${o.dur} ease-in-out ${o.delay} infinite`,
                    filter:
                      "drop-shadow(0 0 18px rgba(245,215,138,0.65)) drop-shadow(0 0 38px rgba(212,162,76,0.4))",
                  }}
                >
                  {/* Glowing aura disc behind each organ */}
                  <div
                    className="absolute inset-0 rounded-full -z-10"
                    style={{
                      background:
                        "radial-gradient(circle at center, rgba(245,215,138,0.55) 0%, rgba(212,162,76,0.28) 45%, transparent 72%)",
                      filter: "blur(10px)",
                      transform: "scale(1.35)",
                      animation: `breathe ${3 + (o.size % 4) * 0.4}s ease-in-out ${o.delay} infinite`,
                    }}
                  />
                  {/* Sharp golden ring outline */}
                  <div
                    className="absolute inset-0 rounded-full -z-10"
                    style={{
                      border: "1.5px solid rgba(245,215,138,0.55)",
                      boxShadow:
                        "0 0 18px rgba(245,215,138,0.5), inset 0 0 22px rgba(245,215,138,0.22)",
                      transform: "scale(1.22)",
                    }}
                  />
                  <img
                    src={o.src}
                    alt={o.alt}
                    className="relative z-10 w-full h-full object-contain"
                    style={{ transform: "perspective(600px) rotateY(-6deg)" }}
                  />
                </div>
              );
            })}

          </div>
        </div>

        {/* 100% Natural Care badge */}
        <div className="absolute bottom-10 right-6 md:right-10 z-10">
          <div className="flex items-center gap-3 rounded-2xl px-5 py-3 bg-[#06140c]/75 backdrop-blur-xl border border-[#D4A24C]/40 text-[#F7F2E8] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]">
            <span className="grid place-items-center w-9 h-9 rounded-full bg-[#D4A24C]/15 border border-[#D4A24C]/40">
              <Leaf size={15} className="text-[#D4A24C]" />
            </span>
            <div className="leading-tight">
              <p className="font-serif text-lg">100%</p>
              <p className="text-[11px] tracking-wider text-[#F5F5F2]/80">Natural Care</p>
            </div>
          </div>
        </div>

        {/* 100% Natural Care badge */}
        <div className="absolute bottom-10 right-6 md:right-10 z-10">
          <div className="flex items-center gap-3 rounded-2xl px-5 py-3 bg-[#06140c]/75 backdrop-blur-xl border border-[#D4A24C]/40 text-[#F7F2E8] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]">
            <span className="grid place-items-center w-9 h-9 rounded-full bg-[#D4A24C]/15 border border-[#D4A24C]/40">
              <Leaf size={15} className="text-[#D4A24C]" />
            </span>
            <div className="leading-tight">
              <p className="font-serif text-lg">100%</p>
              <p className="text-[11px] tracking-wider text-[#F5F5F2]/80">Natural Care</p>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#F5F5F2]/70">
          <span className="text-[10px] tracking-[0.4em] uppercase">Scroll</span>
          <ChevronDown size={16} className="animate-bounce text-[#D4A24C]" />
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

      {/* PARALLAX QUOTE — full-width treatment image with slow zoom */}
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={imgParallaxGarden}
            alt="STM herbal healing garden"
            loading="lazy"
            width={1920}
            height={1080}
            className="absolute inset-0 w-full h-full object-cover slow-zoom"
          />
        </div>
        <div className="absolute inset-0 bg-[oklch(0.14_0.04_158)/0.78]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_oklch(0.45_0.12_150/0.35),_transparent_70%)]" />
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
      <section id="testimonials" className="py-32 bg-secondary/40 layered-section overflow-hidden scroll-mt-24">
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
