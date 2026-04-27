import { PageHero, PageShell } from "@/components/layout/PageShell";
import { CheckCircle2, FlaskConical, LineChart, Microscope, Package } from "lucide-react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart as ReLineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const timelineData = [
  { time: "0h", ecosorb: 8.2, silica: 8.2 },
  { time: "0.5h", ecosorb: 9.6, silica: 11.4 },
  { time: "1h", ecosorb: 10.4, silica: 13.1 },
  { time: "2h", ecosorb: 11.1, silica: 14.6 },
  { time: "4h", ecosorb: 11.0, silica: 14.7 },
  { time: "9h", ecosorb: 11.0, silica: 14.5 },
  { time: "24h", ecosorb: 10.8, silica: 14.4 },
  { time: "72h", ecosorb: 10.6, silica: 14.3 },
];

const methodSteps = [
  {
    n: "01",
    title: "Sealed mason jar setup",
    body: "Each desiccant sample placed in identical 32 oz mason jars with a calibrated hygrometer and moisture meter probe.",
  },
  {
    n: "02",
    title: "Controlled humidity load",
    body: "Standardized water source introduced at t=0. Ambient temperature held at 22 °C ± 1 °C across all jars.",
  },
  {
    n: "03",
    title: "Time-series readings",
    body: "Moisture % logged at 30 min, 1h, 2h, 4h, 9h, 24h, and 72h. Lower reading = better-performing desiccant.",
  },
  {
    n: "04",
    title: "Independent review",
    body: "Methodology and results reviewed by Dr. Aruna Turaga, PhD analytical chemistry (Indian Institute of Science).",
  },
];

const headToHead = [
  { label: "Ecosorb 70/30 — Kraft", value: "11.0%", best: true },
  { label: "Ecosorb 70/30 — Tyvek", value: "12.4%" },
  { label: "Silica gel (control)", value: "14.5%" },
  { label: "Bentonite clay", value: "15.8%" },
];

const Science = () => (
  <PageShell>
    <PageHero
      eyebrow="Science & Testing"
      title={<>How we know Ecosorb <em className="not-italic italic text-brand-mid">actually works.</em></>}
      lead="Every claim on this site is backed by a controlled experiment, an independently reviewed methodology, and raw data we'll happily share."
    />

    <section className="max-w-[1200px] mx-auto px-6 lg:px-10 py-20">
      <div className="bg-brand-dark rounded-2xl p-8 md:p-12 grid md:grid-cols-[auto_1fr] gap-8 items-center mb-10">
        <div className="font-display font-black text-7xl md:text-8xl text-brand-glow leading-none">11%</div>
        <div>
          <div className="text-primary-foreground text-lg font-bold mb-2">
            Best moisture reading after 9 hours — Ecosorb (Kraft packaging)
          </div>
          <p className="text-primary-foreground/60 leading-relaxed">
            Outperformed silica gel, bentonite clay, and our own Tyvek-packaged variant in head-to-head testing.
            <span className="text-brand-glow"> Lower is better.</span>
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-background border border-border rounded-xl p-6">
          <div className="flex items-center gap-2 text-brand-mid font-semibold text-sm mb-4">
            <LineChart className="w-4 h-4" /> Head-to-head @ 9 hours
          </div>
          <ul className="space-y-3">
            {headToHead.map((row) => (
              <li
                key={row.label}
                className={
                  "flex items-center justify-between rounded-lg px-4 py-3 " +
                  (row.best ? "bg-brand-pale border border-brand-light/40" : "bg-muted")
                }
              >
                <span className={"text-sm " + (row.best ? "font-bold text-brand-dark" : "text-foreground")}>
                  {row.label}
                </span>
                <span className={"font-display font-black text-xl " + (row.best ? "text-brand-mid" : "text-foreground")}>
                  {row.value}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-background border border-border rounded-xl p-6 space-y-4">
          <div className="flex items-center gap-2 text-brand-mid font-semibold text-sm">
            <Microscope className="w-4 h-4" /> What we measured
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Three variables: <strong className="text-foreground">absorption rate</strong> (% moisture over time),{" "}
            <strong className="text-foreground">capacity</strong> (saturation point in grams of water per gram of desiccant),
            and <strong className="text-foreground">odor uptake</strong> (qualitative, three-evaluator panel).
          </p>
          <div className="bg-brand-pale border border-brand-light/40 rounded-lg p-3 text-sm font-semibold text-brand-mid">
            ✓ Ecosorb led on absorption rate at every time interval &gt; 2 hours
          </div>
          <div className="bg-brand-pale border border-brand-light/40 rounded-lg p-3 text-sm font-semibold text-brand-mid">
            ✓ Only desiccant in the test with measurable odor reduction
          </div>
        </div>
      </div>

      <div className="mt-10 bg-background border border-border rounded-2xl p-6 md:p-8 shadow-elegant">
        <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
          <h3 className="font-display font-black text-2xl text-brand-dark">
            Moisture vs. Time
          </h3>
          <div className="text-xs uppercase tracking-[1.5px] text-muted-foreground font-semibold">
            Sealed 32 oz mason jar · 22 °C
          </div>
        </div>
        <p className="text-sm text-muted-foreground mb-6 max-w-2xl">
          Internal moisture (% RH) recorded across an 72-hour test window. Lower values mean a drier
          container — Ecosorb separates from silica gel within the first hour and holds the gap.
        </p>
        <div className="h-[340px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <ReLineChart data={timelineData} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
              <CartesianGrid stroke="hsl(var(--border))" strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="time"
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickLine={false}
                axisLine={{ stroke: "hsl(var(--border))" }}
              />
              <YAxis
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickLine={false}
                axisLine={{ stroke: "hsl(var(--border))" }}
                domain={[7, 16]}
                tickFormatter={(v) => `${v}%`}
                label={{
                  value: "Moisture (% RH)",
                  angle: -90,
                  position: "insideLeft",
                  offset: 15,
                  style: { fill: "hsl(var(--muted-foreground))", fontSize: 12 },
                }}
              />
              <Tooltip
                contentStyle={{
                  background: "hsl(var(--background))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: 8,
                  fontSize: 12,
                }}
                formatter={(value: number, name: string) => [
                  `${value}%`,
                  name === "ecosorb" ? "Ecosorb (Kraft)" : "Silica gel",
                ]}
                labelFormatter={(label) => `Elapsed: ${label}`}
              />
              <Legend
                wrapperStyle={{ fontSize: 12, paddingTop: 8 }}
                formatter={(value) =>
                  value === "ecosorb" ? "Ecosorb (Kraft)" : "Silica gel (control)"
                }
              />
              <Line
                type="monotone"
                dataKey="ecosorb"
                stroke="hsl(var(--green-mid))"
                strokeWidth={3}
                dot={{ r: 4, fill: "hsl(var(--green-mid))" }}
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="silica"
                stroke="hsl(var(--muted-foreground))"
                strokeWidth={2}
                strokeDasharray="6 4"
                dot={{ r: 3, fill: "hsl(var(--muted-foreground))" }}
              />
            </ReLineChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 grid sm:grid-cols-2 gap-3 text-xs text-muted-foreground">
          <div className="bg-brand-pale/60 border border-brand-light/40 rounded-lg px-3 py-2 text-brand-dark">
            <strong className="text-brand-mid">@ 2h:</strong> Ecosorb 11.1% vs. silica 14.6% — a 3.5 pt gap.
          </div>
          <div className="bg-muted border border-border rounded-lg px-3 py-2">
            Triplicate jars per condition. Readings averaged. Raw datasets available on request.
          </div>
        </div>
      </div>
    </section>

    <section className="bg-muted border-y border-border">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-20">
        <div className="section-label">Methodology</div>
        <h2 className="section-title">A four-step protocol — repeatable in any lab.</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {methodSteps.map((s) => (
            <div key={s.n} className="bg-background border border-border rounded-xl p-6">
              <div className="font-display font-black text-3xl text-brand-light mb-2">{s.n}</div>
              <h3 className="font-sans font-bold text-base mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="max-w-[1200px] mx-auto px-6 lg:px-10 py-20 grid md:grid-cols-2 gap-10 items-start">
      <div>
        <div className="section-label">Materials</div>
        <h2 className="section-title">A two-ingredient blend, no binder.</h2>
        <p className="section-lead">
          Iterating away from cow dung, chitosan, and cellulose binders led us to a granular, binder-free format —
          simpler to produce and fully compostable at end of life.
        </p>
        <div className="space-y-3">
          {[
            { pct: "70%", name: "Diatomaceous Earth", body: "Fossil-derived, food-safe. Low-impact PNW mining." },
            { pct: "30%", name: "Activated Carbon", body: "Made from agricultural waste with minimal water use." },
            { pct: "0%", name: "Binders / additives", body: "Pure granules. Nothing else needs to break down." },
          ].map((i) => (
            <div key={i.name} className="flex gap-4 bg-background border border-border rounded-xl p-5">
              <div className="font-display font-black text-3xl text-brand-dark w-20 shrink-0">{i.pct}</div>
              <div>
                <div className="font-bold">{i.name}</div>
                <div className="text-sm text-muted-foreground">{i.body}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-brand-dark rounded-2xl p-8 text-primary-foreground">
        <div className="flex items-center gap-2 text-brand-glow text-sm font-semibold mb-4">
          <FlaskConical className="w-4 h-4" /> Independent validation
        </div>
        <p className="text-lg leading-relaxed mb-6">
          "The methodology is sound, the controls appropriate, and the conclusions supported by the data."
        </p>
        <div className="text-sm text-primary-foreground/60">
          — Dr. Aruna Turaga, PhD Analytical Chemistry, IISc<br />
          Six years managing an analytical lab in Seattle
        </div>
        <div className="border-t border-white/10 mt-6 pt-6 space-y-2 text-sm">
          {[
            "Calibrated instruments (hygrometer ±1%, moisture probe ±0.5%)",
            "Triplicate jars per condition",
            "Blind labelling of samples",
            "Raw datasets available on request",
          ].map((item) => (
            <div key={item} className="flex items-start gap-2 text-primary-foreground/85">
              <CheckCircle2 className="w-4 h-4 text-brand-glow mt-0.5 shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-brand-tint border-t border-border">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-16 grid md:grid-cols-[1fr_auto] gap-6 items-center">
        <div>
          <div className="section-label">Packaging matters too</div>
          <h3 className="font-display font-black text-2xl md:text-3xl text-brand-dark mb-2">
            Kraft beat Tyvek by 1.4 percentage points at 9 hours.
          </h3>
          <p className="text-muted-foreground">
            Material selection is as important as the desiccant blend itself. Kraft is now our production standard.
          </p>
        </div>
        <div className="bg-background border border-border rounded-xl p-6 flex items-center gap-3">
          <Package className="w-8 h-8 text-brand-mid" />
          <div>
            <div className="font-bold">Kraft paper</div>
            <div className="text-xs text-muted-foreground">Production standard</div>
          </div>
        </div>
      </div>
    </section>
  </PageShell>
);

export default Science;