import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { logoAirde, logoAirdeExplained } from "../assets/images";
import { useAuth } from "../context/AuthContext";
import AdminLoginModal from "./AdminLoginModal";

const NAV_LINKS = [
  { label: "Home", to: "/", end: true },
  {
    label: "Solutions",
    to: "/solutions",
    children: [
      { label: "Overview", to: "/solutions" },
      { label: "Asset Intelligence", to: "/solutions/asset-intelligence" },
      { label: "Reliability Intelligence", to: "/solutions/reliability-intelligence" },
      { label: "Risk Intelligence", to: "/solutions/risk-intelligence" },
      { label: "Digital Engineering", to: "/solutions/digital-engineering" },
      { label: "AI Decision Support", to: "/solutions/ai-decision-support" },
      { label: "Consultation", to: "/solutions/consultation" },
      { label: "AIRDE Academy", to: "/academy" },
    ],
  },
  { label: "Platform", to: "/platform" },
  {
    label: "Industries",
    to: "/industries",
    children: [
      { label: "Overview", to: "/industries" },
      { label: "Oil & Gas", to: "/industries/oil-gas" },
      { label: "Ports & Maritime", to: "/industries/ports-maritime" },
      { label: "Power & Utilities", to: "/industries/power-utilities" },
      { label: "Manufacturing", to: "/industries/manufacturing" },
    ],
  },
  { label: "Resources", to: "/resources" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "About", to: "/about" },
];

function navLinkClass({ isActive }) {
  const base = "outline-none focus:outline-none pb-1 font-medium transition-colors";
  return isActive
    ? `text-primary border-b-2 border-primary ${base}`
    : `text-on-surface-variant hover:text-primary ${base}`;
}

function dropdownLinkClass({ isActive }) {
  const base = "block px-4 py-2.5 text-sm outline-none focus:outline-none transition-colors";
  return isActive
    ? `text-primary bg-surface-container-high ${base}`
    : `text-on-surface-variant hover:text-primary hover:bg-surface-container-high ${base}`;
}

function dropdownTriggerClass({ isActive }) {
  const base = "flex items-center gap-1 pb-1 font-medium transition-colors outline-none focus:outline-none focus-visible:outline-none";
  return isActive
    ? `text-primary border-b-2 border-primary ${base}`
    : `text-on-surface-variant hover:text-primary ${base}`;
}

function DesktopNavItem({ link }) {
  if (!link.children) {
    return (
      <NavLink to={link.to} end={link.end} className={navLinkClass}>
        {link.label}
      </NavLink>
    );
  }

  return (
    <div className="group relative">
      <NavLink to={link.to} className={dropdownTriggerClass}>
        {link.label}
        <span className="material-symbols-outlined text-base transition-transform group-hover:rotate-180">
          expand_more
        </span>
      </NavLink>
      <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-3 opacity-0 transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <div className="w-64 overflow-hidden rounded-xl border border-outline-variant/30 bg-surface-container shadow-2xl">
          {link.children.map((child) => (
            <NavLink key={child.to} to={child.to} end className={dropdownLinkClass}>
              {child.label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileNavItem({ link, onNavigate, openSection, setOpenSection }) {
  if (!link.children) {
    return (
      <NavLink to={link.to} end={link.end} className={navLinkClass} onClick={onNavigate}>
        {link.label}
      </NavLink>
    );
  }

  const isOpen = openSection === link.label;

  return (
    <div>
      <div className="flex items-center justify-between">
        <NavLink to={link.to} end={link.end} className={navLinkClass} onClick={onNavigate}>
          {link.label}
        </NavLink>
        <button
          type="button"
          aria-label={`Toggle ${link.label} submenu`}
          onClick={() => setOpenSection(isOpen ? null : link.label)}
          className="p-2 text-on-surface-variant"
        >
          <span className={`material-symbols-outlined transition-transform ${isOpen ? "rotate-180" : ""}`}>
            expand_more
          </span>
        </button>
      </div>
      {isOpen && (
        <div className="mt-2 flex flex-col gap-3 border-l border-outline-variant/30 pl-4">
          {link.children.map((child) => (
            <NavLink
              key={child.to}
              to={child.to}
              end
              className="text-sm text-on-surface-variant hover:text-primary transition-colors"
              onClick={onNavigate}
            >
              {child.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const { isAdmin, loading: authLoading, logout } = useAuth();

  const closeMobile = () => {
    setMobileOpen(false);
    setOpenMobileSection(null);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-lg border-b border-white/5">
      <div className="flex justify-between items-center px-container-padding py-4 max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-0" onClick={closeMobile}>
          <img alt="AIRDE Logo" className="h-12 brightness-125" src={logoAirde} />
          <span className="flex flex-col leading-tight">
            <span className="font-display-lg text-xl font-bold text-on-surface tracking-tight">IRDE</span>
            <span className="text-[10px] font-label-sm text-on-surface-variant tracking-widest uppercase whitespace-nowrap">
              Asset Intelligence &amp; <br />Decision Platform
            </span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-8 font-medium">
          {NAV_LINKS.map((link) => (
            <DesktopNavItem key={link.to} link={link} />
          ))}
          {!authLoading &&
            (isAdmin ? (
              <button
                type="button"
                onClick={logout}
                className="flex items-center gap-1 text-on-surface-variant hover:text-primary transition-colors outline-none focus:outline-none"
              >
                <span className="material-symbols-outlined text-base">logout</span> Keluar Admin
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setShowLogin(true)}
                className="flex items-center gap-1 text-on-surface-variant hover:text-primary transition-colors outline-none focus:outline-none"
              >
                <span className="material-symbols-outlined text-base">admin_panel_settings</span> Login
              </button>
            ))}
        </div>

        <button
          className="lg:hidden text-on-surface p-2"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((open) => !open)}
        >
          <span className="material-symbols-outlined">{mobileOpen ? "close" : "menu"}</span>
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-surface border-t border-white/5 px-container-padding py-6 flex flex-col gap-5 max-h-[calc(100vh-80px)] overflow-y-auto">
          {NAV_LINKS.map((link) => (
            <MobileNavItem
              key={link.to}
              link={link}
              onNavigate={closeMobile}
              openSection={openMobileSection}
              setOpenSection={setOpenMobileSection}
            />
          ))}
          {!authLoading &&
            (isAdmin ? (
              <button
                type="button"
                onClick={() => {
                  logout();
                  closeMobile();
                }}
                className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined text-base">logout</span> Keluar Admin
              </button>
            ) : (
              <button
                type="button"
                onClick={() => {
                  setShowLogin(true);
                  closeMobile();
                }}
                className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined text-base">admin_panel_settings</span> Login
              </button>
            ))}
        </div>
      )}

      {showLogin && <AdminLoginModal onClose={() => setShowLogin(false)} />}
    </nav>
  );
}
