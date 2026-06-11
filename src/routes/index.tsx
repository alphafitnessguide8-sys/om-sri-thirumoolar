import { Link, createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { useReveal } from "@/hooks/use-reveal";
import { GoldDivider } from "@/components/site/GoldDivider";
import { CinematicFX } from "@/components/site/CinematicFX";
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
  Quote,
  Award,
  Users,
} from "lucide-react";
import heroMortar from "@/assets/hero-mortar.jpg";
import stmLogo from "@/assets/stm-logo.jpeg";
import organHeart from "@/assets/organ-heart.png";
import organLungs from "@/assets/organ-lungs.png";
import organBrain from "@/assets/organ-brain.png";
import organSpine from "@/assets/organ-spine.png";
import organKnee from "@/assets/organ-knee.png";
import organStomach from "@/assets/organ-stomach.png";

import imgSiddha from "@/assets/treatment-siddha.jpg";
import imgAyurveda from "@/assets/treatment-ayurveda.jpg";
import imgVarma from "@/assets/treatment-varma.jpg";
import imgYoga from "@/assets/treatment-yoga.jpg";
import imgGalleryHerbs from "@/assets/gallery-herbs.jpg";
import imgGalleryMassage from "@/assets/gallery-massage.jpg";
import imgGalleryKizhi from "@/assets/gallery-kizhi.jpg";
import imgGalleryYoga from "@/assets/gallery-yoga.jpg";
import imgParallaxGarden from "@/assets/parallax-garden.jpg";
import heroHerbsLeft from "@/assets/hero-herbs-left.png";
import heroHerbsRight from "@/assets/hero-herbs-right.png";
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
  const stageRef = useRef<HTMLDivElement>(null);
  const [py, setPy] = useState(0);
  // Lazy-start non-critical FX after first paint to protect LCP
  const [fxReady, setFxReady] = useState(false);

  useEffect(() => {
    const onScroll = () => setPy(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    const idle =
      (window as any).requestIdleCallback?.(() => setFxReady(true), { timeout: 1200 }) ??
      window.setTimeout(() => setFxReady(true), 600);
    return () => {
      window.removeEventListener("scroll", onScroll);
      (window as any).cancelIdleCallback?.(idle) ?? clearTimeout(idle as number);
    };
  }, []);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    let raf = 0;
    let nextX = 0, nextY = 0;
    const apply = () => {
      raf = 0;
      stage.style.setProperty("--mx", `${nextX}px`);
      stage.style.setProperty("--my", `${nextY}px`);
    };
    const onMove = (e: MouseEvent) => {
      const r = stage.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      nextX = x * 24;
      nextY = y * 24;
      if (!raf) raf = requestAnimationFrame(apply);
    };
    const onLeave = () => {
      nextX = 0; nextY = 0;
      if (!raf) raf = requestAnimationFrame(apply);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    stage.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      stage.removeEventListener("mouseleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <SiteLayout>
      {/* HERO — cinematic deep green premium */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-20 text-[#F5F5F2]"
      >
        {/* Deep forest green cinematic background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_#2a5240_0%,_#18392B_45%,_#0e2519_100%)]" />
        {/* Warm golden top-left light wash */}
        <div className="absolute -top-40 -left-40 w-[42rem] h-[42rem] rounded-full bg-[#D4A24C]/20 blur-[140px]" />
        <div className="absolute top-1/4 -right-40 w-[38rem] h-[38rem] rounded-full bg-[#3F6B4B]/40 blur-[140px] animate-float-slow" />
        <div className="absolute bottom-0 left-1/4 w-[28rem] h-[28rem] rounded-full bg-[#D4A24C]/10 blur-3xl" />

        {/* Subtle sacred geometry rings */}
        <div
          aria-hidden
          className="absolute -right-48 top-1/2 -translate-y-1/2 w-[44rem] h-[44rem] opacity-[0.06] pointer-events-none"
          style={{ transform: `translate3d(0, calc(-50% + ${py * -0.05}px), 0)` }}
        >
          <div className="absolute inset-0 rounded-full border border-[#D4A24C]" />
          <div className="absolute inset-[10%] rounded-full border border-[#D4A24C]" />
          <div className="absolute inset-[22%] rounded-full border border-[#D4A24C]" />
          <div className="absolute inset-[36%] rounded-full border border-[#D4A24C]" />
        </div>

        {/* Vignette for cinematic depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_50%,_rgba(0,0,0,0.55)_100%)] pointer-events-none" />

        {/* Blurred herbal leaves layer — deferred */}
        {fxReady && (
          <div className="absolute inset-0 opacity-[0.18] mix-blend-screen pointer-events-none animate-fade-in">
            <FloatingLeaves density={10} />
          </div>
        )}

        {/* Cinematic god rays + mist — deferred */}
        {fxReady && <CinematicFX rays mist grain={false} vignette={false} />}

        {/* Bottom shadow gradient for depth */}
        <div aria-hidden className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0a1c14] via-[#0a1c14]/60 to-transparent pointer-events-none" />

        {/* Bottom-left: Ayurvedic herbs + mortar & pestle */}
        <img
          src={heroHerbsLeft}
          alt="Ayurvedic herbs, turmeric and wooden mortar and pestle"
          aria-hidden
          width={1024}
          height={1024}
          loading="lazy"
          decoding="async"
          className="hidden md:block absolute -bottom-10 -left-10 lg:-left-6 w-[18rem] lg:w-[22rem] xl:w-[26rem] pointer-events-none select-none z-[1]"
          style={{
            filter: "drop-shadow(0 30px 50px rgba(0,0,0,0.75)) drop-shadow(0 0 40px rgba(212,162,76,0.18))",
            maskImage: "linear-gradient(to top, black 70%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to top, black 70%, transparent 100%)",
          }}
        />

        {/* Bottom-right: Neem, copper bowl & sandalwood */}
        <img
          src={heroHerbsRight}
          alt="Neem leaves, copper bowl with healing oil and sandalwood"
          aria-hidden
          width={1024}
          height={1024}
          loading="lazy"
          decoding="async"
          className="hidden md:block absolute -bottom-10 -right-10 lg:-right-6 w-[18rem] lg:w-[22rem] xl:w-[26rem] pointer-events-none select-none z-[1]"
          style={{
            filter: "drop-shadow(0 30px 50px rgba(0,0,0,0.75)) drop-shadow(0 0 40px rgba(212,162,76,0.18))",
            maskImage: "linear-gradient(to top, black 70%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to top, black 70%, transparent 100%)",
          }}
        />

        {fxReady && <Particles />}

        <div className="relative mx-auto max-w-7xl w-full px-6 grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* LEFT — Content */}
          <div className="lg:col-span-7 space-y-7 animate-fade-up text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-[11px] tracking-[0.28em] uppercase text-[#F7F2E8]/85 bg-white/5 border border-[#D4A24C]/40 backdrop-blur">
              <Sparkles size={13} className="text-[#D4A24C]" /> Puducherry · Since 2009
            </div>

            <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.25rem] leading-[1.04] tracking-tight text-[#F7F2E8]">
              Ancient Healing,
              <br />
              <span
                className="italic"
                style={{
                  backgroundImage: "linear-gradient(135deg,#F5D78A 0%,#D4A24C 50%,#A87528 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Gracefully Renewed
              </span>
            </h1>

            <div className="h-px w-32 mx-auto lg:mx-0 bg-gradient-to-r from-transparent via-[#D4A24C]/70 to-transparent" />

            <p className="text-lg md:text-xl text-[#F5F5F2]/75 max-w-xl mx-auto lg:mx-0 leading-[1.8] font-light">
              Restoring balance through Siddha, Ayurveda, Varma and Yoga therapies — a sanctuary of holistic wellness in the heart of Puducherry.
            </p>

            <div className="flex flex-wrap gap-4 pt-2 justify-center lg:justify-start">
              <Link
                to="/appointment"
                className="inline-flex items-center gap-2 rounded-full px-7 py-[0.9rem] font-medium tracking-wide transition-all duration-500 hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg,#E5B968 0%,#D4A24C 50%,#A87528 100%)",
                  color: "#18392B",
                  boxShadow: "0 12px 40px -10px rgba(212,162,76,0.55), inset 0 1px 0 rgba(255,255,255,0.3)",
                }}
              >
                Book Consultation <ArrowRight size={16} />
              </Link>
              <Link
                to="/treatments"
                className="inline-flex items-center gap-2 rounded-full px-7 py-[0.85rem] border border-[#F7F2E8]/30 text-[#F7F2E8] bg-white/5 backdrop-blur hover:bg-white/10 hover:border-[#D4A24C]/60 transition-all duration-500"
              >
                Explore Treatments
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-3 gap-4 pt-10 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="font-serif text-3xl md:text-4xl text-[#F7F2E8]">15+</div>
                <div className="text-[10px] tracking-[0.22em] uppercase text-[#F7F2E8]/55 mt-1">Years Experience</div>
              </div>
              <div className="text-center lg:text-left border-x border-[#F7F2E8]/15">
                <div className="font-serif text-3xl md:text-4xl text-[#F7F2E8]">10k+</div>
                <div className="text-[10px] tracking-[0.22em] uppercase text-[#F7F2E8]/55 mt-1">Patients Healed</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="font-serif text-3xl md:text-4xl text-[#F7F2E8]">4</div>
                <div className="text-[10px] tracking-[0.22em] uppercase text-[#F7F2E8]/55 mt-1">Disciplines</div>
              </div>
            </div>
          </div>

          {/* RIGHT — Cinematic 3D STM emblem with orbital organ system */}
          <div className="lg:col-span-5 relative">
            <div
              ref={stageRef}
              className="relative mx-auto w-full max-w-[34rem] aspect-square"
              style={{
                transform: `translate3d(var(--mx,0), calc(${py * -0.05}px + var(--my,0)), 0)`,
                transition: "transform 0.7s cubic-bezier(0.16,1,0.3,1)",
              }}
            >
              {/* Volumetric outer halo — wider, brighter, breathing */}
              <div
                className="absolute inset-[-18%] rounded-full pulse-sync pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(255,225,150,0.55) 0%, rgba(245,215,138,0.30) 18%, rgba(212,162,76,0.18) 38%, transparent 68%)",
                  filter: "blur(40px)",
                  mixBlendMode: "screen",
                  ["--pulse-min" as any]: 0.65,
                  ["--pulse-max" as any]: 1,
                  ["--pulse-scale" as any]: 1.08,
                }}
              />
              {/* Hot golden core glow behind logo */}
              <div
                className="absolute inset-[12%] rounded-full bg-[radial-gradient(circle,_rgba(255,235,170,0.85)_0%,_rgba(245,215,138,0.55)_22%,_rgba(212,162,76,0.30)_42%,_rgba(63,107,75,0.10)_62%,_transparent_78%)] blur-2xl pulse-sync pointer-events-none"
                style={{
                  mixBlendMode: "screen",
                  ["--pulse-min" as any]: 0.7,
                  ["--pulse-max" as any]: 1,
                  ["--pulse-scale" as any]: 1.1,
                }}
              />
              <div className="absolute inset-[5%] rounded-full bg-[radial-gradient(circle,_rgba(63,107,75,0.32),_transparent_65%)] blur-3xl pointer-events-none" />

              {/* Bright starburst rays (8 spokes) — sharp gold burst */}
              {fxReady && (
                <div
                  aria-hidden
                  className="absolute inset-[-10%] pointer-events-none orbit-gpu pulse-sync"
                  style={{
                    background:
                      "conic-gradient(from 0deg, transparent 0deg, rgba(255,230,160,0.65) 2deg, transparent 8deg, transparent 43deg, rgba(255,225,150,0.45) 45deg, transparent 50deg, transparent 86deg, rgba(255,230,160,0.65) 90deg, transparent 96deg, transparent 133deg, rgba(255,225,150,0.45) 135deg, transparent 140deg, transparent 176deg, rgba(255,230,160,0.65) 180deg, transparent 186deg, transparent 223deg, rgba(255,225,150,0.45) 225deg, transparent 230deg, transparent 266deg, rgba(255,230,160,0.65) 270deg, transparent 276deg, transparent 313deg, rgba(255,225,150,0.45) 315deg, transparent 320deg, transparent 358deg)",
                    mask: "radial-gradient(circle, transparent 18%, #000 26%, #000 60%, transparent 82%)",
                    WebkitMask:
                      "radial-gradient(circle, transparent 18%, #000 26%, #000 60%, transparent 82%)",
                    filter: "blur(2px) brightness(1.15)",
                    mixBlendMode: "screen",
                    animation: "spin 220s linear infinite",
                    transformOrigin: "50% 50%",
                    ["--pulse-min" as any]: 0.55,
                    ["--pulse-max" as any]: 1,
                    ["--pulse-scale" as any]: 1.06,
                  }}
                />
              )}

              {/* Soft fan rays — wider, blurrier counter-rotation for depth */}
              {fxReady && (
                <div
                  aria-hidden
                  className="absolute inset-[-12%] pointer-events-none orbit-gpu pulse-sync"
                  style={{
                    background:
                      "conic-gradient(from 22deg, transparent 0deg, rgba(245,215,138,0.30) 10deg, transparent 30deg, transparent 70deg, rgba(245,215,138,0.22) 80deg, transparent 100deg, transparent 140deg, rgba(245,215,138,0.30) 150deg, transparent 170deg, transparent 210deg, rgba(245,215,138,0.22) 220deg, transparent 240deg, transparent 280deg, rgba(245,215,138,0.30) 290deg, transparent 310deg, transparent 350deg)",
                    mask: "radial-gradient(circle, transparent 20%, #000 32%, #000 58%, transparent 80%)",
                    WebkitMask:
                      "radial-gradient(circle, transparent 20%, #000 32%, #000 58%, transparent 80%)",
                    filter: "blur(10px)",
                    mixBlendMode: "screen",
                    animation: "spin 340s linear infinite reverse",
                    transformOrigin: "50% 50%",
                    ["--pulse-min" as any]: 0.4,
                    ["--pulse-max" as any]: 0.85,
                    ["--pulse-scale" as any]: 1.04,
                  }}
                />
              )}

              {/* Central hot sun behind emblem */}
              <div
                className="absolute inset-[28%] rounded-full pulse-sync pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(255,245,200,0.9) 0%, rgba(255,220,140,0.5) 35%, transparent 70%)",
                  filter: "blur(18px)",
                  mixBlendMode: "screen",
                  ["--pulse-min" as any]: 0.75,
                  ["--pulse-max" as any]: 1,
                  ["--pulse-scale" as any]: 1.05,
                }}
              />


              {/* Faint sacred geometry orbital paths — slow cinematic rotation */}
              <svg
                aria-hidden
                viewBox="0 0 100 100"
                className="absolute inset-0 w-full h-full pointer-events-none orbit-gpu"
                style={{ animation: "spin 80s linear infinite", transformOrigin: "50% 50%" }}
              >
                <g className="pulse-sync" style={{ ["--pulse-min" as any]: 0.55, ["--pulse-max" as any]: 1, ["--pulse-scale" as any]: 1 }}>
                  <circle cx="50" cy="50" r="34" fill="none" stroke="#D4A24C" strokeOpacity="0.28" strokeWidth="0.18" strokeDasharray="0.4 1.2" />
                  <circle cx="50" cy="50" r="48" fill="none" stroke="#D4A24C" strokeOpacity="0.20" strokeWidth="0.18" strokeDasharray="0.3 2" />
                </g>
              </svg>
              <svg
                aria-hidden
                viewBox="0 0 100 100"
                className="absolute inset-0 w-full h-full pointer-events-none orbit-gpu"
                style={{ animation: "spin 140s linear infinite reverse", transformOrigin: "50% 50%" }}
              >
                <g className="pulse-sync" style={{ ["--pulse-min" as any]: 0.45, ["--pulse-max" as any]: 0.95, ["--pulse-scale" as any]: 1 }}>
                  <circle cx="50" cy="50" r="42" fill="none" stroke="#F5D78A" strokeOpacity="0.22" strokeWidth="0.18" />
                  <circle cx="50" cy="50" r="46" fill="none" stroke="#F5D78A" strokeOpacity="0.16" strokeWidth="0.12" strokeDasharray="0.2 1.8" />
                </g>
              </svg>

              {/* 3D STM emblem — center sun */}
              <div className="absolute inset-[28%] grid place-items-center pointer-events-none">
                <div className="relative w-full h-full breathe">
                  {/* Outer metallic embossed ring */}
                  <div
                    className="absolute inset-[-14%] rounded-full"
                    style={{
                      background:
                        "conic-gradient(from 220deg, #6e4d1e, #F5D78A, #D4A24C, #8a5e22, #F5D78A, #A87528, #6e4d1e)",
                      boxShadow:
                        "0 30px 60px -20px rgba(0,0,0,0.7), 0 0 80px rgba(212,162,76,0.45)",
                    }}
                  />
                  <div
                    className="absolute inset-[-10%] rounded-full"
                    style={{
                      background:
                        "radial-gradient(circle at 30% 25%, rgba(255,255,255,0.35), transparent 45%), linear-gradient(160deg, #1a3a2a 0%, #0e2519 60%, #0a1c14 100%)",
                      boxShadow: "inset 0 2px 0 rgba(255,255,255,0.18), inset 0 -8px 24px rgba(0,0,0,0.6)",
                    }}
                  />
                  {/* Logo disc */}
                  <div
                    className="relative w-full h-full rounded-full overflow-hidden"
                    style={{
                      boxShadow:
                        "inset 0 3px 0 rgba(255,255,255,0.35), inset 0 -10px 30px rgba(0,0,0,0.6), 0 0 60px rgba(245,215,138,0.35)",
                    }}
                  >
                    <img
                      src={stmLogo}
                      alt="STM — Om Sri Thirumoolar emblem"
                      className="w-full h-full object-cover"
                      width={400}
                      height={400}
                    />
                    {/* Glossy top reflection */}
                    <div className="absolute inset-x-0 top-0 h-1/2 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.35),_transparent_70%)] pointer-events-none" />
                    {/* Gold rim light — pulses with emblem heartbeat */}
                    <div
                      className="absolute inset-0 rounded-full pointer-events-none pulse-sync"
                      style={{
                        boxShadow: "inset 0 0 0 1.5px rgba(245,215,138,0.55), inset 0 0 30px rgba(245,215,138,0.4)",
                        ["--pulse-min" as any]: 0.7,
                        ["--pulse-max" as any]: 1,
                        ["--pulse-scale" as any]: 1,
                      }}
                    />
                  </div>
                  {/* Subtle bottom shadow under emblem */}
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-6 rounded-[50%] bg-black/50 blur-xl" />
                </div>
              </div>

              {/* Orbital organs — slow cinematic clockwise orbit, organs stay upright */}
              <div
                className="absolute inset-0 pointer-events-none orbit-gpu"
                style={{ animation: "spin 90s linear infinite", transformOrigin: "50% 50%" }}
              >
                {[
                  { src: organHeart,   alt: "Heart",   deg: 270, r: 40, size: 96,  depth: 1.2 },
                  { src: organLungs,   alt: "Lungs",   deg: 330, r: 42, size: 88,  depth: 0.9 },
                  { src: organSpine,   alt: "Spine",   deg: 30,  r: 42, size: 110, depth: 1.4 },
                  { src: organStomach, alt: "Stomach", deg: 90,  r: 40, size: 84,  depth: 0.6 },
                  { src: organKnee,    alt: "Knee",    deg: 150, r: 42, size: 84,  depth: 0.7 },
                  { src: organBrain,   alt: "Brain",   deg: 210, r: 42, size: 88,  depth: 0.8 },
                ].map((o, i) => {
                  const rad = (o.deg * Math.PI) / 180;
                  const x = 50 + o.r * Math.cos(rad);
                  const y = 50 + o.r * Math.sin(rad);
                  return (
                    <div
                      key={i}
                      className="absolute"
                      style={{
                        left: `${x}%`,
                        top: `${y}%`,
                        width: o.size,
                        height: o.size,
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      {/* Counter-rotate so organ stays upright */}
                      <div
                        className="w-full h-full orbit-gpu"
                        style={{ animation: "spin 90s linear infinite reverse", transformOrigin: "50% 50%" }}
                      >
                        {/* Per-organ depth parallax — heavier organs move more */}
                        <div
                          className="w-full h-full depth-parallax"
                          style={{ ["--depth" as any]: o.depth }}
                        >
                          <div
                            className="w-full h-full animate-float"
                            style={{
                              animationDuration: `${7 + (i % 3)}s`,
                              animationDelay: `${i * 0.4}s`,
                            }}
                          >
                            {/* Synced healing aura — all organs pulse on same beat */}
                            <div
                              className="absolute inset-[-35%] rounded-full bg-[radial-gradient(circle,_rgba(245,215,138,0.55),_rgba(63,107,75,0.12)_50%,_transparent_75%)] blur-md pulse-sync"
                              style={{
                                ["--pulse-min" as any]: 0.45,
                                ["--pulse-max" as any]: 1,
                                ["--pulse-scale" as any]: 1.12,
                              }}
                            />
                            <img
                              src={o.src}
                              alt={o.alt}
                              width={256}
                              height={256}
                              loading="lazy"
                              decoding="async"
                              className="relative w-full h-full object-contain"
                              style={{
                                filter:
                                  "drop-shadow(0 10px 18px rgba(0,0,0,0.55)) drop-shadow(0 0 14px rgba(245,215,138,0.45))",
                                willChange: "transform",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Cinematic light rays — deferred */}
              {fxReady && (
                <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none animate-fade-in">
                  <div className="cine-ray cine-ray-1" />
                  <div className="cine-ray cine-ray-3" />
                </div>
              )}

              {/* Lower fog */}
              <div className="absolute -bottom-6 inset-x-[-10%] h-32 bg-[radial-gradient(ellipse_at_center,_rgba(180,210,180,0.18),_transparent_70%)] blur-2xl pointer-events-none" />

              {/* Floating trust chip */}
              <div className="absolute -bottom-6 right-0 bg-[#0e2519]/85 backdrop-blur-xl rounded-2xl px-4 py-3 border border-[#D4A24C]/40 flex items-center gap-3 shadow-2xl animate-float-slow z-10">
                <div className="w-9 h-9 rounded-full bg-[#D4A24C]/20 grid place-items-center">
                  <Leaf size={16} className="text-[#D4A24C]" />
                </div>
                <div className="leading-tight">
                  <div className="text-[10px] tracking-[0.2em] uppercase text-[#F7F2E8]/55">100%</div>
                  <div className="text-sm font-medium text-[#F7F2E8]">Natural Care</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[#F7F2E8]/40 text-[10px] tracking-[0.4em] uppercase animate-pulse">
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
