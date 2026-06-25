import { useEffect } from "react";
import { aiDecisionSupportVisualization } from "../assets/images";
import ContactCta from "../components/ContactCta";

export default function AiDecisionSupport() {
  useEffect(() => {
    document.title = "AI Decision Support | AIRDE";
  }, []);

  return (
    <>
      <main className="pt-16 circuit-bg">
        {/* Hero Section */}
        <section className="relative px-gutter md:px-xl py-xl md:py-32 max-w-container-max mx-auto overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl items-center">
            <div className="lg:col-span-7 space-y-lg relative z-10">
              <div className="inline-flex items-center gap-sm px-sm py-xs bg-tertiary/10 border border-tertiary/20 rounded-full">
                <span className="material-symbols-outlined text-[16px] text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>
                  psychology
                </span>
                <span className="font-label-sm text-label-sm text-tertiary uppercase tracking-widest">AI DECISION SUPPORT</span>
              </div>
              <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface">
                Prediksi, rekomendasi, dan dukungan keputusan terbaik.
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                Rekomendasi otomatis berbasis AI untuk mengoptimalkan parameter operasional harian guna mengurangi
                risiko dan meningkatkan efisiensi sistem secara real-time.
              </p>
            </div>
            <div className="lg:col-span-5 relative">
              {/* AI Insight Panel */}
              <div className="glass-panel rounded-xl glow-tertiary border-tertiary/30 overflow-hidden">
                <img
                  alt="AI Decision Support Visualization"
                  className="w-full h-auto rounded-t-xl"
                  src={aiDecisionSupportVisualization}
                />
                <div className="p-lg">
                  <div className="flex justify-between items-start mb-lg">
                    <div className="flex items-center gap-sm">
                      <div className="w-8 h-8 rounded-full bg-tertiary/20 flex items-center justify-center">
                        <span className="material-symbols-outlined text-tertiary">smart_toy</span>
                      </div>
                      <div>
                        <h4 className="font-label-sm text-label-sm text-tertiary uppercase">AI INSIGHT SYSTEM</h4>
                        <p className="text-[10px] text-on-surface-variant opacity-60">Status: Active Monitoring</p>
                      </div>
                    </div>
                    <span className="flex h-2 w-2 rounded-full bg-tertiary"></span>
                  </div>
                  <div className="space-y-md">
                    <div className="p-md bg-surface-container-high rounded-lg border-l-4 border-tertiary">
                      <div className="flex items-center gap-sm mb-xs">
                        <span className="material-symbols-outlined text-error text-[18px]">warning</span>
                        <span className="font-label-sm text-label-sm text-on-surface">Critical Alert</span>
                      </div>
                      <p className="font-body-md text-on-surface-variant italic">
                        "Increased corrosion rate detected in Pipeline PL-12A — recommend inspection within 7 days to
                        reduce risk."
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-sm">
                      <div className="p-sm bg-surface-container-low rounded-lg border border-white/5">
                        <p className="text-[10px] text-on-surface-variant">Confidence</p>
                        <p className="text-headline-md font-bold text-tertiary">94.2%</p>
                      </div>
                      <div className="p-sm bg-surface-container-low rounded-lg border border-white/5">
                        <p className="text-[10px] text-on-surface-variant">Risk Level</p>
                        <p className="text-headline-md font-bold text-secondary">High</p>
                      </div>
                    </div>
                    <button className="w-full py-md bg-tertiary/10 border border-tertiary/40 text-tertiary rounded-lg font-bold hover:bg-tertiary hover:text-on-tertiary transition-all duration-300">
                      View Recommendation
                    </button>
                  </div>
                </div>
              </div>
              {/* Floating decorative brain/circuit element */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 opacity-20 pointer-events-none">
                <span className="material-symbols-outlined text-[128px] text-tertiary">neurology</span>
              </div>
            </div>
          </div>
        </section>

        {/* Outcome Section */}
        <section className="bg-surface-container-lowest/50 py-xl border-y border-white/5">
          <div className="px-gutter md:px-xl max-w-container-max mx-auto flex flex-col md:flex-row items-center justify-between gap-lg">
            <div className="text-center md:text-left">
              <h3 className="font-headline-md text-headline-md text-on-surface">Impact Metrics</h3>
              <p className="text-on-surface-variant">Hasil nyata dari implementasi Decision Support kami.</p>
            </div>
            <div className="flex items-baseline gap-sm">
              <span className="font-display-lg text-display-lg text-tertiary tracking-tighter">40%</span>
              <span className="font-headline-md text-headline-md text-on-surface uppercase">Faster Decision Making</span>
            </div>
          </div>
        </section>

        {/* Capabilities Bento Grid */}
        <section className="px-gutter md:px-xl py-xl max-w-container-max mx-auto">
          <div className="mb-xl text-center">
            <h2 className="font-display-lg-mobile text-display-lg-mobile text-on-surface">Core Capabilities</h2>
            <div className="w-24 h-1 bg-tertiary mx-auto mt-sm rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Cap 1 */}
            <div className="glass-panel p-lg rounded-xl light-bar-left group hover:bg-surface-container-high transition-colors">
              <span className="material-symbols-outlined text-tertiary mb-md text-[32px]">model_training</span>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-sm">Machine Learning</h3>
              <p className="text-on-surface-variant">
                Algoritma yang terus belajar dari data historis untuk memprediksi anomali sebelum terjadi.
              </p>
            </div>
            {/* Cap 2 */}
            <div className="glass-panel p-lg rounded-xl light-bar-left group hover:bg-surface-container-high transition-colors">
              <span className="material-symbols-outlined text-tertiary mb-md text-[32px]">query_stats</span>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-sm">Optimization</h3>
              <p className="text-on-surface-variant">
                Menyeimbangkan ribuan variabel operasional secara simultan untuk efisiensi maksimum.
              </p>
            </div>
            {/* Cap 3 */}
            <div className="glass-panel p-lg rounded-xl light-bar-left group hover:bg-surface-container-high transition-colors">
              <span className="material-symbols-outlined text-tertiary mb-md text-[32px]">timeline</span>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-sm">Predictive Analytics</h3>
              <p className="text-on-surface-variant">
                Analisis mendalam terhadap tren masa depan untuk antisipasi kebutuhan pemeliharaan.
              </p>
            </div>
            {/* Cap 4 */}
            <div className="glass-panel p-lg rounded-xl light-bar-left md:col-span-2 group hover:bg-surface-container-high transition-colors">
              <div className="flex flex-col md:flex-row gap-lg">
                <div className="md:w-1/2">
                  <span className="material-symbols-outlined text-tertiary mb-md text-[32px]">settings_suggest</span>
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-sm">Recommendation Engine</h3>
                  <p className="text-on-surface-variant">
                    Memberikan langkah-langkah konkret yang dapat ditindaklanjuti untuk operator lapangan dalam
                    hitungan detik.
                  </p>
                </div>
                <div className="md:w-1/2 bg-surface-container-lowest/50 rounded-lg p-md overflow-hidden border border-white/5">
                  <div className="space-y-base">
                    <div className="h-2 w-full bg-tertiary/10 rounded overflow-hidden">
                      <div className="h-full bg-tertiary w-3/4"></div>
                    </div>
                    <div className="h-2 w-full bg-tertiary/10 rounded overflow-hidden">
                      <div className="h-full bg-tertiary w-1/2"></div>
                    </div>
                    <div className="h-2 w-full bg-tertiary/10 rounded overflow-hidden">
                      <div className="h-full bg-tertiary w-5/6"></div>
                    </div>
                  </div>
                  <div className="mt-md text-[10px] font-label-sm text-tertiary uppercase">Automated Workflow Integration</div>
                </div>
              </div>
            </div>
            {/* Cap 5 */}
            <div className="glass-panel p-lg rounded-xl light-bar-left group hover:bg-surface-container-high transition-colors">
              <span className="material-symbols-outlined text-tertiary mb-md text-[32px]">view_in_ar</span>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-sm">Scenario Simulation</h3>
              <p className="text-on-surface-variant">
                Uji strategi operasional dalam lingkungan digital aman (Digital Twin) sebelum implementasi fisik.
              </p>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="px-gutter md:px-xl py-xl bg-surface-container-lowest">
          <div className="max-w-container-max mx-auto">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-lg text-center">Implementasi Industri</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
              {/* Case 1 */}
              <div className="relative group overflow-hidden rounded-xl h-80">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuApzBNLxtjgK7etIes-WSUvPy5P69FzNFlpx7OQkH-sEPUdDHBGLdZMfXPSQ5DhGkjnrAPwcwpYkerZHLnZO7EavUbRxrc8BcYruIwH0eitZZAI7vzg7hfl9NbilvrxIrkfr9IBabFMJXx3TlduRObiIa5s9HM4Hhjtt2HtWNmGvCXKztfmrS6CMnVzt1qzNpo7Ia9CNI4nej-jWrhUBevX15QyzFDJDhjsHke7hEaOg4mgX1rmSMbnOc1EkctFp7DQ7PcBTgkz2vz1')",
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-lg">
                  <span className="font-label-sm text-label-sm text-tertiary uppercase mb-base block">Power &amp; Utilities</span>
                  <h4 className="font-headline-md text-headline-md text-on-surface mb-sm">Grid Load Balancing</h4>
                  <p className="text-on-surface-variant text-body-md max-w-md">
                    Optimalkan distribusi daya secara otomatis berdasarkan lonjakan beban yang diprediksi AI.
                  </p>
                </div>
              </div>
              {/* Case 2 */}
              <div className="relative group overflow-hidden rounded-xl h-80">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBRgXpenu3RRMh9cYFIICm5oxT8pjLAtOyRgzCcJIaiwrxrU1q7bzf4jdaLZjuklU1WyJlm8Zsif2y-KST0ms5mWCEvGNpz-CJmeBKmqviPXDQPkEGLvWLOwHGj6vowK9mPQigibtDK2fy2hkWvFQV6t_g2-_12Mu1CXcWwoeXHTrFTlK7UdwPAQTj96LhmzhRSj1GBcvHdlJ0y1v6pIv4WP6VCsH8Nz0wb7FnvwFlLSXS2SjdSKKOxziOQno_cHzb25s5PiONRzdwo')",
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-lg">
                  <span className="font-label-sm text-label-sm text-tertiary uppercase mb-base block">Ports &amp; Maritime</span>
                  <h4 className="font-headline-md text-headline-md text-on-surface mb-sm">Vessel Scheduling Optimization</h4>
                  <p className="text-on-surface-variant text-body-md max-w-md">
                    Minimalisir waktu tunggu kapal di pelabuhan dengan algoritma penjadwalan dinamis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ContactCta
          title="Siap Mempercepat Keputusan Anda?"
          description="Transformasi data mentah Anda menjadi keunggulan strategis hari ini bersama tim ahli AI kami."
        />
      </main>
    </>
  );
}
