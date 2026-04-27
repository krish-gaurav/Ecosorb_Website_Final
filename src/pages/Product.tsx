import { Link } from "react-router-dom";
import { PageHero, PageShell } from "@/components/layout/PageShell";
import { Footprints, Package, UtensilsCrossed, Check, X, AlertTriangle, ArrowRight, Info } from "lucide-react";

const useCases = [
  { icon: Footprints, title: "Shoe Packaging", body: "Keeps footwear dry and odor-free in retail boxes and storage." },
  { icon: Package, title: "Retail Packaging", body: "Protects electronics, leather goods, and apparel during shipping." },
  { icon: UtensilsCrossed, title: "Food Storage", body: "Future target — food-safe formulations for pantry and dry goods." },
];

type Status = "yes" | "no" | "warn";
type Row = {
  feature: string;
  ecoStatus: Status;
  ecoValue: string;
  silicaStatus: Status;
  silicaValue: string;
  note?: number;
};

const comparison: Row[] = [
  {
    feature: "Moisture absorption (9 h)",
    ecoStatus: "yes",
    ecoValue: "11.0% RH — best in test",
    silicaStatus: "warn",
    silicaValue: "14.5% RH",
    note: 1,
  },
  {
    feature: "Moisture absorption (2 h)",
    ecoStatus: "yes",
    ecoValue: "11.1% RH",
    silicaStatus: "warn",
    silicaValue: "14.6% RH",
    note: 1,
  },
  {
    feature: "Odor control",
    ecoStatus: "yes",
    ecoValue: "Measurable reduction (3-evaluator panel)",
    silicaStatus: "no",
    silicaValue: "None — silica is odor-inert",
    note: 2,
  },
  {
    feature: "Biodegradable / compostable",
    ecoStatus: "yes",
    ecoValue: "Granules + Kraft pouch fully compostable",
    silicaStatus: "no",
    silicaValue: "Non-biodegradable, landfill-bound",
  },
  {
    feature: "Non-toxic / food-safe",
    ecoStatus: "yes",
    ecoValue: "Food-safe ingredients, no warning label",
    silicaStatus: "warn",
    silicaValue: '"Do not eat" labelled, choking hazard',
  },
  {
    feature: "Production water use",
    ecoStatus: "yes",
    ecoValue: "Low — dry granular process",
    silicaStatus: "no",
    silicaValue: "Up to 40 kg water per kg produced",
    note: 3,
  },
  {
    feature: "Production CO₂ footprint",
    ecoStatus: "yes",
    ecoValue: "Minimal — no high-temp synthesis",
    silicaStatus: "no",
    silicaValue: "~4.4 kg CO₂ per kg (dry method)",
    note: 3,
  },
  {
    feature: "Sourcing",
    ecoStatus: "yes",
    ecoValue: "Pacific Northwest (USA), short supply chain",
    silicaStatus: "warn",
    silicaValue: "Predominantly imported from Asia",
  },
];

const footnotes = [
  "Moisture readings from sealed 32 oz mason-jar test, 22 °C ± 1 °C, standardized water load at t = 0, triplicate jars. Lower % is better. Full methodology on the Science & Testing page.",
  "Odor uptake assessed qualitatively by a three-evaluator blind panel; not a quantified ppm measurement.",
  "Silica gel production figures sourced from published lifecycle analyses of the wet (sodium silicate) and dry (precipitated silica) manufacturing routes. Ranges vary by facility.",
];

const Cell = ({ kind }: { kind: Status }) => {
  if (kind === "yes")
    return (
      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-brand-pale text-brand-mid">
        <Check className="w-4 h-4" />
      </span>
    );
  if (kind === "warn")
    return (
      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-muted text-muted-foreground">
        <AlertTriangle className="w-4 h-4" />
      </span>
    );
  return (
    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-muted text-muted-foreground">
      <X className="w-4 h-4" />
    </span>
  );
};

const Product = () => (
  <PageShell>
    <PageHero
      eyebrow="The Product"
      title={<>The <em className="not-italic italic text-brand-mid">Ecosorb</em> Packet.</>}
      lead="Ecosorb packets provide moisture and odor protection for packaging applications such as footwear, retail goods, and storage containers — without leaving silica gel waste behind."
    />

    <section className="max-w-[1200px] mx-auto px-6 lg:px-10 py-20 grid lg:grid-cols-2 gap-12 items-start">
      <div>
        <div className="section-label">Materials</div>
        <h2 className="section-title">A two-ingredient <em>formula</em>.</h2>
        <p className="section-lead">
          No binders, no plastics, no synthetic additives. Just two abundant, naturally-derived materials in a Kraft paper sachet.
        </p>

        <div className="space-y-4">
          <div className="bg-background border border-border rounded-xl p-6 shadow-elegant">
            <div className="flex items-baseline justify-between mb-3">
              <h3 className="font-display font-black text-xl text-brand-dark">Diatomaceous Earth</h3>
              <span className="font-display font-black text-3xl text-brand-mid">70%</span>
            </div>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li className="flex gap-2"><span className="text-brand-light">✓</span> Biodegradable, returns cleanly to soil</li>
              <li className="flex gap-2"><span className="text-brand-light">✓</span> Highly absorbent micro-porous structure</li>
              <li className="flex gap-2"><span className="text-brand-light">✓</span> Abundant — sourced from Washington & Oregon</li>
            </ul>
          </div>
          <div className="bg-background border border-border rounded-xl p-6 shadow-elegant">
            <div className="flex items-baseline justify-between mb-3">
              <h3 className="font-display font-black text-xl text-brand-dark">Activated Carbon</h3>
              <span className="font-display font-black text-3xl text-brand-mid">30%</span>
            </div>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li className="flex gap-2"><span className="text-brand-light">✓</span> Traps odor molecules at the source</li>
              <li className="flex gap-2"><span className="text-brand-light">✓</span> Made from agricultural waste streams</li>
              <li className="flex gap-2"><span className="text-brand-light">✓</span> Non-toxic and food-adjacent safe</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-brand-tint border border-border rounded-2xl p-10 shadow-elegant lg:sticky lg:top-32">
        <div className="bg-background border border-border rounded-xl h-72 flex items-center justify-center mb-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_30%,hsl(var(--green-light)/0.18),transparent_60%)]" />
          <div className="w-44 h-56 rounded-lg bg-gradient-to-br from-brand-mid to-brand-dark flex flex-col items-center justify-center shadow-[0_16px_50px_rgba(26,74,46,0.35)] relative p-6 text-center">
            <div className="text-[10px] uppercase tracking-[2px] text-brand-glow mb-2">Do Compost</div>
            <div className="font-display font-black text-primary-foreground text-2xl leading-none mb-3">Ecosorb</div>
            <div className="text-[10px] text-primary-foreground/70">70 / 30 · Kraft</div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="bg-background border border-border rounded-lg p-3">
            <div className="font-display font-black text-brand-dark">3g</div>
            <div className="text-[10px] text-muted-foreground uppercase tracking-wide">Sachet</div>
          </div>
          <div className="bg-background border border-border rounded-lg p-3">
            <div className="font-display font-black text-brand-dark">11%</div>
            <div className="text-[10px] text-muted-foreground uppercase tracking-wide">RH @ 9h</div>
          </div>
          <div className="bg-background border border-border rounded-lg p-3">
            <div className="font-display font-black text-brand-dark">100%</div>
            <div className="text-[10px] text-muted-foreground uppercase tracking-wide">Compost</div>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-muted border-y border-border">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-20">
        <div className="section-label">Use Cases</div>
        <h2 className="section-title">Where Ecosorb fits.</h2>
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          {useCases.map(({ icon: Icon, title, body }) => (
            <div key={title} className="bg-background border border-border rounded-xl p-6 hover:shadow-elegant hover:-translate-y-0.5 transition-all">
              <div className="w-12 h-12 rounded-lg bg-brand-pale flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-brand-mid" />
              </div>
              <h3 className="font-display font-black text-lg text-brand-dark mb-1">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="max-w-[1200px] mx-auto px-6 lg:px-10 py-20">
      <div className="section-label">Comparison</div>
      <h2 className="section-title">Ecosorb vs. <em>silica gel</em>.</h2>
      <p className="section-lead">Same job. Better materials. Lower environmental cost.</p>

      <div className="overflow-x-auto bg-background border border-border rounded-2xl shadow-elegant">
        <table className="w-full text-left">
          <thead className="bg-brand-tint border-b border-border">
            <tr>
              <th className="py-4 px-6 text-sm font-bold text-brand-dark uppercase tracking-wide">Feature</th>
              <th className="py-4 px-6 text-sm font-bold text-brand-dark uppercase tracking-wide text-center">Ecosorb</th>
              <th className="py-4 px-6 text-sm font-bold text-muted-foreground uppercase tracking-wide text-center">Silica Gel</th>
            </tr>
          </thead>
          <tbody>
            {comparison.map((row, i) => (
              <tr key={row.feature} className={i !== comparison.length - 1 ? "border-b border-border" : ""}>
                <td className="py-4 px-6 text-sm font-medium text-foreground">{row.feature}</td>
                <td className="py-4 px-6 text-center"><Cell kind={row.eco} /></td>
                <td className="py-4 px-6 text-center"><Cell kind={row.silica} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          to="/science"
          className="inline-flex items-center gap-2 bg-brand-dark text-primary-foreground font-semibold px-7 py-3.5 rounded-lg shadow-soft hover:bg-brand-mid hover:-translate-y-0.5 transition-all"
        >
          See full test data <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          to="/contact"
          className="inline-flex items-center bg-background border border-brand-dark text-brand-dark font-semibold px-7 py-3.5 rounded-lg hover:bg-brand-pale transition-colors"
        >
          Request a sample
        </Link>
      </div>
    </section>
  </PageShell>
);

export default Product;