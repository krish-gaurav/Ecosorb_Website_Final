import { useState } from "react";
import { z } from "zod";
import { PageHero, PageShell } from "@/components/layout/PageShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { Mail, MapPin, MessageSquare, Building2 } from "lucide-react";

const inquirySchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  company: z.string().trim().max(100).optional(),
  inquiryType: z.enum(["sample", "wholesale", "press", "partnership", "other"]),
  volume: z.string().max(50).optional(),
  message: z.string().trim().min(10, "Please share a few details (10+ chars)").max(1500),
});

const inquiryTypes = [
  { value: "sample", label: "Request a sample" },
  { value: "wholesale", label: "Wholesale / bulk order" },
  { value: "partnership", label: "Brand partnership" },
  { value: "press", label: "Press / media" },
  { value: "other", label: "Something else" },
];

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    inquiryType: "sample",
    volume: "",
    message: "",
  });

  const update = (k: keyof typeof form, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: "" }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = inquirySchema.safeParse(form);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      parsed.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[String(err.path[0])] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setSubmitting(true);
    // Simulated send — replace with backend integration later
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    toast({
      title: "Inquiry received",
      description: "Thanks — we'll reply within 1–2 business days.",
    });
    setForm({
      name: "",
      email: "",
      company: "",
      inquiryType: "sample",
      volume: "",
      message: "",
    });
  };

  return (
    <PageShell>
      <PageHero
        eyebrow="Contact / Inquiry"
        title={<>Let's <em className="not-italic italic text-brand-mid">talk</em>.</>}
        lead="Samples, bulk pricing, partnerships, or just curious questions — we read every message and reply within two business days."
      />

      <section className="max-w-[1200px] mx-auto px-6 lg:px-10 py-20 grid lg:grid-cols-[1fr_360px] gap-10">
        <form
          onSubmit={onSubmit}
          className="bg-background border border-border rounded-2xl p-8 md:p-10 shadow-elegant space-y-6"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                maxLength={100}
                placeholder="Jane Doe"
                aria-invalid={!!errors.name}
              />
              {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                maxLength={255}
                placeholder="jane@example.com"
                aria-invalid={!!errors.email}
              />
              {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="company">Company (optional)</Label>
              <Input
                id="company"
                value={form.company}
                onChange={(e) => update("company", e.target.value)}
                maxLength={100}
                placeholder="Acme Footwear"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="inquiryType">Inquiry type *</Label>
              <Select value={form.inquiryType} onValueChange={(v) => update("inquiryType", v)}>
                <SelectTrigger id="inquiryType">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {inquiryTypes.map((t) => (
                    <SelectItem key={t.value} value={t.value}>
                      {t.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="volume">Estimated volume (optional)</Label>
            <Input
              id="volume"
              value={form.volume}
              onChange={(e) => update("volume", e.target.value)}
              maxLength={50}
              placeholder="e.g. 10,000 sachets / month"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              maxLength={1500}
              placeholder="Tell us what you're trying to keep dry, your timeline, and anything else useful…"
              rows={6}
              aria-invalid={!!errors.message}
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{errors.message && <span className="text-destructive">{errors.message}</span>}</span>
              <span>{form.message.length} / 1500</span>
            </div>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-3 pt-2">
            <p className="text-xs text-muted-foreground max-w-sm">
              We only use your details to respond to this inquiry. No marketing list, no resale.
            </p>
            <Button
              type="submit"
              disabled={submitting}
              className="bg-brand-dark hover:bg-brand-mid text-primary-foreground font-semibold px-6 py-3 rounded-lg shadow-soft"
            >
              {submitting ? "Sending…" : "Send inquiry →"}
            </Button>
          </div>
        </form>

        <aside className="space-y-4">
          {[
            {
              icon: Mail,
              title: "Email us directly",
              body: "ecosorb.gel@gamil.com",
              href: "mailto:ecosorb.gel@gmail.com",
            },
            {
              icon: Building2,
              title: "Wholesale & bulk",
              body: "MOQ 5,000 sachets. Pricing scales meaningfully past 25k.",
            },
            {
              icon: MessageSquare,
              title: "Press inquiries",
              body: "Press kit, founder photos, and lab data available on request.",
            },
            {
              icon: MapPin,
              title: "Where we are",
              body: "Pacific Northwest, USA — sourcing, formulating, and shipping.",
            },
          ].map(({ icon: Icon, title, body, href }) => (
            <div key={title} className="bg-muted border border-border rounded-xl p-5">
              <div className="flex items-center gap-2 text-brand-mid font-semibold text-sm mb-1">
                <Icon className="w-4 h-4" /> {title}
              </div>
              {href ? (
                <a href={href} className="text-sm text-foreground hover:text-brand-mid">
                  {body}
                </a>
              ) : (
                <p className="text-sm text-muted-foreground">{body}</p>
              )}
            </div>
          ))}
        </aside>
      </section>
    </PageShell>
  );
};

export default Contact;
