import { useEffect } from "react";
import { academyVisualization } from "../assets/images";

export default function Academy() {
  useEffect(() => {
    document.title = "AIRDE Academy | Precision Engineering & Predictive AI Learning";
  }, []);

  return (
    <>
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[870px] flex items-center px-container-padding py-xl overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-xl items-center max-w-container-max mx-auto">
            <div className="space-y-lg">
              <div className="flex items-center gap-sm">
                <span className="status-pulse"></span>
                <span className="font-label-sm text-label-sm text-tertiary-fixed-dim uppercase tracking-[0.2em]">
                  AIRDE ACADEMY
                </span>
              </div>
              <h1 className="font-display-lg text-display-lg text-on-background leading-tight">
                Bangun kapabilitas, percepat inovasi melalui pembelajaran.
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                Bangun kapabilitas internal dan percepat inovasi melalui kurikulum terstruktur yang dirancang untuk
                tenaga ahli industri modern.
              </p>
              <div className="flex flex-wrap gap-md pt-md">
                <a
                  href="https://airde-project-manager.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-xl py-md bg-primary-container text-on-primary-container font-semibold rounded-xl hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all inline-block"
                >
                  Gabung Academy Sekarang
                </a>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-tertiary opacity-20 blur-xl group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative glass-card rounded-xl overflow-hidden shadow-2xl">
                <img
                  alt="A futuristic high-tech industrial training center with a wide-angle view. In the center, a large holographic screen displays intricate 3D AI-driven asset analysis and predictive maintenance graphs. The room has dark navy metallic finishes, sleek glowing cyan accents, and ergonomic minimalist workstations. The lighting is cold, professional, and sophisticated, echoing a high-performance command center aesthetic."
                  className="w-full aspect-video object-cover"
                  src={academyVisualization}
                />
                <div className="absolute bottom-0 left-0 right-0 p-lg bg-gradient-to-t from-surface-container-lowest to-transparent">
                  <div className="flex items-center gap-md">
                    <div className="bg-primary/20 p-sm rounded-full backdrop-blur-md">
                      <span className="material-symbols-outlined text-primary">play_circle</span>
                    </div>
                    <div>
                      <p className="font-label-sm text-label-sm text-primary">LIVE NOW</p>
                      <p className="font-body-md font-semibold">Introduction to Predictive AI in Manufacturing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats / Quick Info */}
        <section className="px-container-padding py-lg border-y border-white/5 bg-surface-container-lowest">
          <div className="max-w-container-max mx-auto grid grid-cols-2 md:grid-cols-4 gap-gutter text-center">
            <div>
              <p className="font-display-lg text-primary text-4xl mb-base">-</p>
              <p className="font-label-sm text-on-surface-variant">Lulusan Professional</p>
            </div>
            <div>
              <p className="font-display-lg text-primary text-4xl mb-base">25+</p>
              <p className="font-label-sm text-on-surface-variant">Industrial Modules</p>
            </div>
            <div>
              <p className="font-display-lg text-primary text-4xl mb-base">-</p>
              <p className="font-label-sm text-on-surface-variant">Tingkat Kelulusan</p>
            </div>
            <div>
              <p className="font-display-lg text-primary text-4xl mb-base">12</p>
              <p className="font-label-sm text-on-surface-variant">Expert Instructors</p>
            </div>
          </div>
        </section>

        {/* Curriculum Bento Grid */}
        <section className="px-container-padding py-xl max-w-container-max mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-xl gap-md">
            <div>
              <h2 className="font-display-lg text-display-lg mb-sm">Eksplorasi Kurikulum</h2>
              <p className="font-body-lg text-on-surface-variant">
                Pilih jalur pembelajaran yang sesuai dengan kebutuhan industri Anda.
              </p>
            </div>
            <div className="flex gap-sm">
              <span className="px-md py-sm bg-surface-container-high rounded-full font-label-sm border border-outline-variant">
                Basic
              </span>
              <span className="px-md py-sm bg-primary/10 text-primary rounded-full font-label-sm border border-primary/20">
                Advanced
              </span>
              <span className="px-md py-sm bg-surface-container-high rounded-full font-label-sm border border-outline-variant">
                Enterprise
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            {/* Large Card: Asset Management */}
            <div className="md:col-span-8 glass-card p-lg rounded-xl flex flex-col justify-between min-h-[320px] group cursor-pointer hover:border-primary/50 transition-all">
              <div>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-lg">
                  <span className="material-symbols-outlined text-primary text-3xl">factory</span>
                </div>
                <h3 className="font-headline-md text-headline-md mb-md">Asset Management</h3>
                <p className="font-body-md text-on-surface-variant max-w-lg">
                  Pelajari strategi pengelolaan aset fisik secara komprehensif untuk memaksimalkan ROI dan efisiensi
                  operasional sepanjang siklus hidup aset.
                </p>
              </div>
              <div className="flex items-center justify-between mt-xl">
                <div className="flex -space-x-3">
                  <div className="w-8 h-8 rounded-full border-2 border-surface-container bg-primary/20 flex items-center justify-center font-label-sm">
                    JD
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-surface-container bg-secondary/20 flex items-center justify-center font-label-sm">
                    AS
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-surface-container bg-tertiary/20 flex items-center justify-center font-label-sm">
                    RK
                  </div>
                </div>
                {/* <span className="text-primary font-semibold flex items-center gap-xs group-hover:gap-sm transition-all">
                  Explore Track <span className="material-symbols-outlined">arrow_forward</span>
                </span> */}
              </div>
            </div>
            {/* Small Card: Reliability */}
            <div className="md:col-span-4 bg-primary-container/10 border border-primary/20 p-lg rounded-xl flex flex-col group cursor-pointer hover:bg-primary-container/20 transition-all">
              <span className="font-label-sm text-primary mb-lg uppercase tracking-wider">Most Popular</span>
              <h3 className="font-headline-md text-headline-md mb-md">Reliability</h3>
              <p className="font-body-md text-on-surface-variant flex-grow">
                Implementasi Reliability Centered Maintenance (RCM) untuk menjamin availability infrastruktur kritis.
              </p>
              <div className="mt-lg pt-lg border-t border-primary/10 flex items-center justify-between">
                <span className="font-label-sm">12 Modul</span>
                <span className="material-symbols-outlined text-primary">rebase_edit</span>
              </div>
            </div>
            {/* Card: Risk */}
            <div className="md:col-span-4 glass-card p-lg rounded-xl group cursor-pointer hover:border-error/50 transition-all">
              <div className="w-10 h-10 bg-error/10 rounded-lg flex items-center justify-center mb-lg">
                <span className="material-symbols-outlined text-error">warning</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-md">Risk Mitigation</h3>
              <p className="font-body-md text-on-surface-variant mb-xl">
                Identifikasi, analisis, dan mitigasi risiko operasional menggunakan framework berbasis data.
              </p>
              <span className="font-label-sm text-error/80">Beginner Friendly</span>
            </div>
            {/* Card: Data Analytics */}
            <div className="md:col-span-4 glass-card p-lg rounded-xl group cursor-pointer hover:border-tertiary/50 transition-all">
              <div className="w-10 h-10 bg-tertiary/10 rounded-lg flex items-center justify-center mb-lg">
                <span className="material-symbols-outlined text-tertiary">analytics</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-md">Data Analytics</h3>
              <p className="font-body-md text-on-surface-variant mb-xl">
                Mengolah Big Data industri menjadi actionable insights yang presisi untuk pengambilan keputusan.
              </p>
              <span className="font-label-sm text-tertiary/80">Advanced Track</span>
            </div>
            {/* Card: AI */}
            <div className="md:col-span-4 bg-surface-bright p-lg rounded-xl border border-white/10 group cursor-pointer hover:shadow-2xl transition-all relative overflow-hidden">
              <div className="relative z-10">
                <div className="w-10 h-10 bg-on-surface/10 rounded-lg flex items-center justify-center mb-lg">
                  <span className="material-symbols-outlined text-on-surface">psychology</span>
                </div>
                <h3 className="font-headline-md text-headline-md mb-md">Industrial AI</h3>
                <p className="font-body-md text-on-surface-variant mb-xl">
                  Penerapan Machine Learning dan Neural Networks dalam sistem manajemen aset modern.
                </p>
                <span className="font-label-sm text-primary">Specialization</span>
              </div>
              <div className="absolute -right-12 -bottom-12 opacity-10 group-hover:scale-110 transition-transform duration-700">
                <span className="material-symbols-outlined text-[160px]">neurology</span>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Formats */}
        <section className="bg-surface-container-low/50 py-xl px-container-padding">
          <div className="max-w-container-max mx-auto">
            <div className="text-center mb-xl">
              <h2 className="font-display-lg text-display-lg mb-sm">Format Pembelajaran</h2>
              <p className="font-body-lg text-on-surface-variant">
                Metode yang fleksibel dan interaktif untuk kebutuhan profesional Anda.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
              {/* Course */}
              <div className="glass-card rounded-xl overflow-hidden group hover:-translate-y-2 transition-all duration-300">
                <div className="h-48 relative overflow-hidden">
                  <img
                    alt="A clean, close-up shot of a high-resolution tablet screen displaying a sophisticated online learning dashboard with code snippets and data visualizations. The lighting is soft and ambient with a navy and electric blue theme. In the background, out of focus, is a modern home office with minimal tech gear. High-performance, high-fidelity style."
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAD7ceHtrWGM2jBvtPmqM7OGZPSRjqzTPpzrIrM1pNVPasulkeXcGP3BN4Svvru4Lxzkl5m36g4-mo27ZdaZdNl0u-AY0oUMqK5i8_MJFECeOZOclz2a4ZYSDbQQF22UZ2b7lwNqsCmloh-r5ymoBVi6lGgnfdI0SLscgkEbLypye0o4vkT3_pzU21iiuode0RIBOp4XFJgJehukXBGTfO-jbx4GsM4phgIQeBGj4o3vTCF7Dsxtg2QHRmU9-Uc7znu-TtYEa9Dzku-"
                  />
                  <div className="absolute top-4 right-4 bg-primary px-sm py-1 rounded text-on-primary font-label-sm">
                    Self-Paced
                  </div>
                </div>
                <div className="p-lg">
                  <h4 className="font-headline-md text-headline-md mb-sm">Professional Course</h4>
                  <p className="font-body-md text-on-surface-variant mb-lg">
                    Kurikulum video on-demand dengan sertifikasi resmi AIRDE Academy untuk peningkatan karir.
                  </p>
                  <ul className="space-y-sm mb-lg">
                    <li className="flex items-center gap-sm text-on-surface-variant font-label-sm">
                      <span className="material-symbols-outlined text-primary text-sm">check_circle</span> Lifetime
                      Access
                    </li>
                    <li className="flex items-center gap-sm text-on-surface-variant font-label-sm">
                      <span className="material-symbols-outlined text-primary text-sm">check_circle</span> Industry
                      Project
                    </li>
                  </ul>
                </div>
              </div>
              {/* Workshop */}
              <div className="glass-card rounded-xl overflow-hidden group hover:-translate-y-2 transition-all duration-300 border-primary/20">
                <div className="h-48 relative overflow-hidden">
                  <img
                    alt="An immersive indoor photo of a small group of professionals in a high-tech conference room, collaborating around a large interactive touchscreen display showing complex engineering diagrams. The mood is collaborative and focused. The lighting is dominated by glowing screens and subtle overhead LED strips in deep navy and cyan. Modern high-end technological aesthetic."
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYLL4Ttj8_6nfEZ15fQQxpeM4ToY98LeiRxsSrpS8YRa43ExskdmP-a4wWuk8GFdfSJrbKc4tdQd4Xc_9nN5zhZVuPAraG0O__nfxQ2zVJfSW3uEepMP8_94cdihAO7bZvTSgpAD2uozVxWxJi_N8xDEuoKFr4TN1nU9WA_YfSh-oBSBgG6XYz8cpQVJVIrVfJke4KWb8EX61Xud9g6uFvrB4_4JMtZuWxQoNqPNbM0qI-KYEhazasErkx5TUhR_4SVA_6KWXneA35"
                  />
                  <div className="absolute top-4 right-4 bg-tertiary px-sm py-1 rounded text-on-tertiary font-label-sm">
                    Live Sessions
                  </div>
                </div>
                <div className="p-lg">
                  <h4 className="font-headline-md text-headline-md mb-sm">Practical Workshop</h4>
                  <p className="font-body-md text-on-surface-variant mb-lg">
                    Sesi intensif 3-5 hari dengan bimbingan langsung dari pakar industri untuk implementasi nyata.
                  </p>
                  <ul className="space-y-sm mb-lg">
                    <li className="flex items-center gap-sm text-on-surface-variant font-label-sm">
                      <span className="material-symbols-outlined text-tertiary text-sm">check_circle</span> 1-on-1
                      Mentoring
                    </li>
                    <li className="flex items-center gap-sm text-on-surface-variant font-label-sm">
                      <span className="material-symbols-outlined text-tertiary text-sm">check_circle</span> Case
                      Study solving
                    </li>
                  </ul>
                </div>
              </div>
              {/* Webinar */}
              <div className="glass-card rounded-xl overflow-hidden group hover:-translate-y-2 transition-all duration-300">
                <div className="h-48 relative overflow-hidden">
                  <img
                    alt="A professional high-key cinematic shot of a guest speaker delivering a presentation on a stage with a massive high-definition LED backdrop showing intricate neural network animations. The audience is visible as silhouettes in the foreground. The lighting is dramatic and technical, utilizing a spectrum of blues and deep blacks. Sophisticated event photography style."
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSKCVt1zQDDZWD22J2WINo0KjndIxbrYzcU1NNl4DPEhbttFXwpzzXRLggGU3974zdmT6ARr9s4Nd2KpBdzsWau5jQjq4q-2QbM_dpFsw-9DgoB09A4XbiDNv3O-eNGqpEUyc3zLTjlBK9yhgSSjBVMDoxW8gvDWeYKrXQ0Y2jwa4022cKtxDzKks8GpJMjLURLn6RhSpwt1njJDF1boNFDX3UYOKUtBf-tWoGJDs_TMZDA_WZltnG0NzxJ9ffDtzRcL6xgVyDWmnx"
                  />
                  <div className="absolute top-4 right-4 bg-on-surface-variant px-sm py-1 rounded text-surface font-label-sm">
                    Free Access
                  </div>
                </div>
                <div className="p-lg">
                  <h4 className="font-headline-md text-headline-md mb-sm">Expert Webinar</h4>
                  <p className="font-body-md text-on-surface-variant mb-lg">
                    Diskusi panel mingguan mengenai tren terbaru dalam AI industri dan manajemen keandalan aset.
                  </p>
                  <ul className="space-y-sm mb-lg">
                    <li className="flex items-center gap-sm text-on-surface-variant font-label-sm">
                      <span className="material-symbols-outlined text-on-surface-variant text-sm">
                        check_circle
                      </span>{" "}
                      Q&amp;A Sessions
                    </li>
                    <li className="flex items-center gap-sm text-on-surface-variant font-label-sm">
                      <span className="material-symbols-outlined text-on-surface-variant text-sm">
                        check_circle
                      </span>{" "}
                      Recording available
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-container-padding py-xl">
          <div className="max-w-container-max mx-auto relative glass-card p-xl rounded-3xl overflow-hidden text-center">
            <div className="relative z-10 space-y-lg max-w-2xl mx-auto">
              <h2 className="font-display-lg text-display-lg">Siap untuk Memulai Perjalanan Belajar Anda?</h2>
              <p className="font-body-lg text-on-surface-variant">
                Bergabunglah dengan ribuan profesional lainnya yang telah meningkatkan standar keandalan operasional
                melalui AIRDE Academy.
              </p>
              <div className="flex flex-col sm:flex-row gap-md justify-center pt-md">
                <a
                  href="https://airde-project-manager.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-xl py-md bg-primary-container text-on-primary-container font-semibold rounded-xl hover:shadow-[0_0_40px_rgba(37,99,235,0.5)] transition-all inline-block"
                >
                  Gabung Academy Sekarang
                </a>
              </div>
              <div className="pt-lg flex items-center justify-center gap-md">
                <div className="flex items-center gap-xs font-label-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-tertiary">workspace_premium</span> Certified
                  Curriculum
                </div>
                <div className="w-1 h-1 rounded-full bg-outline-variant"></div>
                <div className="flex items-center gap-xs font-label-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-tertiary">group</span> Expert Community
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
    </>
  );
}
