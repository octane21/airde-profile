import { useEffect } from "react";
import { Link } from "react-router-dom";
import { leadershipTeam } from "../assets/images";

export default function About() {
  useEffect(() => {
    document.title = "About AIRDE | Asset Intelligence & Digital Engineering";
  }, []);

  return (
    <>
      <main className="pt-24 overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex flex-col justify-center items-center text-center px-gutter py-xl">
          <div className="absolute inset-0 z-0 opacity-40"></div>
          <div className="relative z-10 max-w-4xl space-y-md">
            <div className="inline-flex items-center gap-sm bg-primary/10 border border-primary/20 px-md py-xs rounded-full">
              <span className="w-2 h-2 rounded-full bg-primary pulse-dot"></span>
              <span className="font-label-sm text-label-sm text-primary">RELIABILITY REIMAGINED</span>
            </div>
            <h1 className="font-display-lg text-display-lg md:text-[64px] leading-tight text-white tracking-tight">
              Who we are and why we exist.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              AIRDE adalah inisiatif strategis untuk <span className="text-primary">Asset Intelligence</span>,
              Reliability, dan Digital Engineering. Kami menjembatani kesenjangan antara data mentah industri dan
              keputusan bisnis yang presisi.
            </p>
            <div className="pt-md">
              <Link
                to="#vision-mission"
                className="inline-block bg-primary text-on-primary px-xl py-md font-label-sm text-label-sm uppercase tracking-widest hover:shadow-[0_0_20px_rgba(180,197,255,0.4)] transition-all"
              >
                Discover Our Mission
              </Link>
            </div>
          </div>
        </section>

        {/* Impact Stats Strip */}
        <section className="bg-surface-container-low border-y border-outline-variant/30 py-lg">
          <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-3 gap-xl">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <span className="font-display-lg text-display-lg text-primary">25+</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-tighter">
                Sektor Industri
              </span>
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <span className="font-display-lg text-display-lg text-tertiary">100+</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-tighter">
                Organisasi Terintegrasi
              </span>
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <span className="font-display-lg text-display-lg text-secondary">1M+</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-tighter">
                Aset Digital Terkelola
              </span>
            </div>
          </div>
        </section>

        {/* Our Story / Narrative Flow */}
        <section className="py-xl px-gutter max-w-container-max mx-auto">
          <div className="flex flex-col md:flex-row gap-xl items-center">
            <div className="w-full md:w-1/2 space-y-md">
              <h2 className="font-headline-md text-headline-md text-white">
                Evolusi dari Data-to-Decision Gap
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Kami lahir dari kebutuhan mendesak akan efisiensi operasional. Di masa lalu, industri terjebak
                dalam tumpukan data yang terfragmentasi. AIRDE hadir untuk mengubah paradigma ini melalui
                pendekatan AI-Native.
              </p>
              <div className="space-y-sm">
                <div className="flex items-start gap-md group">
                  <div className="mt-1 w-8 h-8 rounded bg-surface-container flex items-center justify-center border border-outline-variant group-hover:border-primary transition-colors">
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                      history
                    </span>
                  </div>
                  <div>
                    <h4 className="font-body-md font-bold text-white">Legacy Systems</h4>
                    <p className="text-on-surface-variant text-sm">
                      Data manual dan silo operasional menghambat pertumbuhan.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-md group">
                  <div className="mt-1 w-8 h-8 rounded bg-surface-container flex items-center justify-center border border-outline-variant group-hover:border-primary transition-colors">
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                      analytics
                    </span>
                  </div>
                  <div>
                    <h4 className="font-body-md font-bold text-white">Digital Transformation</h4>
                    <p className="text-on-surface-variant text-sm">
                      Integrasi IoT dan pemantauan real-time mulai diterapkan.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-md group">
                  <div className="mt-1 w-8 h-8 rounded bg-surface-container flex items-center justify-center border border-outline-variant group-hover:border-primary transition-colors">
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                      auto_awesome
                    </span>
                  </div>
                  <div>
                    <h4 className="font-body-md font-bold text-white">AI-Native Era</h4>
                    <p className="text-on-surface-variant text-sm">
                      Pengambilan keputusan otomatis berbasis kecerdasan buatan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative">
              <div className="aspect-square bg-surface-container rounded-xl overflow-hidden glow-border p-4">
                <img
                  alt="A cinematic interior shot of a futuristic command center with multiple glass partitions where digital workers are analyzing complex holographic data structures."
                  className="w-full h-full object-cover rounded-lg opacity-80"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTMpOmAqRdbgBJNKbXhRL4TfwRYY80yxEVj2rbQpWsdAjGERSQGaCryMZYP3E43hjpIPR2lPVJIJaqecKubKP_5iOn0E7E7wysvKGzFbUQlulXjx3umXnx7XH2neIl6tXxtJWXgl3Vfva6PHhp0pqypNL6cK1Tqzo1mG1u0EiTCEdFn-DpijPoPm2v-l-7iKTFMgU8dVCgDyN5mPLYDOIPCiGOOjlgZjLdFBQFKRVnViTnmjLhdKBXeQh9krcsah2MGptlIPni3m0i"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section id="vision-mission" className="py-xl bg-surface-container-lowest">
          <div className="max-w-container-max mx-auto px-gutter">
            {/* Vision */}
            <div className="relative glass-card rounded-2xl p-xl text-center max-w-3xl mx-auto mb-xl overflow-hidden border border-primary/20">
              <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
              <div className="relative z-10 space-y-md">
                <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.2em]">Visi</span>
                <p className="font-display-lg text-display-lg-mobile md:text-headline-lg text-white leading-snug">
                  Menjadi <span className="text-primary italic">Intelligence Layer</span> terdepan dan terpercaya yang
                  mengubah data menjadi intelligence, dan intelligence menjadi keputusan bernilai — demi organisasi
                  padat aset yang lebih andal, aman, dan berkelanjutan.
                </p>
              </div>
            </div>

            <div className="text-center mb-xl space-y-sm">
              <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.2em]">Misi</span>
              <h2 className="font-headline-md text-headline-md text-white">Bagaimana Kami Mewujudkannya</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
              {/* Misi 1 */}
              <div className="bg-surface-container p-lg glow-border group hover:bg-surface-bright transition-all">
                <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center mb-md group-hover:bg-primary/20">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                    hub
                  </span>
                </div>
                <h3 className="font-headline-md text-[20px] text-white mb-sm">Menjembatani Data-to-Decision Gap</h3>
                <p className="font-body-md text-on-surface-variant text-sm">
                  Mengintegrasikan data dari SCADA, ERP, CMMS, IoT, dan inspeksi menjadi intelligence yang relevan dan
                  dapat ditindaklanjuti.
                </p>
              </div>
              {/* Misi 2 */}
              <div className="bg-surface-container p-lg glow-border group hover:bg-surface-bright transition-all">
                <div className="w-12 h-12 bg-tertiary/10 rounded flex items-center justify-center mb-md group-hover:bg-tertiary/20">
                  <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>
                    workspace_premium
                  </span>
                </div>
                <h3 className="font-headline-md text-[20px] text-white mb-sm">Lima Disiplin Keunggulan</h3>
                <p className="font-body-md text-on-surface-variant text-sm">
                  Asset Intelligence, Reliability, Risk Engineering, Data Analytics, dan AI untuk keputusan yang lebih
                  cepat, akurat, dan bernilai.
                </p>
              </div>
              {/* Misi 3 */}
              <div className="bg-surface-container p-lg glow-border group hover:bg-surface-bright transition-all">
                <div className="w-12 h-12 bg-secondary/10 rounded flex items-center justify-center mb-md group-hover:bg-secondary/20">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
                    psychology
                  </span>
                </div>
                <h3 className="font-headline-md text-[20px] text-white mb-sm">AI sebagai Decision Enabler</h3>
                <p className="font-body-md text-on-surface-variant text-sm">
                  Memperkuat — bukan menggantikan — penilaian dan keahlian engineer serta pengambil keputusan.
                </p>
              </div>
              {/* Misi 4 */}
              <div className="bg-surface-container p-lg glow-border group hover:bg-surface-bright transition-all">
                <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center mb-md group-hover:bg-primary/20">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                    trending_up
                  </span>
                </div>
                <h3 className="font-headline-md text-[20px] text-white mb-sm">Dampak Bisnis Terukur</h3>
                <p className="font-body-md text-on-surface-variant text-sm">
                  Meningkatkan keandalan aset, mengendalikan risiko, mengoptimalkan biaya, dan menghasilkan nilai
                  berkelanjutan.
                </p>
              </div>
              {/* Misi 5 */}
              <div className="bg-surface-container p-lg glow-border group hover:bg-surface-bright transition-all">
                <div className="w-12 h-12 bg-tertiary/10 rounded flex items-center justify-center mb-md group-hover:bg-tertiary/20">
                  <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>
                    shield_with_heart
                  </span>
                </div>
                <h3 className="font-headline-md text-[20px] text-white mb-sm">Keamanan &amp; Tata Kelola</h3>
                <p className="font-body-md text-on-surface-variant text-sm">
                  Menjunjung keamanan, governance, dan kepercayaan data berstandar enterprise di setiap lapisan
                  proses.
                </p>
              </div>
              {/* Misi 6 */}
              <div className="bg-surface-container p-lg glow-border group hover:bg-surface-bright transition-all">
                <div className="w-12 h-12 bg-secondary/10 rounded flex items-center justify-center mb-md group-hover:bg-secondary/20">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
                    school
                  </span>
                </div>
                <h3 className="font-headline-md text-[20px] text-white mb-sm">Academy &amp; Thought Leadership</h3>
                <p className="font-body-md text-on-surface-variant text-sm">
                  Membangun dan menyebarkan pengetahuan untuk menumbuhkan kapabilitas industri serta generasi
                  engineer masa depan.
                </p>
              </div>
            </div>
            <div className="mt-xl flex justify-center items-center gap-md flex-wrap">
              <span className="font-label-sm text-on-surface-variant">DATA</span>
              <span className="material-symbols-outlined text-primary">arrow_forward</span>
              <span className="font-label-sm text-on-surface-variant">INTELLIGENCE</span>
              <span className="material-symbols-outlined text-primary">arrow_forward</span>
              <span className="font-label-sm text-on-surface-variant">DECISION</span>
              <span className="material-symbols-outlined text-primary">arrow_forward</span>
              <span className="font-label-sm text-white font-bold">BUSINESS VALUE</span>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-xl px-gutter max-w-container-max mx-auto">
          <h2 className="font-headline-md text-headline-md text-white mb-xl text-center md:text-left">
            The Leadership Team
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg items-start">
            {/* Large Image Context */}
            <div className="lg:col-span-7 bg-surface-container rounded-xl overflow-hidden glow-border h-[500px]">
              <img
                alt="The Leadership Team"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                src={leadershipTeam}
              />
            </div>
            {/* Profile Grid */}
            <div className="lg:col-span-5 grid grid-cols-1 gap-md">
              <div className="p-md bg-surface-container/50 border-l-2 border-primary hover:bg-surface-container transition-colors">
                <h4 className="font-headline-md text-[18px] text-white"> Ir. Iman Satria.,ST.MT.IPM.ASEAN.Eng</h4>
                <p className="font-label-sm text-primary uppercase text-[10px] mb-xs">Indivisual Expert</p>
                <p className="font-body-md text-on-surface-variant text-sm">
                  Expert in Energy Sectors
                </p>
              </div>
              <div className="p-md bg-surface-container/50 border-l-2 border-tertiary hover:bg-surface-container transition-colors">
                <h4 className="font-headline-md text-[18px] text-white">-</h4>
                <p className="font-label-sm text-tertiary uppercase text-[10px] mb-xs">-</p>
                <p className="font-body-md text-on-surface-variant text-sm">
                  -
                </p>
              </div>
              <div className="p-md bg-surface-container/50 border-l-2 border-secondary hover:bg-surface-container transition-colors">
                <h4 className="font-headline-md text-[18px] text-white">-</h4>
                <p className="font-label-sm text-secondary uppercase text-[10px] mb-xs">-</p>
                <p className="font-body-md text-on-surface-variant text-sm">
                  -
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact & Location */}
        <section className="py-xl bg-surface-container-lowest">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
              <div className="space-y-lg">
                <h2 className="font-headline-md text-headline-md text-white">Connect With Us</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
                  <div className="space-y-xs">
                    <p className="font-label-sm text-primary uppercase text-[10px]">Padang</p>
                    <p className="text-on-surface-variant text-sm">Padang Bypass II Batipuh Panjang, Kec. Koto Tangah, Kota Padang, Sumatera Barat 25586</p>
                  </div>
              
                </div>
                <div className="pt-md border-t border-outline-variant/30">
                  <p className="font-body-md text-white">
                    General Inquiries: <span className="text-primary">connect@airde.ai</span>
                  </p>
                </div>
              </div>
              <div className="bg-surface-container p-lg glow-border flex flex-col justify-center items-center text-center">
                <h3 className="font-headline-md text-white mb-md">Ready to optimize?</h3>
                <p className="font-body-md text-on-surface-variant mb-lg">
                  Jadwalkan sesi konsultasi teknis dengan pakar kami untuk mengevaluasi maturitas aset digital Anda.
                </p>
                <Link to="/about#contact-us" className="w-full bg-white text-surface px-lg py-md font-label-sm text-label-sm uppercase tracking-widest hover:bg-primary hover:text-white transition-all">
                  Talk To An Expert
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <section id="contact-us" className="py-xl bg-surface-container-lowest border-t border-outline-variant/30">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="mb-xl text-center md:text-left">
            <h2 className="font-display-lg text-display-lg text-white mb-sm">Hubungi Kami</h2>
            <p className="text-on-surface-variant max-w-2xl">
              Siap untuk mentransformasi operasional industri Anda? Tim ahli kami siap membantu Anda merancang
              solusi yang tepat.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
            {/* Left Column: Contact Form */}
            <div className="lg:col-span-7 bg-surface-container p-lg rounded-xl glow-border backdrop-blur-md">
              <form className="space-y-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                  <div className="space-y-xs">
                    <label className="font-label-sm text-label-sm text-primary uppercase">Nama Lengkap</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-surface-container-low border border-outline-variant/30 rounded p-md text-on-surface focus:border-primary outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-xs">
                    <label className="font-label-sm text-label-sm text-primary uppercase">Email Bisnis</label>
                    <input
                      type="email"
                      placeholder="john@company.com"
                      className="w-full bg-surface-container-low border border-outline-variant/30 rounded p-md text-on-surface focus:border-primary outline-none transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-xs">
                  <label className="font-label-sm text-label-sm text-primary uppercase">Nama Perusahaan</label>
                  <input
                    type="text"
                    placeholder="PT. Industri Maju"
                    className="w-full bg-surface-container-low border border-outline-variant/30 rounded p-md text-on-surface focus:border-primary outline-none transition-colors"
                  />
                </div>
                <div className="space-y-xs">
                  <label className="font-label-sm text-label-sm text-primary uppercase">Kebutuhan / Pesan</label>
                  <textarea
                    rows={4}
                    placeholder="Ceritakan tantangan industri Anda..."
                    className="w-full bg-surface-container-low border border-outline-variant/30 rounded p-md text-on-surface focus:border-primary outline-none transition-colors"
                  ></textarea>
                </div>
                <div className="flex flex-wrap gap-md pt-md">
                  <Link to="/about#contact-us"
                    type="submit"
                    className="bg-primary text-on-primary px-xl py-md font-label-sm text-label-sm uppercase tracking-widest hover:shadow-[0_0_20px_rgba(180,197,255,0.4)] transition-all"
                  >
                    Talk To An Expert
                  </Link>
                  <Link to="/about#contact-us"
                    type="button"
                    className="border border-primary text-primary px-xl py-md font-label-sm text-label-sm uppercase tracking-widest hover:bg-primary/10 transition-all"
                  >
                    Request Demo
                  </Link>
                </div>
              </form>
            </div>
            {/* Right Column: Contact Info */}
            <div className="lg:col-span-5 space-y-lg">
              <div className="bg-surface-container/50 p-lg rounded-xl border border-outline-variant/20">
                <div className="space-y-md">
                  <div>
                    <h4 className="font-label-sm text-primary uppercase mb-xs">Lokasi PADANG</h4>
                    <p className="text-on-surface-variant text-sm">
                     Padang Bypass II Batipuh Panjang, Kec. Koto Tangah, Kota Padang, Sumatera Barat 25586
                    </p>
                  </div>
                  <div>
                    <h4 className="font-label-sm text-primary uppercase mb-xs">Email &amp; Support</h4>
                    <p className="text-on-surface-variant text-sm">-</p>
                    <p className="text-on-surface-variant text-sm">-</p>
                  </div>
                  <div>
                    <h4 className="font-label-sm text-primary uppercase mb-xs">Telepon</h4>
                    <p className="text-on-surface-variant text-sm">-</p>
                    <p className="text-on-surface-variant text-sm">-</p>
                  </div>
                </div>
              </div>
              <div className="aspect-video bg-surface-container rounded-xl overflow-hidden glow-border relative">
                <iframe
                  title="Lokasi AIRDE Padang"
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=Padang+Bypass+II+Batipuh+Panjang%2C+Kec.+Koto+Tangah%2C+Kota+Padang%2C+Sumatera+Barat+25586&output=embed"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
