import { Link } from "react-router-dom";
import { PageHero, PageShell } from "@/components/layout/PageShell";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const groups = [
  {
    label: "Product",
    items: [
      {
        q: "What is Ecosorb made of?",
        a: "Diatomaceous earth and activated carbon — both biodegradable and food-safe. There are no binders, dyes, or synthetic additives.",
      },
      {
        q: "Is it safe if a child or pet eats one?",
        a: "Both ingredients are non-toxic and the sachet is food-safe. As with anything that isn't food, we don't recommend ingesting it — but unlike silica gel there's no warning label required.",
      },
      {
        q: "How long does a sachet last?",
        a: "Performance depends on humidity and container size. In a sealed 32 oz container at 50% RH, a 5g Ecosorb sachet remains effective for 6–8 weeks before needing replacement or regeneration.",
      },
      {
        q: "Can I reuse it?",
        a: "Yes — bake the granules at 120 °C for 60 minutes to drive off absorbed moisture. The Kraft pouch can be re-used 3–5 times before composting.",
      },
    ],
  },
  {
    label: "Performance",
    items: [
      {
        q: "Does Ecosorb really outperform silica gel?",
        a: "In our 9-hour controlled test, Ecosorb (Kraft-packaged) reached 11% moisture versus silica gel's 14.5%. Lower is better. Full methodology is on the Science & Testing page.",
      },
      {
        q: "What about odor absorption?",
        a: "The activated carbon component absorbs odors — something silica gel doesn't do. This is especially valuable in footwear, gym bags, and pantries.",
      },
      {
        q: "Why Kraft instead of Tyvek packaging?",
        a: "Kraft outperformed Tyvek by ~1.4 percentage points at the 9-hour mark in our tests, and it composts cleanly. Tyvek does not.",
      },
    ],
  },
  {
    label: "Sustainability",
    items: [
      {
        q: "Is the entire sachet biodegradable?",
        a: "Yes — both the granules and the Kraft pouch are compostable in a home or industrial compost setting. No microplastics, no leftover wrapper.",
      },
      {
        q: "Where are the materials sourced?",
        a: "Diatomaceous earth from Washington and Oregon mines. Activated carbon from agricultural-waste suppliers. Short supply chains, lower embedded carbon.",
      },
      {
        q: "How does this compare environmentally to silica gel?",
        a: "Silica gel production uses up to 40 kg of water per kg (wet method) or emits ~4.4 kg CO₂ per kg (dry method). Ecosorb's process avoids both.",
      },
    ],
  },
  {
    label: "Ordering",
    items: [
      {
        q: "Do you sell to consumers or only B2B?",
        a: "Currently B2B-focused (footwear, packaging, food brands). A consumer pack is on the roadmap. Use the inquiry form if you'd like an early sample.",
      },
      {
        q: "What's the minimum order quantity?",
        a: "5,000 sachets MOQ for stock SKUs. Custom sizes start at 25,000. Volume pricing scales meaningfully above that.",
      },
      {
        q: "How fast can you ship?",
        a: "Stock SKUs ship within 5 business days from the PNW. Custom orders typically lead-time 3–5 weeks.",
      },
    ],
  },
];

const FAQ = () => (
  <PageShell>
    <PageHero
      eyebrow="Frequently Asked Questions"
      title={<>Questions, <em className="not-italic italic text-brand-mid">honestly</em> answered.</>}
      lead="If you don't find what you're looking for here, send us a note via the inquiry form — we reply to every message."
    />

    <section className="max-w-[900px] mx-auto px-6 lg:px-10 py-20 space-y-14">
      {groups.map((group) => (
        <div key={group.label}>
          <div className="section-label">{group.label}</div>
          <h2 className="font-display font-black text-2xl md:text-3xl text-brand-dark mb-6">
            {group.label} questions
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            {group.items.map((item, i) => (
              <AccordionItem
                key={i}
                value={`${group.label}-${i}`}
                className="bg-background border border-border rounded-xl px-5 data-[state=open]:border-brand-light data-[state=open]:shadow-elegant"
              >
                <AccordionTrigger className="text-left text-base font-semibold hover:no-underline py-5">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      ))}
    </section>

    <section className="bg-brand-dark">
      <div className="max-w-[640px] mx-auto px-6 py-20 text-center">
        <div className="text-xs font-bold uppercase tracking-[1.5px] text-primary-foreground/45 mb-4">
          Still have questions?
        </div>
        <h2 className="font-display font-black text-3xl md:text-4xl text-primary-foreground leading-tight mb-4">
          Ask us <em className="not-italic italic text-brand-glow">anything</em>.
        </h2>
        <p className="text-primary-foreground/55 leading-relaxed mb-8">
          We answer every inquiry within two business days — no chatbot, no canned responses.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-brand-glow text-brand-dark font-bold px-8 py-3.5 rounded-lg hover:bg-brand-light transition-all hover:-translate-y-0.5"
        >
          Send an inquiry →
        </Link>
      </div>
    </section>
  </PageShell>
);

export default FAQ;
