import { useEffect } from "react";
import { aiDecisionSupportVisualization, aiResearchLab, digitalEngineeringVisualization, digitalTwin, enterpriseDashboard } from "../assets/images";

export default function ResourcesArticles() {
  useEffect(() => {
    document.title = "AIRDE Articles | AIRDE";
  }, []);

  return (
    <>
      {/* Hero / Atmospheric Layer */}
      <header className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0 mesh-grid opacity-40"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 blur-[140px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2"></div>
        <div className="relative z-10 max-w-screen-2xl mx-auto px-container-padding">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 glass-card border border-primary/20 rounded-full mb-6">
              <span className="w-2 h-2 bg-primary rounded-full status-pulse"></span>
              <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest">Pusat Pengetahuan</span>
            </div>
            <h1 className="font-display-lg text-display-lg mb-6 leading-tight text-white">
              Wawasan Strategis: <span className="text-primary">Masa Depan Kecerdasan Industri.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-2xl leading-relaxed">
              Eksplorasi mendalam mengenai AI, optimasi aset, dan transformasi digital yang dirancang untuk para
              pemimpin industri di Indonesia.
            </p>
            {/* Search & Filters */}
            <div className="flex flex-col md:flex-row gap-4 max-w-2xl">
              <div className="relative flex-grow group">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary/70 transition-colors group-focus-within:text-primary">
                  search
                </span>
                <input
                  className="w-full glass-input border border-white/10 rounded-xl px-12 py-4 font-body-md text-white outline-none transition-all focus:border-primary/50 focus:ring-1 focus:ring-primary/20 placeholder:text-outline/40"
                  placeholder="Cari artikel atau topik..."
                  type="text"
                />
              </div>
              <button className="glass-card px-8 py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-white/5 transition-all border border-white/10">
                <span className="material-symbols-outlined text-body-md text-primary">filter_list</span>
                <span className="font-label-sm text-label-sm text-on-surface">Filter</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content: Articles Grid */}
      <main className="relative z-10 max-w-screen-2xl mx-auto px-container-padding pb-section-gap">
        {/* Category Pill Bar */}
        <div className="flex gap-3 mb-12 overflow-x-auto pb-4 no-scrollbar">
          <button className="px-6 py-2 bg-primary text-on-primary font-label-sm text-label-sm rounded-full whitespace-nowrap shadow-lg shadow-primary/20">
            Semua Artikel
          </button>
          <button className="px-6 py-2 glass-card text-on-surface-variant hover:text-white font-label-sm text-label-sm rounded-full whitespace-nowrap transition-all border border-white/5">
            AI Strategy
          </button>
          <button className="px-6 py-2 glass-card text-on-surface-variant hover:text-white font-label-sm text-label-sm rounded-full whitespace-nowrap transition-all border border-white/5">
            Predictive Maintenance
          </button>
          <button className="px-6 py-2 glass-card text-on-surface-variant hover:text-white font-label-sm text-label-sm rounded-full whitespace-nowrap transition-all border border-white/5">
            Digital Twin
          </button>
          <button className="px-6 py-2 glass-card text-on-surface-variant hover:text-white font-label-sm text-label-sm rounded-full whitespace-nowrap transition-all border border-white/5">
            Industry 4.0
          </button>
          <button className="px-6 py-2 glass-card text-on-surface-variant hover:text-white font-label-sm text-label-sm rounded-full whitespace-nowrap transition-all border border-white/5">
            Sustainability
          </button>
        </div>

        {/* Featured Article (Wide) */}
        <article className="glass-card rounded-2xl overflow-hidden mb-gutter group cursor-pointer backdrop-blur-xl border border-white/10">
          <div className="grid lg:grid-cols-2">
            <div className="relative h-72 lg:h-auto overflow-hidden">
              <img
                alt="Transformasi Data Menjadi Kecerdasan"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src={aiResearchLab}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-transparent lg:opacity-60"></div>
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-primary/20 text-primary-fixed-dim border border-primary/30 px-3 py-1 rounded-full font-label-sm text-label-sm">
                  AI Strategy
                </span>
                <span className="text-outline font-label-sm text-label-sm">• 12 Menit Baca</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg mb-6 group-hover:text-primary transition-colors text-white">
                Transformasi Data Menjadi Kecerdasan: Panduan Strategis 2024
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8 line-clamp-3 leading-relaxed">
                Bagaimana perusahaan industri di Indonesia mengadopsi infrastruktur data generasi terbaru untuk
                mencapai efisiensi operasional yang belum pernah terjadi sebelumnya. Kami mengupas tuntas framework
                implementasi dari level sensor hingga keputusan eksekutif.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center font-bold text-white shadow-lg">
                  A
                </div>
                <div>
                  <p className="font-label-sm text-label-sm font-bold text-white">AIRDE Team</p>
                  <p className="text-[10px] text-outline uppercase tracking-wider">Lead Researcher</p>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {/* Article Card 1 */}
          <article className="glass-card rounded-2xl flex flex-col group cursor-pointer border border-white/5 backdrop-blur-xl">
            <div className="relative h-60 overflow-hidden rounded-t-2xl">
              <img
                alt="Mencegah Downtime Sebelum Terjadi"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src={digitalTwin}
              />
              <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-lg px-3 py-1 rounded-full border border-white/10">
                <span className="text-primary font-label-sm text-label-sm">Predictive Maintenance</span>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-center mb-4">
                <span className="text-outline font-label-sm text-label-sm">8 Menit Baca</span>
                <span className="text-outline font-label-sm text-label-sm">Mar 15, 2024</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-4 group-hover:text-primary transition-colors leading-snug text-white">
                Mencegah Downtime Sebelum Terjadi
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8 line-clamp-2 leading-relaxed">
                Studi kasus penerapan sensor IoT pada turbin gas di Kalimantan Timur yang menghemat jutaan dolar
                melalui deteksi dini anomali.
              </p>
              <div className="mt-auto flex items-center gap-3">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                  account_circle
                </span>
                <span className="font-label-sm text-label-sm text-on-surface">AIRDE Team</span>
              </div>
            </div>
          </article>

          {/* Article Card 2 */}
          <article className="glass-card rounded-2xl flex flex-col group cursor-pointer border border-white/5 backdrop-blur-xl">
            <div className="relative h-60 overflow-hidden rounded-t-2xl">
              <img
                alt="Revolusi Digital Twin di Sektor Manufaktur"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src={enterpriseDashboard}
              />
              <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-lg px-3 py-1 rounded-full border border-white/10">
                <span className="text-primary font-label-sm text-label-sm">Digital Twin</span>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-center mb-4">
                <span className="text-outline font-label-sm text-label-sm">10 Menit Baca</span>
                <span className="text-outline font-label-sm text-label-sm">Mar 12, 2024</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-4 group-hover:text-primary transition-colors leading-snug text-white">
                Revolusi Digital Twin di Sektor Manufaktur
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8 line-clamp-2 leading-relaxed">
                Membangun jembatan antara aset fisik dan representasi virtual untuk simulasi skenario operasional
                yang presisi.
              </p>
              <div className="mt-auto flex items-center gap-3">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                  account_circle
                </span>
                <span className="font-label-sm text-label-sm text-on-surface">AIRDE Team</span>
              </div>
            </div>
          </article>

          {/* Article Card 3 */}
          <article className="glass-card rounded-2xl flex flex-col group cursor-pointer border border-white/5 backdrop-blur-xl">
            <div className="relative h-60 overflow-hidden rounded-t-2xl">
              <img
                alt="AI untuk Target Net Zero Emission"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src={digitalEngineeringVisualization}
              />
              <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-lg px-3 py-1 rounded-full border border-white/10">
                <span className="text-primary font-label-sm text-label-sm">Sustainability</span>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-center mb-4">
                <span className="text-outline font-label-sm text-label-sm">6 Menit Baca</span>
                <span className="text-outline font-label-sm text-label-sm">Mar 08, 2024</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-4 group-hover:text-primary transition-colors leading-snug text-white">
                AI untuk Target Net Zero Emission
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8 line-clamp-2 leading-relaxed">
                Bagaimana algoritma pembelajaran mesin membantu mengoptimalkan konsumsi energi dan mengurangi
                jejak karbon di pabrik skala besar.
              </p>
              <div className="mt-auto flex items-center gap-3">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                  account_circle
                </span>
                <span className="font-label-sm text-label-sm text-on-surface">AIRDE Team</span>
              </div>
            </div>
          </article>

          {/* Article Card 4 (Bento Style) */}
          <article className="glass-card rounded-2xl md:col-span-2 group cursor-pointer border border-white/10 backdrop-blur-xl">
            <div className="flex flex-col md:flex-row h-full">
              <div className="relative w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
                <img
                  alt="Kolaborasi Manusia dan Mesin di Era Kecerdasan Buatan"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src={aiDecisionSupportVisualization}
                />
                <div className="absolute inset-0 bg-gradient-to-l from-background/90 to-transparent hidden md:block"></div>
              </div>
              <div className="p-8 md:w-1/2 flex flex-col justify-center">
                <span className="text-primary font-label-sm text-label-sm mb-4 block font-bold uppercase tracking-widest">
                  Future of Work
                </span>
                <h3 className="font-headline-md text-headline-md mb-4 group-hover:text-primary transition-colors text-white leading-snug">
                  Kolaborasi Manusia dan Mesin di Era Kecerdasan Buatan
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed">
                  Mempersiapkan tenaga kerja industri Indonesia untuk masa depan di mana AI bukan hanya alat,
                  melainkan mitra kolaboratif dalam pengambilan keputusan.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-outline font-label-sm text-label-sm">15 Menit Baca</span>
                  <button className="text-primary flex items-center gap-2 font-label-sm text-label-sm font-bold group/btn">
                    Baca Selengkapnya
                    <span className="material-symbols-outlined transition-transform group-hover/btn:translate-x-1">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </article>

          {/* CTA Card / Newsletter */}
          <div className="bg-primary/90 rounded-2xl p-8 flex flex-col justify-center relative overflow-hidden shadow-2xl shadow-primary/20">
            <div className="absolute top-0 right-0 p-4 opacity-10 scale-150 rotate-12">
              <span className="material-symbols-outlined text-[140px] text-white">mail</span>
            </div>
            <div className="relative z-10">
              <h3 className="font-headline-md text-headline-md text-white mb-4">Dapatkan Wawasan Langsung</h3>
              <p className="font-body-md text-body-md text-white/90 mb-8 leading-relaxed">
                Berlangganan buletin mingguan kami untuk tren AI industri terbaru.
              </p>
              <div className="space-y-4">
                <input
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-3 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/40 backdrop-blur-sm transition-all"
                  placeholder="Email Anda"
                  type="email"
                />
                <button className="w-full bg-white text-primary-container font-bold py-3 rounded-xl hover:bg-white/90 transition-all shadow-lg active:scale-[0.98]">
                  Langganan
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-section-gap flex justify-center items-center gap-4">
          <button className="w-12 h-12 flex items-center justify-center rounded-full glass-card border border-white/10 text-on-surface hover:text-primary hover:border-primary transition-all">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <div className="flex gap-2">
            <button className="w-12 h-12 rounded-full bg-primary text-on-primary font-bold shadow-lg shadow-primary/20">
              1
            </button>
            <button className="w-12 h-12 rounded-full glass-card hover:bg-white/5 text-on-surface-variant font-label-sm text-label-sm transition-all border border-white/5">
              2
            </button>
            <button className="w-12 h-12 rounded-full glass-card hover:bg-white/5 text-on-surface-variant font-label-sm text-label-sm transition-all border border-white/5">
              3
            </button>
            <span className="text-outline px-2 flex items-end pb-3">...</span>
            <button className="w-12 h-12 rounded-full glass-card hover:bg-white/5 text-on-surface-variant font-label-sm text-label-sm transition-all border border-white/5">
              8
            </button>
          </div>
          <button className="w-12 h-12 flex items-center justify-center rounded-full glass-card border border-white/10 text-on-surface hover:text-primary hover:border-primary transition-all">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </main>

      {/* Footer */}
    </>
  );
}
