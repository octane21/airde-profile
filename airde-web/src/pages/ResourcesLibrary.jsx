import { useEffect, useState } from "react";
import DocumentLibrary from "../components/DocumentLibrary";

export default function ResourcesLibrary() {
  const [search, setSearch] = useState("");
  const [viewMode, setViewMode] = useState("grid");

  useEffect(() => {
    document.title = "Resources | AIRDE";
  }, []);

  return (
    <>
      <main className="pt-24 min-h-screen">
        {/* Hero Section */}
        <section className="relative px-container-padding py-section-gap max-w-screen-2xl mx-auto overflow-hidden">
          <div className="relative z-10 text-center max-w-4xl mx-auto pt-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 backdrop-blur-md border border-primary/20 rounded-full mb-6">
              <span className="w-2 h-2 bg-primary rounded-full status-pulse"></span>
              <span className="text-primary font-label-sm text-label-sm uppercase tracking-wider">
                Resource Library
              </span>
            </div>
            <h1 className="font-display-lg text-display-lg mb-6 leading-tight text-on-surface">
              Knowledge, insights, dan best practices untuk keputusan yang lebih baik.
            </h1>
            <p className="text-on-surface-variant font-body-lg text-body-lg mb-10 max-w-2xl mx-auto">
              Kumpulan panduan teknis, analisis mendalam, dan berita industri terbaru untuk membantu Anda
              mengoptimalkan operasional industri dengan AI.
            </p>
            {/* Search & Filters Container */}
            <div className="glass-card backdrop-blur-xl rounded-2xl p-2 max-w-2xl mx-auto mb-12 shadow-2xl">
              <div className="flex items-center gap-2">
                <div className="flex-1 flex items-center bg-surface-container-lowest/40 backdrop-blur-md rounded-xl px-4 py-3 border border-white/5">
                  <span className="material-symbols-outlined text-primary mr-3">search</span>
                  <input
                    className="bg-transparent border-none focus:ring-0 text-on-surface w-full placeholder:text-on-surface-variant/50"
                    placeholder="Cari dokumen berdasarkan judul atau deskripsi..."
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="bg-primary text-on-primary px-8 py-3 rounded-xl font-bold hover:brightness-110 transition-all intelligence-glow"
                >
                  {search ? "Reset" : "Search"}
                </button>
              </div>
            </div>
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3">
              <button className="px-5 py-2 rounded-full glass-card text-label-sm font-label-sm text-primary border-primary/40 bg-primary/10">
                All Resources
              </button>
              <button className="px-5 py-2 rounded-full glass-card text-label-sm font-label-sm hover:text-primary hover:border-primary/30">
                Articles
              </button>
              <button className="px-5 py-2 rounded-full glass-card text-label-sm font-label-sm hover:text-primary hover:border-primary/30">
                Case Studies
              </button>
              <button className="px-5 py-2 rounded-full glass-card text-label-sm font-label-sm hover:text-primary hover:border-primary/30">
                White Papers
              </button>
              <button className="px-5 py-2 rounded-full glass-card text-label-sm font-label-sm hover:text-primary hover:border-primary/30">
                Webinars
              </button>
              <button className="px-5 py-2 rounded-full glass-card text-label-sm font-label-sm hover:text-primary hover:border-primary/30">
                Downloads
              </button>
              <button className="px-5 py-2 rounded-full glass-card text-label-sm font-label-sm hover:text-primary hover:border-primary/30">
                Media &amp; News
              </button>
            </div>
          </div>
        </section>

        {/* Content Grid */}
        <section className="px-container-padding py-section-gap max-w-screen-2xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-6">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">Latest Updates</h2>
              <p className="text-on-surface-variant font-body-md text-body-md">
                Eksplorasi konten terbaru dari para ahli kami.
              </p>
            </div>
            <div className="flex gap-2 p-1 bg-surface-container-low/50 backdrop-blur-md rounded-xl border border-white/5">
              <button
                type="button"
                onClick={() => setViewMode("grid")}
                aria-pressed={viewMode === "grid"}
                className={`p-2 glass-card rounded-lg border-none transition-all ${
                  viewMode === "grid" ? "bg-primary/20 text-primary" : "hover:bg-white/5 text-on-surface-variant"
                }`}
              >
                <span className="material-symbols-outlined">grid_view</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode("list")}
                aria-pressed={viewMode === "list"}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === "list" ? "glass-card bg-primary/20 text-primary" : "hover:bg-white/5 text-on-surface-variant"
                }`}
              >
                <span className="material-symbols-outlined">format_list_bulleted</span>
              </button>
            </div>
          </div>

          <DocumentLibrary category="resources" embedded search={search} viewMode={viewMode} />
        </section>

        {/* Newsletter Section */}
        <section className="px-container-padding py-section-gap max-w-screen-2xl mx-auto mb-20">
          <div className="glass-card rounded-[2rem] p-8 lg:p-16 relative overflow-hidden shadow-2xl border-white/10">
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none bg-gradient-to-l from-primary/20 to-transparent"></div>
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display-lg text-headline-lg lg:text-display-lg mb-4 text-on-surface">
                  Tetap Terdepan dalam Intelligence
                </h2>
                <p className="text-on-surface-variant font-body-lg text-body-lg">
                  Berlangganan buletin bulanan kami untuk mendapatkan rangkuman eksklusif tentang tren AI industri,
                  studi kasus rahasia, dan update fitur terbaru.
                </p>
              </div>
              <div>
                <form className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <input
                      className="w-full bg-surface-container-lowest/60 backdrop-blur-md border border-white/10 rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary focus:border-transparent text-on-surface outline-none placeholder:text-on-surface-variant/50"
                      placeholder="Alamat email bisnis Anda"
                      type="email"
                    />
                  </div>
                  <button
                    className="bg-primary text-on-primary px-10 py-4 rounded-xl font-bold hover:brightness-110 intelligence-glow transition-all active:scale-95"
                    type="submit"
                  >
                    Subscribe Now
                  </button>
                </form>
                <p className="text-label-sm font-label-sm text-on-surface-variant mt-4">
                  Dengan mendaftar, Anda menyetujui{" "}
                  <a className="underline hover:text-primary" href="#">
                    Kebijakan Privasi
                  </a>{" "}
                  kami. No spam, hanya technical insights.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
    </>
  );
}
