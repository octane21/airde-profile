import { useEffect } from "react";
import { assetIntelligenceDashboard } from "../assets/images";
import ContactCta from "../components/ContactCta";

export default function AssetIntelligence() {
  useEffect(() => {
    document.title = "AIRDE - Asset Intelligence";
  }, []);

  return (
    <>
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center px-8 md:px-24 py-16 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10 w-full max-w-7xl mx-auto">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                <span className="pulse-dot"></span>
                <span className="font-label-sm text-label-sm text-primary tracking-widest">SOLUTIONS</span>
              </div>
              <h1 className="font-display-lg text-display-lg leading-tight text-on-surface">Asset Intelligence</h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                Pahami kondisi dan performa aset Anda secara real-time untuk optimalisasi siklus hidup yang lebih
                cerdas dengan teknologi AI prediktif.
              </p>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative glass rounded-2xl overflow-hidden border border-outline-variant/30">
                <img
                  alt="Asset Digital Twin Visualization"
                  className="w-full aspect-video object-cover"
                  src={assetIntelligenceDashboard}
                />
                {/* HUD Elements Overlay */}
                <div className="absolute top-6 right-6 glass p-4 rounded-xl border border-primary/40 flex flex-col gap-1">
                  <span className="font-label-sm text-[10px] text-primary/70">ASSET HEALTH SCORE</span>
                  <div className="flex items-end gap-2">
                    <span className="font-display-lg text-3xl text-primary">92%</span>
                    <span className="material-symbols-outlined text-tertiary mb-1">trending_up</span>
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 right-6 glass p-4 rounded-xl border border-outline-variant/30">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-label-sm text-xs text-on-surface-variant">Real-time Trend Analysis</span>
                    <span className="font-label-sm text-xs text-tertiary">Live System</span>
                  </div>
                  <div className="h-16 w-full flex items-end gap-1">
                    <div className="w-full h-8 bg-primary/20 rounded-t-sm"></div>
                    <div className="w-full h-10 bg-primary/30 rounded-t-sm"></div>
                    <div className="w-full h-6 bg-primary/20 rounded-t-sm"></div>
                    <div className="w-full h-12 bg-primary/40 rounded-t-sm"></div>
                    <div className="w-full h-14 bg-primary/50 rounded-t-sm"></div>
                    <div className="w-full h-9 bg-primary/30 rounded-t-sm"></div>
                    <div className="w-full h-11 bg-primary/40 rounded-t-sm"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Atmospheric BG */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none"></div>
        </section>

        {/* What it Does Section */}
        <section className="py-xl px-8 md:px-24 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Core Capabilities</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {/* Feature 1 */}
            <div className="glass p-8 rounded-2xl hover:border-primary/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">sensors</span>
              </div>
              <h3 className="font-headline-md text-lg text-on-surface mb-4">Real-time Monitoring</h3>
              <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                Pantau kesehatan aset secara terus-menerus melalui integrasi sensor IoT berkecepatan tinggi.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="glass p-8 rounded-2xl hover:border-primary/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">psychology</span>
              </div>
              <h3 className="font-headline-md text-lg text-on-surface mb-4">Anomaly Detection</h3>
              <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                Identifikasi potensi kegagalan teknis jauh sebelum terjadi dengan model AI prediktif yang canggih.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="glass p-8 rounded-2xl hover:border-primary/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">query_stats</span>
              </div>
              <h3 className="font-headline-md text-lg text-on-surface mb-4">Condition Monitoring</h3>
              <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                Analisis mendalam pada vibrasi, suhu, dan parameter kunci untuk diagnosa aset yang presisi.
              </p>
            </div>
            {/* Feature 4 */}
            <div className="glass p-8 rounded-2xl hover:border-primary/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">history_toggle_off</span>
              </div>
              <h3 className="font-headline-md text-lg text-on-surface mb-4">Lifecycle Optimization</h3>
              <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                Maksimalkan umur teknis dan nilai ekonomi aset Anda melalui strategi maintenance yang tepat.
              </p>
            </div>
          </div>
        </section>

        {/* Business Outcomes Section */}
        <section className="py-xl bg-surface-container-low/50 relative overflow-hidden">
          <div className="px-8 md:px-24 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-around gap-12">
            <div className="text-center group">
              <div className="font-display-lg text-primary text-6xl mb-4 group-hover:scale-110 transition-transform">
                5-15%
              </div>
              <div className="w-12 h-0.5 bg-outline-variant mx-auto mb-4"></div>
              <p className="font-label-sm text-on-surface-variant tracking-widest uppercase">
                Increase in Asset Availability
              </p>
            </div>
            <div className="w-px h-24 bg-outline-variant/30 hidden md:block"></div>
            <div className="text-center group">
              <div className="font-display-lg text-tertiary text-6xl mb-4 group-hover:scale-110 transition-transform">
                10-20%
              </div>
              <div className="w-12 h-0.5 bg-outline-variant mx-auto mb-4"></div>
              <p className="font-label-sm text-on-surface-variant tracking-widest uppercase">
                Extension in Asset Life
              </p>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-section-gap px-container-padding bg-surface-container-lowest/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-xl">
              <h2 className="font-headline-md text-headline-md mb-4">Industrial Use Cases</h2>
              <p className="text-on-surface-variant font-body-md text-body-md max-w-2xl mx-auto">
                Lihat bagaimana Asset Intelligence mentransformasi operasional di berbagai sektor kritikal.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
              {/* Oil & Gas */}
              <div className="relative group h-96 rounded-3xl overflow-hidden border border-white/5">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBpqucL9h7DGjI8dFGaoXwInuXZKv7dcaev2oyMyks1DoqA8j4VEWNBDD7vK88VUfR8TD-u5VsqcmipBbfqTOZngvArORv-iOGHLvfuLiyWdsU_RPKFCxqjsQeY0v_si9fFmT8iEIxZgd1pivCsRwwg--Idn_bsucCLVB33hm9PAE_30abOVPba1MKvhnxV4LEqkYA0EGavTANxqbaYxSUKDDuktu9RRaPuudjaDpka_oMbyL1tUFe_dDFFQULr46n6h-3FmS9qblOX')",
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="text-primary font-label-sm text-label-sm uppercase tracking-widest">
                    Energy Sector
                  </span>
                  <h3 className="font-headline-md text-2xl mt-2 mb-4">Oil &amp; Gas</h3>
                  <p className="text-on-surface-variant font-body-md text-body-md">
                    Monitoring integritas pipeline dan efisiensi turbin secara remote di area terpencil.
                  </p>
                </div>
              </div>
              {/* Manufacturing */}
              <div className="relative group h-96 rounded-3xl overflow-hidden border border-white/5">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCsqkmujFp_VNzrLYPqAZaXdai5HUYfKK65wGofVXLJpSd9Pwh02ORGdeHCQfeanM4aMqV1sq62pA-k5Q8bz7QoRZXLSAAHtUsh-Qjjdg8LYPX_RoyE__6Z8wAqg9HmoehB9DCaN5cs0ex0xt7Q35G3nR3dk4IOI4VTnmn24rCySMFDEm5oTjwX-wB9R7WD3dUHkQhSptKkXpfu0z8gOEWNnd4CYdpPU_EUCGnCRpeyBJvHNcBk_tRTdKIaUnfL8yVX5W2yXiPNPhZT')",
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="text-primary font-label-sm text-label-sm uppercase tracking-widest">
                    Automotive &amp; FMCG
                  </span>
                  <h3 className="font-headline-md text-2xl mt-2 mb-4">Manufacturing</h3>
                  <p className="text-on-surface-variant font-body-md text-body-md">
                    Optimalisasi OEE pada lini produksi perakitan otomotif melalui analisis data performa robotik.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ContactCta
          title="Siap Mengoptimalkan Aset Anda?"
          description="Hubungi tim ahli kami untuk melihat bagaimana Asset Intelligence dapat mentransformasi operasional industri Anda hari ini."
        />
      </main>
    </>
  );
}
