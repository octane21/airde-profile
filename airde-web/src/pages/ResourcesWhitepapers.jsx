import { useEffect } from "react";
import { aiResearchLab, digitalTwin, enterpriseDashboard } from "../assets/images";

export default function ResourcesWhitepapers() {
  useEffect(() => {
    document.title = "AIRDE | Whitepapers Teknikal";
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="intelligence-layer opacity-40"></div>
        <div className="max-w-screen-2xl mx-auto px-container-padding relative z-10">
          <div className="max-w-3xl">
            <span className="font-label-sm text-label-sm text-primary tracking-[0.2em] mb-4 block">
              RESOURS TEKNIKAL
            </span>
            <h1 className="font-display-lg text-display-lg text-on-surface mb-6 leading-tight">
              Whitepaper &amp; Analisis <br />
              <span className="text-primary">Intelligence Asset.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-2xl">
              Pelajari bagaimana infrastruktur digital kami mengoptimalkan efisiensi industri global melalui
              integrasi AI dan pemrosesan data real-time.
            </p>
            <div className="data-glow-line opacity-30"></div>
          </div>
        </div>
      </section>

      {/* Main Content: Whitepaper Grid */}
      <main className="max-w-screen-2xl mx-auto px-container-padding py-section-gap relative">
        {/* Filter & Search Layer */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div className="flex flex-wrap gap-3">
            <button className="px-4 py-2 rounded-lg bg-primary text-on-primary font-label-sm text-label-sm shadow-lg shadow-primary/20">
              Semua Dokumen
            </button>
            <button className="px-4 py-2 rounded-lg glass-button text-on-surface font-label-sm text-label-sm">
              Analitik Prediktif
            </button>
            <button className="px-4 py-2 rounded-lg glass-button text-on-surface font-label-sm text-label-sm">
              Infrastruktur Edge
            </button>
            <button className="px-4 py-2 rounded-lg glass-button text-on-surface font-label-sm text-label-sm">
              Optimasi Energi
            </button>
          </div>
          <div className="relative w-full md:w-80">
            <input
              className="w-full bg-white/5 border-0 border-b border-outline-variant focus:ring-0 focus:border-primary text-on-surface placeholder:text-outline-variant py-3 pr-10"
              placeholder="Cari whitepaper..."
              type="text"
            />
            <span className="material-symbols-outlined absolute right-3 top-3 text-outline-variant">search</span>
          </div>
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <article className="glass-card flex flex-col group rounded-xl overflow-hidden">
            <div className="relative aspect-[4/3] overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage:
                    `url(${aiResearchLab})`,
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#041329] to-transparent opacity-80"></div>
              <div className="absolute top-4 left-4">
                <span className="bg-secondary-container/80 backdrop-blur-md text-on-secondary-container font-label-sm text-label-sm px-3 py-1 rounded-full flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary led-pulse"></span>
                  Baru
                </span>
              </div>
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <span className="font-label-sm text-label-sm text-primary mb-2">INTELLIGENCE LAYER</span>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3 group-hover:text-primary transition-colors">
                Revolusi Pemeliharaan Prediktif 2024
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-3">
                Analisis mendalam mengenai penggunaan neural networks untuk memprediksi kegagalan mesin turbin
                sebelum terjadi, mengurangi downtime hingga 45%.
              </p>
              <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-outline flex items-center gap-1">
                  <span className="material-symbols-outlined text-[18px]">description</span>
                  PDF, 12 MB
                </span>
                <button className="text-primary font-label-sm text-label-sm flex items-center gap-1 hover:gap-2 transition-all">
                  DOWNLOAD <span className="material-symbols-outlined text-[18px]">download</span>
                </button>
              </div>
            </div>
          </article>

          {/* Card 2 */}
          <article className="glass-card flex flex-col group rounded-xl overflow-hidden">
            <div className="relative aspect-[4/3] overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage:
                    `url(${digitalTwin})`,
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#041329] to-transparent opacity-80"></div>
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <span className="font-label-sm text-label-sm text-primary mb-2">EDGE COMPUTING</span>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3 group-hover:text-primary transition-colors">
                Arsitektur Edge untuk Pabrik Pintar
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-3">
                Bagaimana pemrosesan data di lokasi (on-site) mempercepat pengambilan keputusan kritis tanpa
                tergantung pada latensi koneksi cloud global.
              </p>
              <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-outline flex items-center gap-1">
                  <span className="material-symbols-outlined text-[18px]">description</span>
                  PDF, 8.5 MB
                </span>
                <button className="text-primary font-label-sm text-label-sm flex items-center gap-1 hover:gap-2 transition-all">
                  DOWNLOAD <span className="material-symbols-outlined text-[18px]">download</span>
                </button>
              </div>
            </div>
          </article>

          {/* Card 3 */}
          <article className="glass-card flex flex-col group rounded-xl overflow-hidden">
            <div className="relative aspect-[4/3] overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage:
                    `url(${enterpriseDashboard})`,
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#041329] to-transparent opacity-80"></div>
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <span className="font-label-sm text-label-sm text-primary mb-2">SUSTAINABILITY</span>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3 group-hover:text-primary transition-colors">
                Optimasi Energi Berbasis AI
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-3">
                Studi kasus pada 5 fasilitas manufaktur terkemuka yang berhasil menekan konsumsi energi hingga 22%
                menggunakan algoritma AIRDE.
              </p>
              <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-outline flex items-center gap-1">
                  <span className="material-symbols-outlined text-[18px]">description</span>
                  PDF, 15 MB
                </span>
                <button className="text-primary font-label-sm text-label-sm flex items-center gap-1 hover:gap-2 transition-all">
                  DOWNLOAD <span className="material-symbols-outlined text-[18px]">download</span>
                </button>
              </div>
            </div>
          </article>
        </div>

        {/* Newsletter Section */}
        <section className="max-w-screen-2xl mx-auto px-container-padding py-section-gap">
          <div className="glass-card p-10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative">
            <div className="relative z-10 max-w-xl text-center md:text-left">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Tetap Terinformasi</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Dapatkan wawasan teknis mingguan mengenai AI industri dan optimasi aset langsung di kotak masuk
                Anda.
              </p>
            </div>
            <div className="relative z-10 w-full max-w-md">
              <div className="flex gap-2 p-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl">
                <input
                  className="flex-grow bg-transparent border-0 focus:ring-0 text-on-surface px-4 py-2"
                  placeholder="Alamat email Anda"
                  type="email"
                />
                <button className="bg-primary text-on-primary font-label-sm text-label-sm px-8 py-3 rounded-lg hover:brightness-110 transition-all shadow-lg shadow-primary/20">
                  Langganan
                </button>
              </div>
            </div>
            {/* Background Graphic */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/10 blur-[100px] rounded-full"></div>
            <div className="absolute -left-20 -top-20 w-80 h-80 bg-secondary/5 blur-[120px] rounded-full"></div>
          </div>
        </section>
      </main>

      {/* Footer */}
    </>
  );
}
