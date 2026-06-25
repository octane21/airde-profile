import { useEffect } from "react";
import { Link } from "react-router-dom";
import ContactCta from "../components/ContactCta";

export default function Industries() {
  useEffect(() => {
    document.title = "Industries | AIRDE Industrial AI";
  }, []);

  return (
    <>
      <main className="pt-xl">
        {/* Hero Section */}
        <section className="relative min-h-[716px] flex flex-col items-center justify-center text-center px-lg py-xl overflow-hidden">
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-sm px-md py-xs rounded-full bg-surface-variant/30 border border-outline-variant/50 mb-lg">
              <span className="w-2 h-2 rounded-full bg-primary status-pulse"></span>
              <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest">INDUSTRIES</span>
            </div>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-md">
              Intelligence Tailored for <br className="hidden md:block" />Industrial Excellence.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              AIRDE beradaptasi dengan tantangan unik setiap sektor untuk memaksimalkan efisiensi dan mengurangi
              risiko operasional.
            </p>
          </div>
        </section>

        {/* Industry Grid */}
        <section className="max-w-container-max mx-auto px-lg py-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {/* Oil & Gas */}
            <Link
              to="/industries/oil-gas"
              className="glass-card rounded-xl overflow-hidden glow-hover transition-all duration-500 group flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  alt="Offshore oil rig at twilight"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLDygIfosClEFuvv36F2EtAjF_ndKzWTlWw5ltPSpc-IpdSyyL9lYN-X0bAFvMtSjut8T6_HI4ZfnaWZR_3evWXXBhaQz91wsYBFWjNRwQ0_Iv4jxsqaOvXQefUl4exz2Uhv_hg51IwO0sHr0_PgA1X_CKD9Qf4TGk8ulqBwgFTLfJ4otVfRbgtnZdoZ8DBmIlLVrtP0f1d-yWEOYYHzoeBrRJJ8OmJOVYlByW-eAwTx6dUpshQxUSCHcCoLSuagey9dhoZkbDjNn2"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                <div className="absolute top-md left-md bg-primary/10 border border-primary/30 px-sm py-xs rounded text-primary font-label-sm text-label-sm flex items-center gap-xs">
                  <span className="material-symbols-outlined text-[14px]">oil_barrel</span> O&amp;G CORE
                </div>
              </div>
              <div className="p-lg flex-grow flex flex-col">
                <h3 className="font-headline-md text-headline-md text-on-surface mb-sm">Oil &amp; Gas</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-lg">
                  Optimalkan produksi dan manajemen risiko di lingkungan yang menantang melalui sensor pintar dan
                  pemodelan prediktif.
                </p>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-primary font-body-md flex items-center gap-xs group-hover:gap-sm transition-all">
                    Explore Solution <span className="material-symbols-outlined">arrow_forward</span>
                  </span>
                  <div className="flex gap-xs">
                    <span className="w-1 h-1 rounded-full bg-outline"></span>
                    <span className="w-1 h-1 rounded-full bg-outline"></span>
                    <span className="w-1 h-1 rounded-full bg-primary"></span>
                  </div>
                </div>
              </div>
            </Link>
            {/* Ports & Maritime */}
            <Link
              to="/industries/ports-maritime"
              className="glass-card rounded-xl overflow-hidden glow-hover transition-all duration-500 group flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  alt="Modern container terminal at night"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmokS7EThybKVi5fo8yd4ufjDrt5Wqpojbru-0iYpbOZry_M5scCfknw03kEOkOvBNvBa7rQLObkU6GQ6PIz2uOUjMCEk2nmyh3tEd5PipwDZifh3NVouNGpQAD5cAYhpYnHbiumQwYtMWgfl2cmOyW62Tg12cUsvaNQeV_GVs9wTlYUgCHENMe-kPv060npDVsshz4o0-D8Q8mus2AqC7i4jrtndd4hKaOvwzrzv-2ZmxpmnywWKJjhaSjh0BqarAGpi6fbkwq-EQ"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                <div className="absolute top-md left-md bg-primary/10 border border-primary/30 px-sm py-xs rounded text-primary font-label-sm text-label-sm flex items-center gap-xs">
                  <span className="material-symbols-outlined text-[14px]">directions_boat</span> LOGISTICS
                </div>
              </div>
              <div className="p-lg flex-grow flex flex-col">
                <h3 className="font-headline-md text-headline-md text-on-surface mb-sm">Ports &amp; Maritime</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-lg">
                  Tingkatkan throughput dan efisiensi logistik melalui penjadwalan cerdas dan pemantauan aset
                  real-time di pelabuhan.
                </p>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-primary font-body-md flex items-center gap-xs group-hover:gap-sm transition-all">
                    Explore Solution <span className="material-symbols-outlined">arrow_forward</span>
                  </span>
                  <div className="flex gap-xs">
                    <span className="w-1 h-1 rounded-full bg-outline"></span>
                    <span className="w-1 h-1 rounded-full bg-primary"></span>
                    <span className="w-1 h-1 rounded-full bg-outline"></span>
                  </div>
                </div>
              </div>
            </Link>
            {/* Power & Utilities */}
            <Link
              to="/industries/power-utilities"
              className="glass-card rounded-xl overflow-hidden glow-hover transition-all duration-500 group flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  alt="Futuristic smart power grid"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCj9LgB9BKYllMI9Aqqv6Idew46Sn-h2KBwTUGaCuiDhUOMVf2n2JYsJhbDR7rN2l4aVVQaYR6i-cI-_OmPeANH-t2viK4Q4Ry6nva-VEuKgaKOT5l6JMWrdyDfDGB5eKqmmiUaaLpG75MzwfdlOgLmZIgVuva-m5Jtl82l5PgTc3HenyWtkHhfItzz5r6uGi-AVrdLb1jg5baYgdI3Vf1u0kFejJJAAsr-0nRYKYKb6Hir-Zku2kuaZrqRYgc0gog3GPAq-pGWBhYr"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                <div className="absolute top-md left-md bg-primary/10 border border-primary/30 px-sm py-xs rounded text-primary font-label-sm text-label-sm flex items-center gap-xs">
                  <span className="material-symbols-outlined text-[14px]">bolt</span> ENERGY
                </div>
              </div>
              <div className="p-lg flex-grow flex flex-col">
                <h3 className="font-headline-md text-headline-md text-on-surface mb-sm">Power &amp; Utilities</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-lg">
                  Pastikan stabilitas jaringan dan keandalan aset distribusi energi dengan analisis prediktif
                  terhadap kegagalan komponen.
                </p>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-primary font-body-md flex items-center gap-xs group-hover:gap-sm transition-all">
                    Explore Solution <span className="material-symbols-outlined">arrow_forward</span>
                  </span>
                  <div className="flex gap-xs">
                    <span className="w-1 h-1 rounded-full bg-primary"></span>
                    <span className="w-1 h-1 rounded-full bg-outline"></span>
                    <span className="w-1 h-1 rounded-full bg-outline"></span>
                  </div>
                </div>
              </div>
            </Link>
            {/* Manufacturing */}
            <Link
              to="/industries/manufacturing"
              className="glass-card rounded-xl overflow-hidden glow-hover transition-all duration-500 group flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  alt="High-tech robotic assembly line"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAS71fkEm0NwjkfJMifFJzGE0kvy7ANwGv-c9gogmf_nTWWQfj31VxbMhBKWCPmOFFrJCrM4GFE-5-gE9wAXko_md-zW4tTL6fXo6D2IEDcqya7R3_JvzjSryF--iooJmekS45mod-jSoaXrGSD_T_jtde0xEuCIdEHdd_mtFBsFULP4XciZRF5Zwf2q-ibJDQJ-O034VH7pa7R6-yTqxKWHJIuIWmmzxc5EjetkkMBjpQU3vbY28rk-vRqEZkDIzyBct9UAoh-4j_r"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                <div className="absolute top-md left-md bg-primary/10 border border-primary/30 px-sm py-xs rounded text-primary font-label-sm text-label-sm flex items-center gap-xs">
                  <span className="material-symbols-outlined text-[14px]">precision_manufacturing</span> SMART FACTORY
                </div>
              </div>
              <div className="p-lg flex-grow flex flex-col">
                <h3 className="font-headline-md text-headline-md text-on-surface mb-sm">Manufacturing</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-lg">
                  Transformasi pabrik Anda menjadi fasilitas pintar berbasis AI yang responsif terhadap permintaan
                  pasar dan efisiensi energi.
                </p>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-primary font-body-md flex items-center gap-xs group-hover:gap-sm transition-all">
                    Explore Solution <span className="material-symbols-outlined">arrow_forward</span>
                  </span>
                  <div className="flex gap-xs">
                    <span className="w-1 h-1 rounded-full bg-outline"></span>
                    <span className="w-1 h-1 rounded-full bg-outline"></span>
                    <span className="w-1 h-1 rounded-full bg-primary"></span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Proven Value Section */}
        <section className="bg-surface-container-low py-xl overflow-hidden">
          <div className="max-w-container-max mx-auto px-lg">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-xl gap-md">
              <div className="max-w-xl">
                <h2 className="font-headline-md text-headline-md text-on-surface mb-sm">Proven Value Across Sectors</h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Kami menghadirkan hasil terukur yang mengubah metrik operasional menjadi keunggulan kompetitif.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              {/* Outcome 1 */}
              <div className="flex gap-md group">
                <div className="light-bar opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div>
                  <div className="font-display-lg text-primary mb-xs">25%</div>
                  <div className="font-label-sm text-label-sm text-tertiary mb-sm uppercase tracking-tighter">Oil &amp; Gas</div>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Penurunan downtime tidak terencana pada anjungan lepas pantai melalui pemeliharaan prediktif.
                  </p>
                </div>
              </div>
              {/* Outcome 2 */}
              <div className="flex gap-md group">
                <div className="light-bar opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div>
                  <div className="font-display-lg text-primary mb-xs">15%</div>
                  <div className="font-label-sm text-label-sm text-tertiary mb-sm uppercase tracking-tighter">Ports &amp; Maritime</div>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Peningkatan kecepatan bongkar muat peti kemas dengan optimasi penjadwalan berbasis AI.
                  </p>
                </div>
              </div>
              {/* Outcome 3 */}
              <div className="flex gap-md group">
                <div className="light-bar opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div>
                  <div className="font-display-lg text-primary mb-xs">30%</div>
                  <div className="font-label-sm text-label-sm text-tertiary mb-sm uppercase tracking-tighter">Manufacturing</div>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Efisiensi konsumsi energi pada lini produksi otomotif selama jam beban puncak.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ContactCta
          title="Siap Mentransformasi Industri Anda?"
          description="Hubungi tim ahli kami untuk mendiskusikan bagaimana AIRDE dapat disesuaikan dengan infrastruktur dan tujuan bisnis Anda."
          primaryLabel="Konsultasi Industri"
        />
      </main>
    </>
  );
}
