import { useEffect } from "react";
import { aiResearchLab } from "../assets/images";

export default function ResourcesDownloads() {
  useEffect(() => {
    document.title = "AIRDE Downloads & Media Center | AIRDE";
  }, []);

  return (
    <>
      <main className="relative pt-24 min-h-screen industrial-overlay navy-gradient">
        <section className="max-w-screen-2xl mx-auto px-container-padding relative z-10">
          {/* Hero Header */}
          <div className="py-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="led-pulse"></div>
                <span className="font-label-sm text-label-sm tracking-[0.2em] text-primary uppercase font-bold">
                  Intelligence Center
                </span>
              </div>
              <h1 className="font-display-lg text-display-lg text-white mb-6 leading-[1.1]">
                Pusat Unduhan &amp; Media
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-2xl">
                Akses dokumentasi teknis, lembar data industri, dan rilis berita terbaru dari AIRDE. Sumber daya
                terpusat untuk efisiensi operasional Anda.
              </p>
            </div>
            <div className="flex gap-2">
              <div className="glass-card px-5 py-3 rounded-xl flex items-center gap-3">
                <span
                  className="material-symbols-outlined text-primary text-2xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  cloud_download
                </span>
                <div>
                  <p className="text-[11px] uppercase font-bold text-outline tracking-wider">Total Assets</p>
                  <p className="font-label-sm text-white font-bold">128+ Files</p>
                </div>
              </div>
            </div>
          </div>

          {/* Search & Filter Bar */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-section-gap">
            <div className="md:col-span-3 glass-card rounded-2xl p-5 flex items-center gap-4">
              <span className="material-symbols-outlined text-primary/60">search</span>
              <input
                className="bg-transparent border-none focus:ring-0 text-white w-full font-body-md placeholder:text-outline/50"
                placeholder="Cari dokumen, spesifikasi teknis, atau berita..."
                type="text"
              />
            </div>
            <button className="glass-card rounded-2xl p-5 flex items-center justify-between group">
              <span className="font-label-sm text-label-sm font-bold text-white/80">Filter Kategori</span>
              <span className="material-symbols-outlined text-primary group-hover:rotate-180 transition-transform">
                filter_list
              </span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Downloads Section */}
            <div className="lg:col-span-7 space-y-8">
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <h2 className="font-headline-md text-headline-md text-white flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg">
                    description
                  </span>
                  Dokumentasi Teknis
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-5">
                {/* Download Card 1 */}
                <div className="glass-card p-6 rounded-2xl flex items-center gap-6 group cursor-pointer">
                  <div className="w-16 h-16 bg-error-container/10 border border-error/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-error text-4xl">picture_as_pdf</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-headline-sm text-xl text-white mb-2 group-hover:text-primary transition-colors">
                      Panduan Implementasi AI 2024
                    </h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed mb-3">
                      Spesifikasi integrasi untuk sistem monitoring aset industri.
                    </p>
                    <div className="flex gap-5">
                      <span className="font-label-sm text-[11px] text-outline flex items-center gap-1.5 font-bold">
                        <span className="material-symbols-outlined text-sm">database</span> 12.4 MB
                      </span>
                      <span className="font-label-sm text-[11px] text-outline flex items-center gap-1.5 font-bold">
                        <span className="material-symbols-outlined text-sm">event</span> 12 MAR 2024
                      </span>
                    </div>
                  </div>
                  <button className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all shadow-lg">
                    <span className="material-symbols-outlined">download</span>
                  </button>
                </div>

                {/* Download Card 2 */}
                <div className="glass-card p-6 rounded-2xl flex items-center gap-6 group cursor-pointer">
                  <div className="w-16 h-16 bg-primary-container/10 border border-primary/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-primary text-4xl">description</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-headline-sm text-xl text-white mb-2 group-hover:text-primary transition-colors">
                      Brosur Solusi Predictive Maintenance
                    </h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed mb-3">
                      Ringkasan fitur dan manfaat platform AIRDE untuk manufaktur.
                    </p>
                    <div className="flex gap-5">
                      <span className="font-label-sm text-[11px] text-outline flex items-center gap-1.5 font-bold">
                        <span className="material-symbols-outlined text-sm">database</span> 4.8 MB
                      </span>
                      <span className="font-label-sm text-[11px] text-outline flex items-center gap-1.5 font-bold">
                        <span className="material-symbols-outlined text-sm">event</span> 05 FEB 2024
                      </span>
                    </div>
                  </div>
                  <button className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all shadow-lg">
                    <span className="material-symbols-outlined">download</span>
                  </button>
                </div>

                {/* Download Card 3 */}
                <div className="glass-card p-6 rounded-2xl flex items-center gap-6 group cursor-pointer">
                  <div className="w-16 h-16 bg-secondary-container/10 border border-secondary/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-secondary text-4xl">table_chart</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-headline-sm text-xl text-white mb-2 group-hover:text-primary transition-colors">
                      Dataset Komparasi Efisiensi Turbin
                    </h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed mb-3">
                      Data mentah untuk benchmarking performa turbin gas (XLSX).
                    </p>
                    <div className="flex gap-5">
                      <span className="font-label-sm text-[11px] text-outline flex items-center gap-1.5 font-bold">
                        <span className="material-symbols-outlined text-sm">database</span> 28.1 MB
                      </span>
                      <span className="font-label-sm text-[11px] text-outline flex items-center gap-1.5 font-bold">
                        <span className="material-symbols-outlined text-sm">event</span> 20 JAN 2024
                      </span>
                    </div>
                  </div>
                  <button className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all shadow-lg">
                    <span className="material-symbols-outlined">download</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Media Section */}
            <div className="lg:col-span-5 space-y-8">
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <h2 className="font-headline-md text-headline-md text-white flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary bg-secondary/10 p-2 rounded-lg">
                    newspaper
                  </span>
                  Berita &amp; Media
                </h2>
              </div>
              <div className="space-y-8 relative before:content-[''] before:absolute before:left-0 before:top-4 before:bottom-0 before:w-[1px] before:bg-white/10 pl-8">
                {/* Timeline Item 1 */}
                <div className="relative group">
                  <div className="absolute -left-[36.5px] top-1.5 w-4 h-4 rounded-full bg-surface border-2 border-primary z-10 ring-4 ring-primary/10 transition-all group-hover:scale-125"></div>
                  <div className="flex flex-col gap-4">
                    <div
                      className="w-full h-48 bg-cover bg-center rounded-2xl border border-white/5 overflow-hidden group-hover:border-primary/30 transition-all"
                      style={{
                        backgroundImage:
                          `url(${aiResearchLab})`,
                      }}
                    >
                      <div className="w-full h-full bg-surface/20 group-hover:bg-transparent transition-all"></div>
                    </div>
                    <div>
                      <span className="font-label-sm text-secondary uppercase tracking-widest font-bold text-[10px]">
                        15 APRIL 2024
                      </span>
                      <h3 className="font-headline-sm text-lg text-white group-hover:text-primary transition-colors mt-1 mb-2">
                        AIRDE Ekspansi ke Sektor Energi Terbarukan
                      </h3>
                      <p className="text-on-surface-variant text-sm line-clamp-2 leading-relaxed">
                        Kemitraan baru dengan penyedia turbin angin global untuk mengoptimalkan output energi
                        menggunakan algoritma prediktif kami.
                      </p>
                      <a
                        className="inline-flex items-center gap-2 text-primary text-sm font-bold mt-4 hover:gap-4 transition-all"
                        href="#"
                      >
                        Baca Selengkapnya <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Timeline Item 2 */}
                <div className="relative group">
                  <div className="absolute -left-[36.5px] top-1.5 w-4 h-4 rounded-full bg-surface border-2 border-white/20 z-10 group-hover:border-primary transition-all"></div>
                  <div className="flex flex-col gap-1">
                    <span className="font-label-sm text-secondary uppercase tracking-widest font-bold text-[10px]">
                      02 APRIL 2024
                    </span>
                    <h3 className="font-headline-sm text-lg text-white group-hover:text-primary transition-colors mt-1 mb-2">
                      Penghargaan Inovasi Industri 4.0
                    </h3>
                    <p className="text-on-surface-variant text-sm line-clamp-2 leading-relaxed">
                      AIRDE menerima penghargaan bergengsi atas kontribusinya dalam digitalisasi rantai pasok
                      industri berat.
                    </p>
                    <a
                      className="inline-flex items-center gap-2 text-primary text-sm font-bold mt-3 hover:gap-4 transition-all"
                      href="#"
                    >
                      Baca Selengkapnya <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Newsletter Subscription */}
              <div className="glass-card p-8 rounded-[2rem] border-dashed border-primary/20 mt-12 bg-primary/5">
                <h4 className="font-headline-sm text-xl text-white mb-3">Berlangganan Insight</h4>
                <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">
                  Dapatkan update teknis dan rilis media langsung di email Anda setiap minggu.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    className="flex-grow bg-surface-container-lowest border border-white/10 rounded-xl px-5 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary text-white outline-none"
                    placeholder="email@perusahaan.com"
                    type="email"
                  />
                  <button className="bg-primary text-on-primary px-6 py-3 rounded-xl font-bold text-sm shadow-lg shadow-primary/20 hover:brightness-110 active:scale-95 transition-all">
                    Kirim
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Custom Documentation CTA */}
        <section className="max-w-screen-2xl mx-auto px-container-padding py-24">
          <div className="glass-card rounded-[3rem] p-16 text-center overflow-hidden relative border border-primary/10">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
            <div className="relative z-10">
              <h2 className="font-display-lg text-display-lg text-white mb-8 leading-tight">
                Butuh Dokumentasi Kustom?
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12">
                Tim teknis kami siap membantu Anda dengan integrasi spesifik atau data teknis yang tidak tersedia
                di direktori publik.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <button className="bg-primary text-on-primary px-10 py-5 rounded-2xl font-bold hover:scale-105 hover:shadow-[0_20px_50px_rgba(37,99,235,0.3)] transition-all">
                  Hubungi Tim Teknis
                </button>
                <button className="border border-white/10 bg-white/5 backdrop-blur-md text-white px-10 py-5 rounded-2xl font-bold hover:bg-white/10 transition-all">
                  Jadwalkan Konsultasi
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
