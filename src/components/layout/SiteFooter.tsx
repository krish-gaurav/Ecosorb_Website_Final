import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";

export const SiteFooter = () => {
  return (
    <footer className="bg-[#0e2818] text-white/40">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-12 grid gap-8 md:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2 font-display font-black text-xl text-white">
            <span className="w-8 h-8 rounded-lg bg-brand-mid flex items-center justify-center">
              <Leaf className="w-4 h-4 text-brand-glow" />
            </span>
            Ecosorb
          </Link>
          <p className="mt-4 text-sm text-white/45 leading-relaxed">
            Biodegradable desiccant technology — locally sourced from the Pacific Northwest.
          </p>
        </div>
        <div>
          <h4 className="text-white text-sm font-semibold mb-3 font-sans">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-brand-glow">About Us</Link></li>
            <li><Link to="/science" className="hover:text-brand-glow">Science & Testing</Link></li>
            <li><Link to="/faq" className="hover:text-brand-glow">FAQ</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white text-sm font-semibold mb-3 font-sans">Get in touch</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/contact" className="hover:text-brand-glow">Contact / Inquiry</Link></li>
            <li><a href="mailto:hello@ecosorb.eco" className="hover:text-brand-glow">hello@ecosorb.eco</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white text-sm font-semibold mb-3 font-sans">Made for the planet</h4>
          <p className="text-sm text-white/45">
            <span className="text-brand-glow">●</span> Biodegradable &nbsp;
            <span className="text-brand-glow">●</span> Non-toxic &nbsp;
            <span className="text-brand-glow">●</span> PNW sourced
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 text-center text-xs py-4 text-white/35">
        © {new Date().getFullYear()} <span className="text-brand-glow">Ecosorb</span>. All rights reserved.
      </div>
    </footer>
  );
};