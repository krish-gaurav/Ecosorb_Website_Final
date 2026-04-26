import { Link } from "react-router-dom";
import { PageShell } from "@/components/layout/PageShell";
import { ArrowRight, Leaf } from "lucide-react";

const Index = () => (
  <PageShell>
    <section className="bg-brand-tint border-b border-border">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-20 md:py-28 grid lg:grid-cols-[1fr_460px] gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-brand-pale border border-brand-light/40 text-brand-mid text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-brand-light rounded-full" />
            Sustainable Desiccant Technology
          </div>
          <h1 className="font-display font-black text-5xl md:text-6xl lg:text-7xl text-brand-dark leading-[1.05] tracking-tight mb-6">
            The <em className="not-italic italic text-brand-mid">greener</em> way to keep things dry.
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed mb-8">
            Ecosorb replaces silica gel with a biodegradable, non-toxic, locally sourced alternative — without sacrificing performance.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/science"
              className="inline-flex items-center gap-2 bg-brand-dark text-primary-foreground font-semibold px-7 py-3.5 rounded-lg shadow-soft hover:bg-brand-mid hover:-translate-y-0.5 transition-all"
            >
              See the science <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center bg-background border border-brand-dark text-brand-dark font-semibold px-7 py-3.5 rounded-lg hover:bg-brand-pale transition-colors"
            >
              Get in touch
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
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-brand-mid to-brand-dark flex flex-col items-center justify-center shadow-[0_12px_40px_rgba(26,74,46,0.35)] relative">
              <Leaf className="w-7 h-7 text-brand-glow mb-1" />
              <div className="font-display font-black text-primary-foreground text-base leading-none">Ecosorb</div>
            </div>
          </div>
          <div className="text-base font-bold mb-1">Ecosorb 70/30 Desiccant</div>
          <div className="text-sm text-muted-foreground mb-4">
            70% Diatomaceous Earth · 30% Activated Carbon · Kraft packaging
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

    <section className="max-w-[1200px] mx-auto px-6 lg:px-10 py-20 text-center">
      <div className="section-label">Explore</div>
      <h2 className="section-title">Learn more about Ecosorb.</h2>
      <div className="grid md:grid-cols-3 gap-4 mt-10 text-left">
        {[
          { to: "/about", title: "About Us", body: "The team and the story behind a binder-free biodegradable desiccant." },
          { to: "/science", title: "Science & Testing", body: "Our methodology, head-to-head test data, and independent validation." },
          { to: "/faq", title: "FAQ", body: "Honest answers about safety, sustainability, performance, and ordering." },
        ].map((c) => (
          <Link
            key={c.to}
            to={c.to}
            className="group bg-background border border-border rounded-xl p-6 hover:shadow-elegant hover:-translate-y-1 hover:border-brand-light transition-all"
          >
            <div className="font-display font-black text-xl text-brand-dark mb-2">{c.title}</div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">{c.body}</p>
            <span className="text-sm font-semibold text-brand-mid inline-flex items-center gap-1 group-hover:gap-2 transition-all">
              Read more <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  </PageShell>
);

export default Index;
