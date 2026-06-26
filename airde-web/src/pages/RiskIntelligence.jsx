import { useEffect } from "react";
import ContactCta from "../components/ContactCta";
import { enterpriseDashboard } from "../assets/images";

export default function RiskIntelligence() {
  useEffect(() => {
    document.title = "Risk Intelligence | AIRDE";
  }, []);

  return (
    <>
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative px-6 py-20 max-w-7xl mx-auto overflow-hidden">
          <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-20"></div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="inline-block px-3 py-1 bg-risk-accent/10 text-risk-accent border border-risk-accent/20 rounded-full font-label-sm text-label-sm tracking-widest uppercase">
                SOLUTIONS
              </span>
              <h1 className="font-display-lg text-display-lg leading-tight text-on-surface">
                Risk <span className="text-risk-accent">Intelligence</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                Identifikasi, nilai, dan prioritaskan risiko operasional dengan presisi prediktif menggunakan
                lapisan kecerdasan buatan terpadu.
              </p>
            </div>
            {/* Visual Utama: Integrated Laptop/Dashboard View */}
            <div className="relative group">
              <div className="absolute inset-0 bg-risk-accent/10 blur-3xl rounded-full"></div>
              <div className="glass-panel p-2 rounded-xl overflow-hidden shadow-2xl relative border-outline/20">
                <img
                  alt="AIRDE Risk Dashboard"
                  className="w-full h-auto rounded-lg"
                  src={enterpriseDashboard}
                />
                {/* Floating Overlay Card for High Risk */}
                <div className="absolute bottom-4 right-4 glass-panel p-4 rounded-lg border-risk-accent/50 max-w-xs">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-error status-pulse"></span>
                    <span className="font-label-sm text-label-sm text-error uppercase font-bold tracking-tighter">
                      High Risk Warning
                    </span>
                  </div>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    Deteksi korosi meningkat pada Pipeline PL-12A. Rekomendasi inspeksi dalam{" "}
                    <span className="text-risk-accent font-bold">7 hari</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Risk Drivers & 3D Visualization Tease */}
        <section className="px-6 py-20 bg-surface-container-low/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Column 1: Heatmap Legend */}
              <div className="glass-panel p-8 rounded-xl">
                <h3 className="font-headline-md text-headline-md mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-risk-accent">view_in_ar</span>
                  Risk Heat Map 3D
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-surface-container-highest rounded-lg border-l-4 border-error">
                    <span className="font-label-sm">HIGH RISK</span>
                    <span className="text-error font-bold">76%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-surface-container-highest rounded-lg border-l-4 border-risk-accent">
                    <span className="font-label-sm">MEDIUM</span>
                    <span className="text-risk-accent font-bold">24%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-surface-container-highest rounded-lg border-l-4 border-tertiary">
                    <span className="font-label-sm">LOW</span>
                    <span className="text-tertiary font-bold">8%</span>
                  </div>
                </div>
              </div>
              {/* Column 2 & 3: Risk Drivers Bento */}
              <div className="md:col-span-2 glass-panel p-8 rounded-xl">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-headline-md text-headline-md">Top Risk Drivers</h3>
                  <span className="text-on-surface-variant font-label-sm">LIVE UPDATES</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-4 border border-outline-variant/30 rounded-lg flex flex-col gap-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-on-surface-variant">Corrosion</span>
                      <span className="text-error font-bold italic">Critical</span>
                    </div>
                    <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                      <div className="bg-error h-full w-[85%]"></div>
                    </div>
                  </div>
                  <div className="p-4 border border-outline-variant/30 rounded-lg flex flex-col gap-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-on-surface-variant">Equipment Failure</span>
                      <span className="text-error font-bold">High</span>
                    </div>
                    <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                      <div className="bg-risk-accent h-full w-[65%]"></div>
                    </div>
                  </div>
                  <div className="p-4 border border-outline-variant/30 rounded-lg flex flex-col gap-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-on-surface-variant">Human Factor</span>
                      <span className="text-on-surface-variant">Medium</span>
                    </div>
                    <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                      <div className="bg-tertiary h-full w-[35%]"></div>
                    </div>
                  </div>
                  <div className="p-4 border border-outline-variant/30 rounded-lg flex flex-col gap-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-on-surface-variant">Inspection Overdue</span>
                      <span className="text-on-surface-variant">Medium</span>
                    </div>
                    <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                      <div className="bg-tertiary h-full w-[20%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="px-6 py-24 max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-display-lg text-display-lg text-on-surface">Kapabilitas Inti</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              Arsitektur predictive risk kami membantu tim operasional beralih dari reaktif menjadi proaktif
              secara presisi.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Cap 1 */}
            <div className="bento-card glass-panel p-8 rounded-xl border-l-4 border-risk-accent flex flex-col gap-4">
              <span className="material-symbols-outlined text-4xl text-risk-accent">analytics</span>
              <h4 className="font-headline-md text-headline-md leading-tight">Risk Assessment</h4>
              <p className="text-sm text-on-surface-variant">
                Penilaian risiko kuantitatif yang dinamis berdasarkan aliran data real-time dari sensor IoT.
              </p>
            </div>
            {/* Cap 2 */}
            <div className="bento-card glass-panel p-8 rounded-xl border-l-4 border-risk-accent flex flex-col gap-4">
              <span className="material-symbols-outlined text-4xl text-risk-accent">sort</span>
              <h4 className="font-headline-md text-headline-md leading-tight">Risk-Based Prioritization</h4>
              <p className="text-sm text-on-surface-variant">
                Urutkan tindakan pemeliharaan berdasarkan profil risiko tertinggi untuk optimasi sumber daya.
              </p>
            </div>
            {/* Cap 3 */}
            <div className="bento-card glass-panel p-8 rounded-xl border-l-4 border-risk-accent flex flex-col gap-4">
              <span className="material-symbols-outlined text-4xl text-risk-accent">crisis_alert</span>
              <h4 className="font-headline-md text-headline-md leading-tight">Criticality Analysis</h4>
              <p className="text-sm text-on-surface-variant">
                Tentukan aset paling kritis dalam jaringan Anda yang memerlukan perhatian segera.
              </p>
            </div>
            {/* Cap 4 */}
            <div className="bento-card glass-panel p-8 rounded-xl border-l-4 border-risk-accent flex flex-col gap-4">
              <span className="material-symbols-outlined text-4xl text-risk-accent">radar</span>
              <h4 className="font-headline-md text-headline-md leading-tight">Risk Visualization</h4>
              <p className="text-sm text-on-surface-variant">
                Heat map 3D dan dasbor sebaran risiko interaktif untuk visibilitas menyeluruh.
              </p>
            </div>
          </div>
        </section>

        {/* Outcome Section */}
        <section className="relative px-6 py-20 bg-surface-container-lowest overflow-hidden">
          <div className="absolute inset-0 mesh-bg opacity-30"></div>
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
            <div className="md:w-1/2">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-1 bg-risk-accent"></div>
                <span className="font-label-sm text-risk-accent uppercase tracking-widest">Business Outcome</span>
              </div>
              <h2 className="font-display-lg text-display-lg mb-6">Efisiensi yang Dapat Terukur</h2>
              <p className="text-on-surface-variant text-lg">
                Risk Intelligence AIRDE bukan sekadar dasbor; ini adalah mesin ROI yang mengubah ketidakpastian
                menjadi strategi pertumbuhan.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64 flex items-center justify-center">
                <div className="absolute inset-0 border-8 border-risk-accent/20 rounded-full"></div>
                <div
                  className="absolute inset-0 border-t-8 border-risk-accent rounded-full animate-spin"
                  style={{ animationDuration: "3s" }}
                ></div>
                <div className="text-center">
                  <span className="block font-display-lg text-display-lg text-risk-accent">20-40%</span>
                  <span className="block font-label-sm text-on-surface-variant uppercase">Risk Reduction</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ContactCta
          title="Siap Mengamankan Masa Depan Operasional Anda?"
          description="Bergabunglah dengan pemimpin industri yang telah mentransformasi manajemen risiko mereka dengan AI."
          primaryLabel="Hubungi Tim Ahli"
        />
      </main>
    </>
  );
}
