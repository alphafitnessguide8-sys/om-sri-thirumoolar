import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { useReveal } from "@/hooks/use-reveal";
import { Leaf, Sparkles, HeartPulse, Sun, Check, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Siddha, Ayurveda, Varma & Yoga Therapy | STM Puducherry" },
      { name: "description", content: "Explore Siddha, Ayurveda, Varma and Yoga therapies at STM Puducherry — personalised, traditional treatments for lasting natural healing." },
      { property: "og:title", content: "Services — STM Siddha & Ayurveda Clinic" },
      { property: "og:description", content: "Personalised holistic therapies rooted in tradition." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Leaf,
    name: "Siddha Treatment",
    tag: "The Tamil science of life",
    desc: "Drawing from herbs, minerals and the wisdom of the siddhars, our Siddha protocols rebalance the three humours and restore vitality at its source.",
    benefits: ["Detoxifies & rejuvenates", "Strengthens immunity", "Balances doshas", "No side effects"],
    treats: ["Chronic pain", "Skin disorders", "Liver & kidney concerns", "Digestive issues"],
  },
  {
    icon: Sparkles,
    name: "Ayurveda Treatment",
    tag: "The science of balance",
    desc: "Personalised Ayurvedic care — including panchakarma, abhyanga and herbal formulations — to align the body's natural rhythms.",
    benefits: ["Deep detoxification", "Improved sleep & energy", "Hormonal balance", "Mental clarity"],
    treats: ["Stress & anxiety", "Joint pain", "Fertility issues", "Lifestyle disorders"],
  },
  {
    icon: HeartPulse,
    name: "Varma Therapy",
    tag: "The art of vital points",
    desc: "An ancient Tamil therapeutic art that uses precise pressure on the body's energy centres to release pain, restore movement and renew the nervous system.",
    benefits: ["Relieves chronic pain", "Restores nerve function", "Aids paralysis recovery", "Improves mobility"],
    treats: ["Sciatica & back pain", "Paralysis", "Nerve disorders", "Sports injuries"],
  },
  {
    icon: Sun,
    name: "Yoga Therapy",
    tag: "Movement as medicine",
    desc: "Therapeutic āsana, prāṇāyāma and meditation sequences designed for your specific body, condition and goals.",
    benefits: ["Better posture & flexibility", "Calmer mind", "Stronger immunity", "Sustainable wellness"],
    treats: ["Lifestyle stress", "Spine health", "Respiratory issues", "Emotional wellbeing"],
  },
];

function ServicesPage() {
  useReveal();
  return (
    <SiteLayout>
      <section className="pt-40 pb-20 bg-hero text-primary-foreground relative overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-gold/20 blur-3xl animate-float" />
        <div className="mx-auto max-w-5xl px-6 text-center animate-fade-up">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-5">Services</p>
          <h1 className="font-serif text-5xl md:text-6xl leading-tight">
            Therapies, <span className="text-gradient-gold italic">tailored</span> to you.
          </h1>
          <p className="mt-6 text-white/75 max-w-2xl mx-auto leading-relaxed">
            Every protocol at STM begins with listening — to your body, your story, your hopes.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 space-y-10">
          {services.map((s, i) => (
            <div
              key={s.name}
              className={`reveal grid lg:grid-cols-12 gap-8 items-center bg-card rounded-[2rem] p-8 md:p-12 border border-border/60 shadow-soft hover:shadow-elevated transition-all duration-500 ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/3] rounded-2xl bg-emerald-grad overflow-hidden shadow-glow">
                  <div className="absolute inset-0 grid place-items-center">
                    <s.icon className="text-white/90" size={120} strokeWidth={1} />
                  </div>
                  <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gold/30 blur-2xl" />
                </div>
              </div>
              <div className="lg:col-span-7 space-y-5">
                <p className="text-xs tracking-[0.3em] uppercase text-accent">{s.tag}</p>
                <h2 className="font-serif text-3xl md:text-4xl text-primary">{s.name}</h2>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="grid sm:grid-cols-2 gap-6 pt-4">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-accent mb-3">Benefits</p>
                    <ul className="space-y-2">
                      {s.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm text-foreground/80">
                          <Check size={16} className="text-accent mt-0.5 shrink-0" /> {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-accent mb-3">Conditions Treated</p>
                    <ul className="space-y-2">
                      {s.treats.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm text-foreground/80">
                          <Leaf size={14} className="text-accent mt-1 shrink-0" /> {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <Link to="/appointment" className="btn-gold inline-flex items-center gap-2 mt-4">
                  Book this therapy <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
