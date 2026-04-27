import { NavLink, Link } from "react-router-dom";
import { Leaf, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/product", label: "Product" },
  { to: "/about", label: "About Us" },
  { to: "/science", label: "Science & Testing" },
  { to: "/faq", label: "FAQ" },
];

export const SiteNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="bg-brand-dark text-primary-foreground/85 text-center text-xs font-medium py-2 px-4 tracking-wide">
        <strong className="text-brand-glow">New:</strong> Ecosorb outperforms silica gel in independent lab testing —{" "}
        <strong className="text-brand-glow">11% moisture at 9 hours</strong> vs. 14.5% for silica gel.
      </div>
      <nav className="flex items-center justify-between px-6 lg:px-10 h-16 max-w-[1400px] mx-auto">
        <Link to="/" className="flex items-center gap-2 font-display font-black text-xl text-brand-dark">
          <span className="w-8 h-8 rounded-lg bg-brand-dark flex items-center justify-center">
            <Leaf className="w-4 h-4 text-brand-glow" />
          </span>
          Ecosorb
        </Link>
        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "text-sm font-medium px-3.5 py-2 rounded-md transition-colors",
                    isActive
                      ? "text-brand-dark bg-brand-tint"
                      : "text-muted-foreground hover:text-brand-dark hover:bg-brand-tint"
                  )
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden sm:inline-flex bg-brand-dark text-primary-foreground text-sm font-semibold px-5 py-2 rounded-lg hover:bg-brand-mid transition-all hover:-translate-y-0.5"
          >
            Contact Us →
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-md text-brand-dark"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="md:hidden border-t border-border bg-background px-6 py-3 flex flex-col gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                cn(
                  "px-3 py-2 rounded-md text-sm font-medium",
                  isActive ? "bg-brand-tint text-brand-dark" : "text-muted-foreground"
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 bg-brand-dark text-primary-foreground text-sm font-semibold px-4 py-2 rounded-lg text-center"
          >
            Contact Us →
          </Link>
        </div>
      )}
    </header>
  );
};