import { useEffect } from "react";
import { academyVisualization, aiDecisionSupportVisualization, aiResearchLab, digitalEngineeringVisualization, digitalTwin, enterpriseDashboard, intelligenceLayerDiagram, leadershipTeam } from "../assets/images";

export default function ResourcesWebinars() {
  useEffect(() => {
    document.title = "Webinar | AIRDE";
  }, []);

  return (
    <>
      <main className="pt-24 pb-section-gap px-container-padding max-w-screen-2xl mx-auto">
        {/* Hero Section */}
        <header className="mb-12 relative overflow-hidden rounded-xl py-20 px-10 bg-gradient-to-br from-surface-container-high to-surface-container-lowest border border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.1),transparent_70%)]"></div>
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-primary led-pulse shadow-[0_0_8px_rgba(37,99,235,0.8)]"></span>
              <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest">
                Pusat Pembelajaran
              </span>
            </div>
            <h1 className="font-display-lg text-display-lg text-on-surface mb-6 leading-tight drop-shadow-sm">
              Masa Depan Manajemen Aset Digital
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant/90 max-w-2xl leading-relaxed">
              Jelajahi wawasan teknis mendalam tentang AI prediktif, kembaran digital (digital twins), dan
              optimalisasi infrastruktur industri melalui seri webinar eksklusif kami.
            </p>
          </div>
        </header>

        {/* Navigation Tabs & Filter */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10 border-b border-white/10 pb-4">
          <div className="flex gap-8 p-1 rounded-lg">
            <button className="font-headline-md text-headline-md text-primary border-b-2 border-primary pb-2 relative after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-primary after:shadow-[0_0_10px_rgba(180,197,255,0.5)]">
              Mendatang
            </button>
            <button className="font-headline-md text-headline-md text-on-surface-variant hover:text-on-surface transition-colors pb-2">
              On-Demand
            </button>
          </div>
          <div className="flex gap-3">
            <select className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg px-4 py-2 text-sm focus:ring-primary text-on-surface cursor-pointer hover:bg-white/10 transition-colors">
              <option className="bg-surface-container-highest">Semua Kategori</option>
              <option className="bg-surface-container-highest">AI &amp; Machine Learning</option>
              <option className="bg-surface-container-highest">Internet of Things (IoT)</option>
              <option className="bg-surface-container-highest">Keamanan Siber</option>
            </select>
          </div>
        </div>

        {/* Featured/Upcoming Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Webinar Card 1 (Upcoming) */}
          <div className="glass-card rounded-xl overflow-hidden flex flex-col group">
            <div className="relative h-56 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent z-10 opacity-60"></div>
              <img
                alt="A futuristic industrial power plant interior with glowing blue digital data lines overlaying heavy machinery and turbine components, cinematic lighting, professional dark tech aesthetic."
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                src={aiResearchLab}
              />
              <div className="absolute top-4 left-4 z-20 flex gap-2">
                <span className="bg-primary text-on-primary text-[10px] font-bold px-2 py-1 rounded uppercase shadow-lg shadow-primary/20">
                  Live: 24 Okt
                </span>
                <span className="bg-surface/60 backdrop-blur-md text-[10px] text-primary font-bold px-2 py-1 rounded border border-primary/30 uppercase tracking-tighter">
                  Advanced AI
                </span>
              </div>
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3 group-hover:text-primary transition-colors leading-tight">
                Optimasi Turbin Gas dengan AI Prediktif
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant/80 mb-6 line-clamp-3">
                Pelajari cara mengimplementasikan model pembelajaran mendalam untuk mendeteksi anomali pada
                komponen turbin sebelum kegagalan terjadi.
              </p>
              <div className="mt-auto flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border border-primary/30 overflow-hidden bg-surface-container-high ring-2 ring-white/5">
                    <img
                      alt="Professional headshot of a senior female engineer in a tech environment, confident expression, soft dramatic lighting, corporate futurism style."
                      className="w-full h-full object-cover"
                      src={digitalTwin}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-on-surface">Dr. Sarah Wijaya</p>
                    <p className="text-[11px] text-outline">Chief Data Scientist</p>
                  </div>
                </div>
                <button className="bg-primary-container text-on-primary-container px-5 py-2 rounded font-bold hover:brightness-125 transition-all text-sm shadow-md">
                  Daftar
                </button>
              </div>
            </div>
            <div className="h-1 bg-white/5 data-stream-pulse"></div>
          </div>

          {/* Webinar Card 2 (Upcoming) */}
          <div className="glass-card rounded-xl overflow-hidden flex flex-col group">
            <div className="relative h-56 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent z-10 opacity-60"></div>
              <img
                alt="A clean, minimalist 3D rendering of a factory digital twin showing real-time data flows in neon orange and blue, dark atmospheric background, high precision technical visualization."
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                src={enterpriseDashboard}
              />
              <div className="absolute top-4 left-4 z-20 flex gap-2">
                <span className="bg-primary text-on-primary text-[10px] font-bold px-2 py-1 rounded uppercase shadow-lg shadow-primary/20">
                  Live: 30 Okt
                </span>
                <span className="bg-surface/60 backdrop-blur-md text-[10px] text-primary font-bold px-2 py-1 rounded border border-primary/30 uppercase tracking-tighter">
                  Digital Twin
                </span>
              </div>
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3 group-hover:text-primary transition-colors leading-tight">
                Membangun Digital Twin untuk Infrastruktur Kota
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant/80 mb-6 line-clamp-3">
                Sesi teknis mengenai integrasi sensor IoT ke dalam model 3D kota untuk manajemen energi yang lebih
                cerdas dan berkelanjutan.
              </p>
              <div className="mt-auto flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border border-primary/30 overflow-hidden bg-surface-container-high ring-2 ring-white/5">
                    <img
                      alt="Professional portrait of a male urban planner with tech glasses, workspace background with monitors displaying architectural data, cool blue lighting tone."
                      className="w-full h-full object-cover"
                      src={digitalEngineeringVisualization}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-on-surface">Budi Santoso</p>
                    <p className="text-[11px] text-outline">Lead Architect IoT</p>
                  </div>
                </div>
                <button className="bg-primary-container text-on-primary-container px-5 py-2 rounded font-bold hover:brightness-125 transition-all text-sm shadow-md">
                  Daftar
                </button>
              </div>
            </div>
            <div className="h-1 bg-white/5"></div>
          </div>

          {/* Webinar Card 3 (Upcoming) */}
          <div className="glass-card rounded-xl overflow-hidden flex flex-col group">
            <div className="relative h-56 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent z-10 opacity-60"></div>
              <img
                alt="Cybersecurity theme with glowing digital shields and matrix-like data cascading in deep blue and emerald green, dark glass texture, professional intelligence layer aesthetic."
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                src={aiDecisionSupportVisualization}
              />
              <div className="absolute top-4 left-4 z-20 flex gap-2">
                <span className="bg-primary text-on-primary text-[10px] font-bold px-2 py-1 rounded uppercase shadow-lg shadow-primary/20">
                  Live: 05 Nov
                </span>
                <span className="bg-surface/60 backdrop-blur-md text-[10px] text-primary font-bold px-2 py-1 rounded border border-primary/30 uppercase tracking-tighter">
                  Security
                </span>
              </div>
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3 group-hover:text-primary transition-colors leading-tight">
                Keamanan Cyber di Era Industri 4.0
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant/80 mb-6 line-clamp-3">
                Melindungi aset fisik dari ancaman digital: Strategi keamanan multi-lapis untuk sistem kontrol
                industri (ICS).
              </p>
              <div className="mt-auto flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border border-primary/30 overflow-hidden bg-surface-container-high ring-2 ring-white/5">
                    <img
                      alt="Close up of a security expert's face partially illuminated by blue monitor light, high tech environment, serious and authoritative mood."
                      className="w-full h-full object-cover"
                      src={academyVisualization}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-on-surface">Andi Pratama</p>
                    <p className="text-[11px] text-outline">VP of Security</p>
                  </div>
                </div>
                <button className="bg-primary-container text-on-primary-container px-5 py-2 rounded font-bold hover:brightness-125 transition-all text-sm shadow-md">
                  Daftar
                </button>
              </div>
            </div>
            <div className="h-1 bg-white/5"></div>
          </div>
        </div>

        {/* On-Demand Section Header */}
        <div className="mt-20 mb-8">
          <h2 className="font-display-lg text-headline-lg text-on-surface drop-shadow-sm">Webinar On-Demand</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Tonton sesi yang telah berlalu kapan saja, di mana saja.
          </p>
        </div>

        {/* On-Demand Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {/* On-Demand Card 1 */}
          <div className="glass-card rounded-xl overflow-hidden group">
            <div className="relative h-40 overflow-hidden">
              <img
                alt="Technical data dashboard visualization showing clean line charts and KPI indicators in blue and white on a dark background, professional and analytical style."
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={intelligenceLayerDiagram}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 backdrop-blur-[2px] group-hover:backdrop-blur-none transition-all">
                <span className="material-symbols-outlined text-5xl text-white opacity-80 group-hover:scale-110 group-hover:text-primary transition-all duration-300 drop-shadow-[0_0_15px_rgba(37,99,235,0.6)]">
                  play_circle
                </span>
              </div>
              <span className="absolute bottom-2 right-2 bg-black/70 backdrop-blur-md text-[10px] px-2 py-0.5 rounded text-white border border-white/10">
                45:12
              </span>
            </div>
            <div className="p-4">
              <h4 className="text-sm font-bold text-on-surface line-clamp-1 group-hover:text-primary mb-1 transition-colors">
                Analisis Data Real-time IoT
              </h4>
              <p className="text-[11px] text-on-surface-variant mb-4">Selesai: 12 Sep 2024</p>
              <button className="w-full py-2 border border-primary/30 text-primary text-xs font-bold hover:bg-primary/10 hover:border-primary/50 transition-all rounded-lg">
                Tonton Sekarang
              </button>
            </div>
          </div>

          {/* On-Demand Card 2 */}
          <div className="glass-card rounded-xl overflow-hidden group">
            <div className="relative h-40 overflow-hidden">
              <img
                alt="Abstract 3D network nodes connecting across a dark void, glowing points of light, clean technical aesthetic, corporate futurism."
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={leadershipTeam}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 backdrop-blur-[2px] group-hover:backdrop-blur-none transition-all">
                <span className="material-symbols-outlined text-5xl text-white opacity-80 group-hover:scale-110 group-hover:text-primary transition-all duration-300 drop-shadow-[0_0_15px_rgba(37,99,235,0.6)]">
                  play_circle
                </span>
              </div>
              <span className="absolute bottom-2 right-2 bg-black/70 backdrop-blur-md text-[10px] px-2 py-0.5 rounded text-white border border-white/10">
                58:30
              </span>
            </div>
            <div className="p-4">
              <h4 className="text-sm font-bold text-on-surface line-clamp-1 group-hover:text-primary mb-1 transition-colors">
                Integrasi Cloud untuk Industri
              </h4>
              <p className="text-[11px] text-on-surface-variant mb-4">Selesai: 01 Sep 2024</p>
              <button className="w-full py-2 border border-primary/30 text-primary text-xs font-bold hover:bg-primary/10 hover:border-primary/50 transition-all rounded-lg">
                Tonton Sekarang
              </button>
            </div>
          </div>

          {/* On-Demand Card 3 */}
          <div className="glass-card rounded-xl overflow-hidden group">
            <div className="relative h-40 overflow-hidden">
              <img
                alt="Microchip circuit board close up with glowing orange electrical paths, industrial precision photography, high detail, dark mood."
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={aiResearchLab}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 backdrop-blur-[2px] group-hover:backdrop-blur-none transition-all">
                <span className="material-symbols-outlined text-5xl text-white opacity-80 group-hover:scale-110 group-hover:text-primary transition-all duration-300 drop-shadow-[0_0_15px_rgba(37,99,235,0.6)]">
                  play_circle
                </span>
              </div>
              <span className="absolute bottom-2 right-2 bg-black/70 backdrop-blur-md text-[10px] px-2 py-0.5 rounded text-white border border-white/10">
                32:15
              </span>
            </div>
            <div className="p-4">
              <h4 className="text-sm font-bold text-on-surface line-clamp-1 group-hover:text-primary mb-1 transition-colors">
                Hardware Pintar Generasi Baru
              </h4>
              <p className="text-[11px] text-on-surface-variant mb-4">Selesai: 25 Agu 2024</p>
              <button className="w-full py-2 border border-primary/30 text-primary text-xs font-bold hover:bg-primary/10 hover:border-primary/50 transition-all rounded-lg">
                Tonton Sekarang
              </button>
            </div>
          </div>

          {/* On-Demand Card 4 */}
          <div className="glass-card rounded-xl overflow-hidden group">
            <div className="relative h-40 overflow-hidden">
              <img
                alt="Mathematical equations and code snippets floating in a 3D dark blue space with subtle light glows, intelligence layer aesthetic, technical expert level."
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={digitalTwin}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 backdrop-blur-[2px] group-hover:backdrop-blur-none transition-all">
                <span className="material-symbols-outlined text-5xl text-white opacity-80 group-hover:scale-110 group-hover:text-primary transition-all duration-300 drop-shadow-[0_0_15px_rgba(37,99,235,0.6)]">
                  play_circle
                </span>
              </div>
              <span className="absolute bottom-2 right-2 bg-black/70 backdrop-blur-md text-[10px] px-2 py-0.5 rounded text-white border border-white/10">
                1:05:00
              </span>
            </div>
            <div className="p-4">
              <h4 className="text-sm font-bold text-on-surface line-clamp-1 group-hover:text-primary mb-1 transition-colors">
                Dasar-dasar Algoritma Prediktif
              </h4>
              <p className="text-[11px] text-on-surface-variant mb-4">Selesai: 15 Agu 2024</p>
              <button className="w-full py-2 border border-primary/30 text-primary text-xs font-bold hover:bg-primary/10 hover:border-primary/50 transition-all rounded-lg">
                Tonton Sekarang
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
    </>
  );
}
