import { useEffect } from "react";
import ContactCta from "../components/ContactCta";

export default function PowerUtilities() {
  useEffect(() => {
    document.title = "AIRDE | Power & Utilities - Resilient Intelligence";
  }, []);

  return (
    <>
      <main className="pt-24 overflow-hidden">
        {/* Hero Section */}
        <section className="relative px-6 md:px-xl py-12 md:py-24 max-w-7xl mx-auto overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center relative z-10">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest">
                  Industry: Power &amp; Utilities
                </span>
              </div>
              <h1 className="font-display-lg text-display-lg md:text-6xl text-on-surface max-w-xl">
                Resilient Intelligence for the <span className="text-primary italic">Energy Grid</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg leading-relaxed">
                Pastikan stabilitas jaringan dan keandalan aset distribusi energi dengan analisis prediktif terhadap
                kegagalan komponen.
              </p>
            </div>
            <div className="relative min-h-[400px] lg:min-h-[600px] group">
              {/* Glassmorphic Visual Container */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden glass-card shadow-2xl border border-white/5">
                <img
                  alt="A futuristic energy grid visualization with glowing electric blue transmission lines pulsing across a dark navy 3D landscape. Digital twin overlays, represented by semi-transparent wireframes and data nodes, hover above power plant assets like transformers and turbines. The scene is illuminated by technical digital light, creating a high-fidelity command center aesthetic in a deep navy and neon blue palette. High-speed data streams flow along the grid lines."
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCj9LgB9BKYllMI9Aqqv6Idew46Sn-h2KBwTUGaCuiDhUOMVf2n2JYsJhbDR7rN2l4aVVQaYR6i-cI-_OmPeANH-t2viK4Q4Ry6nva-VEuKgaKOT5l6JMWrdyDfDGB5eKqmmiUaaLpG75MzwfdlOgLmZIgVuva-m5Jtl82l5PgTc3HenyWtkHhfItzz5r6uGi-AVrdLb1jg5baYgdI3Vf1u0kFejJJAAsr-0nRYKYKb6Hir-Zku2kuaZrqRYgc0gog3GPAq-pGWBhYr"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                {/* Floating UI Elements */}
                <div className="absolute top-8 right-8 p-4 glass-card rounded-xl animate-bounce" style={{ animationDuration: "4s" }}>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">analytics</span>
                    <div>
                      <p className="text-[10px] font-mono text-primary uppercase">Grid Stability</p>
                      <p className="text-lg font-bold">99.98%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Background Decoration */}
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10"></div>
        </section>

        {/* Impact Metrics */}
        <section className="bg-surface-container-lowest py-xl">
          <div className="max-w-7xl mx-auto px-6 md:px-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              <div className="p-8 glass-card rounded-xl text-center border-b-4 border-primary">
                <div className="text-display-lg text-primary font-bold mb-2">30%</div>
                <div className="font-headline-md text-on-surface-variant">Reduction in Unplanned Outages</div>
              </div>
              <div className="p-8 glass-card rounded-xl text-center border-b-4 border-tertiary">
                <div className="text-display-lg text-tertiary font-bold mb-2">20%</div>
                <div className="font-headline-md text-on-surface-variant">Operational Efficiency Gain</div>
              </div>
              <div className="p-8 glass-card rounded-xl text-center border-b-4 border-secondary">
                <div className="text-display-lg text-secondary font-bold mb-2">100%</div>
                <div className="font-headline-md text-on-surface-variant">Compliance Standards</div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Capabilities - Bento Grid */}
        <section className="py-xl max-w-7xl mx-auto px-6 md:px-xl">
          <div className="mb-16">
            <h2 className="font-display-lg text-display-lg text-on-surface mb-4">Core Capabilities</h2>
            <p className="font-body-lg text-on-surface-variant max-w-2xl">
              Advanced AI-driven modules designed to withstand the complexities of modern energy distribution.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            {/* Cap 1 */}
            <div className="md:col-span-7 group relative overflow-hidden glass-card rounded-2xl p-8 hover:border-primary/50 transition-all">
              <div className="relative z-10 h-full flex flex-col">
                <span className="material-symbols-outlined text-primary text-4xl mb-6">bolt</span>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Grid Load Balancing</h3>
                <p className="text-on-surface-variant mb-6">
                  Optimalkan distribusi daya secara otomatis untuk mencegah kelebihan beban pada gardu induk
                  menggunakan algoritma penyeimbangan real-time.
                </p>
                <div className="mt-auto">
                  <ul className="space-y-3 font-mono text-sm text-primary/80">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Peak shaving optimization
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Automated demand response
                    </li>
                  </ul>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 w-64 h-64 opacity-10 group-hover:opacity-30 transition-opacity">
                <span className="material-symbols-outlined text-[12rem]">settings_input_component</span>
              </div>
            </div>
            {/* Cap 2 */}
            <div className="md:col-span-5 glass-card rounded-2xl p-8 hover:border-tertiary/50 transition-all flex flex-col justify-center text-center">
              <span className="material-symbols-outlined text-tertiary text-4xl mb-6">energy_savings_leaf</span>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Renewables Integration</h3>
              <p className="text-on-surface-variant">
                Prediksi output energi terbarukan seperti angin dan surya dengan akurasi tinggi untuk integrasi tanpa
                hambatan ke dalam grid utama.
              </p>
            </div>
            {/* Cap 3 */}
            <div className="md:col-span-5 glass-card rounded-2xl p-8 hover:border-secondary/50 transition-all">
              <span className="material-symbols-outlined text-secondary text-4xl mb-6">settings_suggest</span>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Critical Asset Reliability</h3>
              <p className="text-on-surface-variant mb-4">
                Monitoring transformator dan turbin secara berkelanjutan untuk mendeteksi anomali vibrasi dan termal
                yang menandakan kerusakan awal.
              </p>
            </div>
            {/* Cap 4 */}
            <div className="md:col-span-7 glass-card rounded-2xl p-8 hover:border-primary/50 transition-all flex items-center gap-8">
              <div className="flex-1">
                <h3 className="font-headline-md text-headline-md text-on-surface mb-3">
                  Outage Prediction &amp; Prevention
                </h3>
                <p className="text-on-surface-variant">
                  Identifikasi titik lemah sebelum kegagalan terjadi dengan memproses data historis dan sensor cuaca
                  secara simultan.
                </p>
              </div>
              <div className="hidden md:block w-32 h-32 electronic-glow rounded-full border-2 border-primary/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-5xl">emergency_home</span>
              </div>
            </div>
          </div>
        </section>

        <ContactCta
          title="Ready to Secure Your Energy Future?"
          description="Hubungi tim ahli kami untuk simulasi ROI dan integrasi AIRDE ke dalam infrastruktur jaringan utilitas Anda saat ini."
          primaryLabel="Book Consultant Visit"
          secondaryLabel="View Case Studies"
        />
      </main>

      {/* Footer */}
    </>
  );
}
