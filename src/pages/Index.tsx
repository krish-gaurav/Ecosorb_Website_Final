import { Link } from "react-router-dom";
import { PageShell } from "@/components/layout/PageShell";
import {
  ArrowRight,
  Leaf,
  Droplet,
  Wind,
  ShieldCheck,
  Recycle,
  Sprout,
  Package,
  AlertTriangle,
  Factory,
  Trash2,
} from "lucide-react";

const problemStats = [
  { icon: Trash2, stat: "200,000", unit: "tons", label: "of silica gel waste produced globally each year" },
  { icon: Droplet, stat: "40 kg", unit: "water", label: "consumed per kg of silica gel manufactured" },
  { icon: Factory, stat: "High", unit: "CO₂", label: "emissions released during silica production" },
];

const features = [
  { icon: Sprout, label: "Biodegradable" },
  { icon: ShieldCheck, label: "Non-toxic" },
  { icon: Wind, label: "Odor-absorbing" },
  { icon: Leaf, label: "Locally sourced" },
];

const steps = [
  { n: "01", icon: Droplet, title: "Absorb", body: "Diatomaceous earth pulls moisture out of the air through its naturally micro-porous structure." },
  { n: "02", icon: Wind, title: "Remove odors", body: "Activated carbon traps odor molecules — keeping packaged goods fresh, not just dry." },
  { n: "03", icon: Package, title: "Protect products", body: "The Kraft sachet keeps shoes, electronics, and retail items dry from factory to customer." },
];

const impact = [
  { icon: Recycle, title: "Compostable", body: "Sachet and contents return to soil — no microplastics, no landfill." },
  { icon: Sprout, title: "Eco-friendly", body: "Naturally-derived inputs with a fraction of the embedded water and carbon." },
  { icon: Package, title: "Packaging-ready", body: "Drop-in replacement at standard sachet sizes for existing packaging lines." },
];

const Index = () => (
  <PageShell>
    {/* HERO */}
    <section className="bg-brand-tint border-b border-border">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-20 md:py-28 grid lg:grid-cols-[1fr_460px] gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-brand-pale border border-brand-light/40 text-brand-mid text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-brand-light rounded-full" />
            Sustainable Desiccant Technology
          </div>
          <h1 className="font-display font-black text-5xl md:text-6xl lg:text-7xl text-brand-dark leading-[1.05] tracking-tight mb-6">
            A <em className="not-italic italic text-brand-mid">sustainable</em> alternative to silica gel.
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed mb-8">
            Ecosorb is a biodegradable desiccant that absorbs both moisture and odors — without harming the environment.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/product"
              className="inline-flex items-center gap-2 bg-brand-dark text-primary-foreground font-semibold px-7 py-3.5 rounded-lg shadow-soft hover:bg-brand-mid hover:-translate-y-0.5 transition-all"
            >
              View Product <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/science"
              className="inline-flex items-center bg-background border border-brand-dark text-brand-dark font-semibold px-7 py-3.5 rounded-lg hover:bg-brand-pale transition-colors"
            >
              See Test Results
            </Link>
          </div>
          <div className="mt-10 pt-6 border-t border-border flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {["Biodegradable", "Non-toxic", "Locally sourced", "Odor-absorbing"].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <span className="text-brand-light">✓</span> {t}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-background border border-border rounded-2xl p-8 shadow-elegant">
          <div className="bg-brand-pale rounded-xl h-56 flex items-center justify-center mb-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_30%,hsl(var(--green-light)/0.2),transparent_60%)]" />
            <div className="flex items-end gap-6 relative">
              <div className="text-center">
                <div className="w-24 h-32 rounded-md bg-muted border border-border flex flex-col items-center justify-center text-muted-foreground p-3 shadow-sm">
                  <div className="text-[9px] uppercase tracking-widest text-destructive font-bold">Do Not Eat</div>
                  <div className="font-display font-black text-sm mt-2">Silica</div>
                  <div className="text-[9px] mt-1">landfill</div>
                </div>
                <div className="text-[10px] uppercase tracking-wide text-muted-foreground mt-2">Old way</div>
              </div>
              <ArrowRight className="w-6 h-6 text-brand-mid mb-12" />
              <div className="text-center">
                <div className="w-24 h-32 rounded-md bg-gradient-to-br from-brand-mid to-brand-dark flex flex-col items-center justify-center text-primary-foreground p-3 shadow-[0_10px_30px_rgba(26,74,46,0.35)]">
                  <Leaf className="w-5 h-5 text-brand-glow" />
                  <div className="font-display font-black text-sm mt-2">Ecosorb</div>
                  <div className="text-[9px] mt-1 text-brand-glow">compost</div>
                </div>
                <div className="text-[10px] uppercase tracking-wide text-brand-mid font-bold mt-2">New way</div>
              </div>
            </div>
          </div>
          <div className="text-base font-bold mb-1">Ecosorb Desiccant</div>
          <div className="text-sm text-muted-foreground mb-4">
            Diatomaceous Earth · Activated Carbon · Kraft packaging
          </div>
          <div className="bg-muted rounded-lg p-3 grid grid-cols-3 gap-2 text-center">
            <div>
              <div className="font-display font-black text-brand-dark">11%</div>
              <div className="text-[10px] text-muted-foreground uppercase tracking-wide">Ecosorb @ 9h</div>
            </div>
            <div>
              <div className="font-display font-black text-brand-dark">14.5%</div>
              <div className="text-[10px] text-muted-foreground uppercase tracking-wide">Silica @ 9h</div>
            </div>
            <div>
              <div className="font-display font-black text-brand-dark">100%</div>
              <div className="text-[10px] text-muted-foreground uppercase tracking-wide">Compostable</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* PROBLEM */}
    <section className="max-w-[1200px] mx-auto px-6 lg:px-10 py-20">
      <div className="max-w-2xl">
        <div className="section-label flex items-center gap-2">
          <AlertTriangle className="w-3.5 h-3.5" /> The Problem
        </div>
        <h2 className="section-title">The hidden harm of <em>silica gel</em>.</h2>
        <p className="section-lead">
          Most silica gel packets are tossed after a single use. Their production is either water-intensive or
          energy-intensive — and the material itself never returns to the earth.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mt-8">
        {problemStats.map(({ icon: Icon, stat, unit, label }) => (
          <div key={label} className="bg-background border border-border rounded-xl p-6 hover:shadow-elegant transition-shadow">
            <div className="w-11 h-11 rounded-lg bg-destructive/10 flex items-center justify-center mb-4">
              <Icon className="w-5 h-5 text-destructive" />
            </div>
            <div className="font-display font-black text-4xl text-brand-dark leading-none">
              {stat} <span className="text-base text-muted-foreground font-sans font-semibold">{unit}</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mt-3">{label}</p>
          </div>
        ))}
      </div>
    </section>

    {/* SOLUTION */}
    <section className="bg-brand-tint border-y border-border">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="section-label">The Solution</div>
          <h2 className="section-title">Meet <em>Ecosorb</em>.</h2>
          <p className="section-lead">
            Ecosorb is a biodegradable desiccant made from <strong className="text-foreground">diatomaceous earth</strong> and{" "}
            <strong className="text-foreground">activated carbon</strong>, delivering strong moisture and odor control using sustainable materials.
          </p>
          <Link
            to="/product"
            className="inline-flex items-center gap-2 bg-brand-dark text-primary-foreground font-semibold px-6 py-3 rounded-lg shadow-soft hover:bg-brand-mid hover:-translate-y-0.5 transition-all"
          >
            Explore the product <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {features.map(({ icon: Icon, label }) => (
            <div key={label} className="bg-background border border-border rounded-xl p-5 flex items-center gap-3 shadow-soft">
              <div className="w-10 h-10 rounded-lg bg-brand-pale flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-brand-mid" />
              </div>
              <span className="font-semibold text-sm text-brand-dark">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* HOW IT WORKS */}
    <section className="max-w-[1200px] mx-auto px-6 lg:px-10 py-20">
      <div className="section-label">How it works</div>
      <h2 className="section-title">Three steps. <em>One sachet.</em></h2>
      <div className="grid md:grid-cols-3 gap-4 mt-10">
        {steps.map(({ n, icon: Icon, title, body }) => (
          <div key={n} className="bg-background border border-border rounded-xl p-7 hover:border-brand-light hover:shadow-elegant transition-all">
            <div className="flex items-center justify-between mb-5">
              <div className="w-12 h-12 rounded-lg bg-brand-pale flex items-center justify-center">
                <Icon className="w-5 h-5 text-brand-mid" />
              </div>
              <span className="font-display font-black text-2xl text-brand-pale">{n}</span>
            </div>
            <h3 className="font-display font-black text-xl text-brand-dark mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
          </div>
        ))}
      </div>
    </section>

    {/* RESULTS PREVIEW */}
    <section className="bg-brand-dark text-primary-foreground">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-20 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
        <div>
          <div className="text-xs font-bold tracking-[1.5px] uppercase text-brand-glow mb-3">Tested against industry standards</div>
          <h2 className="font-display font-black text-3xl md:text-5xl leading-[1.15] tracking-tight mb-6">
            <em className="not-italic italic text-brand-glow">11.0%</em> moisture vs. 14.5% for silica gel — at 9 hours.
          </h2>
          <p className="text-primary-foreground/80 leading-relaxed mb-6 max-w-lg">
            In head-to-head mason-jar testing with hygrometers and moisture meters, Ecosorb (Kraft) outperformed silica gel
            across the full timeline — and kept absorbing.
          </p>
          <Link
            to="/science"
            className="inline-flex items-center gap-2 bg-brand-glow text-brand-dark font-semibold px-6 py-3 rounded-lg hover:bg-primary-foreground transition-colors"
          >
            View full testing data <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="bg-brand-mid/30 backdrop-blur border border-brand-glow/20 rounded-2xl p-8">
          <div className="text-xs uppercase tracking-wider text-brand-glow font-bold mb-4">Moisture remaining (lower is better)</div>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm font-semibold mb-1.5">
                <span>Ecosorb (Kraft)</span>
                <span className="text-brand-glow">11.0%</span>
              </div>
              <div className="h-3 bg-brand-dark/50 rounded-full overflow-hidden">
                <div className="h-full bg-brand-glow rounded-full" style={{ width: "55%" }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm font-semibold mb-1.5">
                <span>Silica Gel</span>
                <span className="text-primary-foreground/70">14.5%</span>
              </div>
              <div className="h-3 bg-brand-dark/50 rounded-full overflow-hidden">
                <div className="h-full bg-primary-foreground/40 rounded-full" style={{ width: "72.5%" }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm font-semibold mb-1.5">
                <span>Control (no desiccant)</span>
                <span className="text-primary-foreground/70">20.0%</span>
              </div>
              <div className="h-3 bg-brand-dark/50 rounded-full overflow-hidden">
                <div className="h-full bg-primary-foreground/20 rounded-full" style={{ width: "100%" }} />
              </div>
            </div>
          </div>
          <div className="text-[11px] text-primary-foreground/60 mt-5 pt-4 border-t border-brand-glow/20">
            Mason jar + hygrometer test, 9-hour endpoint. Reviewed by a PhD in Analytical Chemistry.
          </div>
        </div>
      </div>
    </section>

    {/* IMPACT */}
    <section className="max-w-[1200px] mx-auto px-6 lg:px-10 py-20">
      <div className="max-w-2xl">
        <div className="section-label">Impact</div>
        <h2 className="section-title">Built for a <em>sustainable</em> future.</h2>
        <p className="section-lead">
          Ecosorb reduces environmental impact while matching — and exceeding — traditional desiccant performance.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-4 mt-8">
        {impact.map(({ icon: Icon, title, body }) => (
          <div key={title} className="bg-brand-tint border border-border rounded-xl p-7">
            <div className="w-12 h-12 rounded-lg bg-background flex items-center justify-center mb-4 shadow-soft">
              <Icon className="w-5 h-5 text-brand-mid" />
            </div>
            <h3 className="font-display font-black text-lg text-brand-dark mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
          </div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="bg-brand-tint border-t border-border">
      <div className="max-w-[1000px] mx-auto px-6 lg:px-10 py-20 text-center">
        <div className="section-label justify-center">Get in touch</div>
        <h2 className="font-display font-black text-3xl md:text-5xl text-brand-dark leading-[1.1] tracking-tight mb-4">
          Interested in <em className="not-italic italic text-brand-mid">sustainable</em> packaging?
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
          Whether you ship 5,000 units a month or 5 million, we'd love to talk about replacing silica gel in your supply chain.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-brand-dark text-primary-foreground font-semibold px-8 py-4 rounded-lg shadow-soft hover:bg-brand-mid hover:-translate-y-0.5 transition-all"
        >
          Contact our team <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  </PageShell>
);

export default Index;
