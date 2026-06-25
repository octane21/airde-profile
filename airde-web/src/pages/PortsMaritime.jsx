import { useEffect } from "react";
import ContactCta from "../components/ContactCta";

export default function PortsMaritime() {
  useEffect(() => {
    document.title = "AIRDE | Ports & Maritime Intelligence";
  }, []);

  return (
    <>
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[870px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div
              className="w-full h-full bg-cover bg-center brightness-50"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBmokS7EThybKVi5fo8yd4ufjDrt5Wqpojbru-0iYpbOZry_M5scCfknw03kEOkOvBNvBa7rQLObkU6GQ6PIz2uOUjMCEk2nmyh3tEd5PipwDZifh3NVouNGpQAD5cAYhpYnHbiumQwYtMWgfl2cmOyW62Tg12cUsvaNQeV_GVs9wTlYUgCHENMe-kPv060npDVsshz4o0-D8Q8mus2AqC7i4jrtndd4hKaOvwzrzv-2ZmxpmnywWKJjhaSjh0BqarAGpi6fbkwq-EQ')",
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background"></div>
          </div>
          <div className="relative z-10 max-w-container-max mx-auto px-lg grid md:grid-cols-2 gap-xl items-center">
            <div className="space-y-lg">
              <div className="inline-flex items-center gap-sm bg-surface-variant/30 px-md py-xs rounded-full border border-outline-variant/50">
                <span className="pulse-dot"></span>
                <span className="font-label-sm text-label-sm text-tertiary">INDUSTRY FOCUS: MARITIME</span>
              </div>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface glow-text leading-tight">
                Optimizing Global Trade through Port Intelligence
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                Meningkatkan throughput dan efisiensi logistik melalui penjadwalan cerdas dan pemantauan aset
                real-time di pelabuhan.
              </p>
            </div>
            {/* Hero Visual Element (Bento-lite) */}
            <div className="hidden md:grid grid-cols-2 gap-md h-[400px]">
              <div className="glass-card rounded-xl p-md flex flex-col justify-between border-l-2 border-l-primary">
                <span className="material-symbols-outlined text-primary text-4xl">analytics</span>
                <div>
                  <div className="font-label-sm text-label-sm text-primary mb-xs">LIVE DATA FEED</div>
                  <div className="font-headline-md text-headline-md text-on-surface">94% Efficiency</div>
                </div>
              </div>
              <div className="glass-card rounded-xl p-md flex flex-col justify-center items-center text-center">
                <div className="w-24 h-24 rounded-full border-4 border-t-tertiary border-r-tertiary/30 border-b-tertiary/10 border-l-tertiary/50 animate-spin mb-md"></div>
                <span className="font-label-sm text-label-sm text-on-surface-variant">Syncing AGV Fleet</span>
              </div>
              <div className="glass-card rounded-xl col-span-2 p-md flex items-center gap-md">
                <div className="w-16 h-16 bg-primary/20 rounded flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-3xl">terminal</span>
                </div>
                <div className="flex-1">
                  <div className="h-2 w-full bg-surface-variant rounded-full mb-xs">
                    <div className="h-full w-3/4 bg-primary rounded-full"></div>
                  </div>
                  <div className="flex justify-between font-label-sm text-label-sm opacity-60">
                    <span>BERTH OCCUPANCY</span>
                    <span>75.4%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* KPI Strip */}
        <section className="bg-surface-container-lowest py-xl border-y border-outline-variant/20">
          <div className="max-w-container-max mx-auto px-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-xl">
              <div className="flex flex-col items-center text-center">
                <span className="font-display-lg text-primary text-headline-md md:text-display-lg mb-xs">+25%</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">THROUGHPUT INCREASE</span>
              </div>
              <div className="flex flex-col items-center text-center border-x-0 md:border-x border-outline-variant/20">
                <span className="font-display-lg text-tertiary text-headline-md md:text-display-lg mb-xs">-15%</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">FUEL CONSUMPTION</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="font-display-lg text-secondary text-headline-md md:text-display-lg mb-xs">99.9%</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">OPERATION CONTINUITY</span>
              </div>
            </div>
          </div>
        </section>

        {/* Core Capabilities (Bento Grid) */}
        <section className="py-xl px-lg max-w-container-max mx-auto">
          <div className="text-center mb-xl">
            <h2 className="font-display-lg text-headline-md md:text-display-lg mb-md text-on-surface">
              Core Capabilities
            </h2>
            <p className="text-on-surface-variant font-body-md text-body-md max-w-2xl mx-auto">
              Arsitektur modular kami mengintegrasikan AI ke dalam setiap aspek operasional terminal kontainer.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-lg h-auto md:h-[600px]">
            {/* Capability 1 */}
            <div className="md:col-span-8 glass-card rounded-xl p-lg relative group overflow-hidden">
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <span className="material-symbols-outlined text-primary text-4xl mb-md">anchor</span>
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-sm">
                    Vessel Scheduling Optimization
                  </h3>
                  <p className="font-body-md text-on-surface-variant max-w-md">
                    Minimalisir waktu tunggu kapal dengan algoritma alokasi berth yang dinamis, menyesuaikan secara
                    real-time terhadap cuaca dan keterlambatan logistik.
                  </p>
                </div>
                <div className="flex gap-sm pt-md">
                  <span className="px-sm py-1 rounded bg-primary/10 text-primary font-label-sm text-[10px]">
                    DYNAMIC ALLOCATION
                  </span>
                  <span className="px-sm py-1 rounded bg-primary/10 text-primary font-label-sm text-[10px]">
                    PREDICTIVE ETA
                  </span>
                </div>
              </div>
              <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-10 group-hover:opacity-30 transition-opacity">
                <span className="material-symbols-outlined text-[300px] absolute -bottom-20 -right-20">sailing</span>
              </div>
            </div>
            {/* Capability 2 */}
            <div className="md:col-span-4 bg-primary-container/20 rounded-xl p-lg border border-primary/30 flex flex-col justify-between hover:bg-primary-container/30 transition-colors">
              <span className="material-symbols-outlined text-on-primary-container text-4xl mb-md">
                precision_manufacturing
              </span>
              <div>
                <h3 className="font-headline-md text-headline-md text-on-primary-container mb-sm">
                  Automated Terminal
                </h3>
                <p className="font-body-md text-on-primary-container/80">
                  Sinkronisasi AGV dan crane otomatis untuk workflow yang tanpa hambatan.
                </p>
              </div>
              <div className="mt-md text-on-primary-container flex items-center gap-xs font-label-sm">
                <span>LEARN MORE</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </div>
            </div>
            {/* Capability 3 */}
            <div className="md:col-span-4 glass-card rounded-xl p-lg border-t-4 border-t-tertiary">
              <span className="material-symbols-outlined text-tertiary text-4xl mb-md">sensors</span>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-sm">Asset Health Monitoring</h3>
              <p className="font-body-md text-on-surface-variant">
                Pemeliharaan prediktif untuk infrastruktur pelabuhan menggunakan sensor IoT tingkat lanjut untuk
                mencegah downtime.
              </p>
            </div>
            {/* Capability 4 */}
            <div className="md:col-span-8 glass-card rounded-xl p-lg overflow-hidden relative">
              <div className="flex flex-col md:flex-row gap-lg h-full">
                <div className="flex-1">
                  <span className="material-symbols-outlined text-secondary text-4xl mb-md">visibility</span>
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-sm">Supply Chain Visibility</h3>
                  <p className="font-body-md text-on-surface-variant">
                    Pelacakan kontainer ujung-ke-ujung dari dermaga hingga gudang akhir melalui ledger digital yang
                    terenkripsi.
                  </p>
                </div>
                <div className="flex-1 min-h-[120px] bg-surface-container rounded-lg border border-outline-variant/30 p-md flex items-center justify-center">
                  {/* Visual representation of flow */}
                  <div className="flex items-center gap-sm w-full">
                    <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                      <span className="material-symbols-outlined text-sm">shop</span>
                    </div>
                    <div className="h-px flex-1 border-t-2 border-dashed border-secondary/40"></div>
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-sm">warehouse</span>
                    </div>
                    <div className="h-px flex-1 border-t-2 border-dashed border-primary/40"></div>
                    <div className="w-8 h-8 rounded-full bg-tertiary/20 flex items-center justify-center text-tertiary">
                      <span className="material-symbols-outlined text-sm">local_shipping</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Decision Engine Visual */}
        <section className="py-xl bg-surface-container-low relative overflow-hidden">
          <div className="max-w-container-max mx-auto px-lg relative z-10">
            <div className="grid md:grid-cols-2 gap-xl items-center">
              <div className="order-2 md:order-1">
                <div className="relative w-full aspect-square flex items-center justify-center">
                  {/* High Tech Engine Visualization */}
                  <div className="absolute inset-0 bg-primary/5 rounded-full blur-[100px] animate-pulse"></div>
                  <div className="relative z-10 w-64 h-64 border-2 border-primary/30 rounded-full flex items-center justify-center">
                    <div className="w-48 h-48 border-4 border-primary/50 border-t-primary rounded-full animate-[spin_10s_linear_infinite] flex items-center justify-center">
                      <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center border border-primary/40 backdrop-blur-md">
                        <span className="material-symbols-outlined text-primary text-5xl">hub</span>
                      </div>
                    </div>
                    {/* Orbiting nodes */}
                    <div
                      className="absolute top-0 w-8 h-8 bg-surface-bright border border-tertiary rounded-lg flex items-center justify-center shadow-lg shadow-tertiary/20"
                      style={{ transform: "translateY(-50%)" }}
                    >
                      <span className="material-symbols-outlined text-sm text-tertiary">memory</span>
                    </div>
                    <div
                      className="absolute bottom-0 w-8 h-8 bg-surface-bright border border-secondary rounded-lg flex items-center justify-center shadow-lg shadow-secondary/20"
                      style={{ transform: "translateY(50%)" }}
                    >
                      <span className="material-symbols-outlined text-sm text-secondary">cloud_done</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2 space-y-md">
                <h2 className="font-display-lg text-headline-md md:text-display-lg text-on-surface">
                  Real-time Decision Engine
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  Inti dari kecerdasan port kami adalah Decision Engine berbasis AI yang memproses jutaan titik data
                  per detik—mulai dari telemetri crane hingga jadwal kapal global—untuk menghasilkan rekomendasi
                  operasional seketika.
                </p>
                <ul className="space-y-sm">
                  <li className="flex gap-md">
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                    <span className="font-body-md">Pemrosesan data latensi rendah (&lt;10ms)</span>
                  </li>
                  <li className="flex gap-md">
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                    <span className="font-body-md">Analisis skenario "What-If" otomatis</span>
                  </li>
                  <li className="flex gap-md">
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                    <span className="font-body-md">Integrasi mulus dengan ERP pihak ketiga</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <ContactCta
          title="Ready to Transform Your Port?"
          description="Hubungi tim ahli kami untuk demo kustom atau jelajahi bagaimana mitra kami mencapai efisiensi maksimal."
          primaryLabel="Schedule a Consultation"
          secondaryLabel="Download Case Studies"
        />
      </main>
    </>
  );
}
