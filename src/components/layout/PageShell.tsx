import { ReactNode } from "react";
import { SiteNav } from "./SiteNav";
import { SiteFooter } from "./SiteFooter";

interface PageShellProps {
  children: ReactNode;
}

export const PageShell = ({ children }: PageShellProps) => (
  <div className="min-h-screen flex flex-col bg-background">
    <SiteNav />
    <main className="flex-1">{children}</main>
    <SiteFooter />
  </div>
);

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
}

export const PageHero = ({ eyebrow, title, lead }: PageHeroProps) => (
  <section className="bg-brand-tint border-b border-border">
    <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-20 md:py-28">
      <div className="section-label">{eyebrow}</div>
      <h1 className="font-display font-black text-4xl md:text-6xl text-brand-dark leading-[1.05] tracking-tight max-w-3xl">
        {title}
      </h1>
      {lead && (
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">{lead}</p>
      )}
    </div>
  </section>
);