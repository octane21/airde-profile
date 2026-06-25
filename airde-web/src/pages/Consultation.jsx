import { useEffect } from "react";
import { Link } from "react-router-dom";
import { leadershipTeam } from "../assets/images";
import ContactCta from "../components/ContactCta";

export default function Consultation() {
  useEffect(() => {
    document.title = "Consultation | AIRDE";
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
              <h1 className="font-display-lg text-display-lg leading-tight text-on-surface">Consultation</h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                Konsultasi strategis dengan pakar Asset Intelligence, Reliability, dan Digital Engineering kami untuk
                merancang roadmap transformasi yang tepat bagi organisasi Anda.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  to="/about#contact-us"
                  className="bg-primary-container text-on-primary-container px-8 py-3.5 rounded-full font-bold hover:brightness-110 transition-all shadow-lg shadow-primary-container/20"
                >
                  Jadwalkan Konsultasi
                </Link>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative glass rounded-2xl overflow-hidden border border-outline-variant/30">
                <img
                  alt="Tim Konsultan AIRDE"
                  className="w-full aspect-video object-cover"
                  src={leadershipTeam}
                />
                <div className="absolute bottom-6 left-6 right-6 glass p-4 rounded-xl border border-outline-variant/30">
                  <div className="flex justify-between items-center">
                    <span className="font-label-sm text-xs text-on-surface-variant">Tim Konsultan Bersertifikat</span>
                    <span className="font-label-sm text-xs text-tertiary">15+ Tahun Pengalaman</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-xl px-8 md:px-24 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Layanan Konsultasi Kami</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            <div className="glass p-8 rounded-2xl hover:border-primary/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">search_insights</span>
              </div>
              <h3 className="font-headline-md text-lg text-on-surface mb-4">Asset Maturity Assessment</h3>
              <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                Audit menyeluruh terhadap maturitas data, reliability, dan risiko aset untuk memetakan kondisi saat
                ini.
              </p>
            </div>
            <div className="glass p-8 rounded-2xl hover:border-primary/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">route</span>
              </div>
              <h3 className="font-headline-md text-lg text-on-surface mb-4">Strategic Roadmap</h3>
              <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                Penyusunan peta jalan transformasi Intelligence Layer yang selaras dengan tujuan bisnis jangka
                panjang.
              </p>
            </div>
            <div className="glass p-8 rounded-2xl hover:border-primary/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">tune</span>
              </div>
              <h3 className="font-headline-md text-lg text-on-surface mb-4">Technology Fit Analysis</h3>
              <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                Rekomendasi solusi dan arsitektur platform yang paling sesuai dengan infrastruktur eksisting Anda.
              </p>
            </div>
            <div className="glass p-8 rounded-2xl hover:border-primary/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">support_agent</span>
              </div>
              <h3 className="font-headline-md text-lg text-on-surface mb-4">Implementation Support</h3>
              <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                Pendampingan langsung oleh tim ahli selama proses implementasi hingga adopsi penuh oleh organisasi.
              </p>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-xl bg-surface-container-low/50 relative overflow-hidden">
          <div className="px-8 md:px-24 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Proses Konsultasi</h2>
              <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">
                Pendekatan terstruktur dari diskusi awal hingga rekomendasi yang dapat ditindaklanjuti.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
              <div className="text-center group">
                <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-4 text-primary font-bold text-lg group-hover:scale-110 transition-transform">
                  1
                </div>
                <h4 className="font-headline-md text-base text-on-surface mb-2">Discovery Call</h4>
                <p className="text-sm text-on-surface-variant">Memahami tantangan dan kebutuhan operasional Anda.</p>
              </div>
              <div className="text-center group">
                <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-4 text-primary font-bold text-lg group-hover:scale-110 transition-transform">
                  2
                </div>
                <h4 className="font-headline-md text-base text-on-surface mb-2">Assessment</h4>
                <p className="text-sm text-on-surface-variant">Evaluasi data, proses, dan kesiapan teknologi Anda.</p>
              </div>
              <div className="text-center group">
                <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-4 text-primary font-bold text-lg group-hover:scale-110 transition-transform">
                  3
                </div>
                <h4 className="font-headline-md text-base text-on-surface mb-2">Rekomendasi</h4>
                <p className="text-sm text-on-surface-variant">Penyusunan roadmap dan solusi yang dapat ditindaklanjuti.</p>
              </div>
              <div className="text-center group">
                <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-4 text-primary font-bold text-lg group-hover:scale-110 transition-transform">
                  4
                </div>
                <h4 className="font-headline-md text-base text-on-surface mb-2">Pendampingan</h4>
                <p className="text-sm text-on-surface-variant">Dukungan berkelanjutan selama fase implementasi.</p>
              </div>
            </div>
          </div>
        </section>

        <ContactCta
          title="Siap Memulai Konsultasi?"
          description="Diskusikan kebutuhan operasional Anda dengan tim ahli kami dan dapatkan rekomendasi strategis yang sesuai dengan tujuan bisnis Anda."
          primaryLabel="Jadwalkan Konsultasi"
        />
      </main>
    </>
  );
}
