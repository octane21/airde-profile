import { useEffect } from "react";
import ContactCta from "../components/ContactCta";

export default function Manufacturing() {
  useEffect(() => {
    document.title = "AIRDE | Manufacturing Industries";
  }, []);

  return (
    <>
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          {/* Background Asset */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent z-10"></div>
            <img
              alt="A futuristic and sophisticated industrial factory floor at night, featuring advanced robotic arms working on an assembly line. The scene is illuminated by glowing blue data streams and holographic interfaces overlaying the machinery. The aesthetic is clean, cinematic, and Navy Electronic, with deep blue and teal tones and high-tech performance highlights."
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAS71fkEm0NwjkfJMifFJzGE0kvy7ANwGv-c9gogmf_nTWWQfj31VxbMhBKWCPmOFFrJCrM4GFE-5-gE9wAXko_md-zW4tTL6fXo6D2IEDcqya7R3_JvzjSryF--iooJmekS45mod-jSoaXrGSD_T_jtde0xEuCIdEHdd_mtFBsFULP4XciZRF5Zwf2q-ibJDQJ-O034VH7pa7R6-yTqxKWHJIuIWmmzxc5EjetkkMBjpQU3vbY28rk-vRqEZkDIzyBct9UAoh-4j_r"
            />
          </div>
          <div className="relative z-20 max-w-container-max mx-auto px-lg w-full">
            <div className="max-w-3xl">
              <span className="inline-block font-label-sm text-label-sm text-tertiary bg-tertiary/10 px-md py-xs rounded-full mb-md tracking-widest">
                INDUSTRIES
              </span>
              <h1 className="font-display-lg text-display-lg md:text-display-lg mb-lg text-white leading-tight">
                Membangun Masa Depan Manufaktur yang Responsif.
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl leading-relaxed">
                Transformasi pabrik Anda menjadi fasilitas pintar berbasis AI yang mengoptimalkan energi, kualitas,
                dan throughput secara real-time.
              </p>
            </div>
          </div>
          {/* Live Indicator */}
          <div className="absolute bottom-xl right-lg z-20 hidden lg:flex items-center gap-md bg-surface-container/80 backdrop-blur-md p-md rounded-xl border border-outline-variant/30">
            <div className="w-3 h-3 bg-tertiary rounded-full status-pulse"></div>
            <span className="font-label-sm text-label-sm">FACTORY_01: STATUS_OPTIMAL</span>
          </div>
        </section>

        {/* The Smart Factory Core */}
        <section className="py-xl bg-surface-container-lowest">
          <div className="max-w-container-max mx-auto px-lg">
            <div className="text-center mb-xl">
              <h2 className="font-display-lg text-display-lg text-white mb-md">The Smart Factory Core</h2>
              <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
              {/* OEE Card */}
              <div className="glass-card p-xl rounded-xl group hover:border-primary transition-all">
                <div className="w-12 h-12 rounded-lg bg-primary-container/20 flex items-center justify-center mb-lg">
                  <span className="material-symbols-outlined text-primary text-3xl">precision_manufacturing</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-white mb-md">OEE Improvement</h3>
                <p className="text-on-surface-variant mb-lg">
                  Maksimalkan efektivitas peralatan keseluruhan dengan analisis downtime prediktif dan deteksi
                  bottleneck otomatis.
                </p>
                <ul className="space-y-sm text-label-sm font-label-sm text-on-surface">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> REAL-TIME MONITORING
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> PREDICTIVE MAINTENANCE
                  </li>
                </ul>
              </div>
              {/* Quality Control */}
              <div className="glass-card p-xl rounded-xl group hover:border-tertiary transition-all">
                <div className="w-12 h-12 rounded-lg bg-tertiary/10 flex items-center justify-center mb-lg">
                  <span className="material-symbols-outlined text-tertiary text-3xl">verified</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-white mb-md">Quality Control</h3>
                <p className="text-on-surface-variant mb-lg">
                  Inspeksi visual bertenaga AI untuk mendeteksi anomali produk secara instan sebelum mencapai ujung
                  jalur produksi.
                </p>
                <ul className="space-y-sm text-label-sm font-label-sm text-on-surface">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-tertiary rounded-full"></span> ZERO-DEFECT STRATEGY
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-tertiary rounded-full"></span> AUTOMATED INSPECTION
                  </li>
                </ul>
              </div>
              {/* Supply Chain */}
              <div className="glass-card p-xl rounded-xl group hover:border-secondary transition-all">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-lg">
                  <span className="material-symbols-outlined text-secondary text-3xl">sync_alt</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-white mb-md">Supply Chain Sync</h3>
                <p className="text-on-surface-variant mb-lg">
                  Sinkronisasi inventaris dan produksi secara otomatis berdasarkan permintaan pasar yang fluktuatif.
                </p>
                <ul className="space-y-sm text-label-sm font-label-sm text-on-surface">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span> DYNAMIC SCHEDULING
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span> INVENTORY OPTIMIZATION
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Command Center View */}
        <section className="py-xl bg-surface">
          <div className="max-w-container-max mx-auto px-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
              <div>
                <span className="font-label-sm text-label-sm text-primary mb-md block">DASHBOARD INTELLIGENCE</span>
                <h2 className="font-display-lg text-display-lg text-white mb-lg leading-tight">
                  Command Center View
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl">
                  Visualisasikan seluruh ekosistem manufaktur Anda dalam satu antarmuka terintegrasi. Pantau
                  kesehatan aset, skor risiko, dan tren keandalan secara real-time untuk pengambilan keputusan yang
                  presisi.
                </p>
                <div className="space-y-md">
                  <div className="flex items-start gap-md p-md rounded-lg bg-surface-container-high border-l-4 border-primary">
                    <span className="material-symbols-outlined text-primary">insights</span>
                    <div>
                      <div className="font-bold text-white">AI Insights</div>
                      <div className="text-on-surface-variant text-sm">
                        Rekomendasi inspeksi otomatis berdasarkan tren keausan komponen.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-md p-md rounded-lg bg-surface-container-high border-l-4 border-tertiary">
                    <span className="material-symbols-outlined text-tertiary">warning</span>
                    <div>
                      <div className="font-bold text-white">Risk Heat Map</div>
                      <div className="text-on-surface-variant text-sm">
                        Identifikasi area berisiko tinggi sebelum kegagalan kritis terjadi.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full"></div>
                <div className="relative z-10 glass-card rounded-xl overflow-hidden border border-outline-variant/50 shadow-2xl">
                  <img
                    alt="Manufacturing dashboard overview"
                    className="w-full h-auto"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvS1lL6wF8jaUYkQeM0DD5HjwZiRvwmEdchKnplA93xbf_P1ebJBbnocFNjul2DWVKB2y8RT7wqwjV5qEpTPCnjghcEvOPrxs5KcfRekpr-1Z0bMfKBKHV6PeqNwC6sij3ObEqvpEfm6dCORRrXKpdAuoq4IwrqZStbUmWNnmWjf6kv_tewX29-LUliM_Egw7UsT720EU6JZDu1V0BUiWtecTejSvGnr9FKM8P4ImEovTRd2wT6SMOQYheRHWqY6krLZUOvexW8uc1"
                  />
                  {/* Overlay Detail */}
                  <div className="absolute bottom-4 right-4 max-w-[200px]">
                    <img
                      alt="Detail overlay"
                      className="rounded-lg shadow-xl border border-primary/30"
                      src="https://lh3.googleusercontent.com/aida/AP1WRLsMnNJlFk5D0RviTy7S41_JQOKuwwqzvJDSQfUoEHRL_f11OB7ODe8mu7b5vsSOHDGeekq5BfjDrxDrgNXBwAoCmFlkzd4_RGT8C4LhXYwSE6hJNQ00fVGc3YAlvfBKTcwT7hZwXhMvjU0iPYrRgI-fI9EDMgFa4yhiqABU36xM1UeSI6nJLraTRwdc8i5JM_BAXMfzEc71qlQa29FV-1ziC0EgS3Iz1kxJgF5DWaMv_Y8oTMJO4PEt5R8A"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Capabilities - Bento Style */}
        <section className="py-xl bg-surface-container-lowest">
          <div className="max-w-container-max mx-auto px-lg">
            <div className="text-center mb-xl">
              <h2 className="font-display-lg text-display-lg text-white mb-md">Key Capabilities</h2>
            </div>
            <div className="grid grid-cols-12 gap-gutter">
              {/* Main Capacity */}
              <div className="col-span-12 md:col-span-8 bg-surface-container p-xl rounded-xl border border-outline-variant/20 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-20 -mt-20 blur-3xl group-hover:bg-primary/10 transition-all"></div>
                <div className="relative z-10">
                  <span className="material-symbols-outlined text-4xl text-primary mb-md">trending_up</span>
                  <h3 className="font-headline-md text-headline-md text-white mb-md">Demand Forecasting</h3>
                  <p className="text-on-surface-variant max-w-lg">
                    Menggunakan algoritma deep learning untuk memprediksi permintaan pasar dengan akurasi 95%,
                    memungkinkan penyesuaian produksi secara proaktif dan pengurangan limbah bahan baku.
                  </p>
                </div>
              </div>
              {/* Energy Management */}
              <div className="col-span-12 md:col-span-4 bg-surface-container p-xl rounded-xl border border-outline-variant/20 group">
                <span className="material-symbols-outlined text-4xl text-tertiary mb-md">energy_savings_leaf</span>
                <h3 className="font-headline-md text-headline-md text-white mb-md">Energy Management</h3>
                <p className="text-on-surface-variant">
                  Optimalkan konsumsi daya fasilitas melalui pemantauan beban puncak dan penjadwalan cerdas.
                </p>
              </div>
              {/* Robotics AI */}
              <div className="col-span-12 md:col-span-4 bg-surface-container p-xl rounded-xl border border-outline-variant/20 group">
                <span className="material-symbols-outlined text-4xl text-secondary mb-md">robot_2</span>
                <h3 className="font-headline-md text-headline-md text-white mb-md">Robotics AI</h3>
                <p className="text-on-surface-variant">
                  Integrasi langsung dengan sistem robotika untuk koordinasi yang mulus antar unit kerja otonom.
                </p>
              </div>
              {/* Performance Data */}
              <div className="col-span-12 md:col-span-8 glass-card p-xl rounded-xl border border-primary/20 flex flex-col justify-center">
                <div className="grid grid-cols-2 gap-lg">
                  <div>
                    <div className="text-primary font-display-lg text-display-lg">24/7</div>
                    <div className="font-label-sm text-label-sm text-on-surface-variant">AUTONOMOUS MONITORING</div>
                  </div>
                  <div>
                    <div className="text-tertiary font-display-lg text-display-lg">&lt;50ms</div>
                    <div className="font-label-sm text-label-sm text-on-surface-variant">NETWORK LATENCY</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Business Value */}
        <section className="py-xl bg-background relative overflow-hidden">
          <div className="relative z-10 max-w-container-max mx-auto px-lg">
            <div className="glass-card p-xl rounded-xl border border-primary/30">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
                <div>
                  <h2 className="font-display-lg text-display-lg text-white mb-lg">Business Value Delivered</h2>
                  <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl">
                    Kami tidak hanya mendigitalkan proses; kami menciptakan nilai bisnis yang terukur melalui
                    efisiensi operasional yang radikal.
                  </p>
                </div>
                <div className="space-y-lg">
                  <div className="bg-surface-container-high p-lg rounded-lg border border-outline-variant/30 flex items-center justify-between">
                    <div>
                      <span className="font-label-sm text-label-sm text-primary">REDUCTION</span>
                      <div className="text-white font-headline-md">Energy Cost</div>
                    </div>
                    <div className="text-tertiary text-4xl font-bold">30%</div>
                  </div>
                  <div className="bg-surface-container-high p-lg rounded-lg border border-outline-variant/30 flex items-center justify-between">
                    <div>
                      <span className="font-label-sm text-label-sm text-primary">IMPROVEMENT</span>
                      <div className="text-white font-headline-md">Defect Rate</div>
                    </div>
                    <div className="text-tertiary text-4xl font-bold">20%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ContactCta
          title="Siap untuk Memulai Revolusi?"
          description="Hubungi tim ahli kami untuk konsultasi khusus mengenai kebutuhan spesifik fasilitas manufaktur Anda."
          primaryLabel="Start Smart Factory Journey"
        />
      </main>

      {/* Footer (Shared Component) */}
    </>
  );
}
