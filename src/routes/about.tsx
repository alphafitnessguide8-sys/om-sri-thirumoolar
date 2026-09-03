import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { useReveal } from "@/hooks/use-reveal";
import { Scene3D } from "@/components/three/Scene3D";
import { CinematicFX } from "@/components/site/CinematicFX";
import { Leaf, Sparkles, HeartPulse, Sun, GraduationCap, Award, Clock } from "lucide-react";
import about from "@/assets/about-heritage.jpg";
import practitionerImg from "@/assets/treatment-siddha.jpg";
import practitionerImg2 from "@/assets/treatment-varma.jpg";


export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About STM — Siddha Heritage & Holistic Healing in Puducherry" },
      { name: "description", content: "Discover STM's roots in Siddha and Ayurvedic tradition. A family clinic in Puducherry devoted to natural, lasting healing." },
      { property: "og:title", content: "About STM — Siddha Heritage in Puducherry" },
      { property: "og:description", content: "A sanctuary where tradition meets thoughtful, personalised care." },
    ],
  }),
  component: AboutPage,
});

const pillars = [
  { icon: Leaf, title: "Rooted in Siddha", text: "An unbroken Tamil tradition of healing through herbs, minerals and breath." },
  { icon: Sparkles, title: "Refined by Ayurveda", text: "The pan-Indian science of balance, sustenance and rasāyana." },
  { icon: HeartPulse, title: "Restored by Varma", text: "The art of the body's vital points — quietly powerful, deeply effective." },
  { icon: Sun, title: "Renewed by Yoga", text: "Movement, breath and stillness as daily medicine." },
];

const practitioners = [
  {
    name: "[PRACTITIONER NAME]",
    role: "[ROLE — e.g. Chief Siddha Physician]",
    qualification: "[QUALIFICATION — e.g. BSMS, MD (Siddha)]",
    years: "[YEARS] years of practice",
    registration: "[REGISTRATION / COUNCIL NO.]",
    bio: "[SHORT BIO — a few lines about this practitioner's training, lineage, approach to care and areas of special interest.]",
    img: practitionerImg,
  },
  {
    name: "[PRACTITIONER NAME]",
    role: "[ROLE — e.g. Varma & Yoga Therapist]",
    qualification: "[QUALIFICATION]",
    years: "[YEARS] years of practice",
    registration: "[REGISTRATION / COUNCIL NO.]",
    bio: "[SHORT BIO — a few lines about this practitioner's training, specialisation and approach with patients.]",
    img: practitionerImg2,
  },
];

function AboutPage() {
  useReveal();
  return (
    <SiteLayout>
      <section className="pt-40 pb-20 bg-hero text-primary-foreground relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-accent/20 blur-3xl" />
        {/* calm 3D emblem — lazy, WebGL-guarded, reduced-motion aware, desktop/tablet only */}
        <div className="absolute inset-0 opacity-70">
          <Scene3D scene="emblem" disableBelow={768} />
        </div>
        <CinematicFX rays mist grain={false} vignette className="opacity-60" />
        <div className="relative mx-auto max-w-5xl px-6 text-center animate-fade-up">

          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-5">About STM</p>
          <h1 className="font-serif text-5xl md:text-6xl leading-tight">
            A practice shaped by <span className="text-gradient-gold italic">tradition</span>,
            guided by care.
          </h1>
          <p className="mt-6 text-white/75 max-w-2xl mx-auto leading-relaxed">
            Om Sri Thirumoolar Siddha & Ayurveda Clinic was founded on a simple belief — that
            healing happens slowly, naturally, and with deep listening.
          </p>
        </div>
      </section>

      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal relative">
            <div className="absolute -inset-4 bg-emerald-grad rounded-[2rem] opacity-20 blur-2xl" />
            <img src={about} alt="Traditional Siddha herbs and copper bowls" loading="lazy" width={1024} height={1024}
              className="relative rounded-[2rem] shadow-elevated w-full h-full object-cover" />
          </div>
          <div className="reveal space-y-6">
            <p className="text-xs tracking-[0.3em] uppercase text-accent">Our Story</p>
            <h2 className="font-serif text-4xl md:text-5xl text-primary leading-tight">
              The medicine grew in our gardens, the wisdom in our homes.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              STM was born in Puducherry — a city where the Bay of Bengal meets centuries of Tamil
              spiritual heritage. Named in reverence to the great siddhar Thirumoolar, our clinic
              carries forward a lineage that views the body, mind and spirit as one inseparable
              song.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We do not chase symptoms. We sit with them, observe them, and gently guide them
              back to balance — using only what nature provides and what our masters refined
              over millennia.
            </p>
            <Link to="/services" className="btn-gold inline-flex items-center gap-2 mt-2">
              Explore our services
            </Link>
          </div>
        </div>
      </section>

      <section className="py-28 relative overflow-hidden">
        <CinematicFX rays={false} mist grain={false} vignette={false} className="opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="text-center mb-14 reveal">


            <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">Led By</p>
            <h2 className="font-serif text-4xl md:text-5xl text-primary">Meet our practitioners.</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Every consultation at STM is guided personally by a qualified physician — never
              delegated, never rushed.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {practitioners.map((p) => (
              <article key={p.role} className="reveal bg-card rounded-3xl border border-border/60 shadow-soft hover:shadow-elevated transition-all duration-500 overflow-hidden">
                <div className="grid sm:grid-cols-[minmax(0,14rem)_1fr]">
                  <div className="overflow-hidden aspect-[4/5] sm:aspect-auto">
                    <img
                      src={p.img}
                      alt={`Portrait of ${p.name}, ${p.role} at STM`}
                      loading="lazy"
                      className="img-zoom w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 space-y-4">
                    <div>
                      <h3 className="font-serif text-2xl text-primary">{p.name}</h3>
                      <p className="text-sm text-accent mt-1">{p.role}</p>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.bio}</p>
                    <ul className="space-y-2 pt-2 border-t border-border/60">
                      <li className="flex items-center gap-3 text-sm text-muted-foreground">
                        <GraduationCap size={16} className="text-accent shrink-0" /> {p.qualification}
                      </li>
                      <li className="flex items-center gap-3 text-sm text-muted-foreground">
                        <Clock size={16} className="text-accent shrink-0" /> {p.years}
                      </li>
                      <li className="flex items-center gap-3 text-sm text-muted-foreground">
                        <Award size={16} className="text-accent shrink-0" /> {p.registration}
                      </li>
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-14 reveal">
            <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">Four Pillars</p>
            <h2 className="font-serif text-4xl md:text-5xl text-primary">A complete philosophy of wellbeing.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p, i) => (
              <div key={p.title} className="reveal bg-card rounded-3xl p-8 border border-border/60 shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-all duration-500" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="w-12 h-12 rounded-xl bg-emerald-grad text-primary-foreground grid place-items-center mb-5 shadow-glow">
                  <p.icon size={22} />
                </div>
                <h3 className="font-serif text-xl text-primary">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
