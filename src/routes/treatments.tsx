import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { useReveal } from "@/hooks/use-reveal";
import { Bone, Brain, Activity, Droplets, Flame, Sparkles, Baby, Leaf, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/treatments")({
  head: () => ({
    meta: [
      { title: "Treatments — Pain, Paralysis, Nerve, Kidney, Liver, Skin & Fertility | STM" },
      { name: "description", content: "Specialised natural treatments at STM Puducherry — pain management, paralysis care, nerve disorders, kidney & liver care, skin and fertility support." },
      { property: "og:title", content: "Specialised Treatments — STM Puducherry" },
      { property: "og:description", content: "Holistic care for chronic and complex conditions, naturally." },
    ],
  }),
  component: TreatmentsPage,
});

const items = [
  { icon: Bone, name: "Pain Management", desc: "Back pain, joint pain, sciatica and arthritis — eased through Varma, herbal therapy and targeted yoga." },
  { icon: Activity, name: "Paralysis Care", desc: "Post-stroke and partial paralysis recovery using Varma, kizhi and rehabilitative protocols." },
  { icon: Brain, name: "Nerve Disorders", desc: "Neuropathy, facial palsy and tremors approached holistically to restore nerve function." },
  { icon: Droplets, name: "Kidney Care", desc: "Gentle herbal protocols supporting kidney function, stone prevention and overall renal health." },
  { icon: Flame, name: "Liver Care", desc: "Detoxifying liver therapies for fatty liver, jaundice recovery and metabolic support." },
  { icon: Sparkles, name: "Skin Wellness", desc: "Psoriasis, eczema and chronic skin issues addressed from within using Siddha & Ayurveda." },
  { icon: Baby, name: "Fertility Care", desc: "A patient, dignified path for couples — strengthening reproductive health naturally." },
  { icon: Leaf, name: "General Healing", desc: "Lifestyle, immunity, sleep and stress — restored through daily rituals of well-being." },
];

function TreatmentsPage() {
  useReveal();
  return (
    <SiteLayout>
      <section className="pt-40 pb-20 bg-hero text-primary-foreground relative overflow-hidden">
        <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-accent/20 blur-3xl animate-float-slow" />
        <div className="mx-auto max-w-5xl px-6 text-center animate-fade-up">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-5">Specialisations</p>
          <h1 className="font-serif text-5xl md:text-6xl leading-tight">
            Care for the <span className="text-gradient-gold italic">conditions</span> that matter most.
          </h1>
          <p className="mt-6 text-white/75 max-w-2xl mx-auto leading-relaxed">
            Comprehensive natural treatments for chronic, complex and everyday concerns.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((it, i) => (
              <div
                key={it.name}
                className="reveal card-tilt group bg-card rounded-3xl p-7 border border-border/60 shadow-soft hover:shadow-elevated transition-all duration-500"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-emerald-grad text-primary-foreground grid place-items-center mb-5 shadow-glow group-hover:scale-110 transition-transform">
                  <it.icon size={22} />
                </div>
                <h3 className="font-serif text-xl text-primary">{it.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center reveal">
            <h2 className="font-serif text-3xl md:text-4xl text-primary">Not sure where to begin?</h2>
            <p className="mt-3 text-muted-foreground">Speak with our team for a personal recommendation.</p>
            <Link to="/appointment" className="btn-gold inline-flex items-center gap-2 mt-6">
              Book a Consultation <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
