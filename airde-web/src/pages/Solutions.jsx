import { useEffect } from "react";
import { Link } from "react-router-dom";
import ContactCta from "../components/ContactCta";
import {
  digitalEngineeringVisualization,
  aiDecisionSupportVisualization,
  academyVisualization,
  assetIntelligenceDashboard,
  digitalTwin,
  enterpriseDashboard,
  leadershipTeam,
} from "../assets/images";

export default function Solutions() {
  useEffect(() => {
    document.title = "AIRDE | Solutions Overview";
  }, []);

  return (
    <>
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex flex-col items-center justify-center text-center px-container-padding py-section-gap overflow-hidden bg-gradient-to-b from-surface-container-lowest via-surface to-surface">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 blur-[120px] rounded-full"></div>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <span className="font-label-sm text-label-sm text-primary tracking-[0.2em] mb-4 block">
              SOLUTIONS OVERVIEW
            </span>
            <h1 className="font-display-lg text-display-lg mb-6 leading-tight text-on-surface">
              Intelligence for Every <span className="text-primary">Critical Decision.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              AIRDE menghadirkan solusi intelligence end-to-end yang membantu organisasi memahami aset, mengurangi
              risiko, dan mengoptimalkan performa.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                to="/platform"
                className="bg-primary-container text-on-primary-container px-8 py-4 rounded-full font-headline-md text-headline-md flex items-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary-container/30"
              >
                Explore Platform <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Core Values Panel (Glassmorphism Cards) */}
        <section className="px-container-padding pb-section-gap bg-surface">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {/* Card 1 */}
            <div className="glass-card p-8 rounded-xl glow-border">
              <div className="w-12 h-12 bg-primary-container/20 rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                  analytics
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-3 text-on-surface">Data to Intelligence</h3>
              <p className="text-on-surface-variant text-body-md leading-snug">
                Konversi data operasional kompleks menjadi wawasan yang dapat ditindaklanjuti secara instan.
              </p>
            </div>
            {/* Card 2 */}
            <div className="glass-card p-8 rounded-xl glow-border">
              <div className="w-12 h-12 bg-secondary-container/20 rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
                  warning
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-3 text-on-surface">Reduce Risk</h3>
              <p className="text-on-surface-variant text-body-md leading-snug">
                Secara proaktif mengidentifikasi, menilai, dan memitigasi risiko operasional yang mengancam.
              </p>
            </div>
            {/* Card 3 */}
            <div className="glass-card p-8 rounded-xl glow-border">
              <div className="w-12 h-12 bg-tertiary-container/20 rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>
                  speed
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-3 text-on-surface">Optimize Performance</h3>
              <p className="text-on-surface-variant text-body-md leading-snug">
                Meningkatkan keandalan, ketersediaan, dan performa aset melalui analitik prediktif.
              </p>
            </div>
            {/* Card 4 */}
            <div className="glass-card p-8 rounded-xl glow-border">
              <div className="w-12 h-12 bg-surface-bright/30 rounded-lg flex items-center justify-center mb-6">
                <span
                  className="material-symbols-outlined text-primary-fixed-dim"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  school
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-3 text-on-surface">Empower People</h3>
              <p className="text-on-surface-variant text-body-md leading-snug">
                Membangun kapabilitas teknis dan strategis organisasi melalui kurikulum AIRDE Academy.
              </p>
            </div>
          </div>
        </section>

        {/* Solutions Grid (Intelligence Pillars) */}
        <section className="bg-surface-container-low solutions-grid-bg py-section-gap px-container-padding">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div className="max-w-2xl">
                <h2 className="font-display-lg text-headline-lg mb-4 text-on-surface">Intelligence Pillars</h2>
                <p className="text-on-surface-variant font-body-lg">
                  Ekosistem solusi terintegrasi yang dirancang untuk mendukung transformasi digital aset industri
                  Anda.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Asset Intelligence */}
              <Link
                to="/solutions/asset-intelligence"
                className="flex flex-col h-full bg-surface-container-lowest/60 border border-outline-variant/20 rounded-xl overflow-hidden group hover:border-primary/50 transition-all shadow-sm"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    alt="Asset Intelligence Dashboard"
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                    src={assetIntelligenceDashboard}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 to-transparent"></div>
                </div>
                <div className="p-8 flex-1">
                  <h4 className="font-headline-md text-headline-md text-primary mb-2">Asset Intelligence</h4>
                  <p className="text-on-surface-variant font-body-md mb-4">
                    Visibilitas real-time menyeluruh terhadap kesehatan dan status aset operasional Anda.
                  </p>
                  <span className="text-primary font-body-md flex items-center gap-2 group-hover:gap-3 transition-all">
                    Pelajari Selengkapnya <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </span>
                </div>
              </Link>
              {/* Reliability Intelligence */}
              <Link
                to="/solutions/reliability-intelligence"
                className="flex flex-col h-full bg-surface-container-lowest/60 border border-outline-variant/20 rounded-xl overflow-hidden group hover:border-primary/50 transition-all shadow-sm"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    alt="Reliability Digital Twin"
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                    src={digitalTwin}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 to-transparent"></div>
                </div>
                <div className="p-8 flex-1">
                  <h4 className="font-headline-md text-headline-md text-primary mb-2">Reliability Intelligence</h4>
                  <p className="text-on-surface-variant font-body-md mb-4">
                    Strategi pemeliharaan berbasis data untuk meminimalkan waktu henti yang tidak direncanakan.
                  </p>
                  <span className="text-primary font-body-md flex items-center gap-2 group-hover:gap-3 transition-all">
                    Pelajari Selengkapnya <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </span>
                </div>
              </Link>
              {/* Risk Intelligence */}
              <Link
                to="/solutions/risk-intelligence"
                className="flex flex-col h-full bg-surface-container-lowest/60 border border-outline-variant/20 rounded-xl overflow-hidden group hover:border-secondary/50 transition-all shadow-sm"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    alt="Risk Intelligence Layer"
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                    src={enterpriseDashboard}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 to-transparent"></div>
                </div>
                <div className="p-8 flex-1">
                  <h4 className="font-headline-md text-headline-md text-secondary mb-2">Risk Intelligence</h4>
                  <p className="text-on-surface-variant font-body-md mb-4">
                    Pemetaan risiko kuantitatif untuk pengambilan keputusan berbasis prioritas keselamatan dan
                    biaya.
                  </p>
                  <span className="text-secondary font-body-md flex items-center gap-2 group-hover:gap-3 transition-all">
                    Pelajari Selengkapnya <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </span>
                </div>
              </Link>
              {/* Digital Engineering */}
              <Link
                to="/solutions/digital-engineering"
                className="flex flex-col h-full bg-surface-container-lowest/60 border border-outline-variant/20 rounded-xl overflow-hidden group hover:border-primary/50 transition-all shadow-sm"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    alt="Digital Engineering Visualization"
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                    src={digitalEngineeringVisualization}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 to-transparent"></div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h4 className="font-headline-md text-headline-md text-on-surface mb-2">Digital Engineering</h4>
                  <p className="text-on-surface-variant font-body-md mb-4">
                    Integrasi desain teknis dengan kembaran digital untuk simulasi performa aset yang akurat.
                  </p>
                  <span className="text-primary font-body-md flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                    Pelajari Selengkapnya <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </span>
                </div>
              </Link>
              {/* AI Decision Support */}
              <Link
                to="/solutions/ai-decision-support"
                className="flex flex-col h-full bg-surface-container-lowest/60 border border-outline-variant/20 rounded-xl overflow-hidden group hover:border-primary/50 transition-all shadow-sm"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    alt="AI Decision Support Visualization"
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                    src={aiDecisionSupportVisualization}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 to-transparent"></div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h4 className="font-headline-md text-headline-md text-on-surface mb-2">AI Decision Support</h4>
                  <p className="text-on-surface-variant font-body-md mb-4">
                    Rekomendasi otomatis berbasis AI untuk mengoptimalkan parameter operasional harian.
                  </p>
                  <span className="text-primary font-body-md flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                    Pelajari Selengkapnya <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </span>
                </div>
              </Link>
              {/* AIRDE Academy */}
              <Link
                to="/solutions/academy"
                className="flex flex-col h-full bg-surface-container-lowest/60 border border-outline-variant/20 rounded-xl overflow-hidden group hover:border-primary/50 transition-all shadow-sm"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    alt="AIRDE Academy Learning"
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                    src={academyVisualization}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 to-transparent"></div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h4 className="font-headline-md text-headline-md text-on-surface mb-2">AIRDE Academy</h4>
                  <p className="text-on-surface-variant font-body-md mb-4">
                    Program pelatihan sertifikasi untuk membangun tenaga kerja yang fasih dalam data dan keandalan.
                  </p>
                  <span className="text-primary font-body-md flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                    Pelajari Selengkapnya <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </span>
                </div>
              </Link>
              {/* Consultation */}
              <Link
                to="/solutions/consultation"
                className="flex flex-col h-full bg-surface-container-lowest/60 border border-outline-variant/20 rounded-xl overflow-hidden group hover:border-primary/50 transition-all shadow-sm"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    alt="Tim Konsultan AIRDE"
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                    src={leadershipTeam}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 to-transparent"></div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h4 className="font-headline-md text-headline-md text-on-surface mb-2">Consultation</h4>
                  <p className="text-on-surface-variant font-body-md mb-4">
                    Konsultasi strategis dengan pakar kami untuk merancang roadmap transformasi yang tepat bagi
                    organisasi Anda.
                  </p>
                  <span className="text-primary font-body-md flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                    Pelajari Selengkapnya <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Closing Bar */}
        <div className="w-full bg-surface-container/40 border-y border-outline-variant/20 py-6">
          <div className="max-w-7xl mx-auto px-container-padding flex justify-center items-center gap-8 flex-wrap">
            <span className="font-label-sm text-label-sm text-primary flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary data-pulse"></span>
              6 Integrated Solutions
            </span>
            <div className="h-4 w-px bg-outline-variant/30 hidden md:block"></div>
            <span className="font-label-sm text-label-sm text-primary flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary data-pulse"></span>
              One Unified Platform
            </span>
            <div className="h-4 w-px bg-outline-variant/30 hidden md:block"></div>
            <span className="font-label-sm text-label-sm text-primary flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary data-pulse"></span>
              Better Decisions Every Day
            </span>
          </div>
        </div>

        <ContactCta
          title="Ready to Transform Your Operations?"
          description="Mulai perjalanan inteligensi aset Anda bersama AIRDE hari ini. Konsultasikan tantangan operasional Anda dengan tim ahli kami."
        />
      </main>

      {/* Footer */}
    </>
  );
}
