import { useEffect } from "react";
import ContactCta from "../components/ContactCta";
import { digitalTwin } from "../assets/images";

export default function ReliabilityIntelligence() {
  useEffect(() => {
    document.title = "Reliability Intelligence | AIRDE";
  }, []);

  return (
    <>
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[819px] flex items-center px-container-padding py-xl overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
            <div className="space-y-md">
              <span className="inline-block py-1 px-3 bg-tertiary/20 text-tertiary-fixed-dim font-label-sm text-label-sm rounded-lg tracking-widest uppercase border border-tertiary/30">
                RELIABILITY INTELLIGENCE
              </span>
              <h1 className="font-display-lg text-display-lg leading-tight">
                Tingkatkan keandalan, kurangi kegagalan.
              </h1>
              <p className="text-on-surface-variant font-body-lg text-body-lg max-w-lg">
                Strategi pemeliharaan berbasis data untuk meminimalkan waktu henti yang tidak direncanakan.
              </p>
            </div>
            {/* Sophisticated Dashboard Visual */}
            <div className="relative">
              <div className="glass-card rounded-2xl p-6 glow-blue-green border-tertiary/20 relative overflow-hidden">
                <img
                  alt="Reliability Digital Twin"
                  className="absolute inset-0 w-full h-full object-cover opacity-20"
                  src={digitalTwin}
                />
                <div className="relative flex justify-between items-start mb-8">
                  <div>
                    <h4 className="font-label-sm text-label-sm text-on-surface-variant uppercase mb-1">
                      Current Reliability
                    </h4>
                    <div className="text-5xl font-display-lg text-tertiary">96.3%</div>
                  </div>
                  <div className="text-right">
                    <span className="material-symbols-outlined text-tertiary text-4xl">monitoring</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-md mb-8">
                  <div className="p-3 bg-surface-container rounded-lg border border-white/5">
                    <p className="text-xs text-on-surface-variant mb-1">MTBF</p>
                    <p className="text-lg font-bold">
                      1,240 <span className="text-xs font-normal opacity-60">Hrs</span>
                    </p>
                  </div>
                  <div className="p-3 bg-surface-container rounded-lg border border-white/5">
                    <p className="text-xs text-on-surface-variant mb-1">MTTR</p>
                    <p className="text-lg font-bold">
                      4.2 <span className="text-xs font-normal opacity-60">Hrs</span>
                    </p>
                  </div>
                  <div className="p-3 bg-surface-container rounded-lg border border-white/5">
                    <p className="text-xs text-on-surface-variant mb-1">Availability</p>
                    <p className="text-lg font-bold">99.8%</p>
                  </div>
                </div>
                {/* Asset Health Overlay Mockup */}
                <div className="h-48 relative bg-surface-container-lowest/50 rounded-xl overflow-hidden border border-white/5">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Placeholder for 3D Asset Health */}
                    <div className="relative w-32 h-32">
                      <div className="absolute inset-0 border-2 border-tertiary/20 rounded-full"></div>
                      <div className="absolute inset-4 border-2 border-tertiary/40 rounded-full"></div>
                      <div className="absolute inset-8 bg-tertiary/10 border border-tertiary rounded-full flex items-center justify-center">
                        <span className="material-symbols-outlined text-tertiary text-3xl">settings_suggest</span>
                      </div>
                    </div>
                  </div>
                  {/* Small Curve Graph Mockup */}
                  <div className="absolute bottom-4 left-4 right-4 h-12 flex items-end space-x-1">
                    <div className="w-full h-8 bg-tertiary/20 rounded-t-sm"></div>
                    <div className="w-full h-10 bg-tertiary/40 rounded-t-sm"></div>
                    <div className="w-full h-6 bg-tertiary/20 rounded-t-sm"></div>
                    <div className="w-full h-12 bg-tertiary/60 rounded-t-sm"></div>
                    <div className="w-full h-9 bg-tertiary/30 rounded-t-sm"></div>
                  </div>
                </div>
              </div>
              {/* Decorative back layers */}
              <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full border border-white/5 rounded-2xl"></div>
            </div>
          </div>
        </section>

        {/* Outcome Section */}
        <section className="py-xl bg-surface-container-lowest">
          <div className="px-container-padding max-w-7xl mx-auto text-center">
            <div className="max-w-3xl mx-auto space-y-md">
              <h2 className="text-tertiary font-display-lg text-display-lg">20-40% Improvement</h2>
              <p className="text-on-surface-variant font-body-lg text-body-lg">
                in reliability &amp; maintenance efficiency. Kami membantu organisasi beralih dari reaktif ke
                proaktif dengan presisi absolut.
              </p>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-section-gap px-container-padding max-w-7xl mx-auto">
          <div className="mb-lg">
            <h2 className="font-headline-md text-headline-md">Core Capabilities</h2>
            <div className="w-12 h-1 bg-tertiary mt-2"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {/* Card 1 */}
            <div className="glass-card p-6 rounded-2xl hover:border-tertiary transition-all duration-300 group">
              <div className="w-12 h-12 rounded-lg bg-tertiary/10 flex items-center justify-center mb-6 text-tertiary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">insights</span>
              </div>
              <h3 className="font-headline-md text-xl mb-3">Reliability Analysis</h3>
              <p className="text-on-surface-variant font-body-md text-body-md">
                Analisis mendalam terhadap tren kinerja aset untuk mengidentifikasi deviasi sebelum terjadi insiden.
              </p>
            </div>
            {/* Card 2 */}
            <div className="glass-card p-6 rounded-2xl hover:border-tertiary transition-all duration-300 group">
              <div className="w-12 h-12 rounded-lg bg-tertiary/10 flex items-center justify-center mb-6 text-tertiary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">pattern</span>
              </div>
              <h3 className="font-headline-md text-xl mb-3">Failure Pattern Detection</h3>
              <p className="text-on-surface-variant font-body-md text-body-md">
                Algoritma AI yang mendeteksi pola kegagalan berulang untuk perbaikan berkelanjutan.
              </p>
            </div>
            {/* Card 3 */}
            <div className="glass-card p-6 rounded-2xl hover:border-tertiary transition-all duration-300 group">
              <div className="w-12 h-12 rounded-lg bg-tertiary/10 flex items-center justify-center mb-6 text-tertiary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">troubleshoot</span>
              </div>
              <h3 className="font-headline-md text-xl mb-3">RCM/RCA Support</h3>
              <p className="text-on-surface-variant font-body-md text-body-md">
                Dukungan digital untuk Reliability Centered Maintenance dan Root Cause Analysis yang terstruktur.
              </p>
            </div>
            {/* Card 4 */}
            <div className="glass-card p-6 rounded-2xl hover:border-tertiary transition-all duration-300 group">
              <div className="w-12 h-12 rounded-lg bg-tertiary/10 flex items-center justify-center mb-6 text-tertiary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">precision_manufacturing</span>
              </div>
              <h3 className="font-headline-md text-xl mb-3">Predictive Maintenance Strategy</h3>
              <p className="text-on-surface-variant font-body-md text-body-md">
                Automasi jadwal pemeliharaan berdasarkan kondisi real-time aset (Condition-Based Maintenance).
              </p>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-section-gap px-container-padding bg-surface-container-lowest/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-xl">
              <h2 className="font-headline-md text-headline-md mb-4">Aplikasi Industri</h2>
              <p className="text-on-surface-variant font-body-md text-body-md max-w-2xl mx-auto">
                Lihat bagaimana Reliability Intelligence mentransformasi operasional di berbagai sektor kritikal.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
              {/* Oil & Gas */}
              <div className="relative group h-96 rounded-3xl overflow-hidden border border-white/5">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC-GtFnm9cno93b0Vl0k15mQjfW298CLe0PGWx-bC1SMthLeTf7Xp_8fXJQBsLKOlvIG2oNFlvSmJFGJVm9MysYSFpRW5C_KwX8kaUHeXbybO37_xle-vYxD1q6mQgyZuXdVE8X6LyCrsxDv_6Lb3Fz7HKDpDm_AiXwAy4MntuYc567coxi-l9m-H64i-VVzQbTWqc-SBr6Zc_k3U8Tdv_yWh0vE3aowIphcaLx0dZC8o3RbNNB1XjMFfr2fADnGDVRoGhi4cC6QzPH')",
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="text-tertiary font-label-sm text-label-sm uppercase tracking-widest">
                    Oil &amp; Gas
                  </span>
                  <h3 className="font-headline-md text-2xl mt-2 mb-4">Optimizing Turbine Uptime</h3>
                  <p className="text-on-surface-variant font-body-md text-body-md">
                    Meningkatkan ketersediaan turbin gas hingga 15% melalui pemantauan vibrasi prediktif dan
                    anomali thermal.
                  </p>
                </div>
              </div>
              {/* Manufacturing */}
              <div className="relative group h-96 rounded-3xl overflow-hidden border border-white/5">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCo2YUAQUn19HnIOJ2XpESeo1iy002fwRrf6aWz5l-aHuHNoIQY2wWf5-Rn_aqeGnO7vN1V1bllZi_xkY4CFP3Y3OyNQB-yv8e2YhTfLJ0t-z-wHudMmLaSXX75r1FLphmPt9JelhjQXYgbSLzdiIE8KB-t23SAfZwsSquK4hkXmpqU7FFjgiA2NUiVNlvwKbS04lffmAq_lUoTklo8t8yQIW7Fgf_4JmOOSmxypOgdr6C4VF3g8nEY-xaN9oAwApG1zEJxyoRvbazW')",
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="text-tertiary font-label-sm text-label-sm uppercase tracking-widest">
                    Manufacturing
                  </span>
                  <h3 className="font-headline-md text-2xl mt-2 mb-4">Reducing Line Failures</h3>
                  <p className="text-on-surface-variant font-body-md text-body-md">
                    Menghilangkan downtime tak terduga pada lini perakitan dengan deteksi dini degradasi komponen
                    motorik.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ContactCta
          title="Siap Mengoptimalkan Aset Anda?"
          description="Bergabunglah dengan pemimpin industri yang telah menggunakan AIRDE untuk mencapai keunggulan operasional."
        />

      </main>
    </>
  );
}
