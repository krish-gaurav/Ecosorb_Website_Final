import { PageHero, PageShell } from "@/components/layout/PageShell";
import { Sprout, Leaf, Beaker, Recycle } from "lucide-react";

const values = [
  {
    icon: Sprout,
    title: "Locally sourced",
    body: "Diatomaceous earth from Washington and Oregon — short supply chains, low embedded carbon.",
  },
  {
    icon: Beaker,
    title: "Lab-validated",
    body: "Every formulation iteration is reviewed by credentialed analytical chemists before scale-up.",
  },
  {
    icon: Recycle,
    title: "Compostable end-of-life",
    body: "Binder-free granules and Kraft packaging mean the entire sachet returns to the soil.",
  },
  {
    icon: Leaf,
    title: "No greenwashing",
    body: "We publish our test methods, materials, and trade-offs — so customers can verify everything.",
  },
];

const team = [
  { initials: "E", name: "Eshu", role: "Co-founder" },
  { initials: "A", name: "Akash", role: "Co-founder" },
  { initials: "R", name: "Rian", role: "Co-founder" },
  { initials: "S", name: "Sohum", role: "Co-founder" },
  { initials: "A", name: "Anika", role: "Co-founder" },
  { initials: "K", name: "Krish", role: "Co-founder" },
];

const About = () => (
  <PageShell>
    <PageHero
      eyebrow="About Us"
      title={<>Building the <em className="not-italic italic text-brand-mid">greener</em> default for keeping things dry.</>}
      lead="Ecosorb began as a chemistry classroom experiment and grew into a working biodegradable desiccant — designed to replace the silica gel sachet in every shoe box, electronics package, and pantry jar."
    />

    <section className="max-w-[1200px] mx-auto px-6 lg:px-10 py-20 grid md:grid-cols-2 gap-12 items-start">
      <div>
        <div className="section-label">Our story</div>
        <h2 className="section-title">A small team with a <em>big</em> grievance.</h2>
        <div className="space-y-4 text-muted-foreground leading-[1.8]">
          <p>
            We kept opening packages and finding a tiny "DO NOT EAT" pouch destined for the trash. Globally that habit
            generates <strong className="text-foreground">200,000 tons of silica gel waste every year</strong> — a material
            whose production is either water-intensive or energy-intensive and toxic.
          </p>
          <p>
            We tried cow dung, chitosan, cellulose binders. Most failed. The one that didn't was elegantly simple:
            <strong className="text-foreground"> 70% diatomaceous earth and 30% activated carbon</strong>, with no binder
            and Kraft-paper packaging. It outperforms silica gel and composts cleanly.
          </p>
          <p>
            Ecosorb is the result of dozens of mason-jar experiments, a stack of hygrometer readings, and one stubborn
            belief: sustainability shouldn't cost performance.
          </p>
        </div>
      </div>

      <div className="bg-brand-tint border border-border rounded-2xl p-8 shadow-elegant">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-background border border-border rounded-xl p-5">
            <div className="text-xs font-bold uppercase tracking-wide text-brand-mid mb-1">Founded</div>
            <div className="font-display font-black text-3xl text-brand-dark">2024</div>
          </div>
          <div className="bg-background border border-border rounded-xl p-5">
            <div className="text-xs font-bold uppercase tracking-wide text-brand-mid mb-1">Based in</div>
            <div className="font-display font-black text-3xl text-brand-dark">PNW</div>
          </div>
          <div className="bg-background border border-border rounded-xl p-5">
            <div className="text-xs font-bold uppercase tracking-wide text-brand-mid mb-1">Formulations tested</div>
            <div className="font-display font-black text-3xl text-brand-dark">12+</div>
          </div>
          <div className="bg-background border border-border rounded-xl p-5">
            <div className="text-xs font-bold uppercase tracking-wide text-brand-mid mb-1">Lab hours</div>
            <div className="font-display font-black text-3xl text-brand-dark">400+</div>
          </div>
        </div>
        <blockquote className="mt-6 border-l-4 border-brand-light bg-background rounded-r-lg p-4 italic text-sm text-muted-foreground">
          "The concern about the environmental cost of silica gel production is real and validated at a professional level."
          <cite className="block not-italic font-semibold text-brand-mid mt-2 text-xs">
            — Macy Zwanzig, AP Environmental Science Teacher
          </cite>
        </blockquote>
      </div>
    </section>

    <section className="bg-muted border-y border-border">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-20">
        <div className="section-label">What we stand for</div>
        <h2 className="section-title">Four principles, no compromises.</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {values.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="bg-background border border-border rounded-xl p-6 hover:shadow-elegant hover:-translate-y-0.5 transition-all"
            >
              <div className="w-11 h-11 rounded-lg bg-brand-pale flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-brand-mid" />
              </div>
              <h3 className="font-sans font-bold text-base text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="max-w-[1200px] mx-auto px-6 lg:px-10 py-20">
      <div className="section-label">The Team</div>
      <h2 className="section-title">Chemists, builders, and one teacher.</h2>
      <p className="section-lead">
        A small interdisciplinary team backed by external chemistry and sustainability advisors.
      </p>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mt-6">
        {team.map((m) => (
          <div key={m.initials} className="text-center">
            <div className="w-18 h-18 mx-auto rounded-full bg-brand-pale border-2 border-border flex items-center justify-center font-display font-black text-xl text-brand-dark aspect-square">
              {m.initials}
            </div>
            <div className="mt-3 text-sm font-semibold">{m.name}</div>
            <div className="text-xs text-muted-foreground">{m.role}</div>
          </div>
        ))}
      </div>
    </section>
  </PageShell>
);

export default About;