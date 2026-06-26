import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  intelligenceLayerDiagram,
  hologramAnimation,
  assetIntelligenceDashboard,
  digitalTwin,
  enterpriseDashboard,
  digitalEngineeringVisualization,
  aiDecisionSupportVisualization,
  academyVisualization,
  leadershipTeam,
} from "../assets/images";
import ContactCta from "../components/ContactCta";
import DocumentLibrary from "../components/DocumentLibrary";

const PORTFOLIO_HIGHLIGHTS = [
  {
    name: "AIRDE Project Manager",
    description:
      "Platform manajemen proyek internal AIRDE untuk memantau progres implementasi, alokasi tim, dan milestone proyek klien secara real-time.",
    url: "https://airde-project-manager.vercel.app/",
  },
  {
    name: "AIRDE Pipeline",
    description:
      "Dashboard pemantauan pipeline industri untuk visualisasi kondisi aset, deteksi anomali, dan status integritas jaringan secara real-time.",
    url: "https://airde-pipeline.vercel.app/",
  },
];

export default function Beranda() {
  useEffect(() => {
    document.title = "AIRDE | Transforming Data Into Intelligence";
  }, []);

  return (
    <>
      {/* Section 1: Hero */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-50"
          src={hologramAnimation}
          autoPlay
          loop
          muted
          playsInline
        ></video>
        <div className="absolute inset-0 bg-background/60 z-0"></div>
        <div className="absolute inset-0 grid-bg z-0 opacity-60"></div>
        <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] bg-primary-container/10 blur-[150px] rounded-full"></div>
        <div className="relative z-10 w-full px-container-padding max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-high border border-outline-variant/30 text-label-sm font-label-sm text-primary uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-primary pulse-dot"></span>
              Live Intelligence Layer Active
            </div>
            <h1 className="font-display-lg text-display-lg leading-[1.1] tracking-tight">
              Transforming Data Into <span className="text-primary glow-blue">Intelligence.</span>
              <br />
              Intelligence Into <span className="text-secondary glow-orange">Decisions.</span>
            </h1>
            <p className="text-body-lg font-body-lg text-on-surface-variant max-w-lg leading-relaxed">
              AIRDE menghubungkan data operasional Anda, menerapkan intelligence, dan memperkuat
              keputusan yang lebih baik di seluruh organisasi.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/about#contact-us" className="bg-secondary-container text-on-secondary-container px-8 py-3.5 rounded-full font-bold hover:brightness-110 transition-all shadow-lg shadow-secondary-container/20">
                Request Demo
              </Link>
              <Link to="/about#contact-us" className="border border-outline px-8 py-3.5 rounded-full font-bold text-on-surface hover:bg-surface-variant transition-all">
                Talk To An Expert
              </Link>
            </div>
          </div>  
        </div>
      </section>

      {/* Section 2: Intelligence Layer (Dark) */}
      <section className="py-24 bg-surface-container-lowest relative overflow-hidden" id="platform">
        <div className="max-w-7xl mx-auto px-container-padding">
          <div className="text-center space-y-6 mb-20">
            <h2 className="font-display-lg text-display-lg max-w-5xl mx-auto leading-tight">
              "Tantangannya bukanlah kurangnya data, melainkan kurangnya{" "}
              <span className="text-primary italic">intelligence</span>."
            </h2>
            <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              Data industri sering kali terisolasi dan bising. AIRDE menjembatani kesenjangan ini
              dengan mengubah kebisingan sensor mentah menjadi wawasan strategis yang dapat
              ditindaklanjuti untuk aset bernilai tinggi.
            </p>
          </div>
          <div className="relative glass-card p-4 rounded-3xl overflow-hidden mb-12">
            <img alt="Intelligence Layer Diagram" className="w-full rounded-2xl" src={intelligenceLayerDiagram} />
          </div>
          <div className="bg-primary/10 border-l-4 border-primary p-6 flex flex-wrap justify-center gap-12 items-center rounded-r-xl">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">check_circle</span>
              <span className="font-bold text-lg text-primary">Better Decisions.</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">security</span>
              <span className="font-bold text-lg text-primary">Safer Operations.</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">trending_up</span>
              <span className="font-bold text-lg text-primary">Higher Value.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Our Solutions */}
      <section className="py-24 bg-surface-bright text-on-surface" id="solutions">
        <div className="max-w-7xl mx-auto px-container-padding">
          <div className="mb-16">
            <p className="text-primary font-bold tracking-[0.3em] uppercase text-sm mb-4">Pilar Intelligence Kami</p>
            <h2 className="font-headline-md text-display-lg">Solusi Industri yang Terintegrasi</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link
              to="/solutions/asset-intelligence"
              className="bg-surface p-8 rounded-2xl border border-outline-variant/30 hover:border-primary transition-all group glass-card block"
            >
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-3xl">precision_manufacturing</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-4 group-hover:text-primary transition-colors">
                Asset Intelligence
              </h3>
              <p className="text-on-surface-variant mb-6">
                Pemantauan kesehatan aset secara real-time dan deteksi anomali untuk infrastruktur fisik
                yang kritis.
              </p>
              <img
                alt="Asset Intelligence"
                className="w-full h-40 object-cover rounded-lg opacity-90 group-hover:opacity-100 transition-opacity border border-white/5"
                src={assetIntelligenceDashboard}
              />
            </Link>
            <Link
              to="/solutions/reliability-intelligence"
              className="bg-surface p-8 rounded-2xl border border-outline-variant/30 hover:border-primary transition-all group glass-card block"
            >
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-3xl">rebase_edit</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-4 group-hover:text-primary transition-colors">
                Reliability Intelligence
              </h3>
              <p className="text-on-surface-variant mb-6">
                Strategi pemeliharaan berbasis data yang bergeser dari operasi reaktif ke operasi yang
                benar-benar prediktif.
              </p>
              <img
                alt="Reliability Intelligence"
                className="w-full h-40 object-cover rounded-lg opacity-90 group-hover:opacity-100 transition-opacity border border-white/5"
                src={digitalTwin}
              />
            </Link>
            <Link
              to="/solutions/risk-intelligence"
              className="bg-surface p-8 rounded-2xl border border-outline-variant/30 hover:border-secondary transition-all group glass-card block"
            >
              <div className="w-14 h-14 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-3xl">report_problem</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-4 group-hover:text-secondary transition-colors">
                Risk Intelligence
              </h3>
              <p className="text-on-surface-variant mb-6">
                Mengukur ketidakpastian untuk mencegah kegagalan katastrofik dan mengoptimalkan margin
                keselamatan.
              </p>
              <img
                alt="Risk Intelligence"
                className="w-full h-40 object-cover rounded-lg opacity-90 group-hover:opacity-100 transition-opacity border border-white/5"
                src={enterpriseDashboard}
              />
            </Link>
            <Link
              to="/solutions/digital-engineering"
              className="bg-surface p-8 rounded-2xl border border-outline-variant/30 hover:border-primary transition-all group glass-card block"
            >
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-3xl">architecture</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-4 group-hover:text-primary transition-colors">
                Digital Engineering
              </h3>
              <p className="text-on-surface-variant mb-6">
                Pemodelan komputasi canggih untuk perpanjangan masa pakai dan modernisasi aset industri.
              </p>
              <img
                alt="Digital Engineering"
                className="w-full h-40 object-cover rounded-lg opacity-90 group-hover:opacity-100 transition-opacity border border-white/5"
                src={digitalEngineeringVisualization}
              />
            </Link>
            <Link
              to="/solutions/ai-decision-support"
              className="bg-surface p-8 rounded-2xl border border-outline-variant/30 hover:border-primary transition-all group glass-card block"
            >
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-3xl">psychology</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-4 group-hover:text-primary transition-colors">
                AI Decision Support
              </h3>
              <p className="text-on-surface-variant mb-6">
                Meningkatkan keahlian manusia dengan wawasan preskriptif dan optimasi multi-skenario.
              </p>
              <img
                alt="AI Decision Support"
                className="w-full h-40 object-cover rounded-lg opacity-90 group-hover:opacity-100 transition-opacity border border-white/5"
                src={aiDecisionSupportVisualization}
              />
            </Link>
            <Link
              to="/solutions/academy"
              className="bg-surface p-8 rounded-2xl border border-outline-variant/30 hover:border-primary transition-all group glass-card block"
            >
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-3xl">school</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-4 group-hover:text-primary transition-colors">
                AIRDE Academy
              </h3>
              <p className="text-on-surface-variant mb-6">
                Menjembatani kesenjangan keterampilan melalui pelatihan khusus dalam teknik industri
                berbasis AI.
              </p>
              <img
                alt="AIRDE Academy"
                className="w-full h-40 object-cover rounded-lg opacity-90 group-hover:opacity-100 transition-opacity border border-white/5"
                src={academyVisualization}
              />
            </Link>
            <Link
              to="/solutions/consultation"
              className="bg-surface p-8 rounded-2xl border border-outline-variant/30 hover:border-primary transition-all group glass-card block"
            >
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-3xl">support_agent</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-4 group-hover:text-primary transition-colors">
                Consultation
              </h3>
              <p className="text-on-surface-variant mb-6">
                Konsultasi strategis dengan pakar kami untuk merancang roadmap transformasi yang tepat
                bagi organisasi Anda.
              </p>
              <img
                alt="Consultation"
                className="w-full h-40 object-cover rounded-lg opacity-90 group-hover:opacity-100 transition-opacity border border-white/5"
                src={leadershipTeam}
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 3.5: Platform Overview */}
      <section className="py-24 bg-surface relative overflow-hidden" id="platform-overview">
        <div className="max-w-7xl mx-auto px-container-padding grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-label-sm font-label-sm text-primary uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-primary pulse-dot"></span>
              Platform Architecture
            </div>
            <h2 className="font-display-lg text-display-lg leading-tight">Satu Platform, Lima Layer Intelligence.</h2>
            <p className="text-body-lg font-body-lg text-on-surface-variant leading-relaxed">
              Arsitektur multi-layer AIRDE menyatukan data operasional kompleks menjadi kecerdasan yang dapat
              ditindaklanjuti secara real-time — dari integrasi data mentah hingga nilai bisnis yang terukur.
            </p>
            <Link
              to="/platform"
              className="inline-flex items-center gap-2 bg-primary-container text-on-primary-container px-8 py-3.5 rounded-full font-bold hover:brightness-110 transition-all shadow-lg shadow-primary-container/20"
            >
              Jelajahi Platform <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <div className="glass-card p-4 rounded-xl flex items-center gap-4 border-l-4 border-l-primary glow-blue">
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-primary/10 rounded-lg">
                <span className="material-symbols-outlined text-primary text-2xl">extension</span>
              </div>
              <div>
                <h3 className="font-headline-md text-base text-primary">Integration Layer</h3>
                <p className="text-sm text-on-surface-variant">Connect • Cleanse • Harmonize</p>
              </div>
            </div>
            <div className="glass-card p-4 rounded-xl flex items-center gap-4 border-l-4 border-l-secondary glow-blue">
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-secondary/10 rounded-lg">
                <span className="material-symbols-outlined text-secondary text-2xl">analytics</span>
              </div>
              <div>
                <h3 className="font-headline-md text-base text-secondary">Analytics Layer</h3>
                <p className="text-sm text-on-surface-variant">Descriptive • Diagnostic • Predictive</p>
              </div>
            </div>
            <div className="glass-card p-4 rounded-xl flex items-center gap-4 border-l-4 border-l-tertiary glow-blue">
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-tertiary/10 rounded-lg">
                <span className="material-symbols-outlined text-tertiary text-2xl">psychology</span>
              </div>
              <div>
                <h3 className="font-headline-md text-base text-tertiary">AI Layer</h3>
                <p className="text-sm text-on-surface-variant">Machine Learning • Optimization</p>
              </div>
            </div>
            <div className="glass-card p-4 rounded-xl flex items-center gap-4 border-l-4 border-l-primary glow-blue">
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-primary/10 rounded-lg">
                <span className="material-symbols-outlined text-primary text-2xl">ads_click</span>
              </div>
              <div>
                <h3 className="font-headline-md text-base text-primary">Decision Layer</h3>
                <p className="text-sm text-on-surface-variant">Dashboard • Alerts • Recommendations</p>
              </div>
            </div>
            <div className="glass-card p-4 rounded-xl flex items-center gap-4 border-l-4 border-l-tertiary glow-blue">
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-tertiary/10 rounded-lg">
                <span className="material-symbols-outlined text-tertiary text-2xl">query_stats</span>
              </div>
              <div>
                <h3 className="font-headline-md text-base text-tertiary">Business Value Layer</h3>
                <p className="text-sm text-on-surface-variant">Performance • Reliability • Growth</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Industries */}
      <section className="py-24 bg-surface" id="industries">
        <div className="max-w-7xl mx-auto px-container-padding">
          <h2 className="font-display-lg text-display-lg mb-16 text-center">
            Intelligence yang dibangun untuk lingkungan industri yang kompleks.
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                label: "Oil & Gas",
                to: "/industries/oil-gas",
                image:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuBLDygIfosClEFuvv36F2EtAjF_ndKzWTlWw5ltPSpc-IpdSyyL9lYN-X0bAFvMtSjut8T6_HI4ZfnaWZR_3evWXXBhaQz91wsYBFWjNRwQ0_Iv4jxsqaOvXQefUl4exz2Uhv_hg51IwO0sHr0_PgA1X_CKD9Qf4TGk8ulqBwgFTLfJ4otVfRbgtnZdoZ8DBmIlLVrtP0f1d-yWEOYYHzoeBrRJJ8OmJOVYlByW-eAwTx6dUpshQxUSCHcCoLSuagey9dhoZkbDjNn2",
              },
              {
                label: "Ports & Maritime",
                to: "/industries/ports-maritime",
                image:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuBmokS7EThybKVi5fo8yd4ufjDrt5Wqpojbru-0iYpbOZry_M5scCfknw03kEOkOvBNvBa7rQLObkU6GQ6PIz2uOUjMCEk2nmyh3tEd5PipwDZifh3NVouNGpQAD5cAYhpYnHbiumQwYtMWgfl2cmOyW62Tg12cUsvaNQeV_GVs9wTlYUgCHENMe-kPv060npDVsshz4o0-D8Q8mus2AqC7i4jrtndd4hKaOvwzrzv-2ZmxpmnywWKJjhaSjh0BqarAGpi6fbkwq-EQ",
              },
              {
                label: "Power & Utilities",
                to: "/industries/power-utilities",
                image:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuCj9LgB9BKYllMI9Aqqv6Idew46Sn-h2KBwTUGaCuiDhUOMVf2n2JYsJhbDR7rN2l4aVVQaYR6i-cI-_OmPeANH-t2viK4Q4Ry6nva-VEuKgaKOT5l6JMWrdyDfDGB5eKqmmiUaaLpG75MzwfdlOgLmZIgVuva-m5Jtl82l5PgTc3HenyWtkHhfItzz5r6uGi-AVrdLb1jg5baYgdI3Vf1u0kFejJJAAsr-0nRYKYKb6Hir-Zku2kuaZrqRYgc0gog3GPAq-pGWBhYr",
              },
              {
                label: "Manufacturing",
                to: "/industries/manufacturing",
                image:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuAS71fkEm0NwjkfJMifFJzGE0kvy7ANwGv-c9gogmf_nTWWQfj31VxbMhBKWCPmOFFrJCrM4GFE-5-gE9wAXko_md-zW4tTL6fXo6D2IEDcqya7R3_JvzjSryF--iooJmekS45mod-jSoaXrGSD_T_jtde0xEuCIdEHdd_mtFBsFULP4XciZRF5Zwf2q-ibJDQJ-O034VH7pa7R6-yTqxKWHJIuIWmmzxc5EjetkkMBjpQU3vbY28rk-vRqEZkDIzyBct9UAoh-4j_r",
              },
            ].map((industry) => (
              <Link
                key={industry.label}
                to={industry.to}
                className="group relative h-80 rounded-2xl overflow-hidden shadow-2xl block"
              >
                <img
                  alt={industry.label}
                  src={industry.image}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-90"></div>
                <div className="absolute bottom-6 left-6">
                  <span className="font-bold text-xl text-on-surface">{industry.label}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Portfolio Highlight */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-container-padding">
          <h2 className="font-headline-md text-display-lg mb-16 text-center">Nilai Bisnis yang Terbukti</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {PORTFOLIO_HIGHLIGHTS.map((site) => (
              <a
                key={site.url}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-surface-container-lowest/60 border border-outline-variant/20 rounded-2xl overflow-hidden hover:border-primary/50 transition-all shadow-sm glass-card"
              >
                <div className="flex items-center gap-2 px-4 py-3 bg-surface-container-high border-b border-outline-variant/20">
                  <span className="w-2.5 h-2.5 rounded-full bg-error/70"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-secondary/70"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-tertiary/70"></span>
                  <span className="ml-2 flex-1 truncate text-xs text-on-surface-variant bg-surface-container-lowest rounded px-2 py-1">
                    {site.url}
                  </span>
                </div>
                <div className="relative h-64 bg-surface-container-lowest overflow-hidden">
                  <iframe
                    title={site.name}
                    src={site.url}
                    loading="lazy"
                    className="w-full h-full border-0 pointer-events-none"
                  ></iframe>
                  <div className="absolute inset-0 flex items-center justify-center bg-background/0 group-hover:bg-background/40 transition-colors">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-primary-container text-on-primary-container px-5 py-2.5 rounded-full font-bold flex items-center gap-2">
                      Kunjungi Situs <span className="material-symbols-outlined text-sm">open_in_new</span>
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-2 group-hover:text-primary transition-colors">
                    {site.name}
                  </h3>
                  <p className="text-on-surface-variant font-body-md">{site.description}</p>
                </div>
              </a>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="inline-block bg-primary-container text-on-primary-container px-8 py-3.5 rounded-full font-bold hover:brightness-110 transition-all shadow-xl shadow-primary-container/20"
            >
              Lihat Portofolio
            </Link>
          </div>
        </div>
      </section>

      {/* Section 6: AIRDE Academy */}
      <section className="py-24 bg-surface overflow-hidden" id="academy">
        <div className="max-w-7xl mx-auto px-container-padding flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 space-y-8">
            <h2 className="font-display-lg text-display-lg leading-tight">
              Memberdayakan Tenaga Kerja Masa Depan dengan AI.
            </h2>
            <p className="text-body-lg text-on-surface-variant leading-relaxed">
              AIRDE Academy bukan sekadar pelatihan; ini adalah transformasi budaya. Kami membekali tim
              Anda dengan pengetahuan untuk mengoperasikan, memelihara, dan mengoptimalkan aset
              menggunakan tools Intelligence Layer kami yang canggih.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-4 text-on-surface font-medium">
                <span className="material-symbols-outlined text-primary">school</span> Sertifikasi
                Engineering Berbasis AI
              </li>
              <li className="flex items-center gap-4 text-on-surface font-medium">
                <span className="material-symbols-outlined text-primary">groups</span> Workshop
                Kepemimpinan Digital
              </li>
              <li className="flex items-center gap-4 text-on-surface font-medium">
                <span className="material-symbols-outlined text-primary">psychology</span> Pelatihan
                Hands-on Predictive Analytics
              </li>
            </ul>

            <Link
              to="/solutions/academy"
              className="inline-block bg-primary-container text-on-primary-container px-8 py-3.5 rounded-full font-bold hover:brightness-110 transition-all shadow-xl shadow-primary-container/20"
            >
              Pelajari Selengkapnya
            </Link>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full"></div>
            <div className="relative glass-card p-2 rounded-2xl shadow-2xl border border-white/10">
              <img
                alt="AIRDE Academy Classroom"
                className="w-full rounded-xl opacity-90"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFyNmyE9bjWo2LsEuRz08ehGiV4PktNYgbtuQh56MkI_Su1bsSYq2zSLQLDA0D1hL6ddT3uapQFt-VTTAmU9xqi2eC-Lp9eBFfG11EO19KvdyNv7H7WV3OTN7s4Md4L8on2Sv3x_fKvyXaGc3eTmWah2hfBNHDUKSz8NiK2F2eQWgMvJbGwc8abyBrILweDJjRvmhtNcWPRPrs7YA6qHOjZDSjsQBQEmZjtzpInb40D_IBE2KdkiIoC57I6YI-7NH8JfABg-Sfg_86"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Resources Highlight */}
      <section className="py-24 bg-surface-container-low" id="resources">
        <div className="max-w-7xl mx-auto px-container-padding">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16 gap-6">
            <div>
              <h2 className="font-headline-md text-display-lg">Sumber Daya &amp; Wawasan</h2>
              <p className="text-on-surface-variant mt-2 text-body-lg">
                Tetap terdepan dengan riset terbaru dalam AI industri.
              </p>
            </div>
            <Link
              to="/resources"
              className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all group"
            >
              Lihat Semua{" "}
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </Link>
          </div>

          <DocumentLibrary category="resources" embedded limit={3} readOnly />
        </div>
      </section>

      <ContactCta
        title="AIRDE Memberdayakan Organisasi untuk Membuat Keputusan Paling Kritis."
        description="Bergabunglah dengan garda terdepan Intelligence Industri dengan kepercayaan diri mutlak."
      />
    </>
  );
}
