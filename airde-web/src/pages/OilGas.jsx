import { useEffect } from "react";
import ContactCta from "../components/ContactCta";

export default function OilGas() {
  useEffect(() => {
    document.title = "AIRDE | Oil & Gas Industrial AI";
  }, []);

  return (
    <>
      {/* Hero Section */}
      <header className="relative w-full min-h-[90vh] flex items-center pt-xl overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-50">
          <img
            alt="Offshore oil rig at twilight"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLDygIfosClEFuvv36F2EtAjF_ndKzWTlWw5ltPSpc-IpdSyyL9lYN-X0bAFvMtSjut8T6_HI4ZfnaWZR_3evWXXBhaQz91wsYBFWjNRwQ0_Iv4jxsqaOvXQefUl4exz2Uhv_hg51IwO0sHr0_PgA1X_CKD9Qf4TGk8ulqBwgFTLfJ4otVfRbgtnZdoZ8DBmIlLVrtP0f1d-yWEOYYHzoeBrRJJ8OmJOVYlByW-eAwTx6dUpshQxUSCHcCoLSuagey9dhoZkbDjNn2"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-container-max mx-auto px-lg grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
          <div className="space-y-md">
            <div className="inline-flex items-center gap-sm px-md py-xs rounded-full bg-surface-variant/30 border border-outline-variant/50">
              <span className="pulse-dot"></span>
              <span className="font-label-sm text-label-sm text-tertiary tracking-widest uppercase">INDUSTRI</span>
            </div>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface leading-tight">
              Optimasi Produksi &amp; Keamanan di Lingkungan Menantang.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              AIRDE membawa kecerdasan prediktif ke garis depan operasional energi, dari pengeboran hingga
              distribusi.
            </p>
          </div>
          <div className="hidden lg:block relative">
            {/* Decorative element to simulate technical UI */}
            <div className="glass-panel p-lg rounded-xl glow-blue space-y-md border-primary/20">
              <div className="flex justify-between items-center">
                <span className="font-label-sm text-label-sm text-primary">LIVE TELEMETRY: RIG_74B</span>
                <span className="material-symbols-outlined text-primary">monitoring</span>
              </div>
              <div className="h-32 w-full bg-surface-container-low rounded relative overflow-hidden">
                {/* Simulated wave */}
                <div className="absolute inset-0 opacity-30 flex items-center">
                  <svg className="w-full" viewBox="0 0 400 100">
                    <path d="M0 50 Q 50 10, 100 50 T 200 50 T 300 50 T 400 50" fill="none" stroke="#b4c5ff" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-sm">
                <div className="p-sm bg-surface/50 rounded border border-outline-variant/30">
                  <p className="font-label-sm text-label-sm text-on-surface-variant">PRESSURE</p>
                  <p className="font-headline-md text-headline-md text-tertiary">4,250 PSI</p>
                </div>
                <div className="p-sm bg-surface/50 rounded border border-outline-variant/30">
                  <p className="font-label-sm text-label-sm text-on-surface-variant">TEMP</p>
                  <p className="font-headline-md text-headline-md text-on-surface">184°F</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Operational Challenges Section */}
      <section className="py-xl bg-surface">
        <div className="max-w-container-max mx-auto px-lg">
          <div className="mb-lg">
            <p className="font-label-sm text-label-sm text-primary mb-xs">KONTEKS KRITIS</p>
            <h2 className="font-headline-md text-headline-md text-on-surface">Tantangan Operasional</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div className="glass-panel p-lg rounded-xl border-l-4 border-error/50 hover:border-error transition-all">
              <span className="material-symbols-outlined text-error mb-md text-4xl">warning</span>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-sm">Tekanan Tinggi</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Mengelola kondisi HPHT (High Pressure High Temperature) yang ekstrem membutuhkan presisi tingkat
                milidetik untuk mencegah kegagalan katastropik.
              </p>
            </div>
            <div className="glass-panel p-lg rounded-xl border-l-4 border-primary/50 hover:border-primary transition-all">
              <span className="material-symbols-outlined text-primary mb-md text-4xl">satellite_alt</span>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-sm">Pemantauan Jarak Jauh</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Mengamankan aliran data dari aset lepas pantai dengan kebutuhan latensi rendah melalui jalur satelit
                yang tidak stabil.
              </p>
            </div>
            <div className="glass-panel p-lg rounded-xl border-l-4 border-tertiary/50 hover:border-tertiary transition-all">
              <span className="material-symbols-outlined text-tertiary mb-md text-4xl">history</span>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-sm">Aset yang Menua</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Melakukan retrofit pada peralatan lama (brownfield) dengan sensor IoT modern untuk memperpanjang usia
                operasional tanpa mengganti infrastruktur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Solutions Section (Bento Grid) */}
      <section className="py-xl bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-lg">
          <div className="text-center mb-xl">
            <p className="font-label-sm text-label-sm text-secondary mb-xs">KERANGKA KERJA AIRDE</p>
            <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface">Solusi Strategis</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            {/* Main Solution Card */}
            <div className="md:col-span-8 glass-panel p-xl rounded-xl relative overflow-hidden group">
              <div className="relative z-10">
                <div className="flex items-center gap-md mb-md">
                  <div className="p-sm bg-primary/10 rounded border border-primary/30">
                    <span className="material-symbols-outlined text-primary">verified_user</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface">Integritas Pipeline</h3>
                </div>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg mb-lg">
                  Memanfaatkan distributed acoustic sensing dan model ML tingkat lanjut untuk mendeteksi kebocoran
                  dan anomali struktural dengan akurasi 99,8% sebelum berdampak pada lingkungan.
                </p>
                <ul className="space-y-sm">
                  <li className="flex items-center gap-sm text-on-surface">
                    <span className="material-symbols-outlined text-tertiary text-sm">check_circle</span> Analisis Aliran Real-time
                  </li>
                  <li className="flex items-center gap-sm text-on-surface">
                    <span className="material-symbols-outlined text-tertiary text-sm">check_circle</span> Asesmen Risiko Geohazard
                  </li>
                  <li className="flex items-center gap-sm text-on-surface">
                    <span className="material-symbols-outlined text-tertiary text-sm">check_circle</span> Protokol Shut-off Otomatis
                  </li>
                </ul>
              </div>
              {/* Background accent */}
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all"></div>
            </div>
            {/* Vertical Card */}
            <div className="md:col-span-4 bg-primary-container p-xl rounded-xl flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-on-primary-container text-4xl mb-md">bolt</span>
                <h3 className="font-headline-md text-headline-md text-on-primary-container mb-md">Optimasi Produksi</h3>
                <p className="font-body-md text-body-md text-on-primary-container/80">
                  Pemodelan reservoir dinamis yang menyesuaikan laju ekstraksi secara real-time untuk memaksimalkan
                  yield sambil menjaga kesehatan reservoir.
                </p>
              </div>
            </div>
            {/* Horizontal Card */}
            <div className="md:col-span-12 glass-panel p-xl rounded-xl grid grid-cols-1 md:grid-cols-2 gap-lg items-center">
              <div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-md">Pemeliharaan Prediktif</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-lg">
                  Beralih dari model reaktif "fix-on-fail" ke peramalan digital yang proaktif. AI kami mengidentifikasi
                  pola vibrasi dan tanda termal yang mendahului kegagalan mekanis.
                </p>
                <div className="flex gap-md">
                  <div className="text-center p-md bg-surface-container rounded border border-outline-variant/30 w-32">
                    <p className="font-headline-md text-headline-md text-primary">0%</p>
                    <p className="font-label-sm text-label-sm opacity-60 uppercase">Titik Buta</p>
                  </div>
                  <div className="text-center p-md bg-surface-container rounded border border-outline-variant/30 w-32">
                    <p className="font-headline-md text-headline-md text-tertiary">24/7</p>
                    <p className="font-label-sm text-label-sm opacity-60 uppercase">Pengawasan</p>
                  </div>
                </div>
              </div>
              <div className="h-64 rounded-lg bg-surface-container-high border border-outline-variant relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-px bg-primary/20 absolute"></div>
                  <div className="w-px h-full bg-primary/20 absolute"></div>
                  <div className="z-10 p-lg text-center">
                    <span className="material-symbols-outlined text-primary text-5xl mb-sm">analytics</span>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">ANALYZING ROTATIONAL KINETICS...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics Section */}
      <section className="py-xl bg-surface border-y border-outline-variant/20">
        <div className="max-w-container-max mx-auto px-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter text-center">
            <div className="p-lg">
              <p className="font-display-lg text-display-lg text-primary">25%</p>
              <p className="font-body-lg text-body-lg text-on-surface mt-sm">Penurunan downtime</p>
              <p className="font-label-sm text-label-sm text-on-surface-variant mt-xs">Rata-rata di 12 platform</p>
            </div>
            <div className="p-lg">
              <p className="font-display-lg text-display-lg text-tertiary">15%</p>
              <p className="font-body-lg text-body-lg text-on-surface mt-sm">Peningkatan throughput</p>
              <p className="font-label-sm text-label-sm text-on-surface-variant mt-xs">Siklus ekstraksi yang dioptimalkan</p>
            </div>
            <div className="p-lg">
              <p className="font-display-lg text-display-lg text-on-surface">$12M</p>
              <p className="font-body-lg text-body-lg text-on-surface mt-sm">Rata-rata Penghematan OpEx Tahunan</p>
              <p className="font-label-sm text-label-sm text-on-surface-variant mt-xs">Per kilang skala menengah</p>
            </div>
            <div className="p-lg">
              <p className="font-display-lg text-display-lg text-secondary">Nihil</p>
              <p className="font-body-lg text-body-lg text-on-surface mt-sm">Insiden HSE yang Dilaporkan</p>
              <p className="font-label-sm text-label-sm text-on-surface-variant mt-xs">Protokol keselamatan berbasis AI</p>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Twin Integration */}
      <section className="py-xl overflow-hidden">
        <div className="max-w-container-max mx-auto px-lg grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="aspect-square glass-panel rounded-full flex items-center justify-center p-xl relative">
              <div className="absolute inset-0 rounded-full border border-primary/20"></div>
              <img
                alt="Pump digital twin"
                className="w-4/5 h-4/5 object-contain relative z-10"
                src="https://lh3.googleusercontent.com/aida/AP1WRLs0axDsVS0WrUNSmGv4V7LWG1EAxc_Uy6lItZIRm0-EJ4JjHkGkNtDcGVVJvFijgi6jSPHmCA9immIbPUDitL78f3PkjbFD_Yoiyzs7GuZ1Dovbl74EGvsoBrnSrqMD2IKoYnwWmTtgRQ5wmR4fQ9dbNJwNdrkrSYO7W4nhgO0skxepbG9ZSPVD3kwJuciY0hkxgrRcdM-uBtLaYmmBOMzgQGGBgjqF523pYP348ZeQHkD8I4i5Ro66Crk"
              />
              {/* Callout Labels */}
              <div className="absolute top-10 right-0 glass-panel px-md py-sm rounded-lg border-l-2 border-primary">
                <p className="font-label-sm text-label-sm text-on-surface-variant">STATUS BEARING</p>
                <p className="font-body-md text-body-md text-on-surface font-bold">NORMAL</p>
              </div>
              <div className="absolute bottom-20 left-0 glass-panel px-md py-sm rounded-lg border-l-2 border-tertiary">
                <p className="font-label-sm text-label-sm text-on-surface-variant">RPM RATE</p>
                <p className="font-body-md text-body-md text-on-surface font-bold">3.600</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-md">
            <div className="inline-block px-md py-xs bg-tertiary/10 border border-tertiary/30 rounded text-tertiary font-label-sm text-label-sm">
              PRESISI TWINNING
            </div>
            <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface">Integrasi Digital Twin</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Visualisasikan setiap komponen internal mesin kritikal Anda. Digital Twin AIRDE tersinkron dengan data
              sensor real-time untuk menciptakan cermin virtual presisi tinggi, memungkinkan simulasi tegangan dan
              analisis keausan prediktif tanpa menghentikan produksi.
            </p>
            <div className="space-y-md pt-md">
              <div className="flex items-start gap-md">
                <div className="mt-1">
                  <span className="material-symbols-outlined text-primary">view_in_ar</span>
                </div>
                <div>
                  <h4 className="font-body-md text-body-md text-on-surface font-bold">Diagnostik X-Ray</h4>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">Melihat ke dalam komponen baja solid untuk mengidentifikasi risiko kavitasi.</p>
                </div>
              </div>
              <div className="flex items-start gap-md">
                <div className="mt-1">
                  <span className="material-symbols-outlined text-primary">timeline</span>
                </div>
                <div>
                  <h4 className="font-body-md text-body-md text-on-surface font-bold">Overlay Historis</h4>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">Bandingkan performa saat ini dengan data benchmark 5 tahun.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCta
        title="Siap Mengamankan Masa Depan Energi Anda?"
        description="Bergabunglah dengan para pemimpin global yang memanfaatkan AIRDE untuk mengubah kompleksitas industri menjadi keunggulan kompetitif."
        primaryLabel="Konsultasi dengan Ahli Energi"
        secondaryLabel="Jadwalkan Audit Lokasi"
      />
    </>
  );
}
