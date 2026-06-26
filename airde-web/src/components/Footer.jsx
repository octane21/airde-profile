import { Link } from "react-router-dom";

const FOOTER_COLUMNS = [
  {
    title: "Solutions",
    links: [
      { label: "Asset Intelligence", to: "/solutions/asset-intelligence" },
      { label: "Reliability Intelligence", to: "/solutions/reliability-intelligence" },
      { label: "Risk Intelligence", to: "/solutions/risk-intelligence" },
      { label: "Digital Engineering", to: "/solutions/digital-engineering" },
      { label: "AI Decision Support", to: "/solutions/ai-decision-support" },
      { label: "AIRDE Academy", to: "/solutions/academy" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Oil & Gas", to: "/industries/oil-gas" },
      { label: "Ports & Maritime", to: "/industries/ports-maritime" },
      { label: "Power & Utilities", to: "/industries/power-utilities" },
      { label: "Manufacturing", to: "/industries/manufacturing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About AIRDE", to: "/about" },
      { label: "Platform", to: "/platform" },
      { label: "Resources", to: "/resources" },
      { label: "Contact Us", to: "/about#contact-us" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-white/10 py-20">
      <div className="max-w-7xl mx-auto px-container-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 space-y-6">
            <span className="font-display-lg text-2xl font-bold text-on-surface">AIRDE</span>
            <p className="text-on-surface-variant leading-relaxed text-body-md">
              Intelligence Layer untuk aset industri misi-kritis. Precision Engineering meets Predictive AI.
            </p>
          </div>
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title} className="space-y-6">
              <h4 className="font-bold text-on-surface uppercase tracking-widest text-sm">{col.title}</h4>
              <ul className="space-y-4 text-on-surface-variant text-body-md">
                {col.links.map((link) => (
                  <li key={link.to}>
                    <Link className="hover:text-primary transition-colors" to={link.to}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-8 border-t border-white/10 text-center text-sm text-on-surface-variant">
          <p>© 2026 AIRDE. Precision Engineering meets Predictive AI.</p>
        </div>
      </div>
    </footer>
  );
}
