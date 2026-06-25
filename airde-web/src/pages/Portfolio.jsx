import { useEffect } from "react";
import ContactCta from "../components/ContactCta";
import DocumentLibrary from "../components/DocumentLibrary";

const PORTFOLIO_SITES = [
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

export default function Portfolio() {
  useEffect(() => {
    document.title = "Portofolio | AIRDE Industrial AI";
  }, []);

  return (
    <>
      <main className="pt-24">
        {/* Hero */}
        <section className="relative py-section-gap px-container-padding overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none"></div>
          <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] bg-primary/10 blur-[150px] rounded-full pointer-events-none"></div>
          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-high border border-outline-variant/30 text-label-sm font-label-sm text-primary uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-primary pulse-dot"></span>
              Portofolio
            </div>
            <h1 className="font-display-lg text-display-lg leading-tight text-on-surface">
              Rekam Jejak Nyata di Industri Padat Aset.
            </h1>
            <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              Dari lepas pantai hingga lini produksi, AIRDE telah membantu organisasi mengubah data operasional
              menjadi keputusan yang lebih cepat, lebih aman, dan lebih bernilai.
            </p>
          </div>
        </section>

        {/* Portfolio Sites */}
        <section className="py-section-gap px-container-padding bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 max-w-2xl">
              <p className="text-primary font-bold tracking-[0.3em] uppercase text-sm mb-4">Karya Kami</p>
              <h2 className="font-headline-md text-display-lg text-on-surface">Aplikasi yang Telah Kami Bangun</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {PORTFOLIO_SITES.map((site) => (
                <a
                  key={site.url}
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-surface-container-lowest/60 border border-outline-variant/20 rounded-2xl overflow-hidden hover:border-primary/50 transition-all shadow-sm glass-card"
                >
                  {/* Fake browser chrome */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-surface-container-high border-b border-outline-variant/20">
                    <span className="w-2.5 h-2.5 rounded-full bg-error/70"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-secondary/70"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-tertiary/70"></span>
                    <span className="ml-2 flex-1 truncate text-xs text-on-surface-variant bg-surface-container-lowest rounded px-2 py-1">
                      {site.url}
                    </span>
                  </div>
                  {/* Live preview */}
                  <div className="relative h-72 bg-surface-container-lowest overflow-hidden">
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
          </div>
        </section>

        {/* Project Documents */}
        <DocumentLibrary
          category="portfolio"
          title="Dokumen Proyek"
          description="Laporan, studi kasus, dan dokumentasi teknis proyek AIRDE dalam format PDF — dapat dibaca langsung atau diunduh."
        />

        <ContactCta
          title="Jadikan Proyek Anda Berikutnya yang Berhasil."
          description="Diskusikan kebutuhan operasional Anda dengan tim ahli kami dan lihat bagaimana AIRDE dapat memberikan hasil serupa."
        />
      </main>
    </>
  );
}
