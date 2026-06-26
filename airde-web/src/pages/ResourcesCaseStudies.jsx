import { useEffect } from "react";
import { aiResearchLab, digitalTwin, enterpriseDashboard } from "../assets/images";

export default function ResourcesCaseStudies() {
  useEffect(() => {
    document.title = "AIRDE Case Studies | AIRDE";
  }, []);

  return (
    <>
      <main className="pt-24 min-h-screen relative">
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-primary/10 blur-[160px] rounded-full"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[900px] h-[900px] bg-primary-container/10 blur-[180px] rounded-full"></div>
          <div className="absolute inset-0 mesh-grid opacity-40"></div>
        </div>
        <section className="relative z-10 px-container-padding max-w-screen-2xl mx-auto py-12">
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-16 bg-primary/60"></div>
              <span className="text-primary font-label-sm text-label-sm tracking-[0.2em] uppercase font-bold">
                Studi Kasus Industri
              </span>
            </div>
            <h1 className="font-display-lg text-display-lg mb-8 leading-[1.1] max-w-4xl tracking-tight">
              Mengubah <span className="text-gradient">Data Kompleks</span> Menjadi Keunggulan Strategis.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant/90 max-w-2xl leading-relaxed">
              Pelajari bagaimana AIRDE membantu pemimpin industri global mengoptimalkan aset, mengurangi risiko
              operasional, dan mencapai efisiensi biaya yang belum pernah terjadi sebelumnya.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-8 mb-16 items-start md:items-center justify-between">
            <div className="flex flex-wrap gap-4">
              <button className="glass-filter glass-filter-active px-8 py-2.5 rounded-full font-label-sm text-label-sm font-semibold tracking-wide">
                Semua Industri
              </button>
              <button className="glass-filter px-8 py-2.5 rounded-full text-on-surface-variant font-label-sm text-label-sm font-semibold tracking-wide">
                Oil &amp; Gas
              </button>
              <button className="glass-filter px-8 py-2.5 rounded-full text-on-surface-variant font-label-sm text-label-sm font-semibold tracking-wide">
                Manufaktur
              </button>
              <button className="glass-filter px-8 py-2.5 rounded-full text-on-surface-variant font-label-sm text-label-sm font-semibold tracking-wide">
                Energi Terbarukan
              </button>
            </div>
            <div className="relative w-full md:w-80">
              <input
                className="w-full bg-white/5 border-b border-white/10 focus:border-primary focus:bg-white/10 transition-all py-3 px-4 text-body-md outline-none text-on-surface rounded-t-lg"
                placeholder="Cari solusi..."
                type="text"
              />
              <span className="material-symbols-outlined absolute right-3 top-3.5 text-on-surface-variant/60">
                search
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1: Oil & Gas */}
            <div className="glass-card rounded-xl overflow-hidden flex flex-col group">
              <div className="relative h-64 overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage:
                      `url(${aiResearchLab})`,
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-black/40 backdrop-blur-md px-3 py-1.5 rounded border border-primary/30 text-primary font-label-sm text-label-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary led-pulse shadow-[0_0_8px_rgba(180,197,255,0.8)]"></span>
                    LIVE MONITORING
                  </span>
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="mb-4 flex justify-between items-center">
                  <span className="text-primary font-bold text-label-sm uppercase tracking-widest">Oil &amp; Gas</span>
                  <span className="text-on-surface-variant/60 font-label-sm text-label-sm">2024</span>
                </div>
                <h3 className="font-headline-md text-headline-md mb-4 text-on-surface leading-snug group-hover:text-primary transition-colors">
                  Optimalisasi Pemeliharaan Prediktif Kilang Lepas Pantai
                </h3>
                <p className="text-on-surface-variant font-body-md text-body-md mb-8 line-clamp-3">
                  Implementasi Digital Twin real-time untuk mendeteksi anomali pada turbin gas sebelum kegagalan
                  kritis terjadi.
                </p>
                <div className="grid grid-cols-3 gap-3 mb-8">
                  <div className="text-center p-3 rounded bg-white/5 border border-white/10">
                    <div className="text-primary font-extrabold text-body-lg">24%</div>
                    <div className="text-[10px] uppercase text-on-surface-variant/80 mt-1 font-bold">Reliability</div>
                  </div>
                  <div className="text-center p-3 rounded bg-white/5 border border-white/10">
                    <div className="text-error font-extrabold text-body-lg">18%</div>
                    <div className="text-[10px] uppercase text-on-surface-variant/80 mt-1 font-bold">Risk ↓</div>
                  </div>
                  <div className="text-center p-3 rounded bg-white/5 border border-white/10">
                    <div className="text-secondary font-extrabold text-body-lg">$2M</div>
                    <div className="text-[10px] uppercase text-on-surface-variant/80 mt-1 font-bold">Saving</div>
                  </div>
                </div>
                <a className="mt-auto flex items-center gap-2 text-primary font-bold group/btn" href="#">
                  Baca Selengkapnya
                  <span className="material-symbols-outlined transition-transform group-hover/btn:translate-x-1">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>

            {/* Card 2: Manufacturing */}
            <div className="glass-card rounded-xl overflow-hidden flex flex-col group">
              <div className="relative h-64 overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage:
                      `url(${digitalTwin})`,
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="mb-4 flex justify-between items-center">
                  <span className="text-primary font-bold text-label-sm uppercase tracking-widest">Manufaktur</span>
                  <span className="text-on-surface-variant/60 font-label-sm text-label-sm">2023</span>
                </div>
                <h3 className="font-headline-md text-headline-md mb-4 text-on-surface leading-snug group-hover:text-primary transition-colors">
                  Efisiensi Rantai Pasok Otomatis Global
                </h3>
                <p className="text-on-surface-variant font-body-md text-body-md mb-8 line-clamp-3">
                  Sinkronisasi logistik cerdas menggunakan AI untuk mengurangi waktu henti produksi di 12 lokasi
                  pabrik.
                </p>
                <div className="grid grid-cols-3 gap-3 mb-8">
                  <div className="text-center p-3 rounded bg-white/5 border border-white/10">
                    <div className="text-primary font-extrabold text-body-lg">31%</div>
                    <div className="text-[10px] uppercase text-on-surface-variant/80 mt-1 font-bold">Reliability</div>
                  </div>
                  <div className="text-center p-3 rounded bg-white/5 border border-white/10">
                    <div className="text-error font-extrabold text-body-lg">40%</div>
                    <div className="text-[10px] uppercase text-on-surface-variant/80 mt-1 font-bold">Risk ↓</div>
                  </div>
                  <div className="text-center p-3 rounded bg-white/5 border border-white/10">
                    <div className="text-secondary font-extrabold text-body-lg">15%</div>
                    <div className="text-[10px] uppercase text-on-surface-variant/80 mt-1 font-bold">Cost ↓</div>
                  </div>
                </div>
                <a className="mt-auto flex items-center gap-2 text-primary font-bold group/btn" href="#">
                  Baca Selengkapnya
                  <span className="material-symbols-outlined transition-transform group-hover/btn:translate-x-1">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>

            {/* Card 3: Energy */}
            <div className="glass-card rounded-xl overflow-hidden flex flex-col group">
              <div className="relative h-64 overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage:
                      `url(${enterpriseDashboard})`,
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="mb-4 flex justify-between items-center">
                  <span className="text-primary font-bold text-label-sm uppercase tracking-widest">
                    Energi Terbarukan
                  </span>
                  <span className="text-on-surface-variant/60 font-label-sm text-label-sm">2024</span>
                </div>
                <h3 className="font-headline-md text-headline-md mb-4 text-on-surface leading-snug group-hover:text-primary transition-colors">
                  Prediksi Output Energi Berbasis Kondisi Cuaca
                </h3>
                <p className="text-on-surface-variant font-body-md text-body-md mb-8 line-clamp-3">
                  Model ML canggih untuk memaksimalkan transmisi energi dari ladang angin berdasarkan sensor
                  atmosferik.
                </p>
                <div className="grid grid-cols-3 gap-3 mb-8">
                  <div className="text-center p-3 rounded bg-white/5 border border-white/10">
                    <div className="text-primary font-extrabold text-body-lg">12%</div>
                    <div className="text-[10px] uppercase text-on-surface-variant/80 mt-1 font-bold">Reliability</div>
                  </div>
                  <div className="text-center p-3 rounded bg-white/5 border border-white/10">
                    <div className="text-error font-extrabold text-body-lg">25%</div>
                    <div className="text-[10px] uppercase text-on-surface-variant/80 mt-1 font-bold">Risk ↓</div>
                  </div>
                  <div className="text-center p-3 rounded bg-white/5 border border-white/10">
                    <div className="text-secondary font-extrabold text-body-lg">22%</div>
                    <div className="text-[10px] uppercase text-on-surface-variant/80 mt-1 font-bold">Profit ↑</div>
                  </div>
                </div>
                <a className="mt-auto flex items-center gap-2 text-primary font-bold group/btn" href="#">
                  Baca Selengkapnya
                  <span className="material-symbols-outlined transition-transform group-hover/btn:translate-x-1">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-24 glass-card rounded-2xl p-12 overflow-hidden relative glow-soft">
            <div className="absolute top-0 right-0 w-2/3 h-full opacity-30 pointer-events-none">
              <div className="w-full h-full bg-gradient-to-l from-primary-container/40 via-primary/10 to-transparent"></div>
            </div>
            <div className="relative z-10 max-w-3xl">
              <h2 className="font-headline-lg text-headline-lg mb-6 leading-tight">
                Siap untuk Mengoptimalkan Aset Anda?
              </h2>
              <p className="text-on-surface-variant font-body-lg text-body-lg mb-10 max-w-2xl">
                Dapatkan konsultasi teknis gratis dengan pakar industri kami dan temukan bagaimana platform AIRDE
                dapat diadaptasi untuk tantangan spesifik Anda.
              </p>
              <div className="flex flex-wrap gap-6">
                <button className="px-10 py-4 rounded bg-primary text-on-primary font-bold hover:brightness-110 transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)]">
                  Hubungi Tim Penjualan
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
    </>
  );
}
