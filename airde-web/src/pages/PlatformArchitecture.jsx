import { useEffect } from "react";
import { enterpriseDashboard } from "../assets/images";
import ContactCta from "../components/ContactCta";


export default function PlatformArchitecture() {
  useEffect(() => {
    document.title = "AIRDE | Platform Architecture";
  }, []);

  return (
    <>
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-gutter py-xl overflow-hidden">
          <div className="relative z-10 max-w-4xl text-center mb-xl">
            <div className="inline-flex items-center gap-xs px-sm py-1 rounded-full border border-primary/30 bg-primary/10 mb-md">
              <span className="pulse-dot"></span>
              <span className="font-label-sm text-label-sm text-primary">PLATFORM ARCHITECTURE V4.0</span>
            </div>
            <h1 className="font-display-lg text-display-lg text-on-surface mb-lg">The Foundation of Industrial Intelligence.</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Arsitektur multi-layer AIRDE menyatukan data operasional kompleks menjadi kecerdasan yang dapat
              ditindaklanjuti secara real-time.
            </p>
          </div>
          {/* 5-Layer Stack Visual */}
          <div className="relative z-10 w-full max-w-5xl mt-lg">
            <div className="flex flex-col gap-sm items-center">
              {/* Integration Layer */}
              <div className="layer-hover w-full md:w-3/4 p-lg glass-panel rounded-xl flex items-center gap-lg border-l-4 border-l-primary glow-blue transition-all cursor-default group">
                <div className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-lg group-hover:bg-primary/20">
                  <span className="material-symbols-outlined text-primary text-4xl">extension</span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-end mb-1">
                    <h3 className="font-headline-md text-headline-md text-primary">INTEGRATION LAYER</h3>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">01 / FOUNDATION</span>
                  </div>
                  <p className="font-body-md text-on-surface-variant mb-2">Connect • Cleanse • Harmonize</p>
                  <p className="font-body-md text-on-surface/70">Unified and trusted data foundation for diverse industrial protocols.</p>
                </div>
              </div>
              {/* Analytics Layer */}
              <div className="layer-hover w-full md:w-3/4 p-lg glass-panel rounded-xl flex items-center gap-lg border-l-4 border-l-secondary glow-blue transition-all cursor-default group">
                <div className="w-16 h-16 flex items-center justify-center bg-secondary/10 rounded-lg group-hover:bg-secondary/20">
                  <span className="material-symbols-outlined text-secondary text-4xl">analytics</span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-end mb-1">
                    <h3 className="font-headline-md text-headline-md text-secondary">ANALYTICS LAYER</h3>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">02 / INSIGHTS</span>
                  </div>
                  <p className="font-body-md text-on-surface-variant mb-2">Descriptive • Diagnostic • Predictive</p>
                  <p className="font-body-md text-on-surface/70">Transform raw data into meaningful operational performance trends.</p>
                </div>
              </div>
              {/* AI Layer */}
              <div className="layer-hover w-full md:w-3/4 p-lg glass-panel rounded-xl flex items-center gap-lg border-l-4 border-l-tertiary glow-blue transition-all cursor-default group">
                <div className="w-16 h-16 flex items-center justify-center bg-tertiary/10 rounded-lg group-hover:bg-tertiary/20">
                  <span className="material-symbols-outlined text-tertiary text-4xl">psychology</span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-end mb-1">
                    <h3 className="font-headline-md text-headline-md text-tertiary">AI LAYER</h3>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">03 / INTELLIGENCE</span>
                  </div>
                  <p className="font-body-md text-on-surface-variant mb-2">Machine Learning • Optimization</p>
                  <p className="font-body-md text-on-surface/70">Predict, simulate, and recommend the best operational scenarios.</p>
                </div>
              </div>
              {/* Decision Layer */}
              <div className="layer-hover w-full md:w-3/4 p-lg glass-panel rounded-xl flex items-center gap-lg border-l-4 border-l-primary glow-blue transition-all cursor-default group">
                <div className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-lg group-hover:bg-primary/20">
                  <span className="material-symbols-outlined text-primary text-4xl">ads_click</span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-end mb-1">
                    <h3 className="font-headline-md text-headline-md text-primary">DECISION LAYER</h3>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">04 / ACTION</span>
                  </div>
                  <p className="font-body-md text-on-surface-variant mb-2">Dashboard • Alerts • Recommendations</p>
                  <p className="font-body-md text-on-surface/70">Deliver the right intelligence to the right person at the right time.</p>
                </div>
              </div>
              {/* Business Value Layer */}
              <div className="layer-hover w-full md:w-3/4 p-lg glass-panel rounded-xl flex items-center gap-lg border-l-4 border-l-tertiary glow-blue transition-all cursor-default group">
                <div className="w-16 h-16 flex items-center justify-center bg-tertiary/10 rounded-lg group-hover:bg-tertiary/20">
                  <span className="material-symbols-outlined text-tertiary text-4xl">query_stats</span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-end mb-1">
                    <h3 className="font-headline-md text-headline-md text-tertiary">BUSINESS VALUE LAYER</h3>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">05 / OUTCOMES</span>
                  </div>
                  <p className="font-body-md text-on-surface-variant mb-2">Performance • Reliability • Growth</p>
                  <p className="font-body-md text-on-surface/70">Drive measurable business impact and ROI across the enterprise.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Layer Section */}
        <section className="py-xl px-gutter bg-surface-container-low/30">
          <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
            <div>
              <h2 className="font-headline-md text-headline-md text-primary mb-md">Data Integration: Unifying the Silos</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-lg">
                Sistem industri seringkali terisolasi. AIRDE menjembatani kesenjangan antara data operasional (OT)
                dan teknologi informasi (IT) melalui integrasi tanpa hambatan.
              </p>
              <div className="grid grid-cols-2 gap-md">
                <div className="p-md glass-panel rounded-lg">
                  <span className="material-symbols-outlined text-primary mb-sm">sensors</span>
                  <h4 className="font-label-sm text-label-sm text-on-surface">SCADA / OT</h4>
                  <p className="text-sm text-on-surface-variant">Real-time control data pipelines.</p>
                </div>
                <div className="p-md glass-panel rounded-lg">
                  <span className="material-symbols-outlined text-primary mb-sm">database</span>
                  <h4 className="font-label-sm text-label-sm text-on-surface">ERP &amp; CMMS</h4>
                  <p className="text-sm text-on-surface-variant">Asset and resource planning.</p>
                </div>
                <div className="p-md glass-panel rounded-lg">
                  <span className="material-symbols-outlined text-primary mb-sm">router</span>
                  <h4 className="font-label-sm text-label-sm text-on-surface">IoT Edge</h4>
                  <p className="text-sm text-on-surface-variant">High-frequency sensor telemetry.</p>
                </div>
                <div className="p-md glass-panel rounded-lg">
                  <span className="material-symbols-outlined text-primary mb-sm">article</span>
                  <h4 className="font-label-sm text-label-sm text-on-surface">Inspection Data</h4>
                  <p className="text-sm text-on-surface-variant">Manual logs and visual checks.</p>
                </div>
              </div>
            </div>
            <div className="relative h-96 lg:h-full min-h-[400px] flex items-center justify-center">
              <div className="absolute inset-0 bg-primary/5 rounded-full filter blur-3xl opacity-50"></div>
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-outline-variant/30 glass-panel p-lg flex items-center justify-center">
                <img alt="Enterprise Dashboard" className="w-full h-full object-contain" src={enterpriseDashboard} />
              </div>
            </div>
          </div>
        </section>

        {/* The Intelligence Core Section */}
        <section className="py-xl px-gutter relative">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-tertiary/10 to-transparent pointer-events-none"></div>
          <div className="max-w-container-max mx-auto">
            <div className="text-center mb-xl">
              <h2 className="font-display-lg text-display-lg text-on-surface mb-md">The Intelligence Core</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto">
                Di jantung AIRDE terdapat mesin pengolahan data canggih yang menggunakan Machine Learning untuk
                mengubah data pasif menjadi aset strategis.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
              {/* Analytics */}
              <div className="p-lg glass-panel rounded-xl border-t-2 border-t-secondary relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform"></div>
                <span className="material-symbols-outlined text-secondary text-4xl mb-md">monitoring</span>
                <h3 className="font-headline-md text-headline-md mb-sm">Advanced Analytics</h3>
                <p className="font-body-md text-on-surface-variant">
                  Identifikasi anomali dan tren performa sebelum berdampak pada efisiensi operasional.
                </p>
                <ul className="mt-md space-y-2">
                  <li className="flex items-center gap-sm text-sm text-on-surface/80">
                    <span className="material-symbols-outlined text-sm text-secondary">check_circle</span> Fault Detection
                  </li>
                  <li className="flex items-center gap-sm text-sm text-on-surface/80">
                    <span className="material-symbols-outlined text-sm text-secondary">check_circle</span> Trend Extrapolation
                  </li>
                </ul>
              </div>
              {/* AI Engine */}
              <div className="p-lg glass-panel rounded-xl border-t-2 border-t-tertiary relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-tertiary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform"></div>
                <span className="material-symbols-outlined text-tertiary text-4xl mb-md">memory</span>
                <h3 className="font-headline-md text-headline-md mb-sm">AI Optimization</h3>
                <p className="font-body-md text-on-surface-variant">
                  Algoritma kustom yang terus belajar dari setiap siklus produksi untuk optimalisasi biaya.
                </p>
                <ul className="mt-md space-y-2">
                  <li className="flex items-center gap-sm text-sm text-on-surface/80">
                    <span className="material-symbols-outlined text-sm text-tertiary">check_circle</span> Neural Networks
                  </li>
                  <li className="flex items-center gap-sm text-sm text-on-surface/80">
                    <span className="material-symbols-outlined text-sm text-tertiary">check_circle</span> Deep Reinforcement
                  </li>
                </ul>
              </div>
              {/* Prediction */}
              <div className="p-lg glass-panel rounded-xl border-t-2 border-t-primary relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform"></div>
                <span className="material-symbols-outlined text-primary text-4xl mb-md">timeline</span>
                <h3 className="font-headline-md text-headline-md mb-sm">Predictive Engines</h3>
                <p className="font-body-md text-on-surface-variant">
                  Memprediksi sisa masa pakai aset (RUL) dengan akurasi tinggi untuk pemeliharaan proaktif.
                </p>
                <ul className="mt-md space-y-2">
                  <li className="flex items-center gap-sm text-sm text-on-surface/80">
                    <span className="material-symbols-outlined text-sm text-primary">check_circle</span> Predictive Maintenance
                  </li>
                  <li className="flex items-center gap-sm text-sm text-on-surface/80">
                    <span className="material-symbols-outlined text-sm text-primary">check_circle</span> Demand Forecasting
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Decision & Outcomes Section (Bento Grid) */}
        <section className="py-xl px-gutter bg-surface-container-low">
          <div className="max-w-container-max mx-auto">
            <h2 className="font-display-lg text-display-lg text-on-surface mb-xl text-center">Turning Insights into Business Value</h2>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-lg auto-rows-[250px]">
              {/* Large Feature: Reliability */}
              <div className="md:col-span-8 glass-panel rounded-2xl p-lg flex flex-col justify-end relative overflow-hidden group">
                <div
                  className="absolute inset-0 opacity-20 group-hover:scale-105 transition-transform duration-700 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCpvbvgxKRa8TheUgbQG3PLgP9OB9g9RFw8mLinEpWpAK2Qx2zYYzTIXOiNMgLXVNM_9mzr2bmcfiKe1cx4rQ9u-vCy3DggwdBh37d4vxuvavUTFRGBSwD35EYfnMH8yheuZb_6YpadMbe6Mc9KXKlWcrvnbkt51fn8JNvaG_eED-uzzALBSuZuUHegCHfdVzS_IbJPIOMFAwEidrGLyvmCAFH4CO1DBkvFVF2J1ylwcwOGlacohRYvSzmZU3JwmjuGV66fNpDBEAE4')",
                  }}
                ></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-sm mb-sm">
                    <span className="material-symbols-outlined text-tertiary">verified</span>
                    <h3 className="font-headline-md text-headline-md text-white">Higher Reliability</h3>
                  </div>
                  <p className="font-body-md text-on-surface-variant max-w-md">
                    Tingkatkan ketersediaan aset dan kurangi downtime yang tidak direncanakan hingga 35% melalui
                    monitoring prediktif.
                  </p>
                </div>
              </div>
              {/* Small Feature: Risk */}
              <div className="md:col-span-4 glass-panel rounded-2xl p-lg flex flex-col justify-between border-b-4 border-b-error/30">
                <span className="material-symbols-outlined text-error text-3xl">security</span>
                <div>
                  <h3 className="font-headline-md text-headline-md text-white mb-xs">Lower Risk</h3>
                  <p className="text-sm text-on-surface-variant">Mitigasi risiko operasional dengan peringatan dini berbasis AI.</p>
                </div>
              </div>
              {/* Small Feature: Cost */}
              <div className="md:col-span-4 glass-panel rounded-2xl p-lg flex flex-col justify-between border-b-4 border-b-primary/30">
                <span className="material-symbols-outlined text-primary text-3xl">payments</span>
                <div>
                  <h3 className="font-headline-md text-headline-md text-white mb-xs">Lower Cost</h3>
                  <p className="text-sm text-on-surface-variant">Optimalisasi biaya pemeliharaan dan konsumsi energi secara signifikan.</p>
                </div>
              </div>
              {/* Medium Feature: Decisions */}
              <div className="md:col-span-8 glass-panel rounded-2xl p-lg flex items-center gap-xl relative overflow-hidden">
                <div className="flex-1">
                  <h3 className="font-headline-md text-headline-md text-white mb-sm">Faster Decisions</h3>
                  <p className="font-body-md text-on-surface-variant">
                    Berdayakan tim lapangan dan eksekutif dengan dashboard real-time yang menyederhanakan data
                    kompleks menjadi keputusan cerdas.
                  </p>
                </div>
                <div className="hidden lg:block w-48 h-48 rounded-full border-4 border-dashed border-primary/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-5xl">rocket_launch</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security & Trust Section */}
        <section className="py-xl px-gutter relative overflow-hidden">
          <div className="max-w-container-max mx-auto border border-outline-variant/30 rounded-3xl p-xl glass-panel text-center">
            <div className="max-w-2xl mx-auto">
              <span className="material-symbols-outlined text-primary text-5xl mb-md">shield_lock</span>
              <h2 className="font-headline-md text-headline-md text-on-surface mb-md">Enterprise-Grade Security &amp; Connectivity</h2>
              <p className="font-body-md text-on-surface-variant mb-lg">
                Keamanan adalah inti dari AIRDE. Kami menerapkan standar enkripsi militer dan protokol konektivitas
                industri untuk memastikan data Anda aman di Edge, Cloud, maupun Hybrid.
              </p>
              <div className="flex flex-wrap justify-center gap-lg">
                <div className="flex items-center gap-sm text-on-surface/70 font-label-sm">
                  <span className="material-symbols-outlined text-sm text-primary">done_all</span> ISO 27001 COMPLIANT
                </div>
                <div className="flex items-center gap-sm text-on-surface/70 font-label-sm">
                  <span className="material-symbols-outlined text-sm text-primary">done_all</span> AES-256 ENCRYPTION
                </div>
                <div className="flex items-center gap-sm text-on-surface/70 font-label-sm">
                  <span className="material-symbols-outlined text-sm text-primary">done_all</span> SOC 2 TYPE II
                </div>
              </div>
            </div>
          </div>
        </section>

        <ContactCta
          title="Siap Memodernisasi Infrastruktur Data Anda?"
          description="Hubungi arsitek solusi kami untuk melihat bagaimana AIRDE dapat diintegrasikan ke dalam ekosistem industri Anda yang sudah ada."
        />
      </main>

      {/* Footer */}
    </>
  );
}
