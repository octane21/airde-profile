import { useEffect } from "react";
import { digitalEngineeringVisualization, digitalTwin } from "../assets/images";
import ContactCta from "../components/ContactCta";

export default function DigitalEngineering() {
  useEffect(() => {
    document.title = "Digital Engineering | AIRDE";
  }, []);

  return (
    <>
      {/* Hero Section */}
      <header className="relative pt-32 pb-24 px-container-padding overflow-hidden eng-grid">
        <div className="max-w-container-max mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-container/10 border border-primary/20 rounded-full">
              <span className="w-2 h-2 rounded-full bg-tertiary pulse-dot"></span>
              <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest">DIGITAL ENGINEERING</span>
            </div>
            <h1 className="font-display-lg text-display-lg text-on-background leading-tight">
              Design smarter, build better, <br />
              <span className="text-primary">operate more efficiently.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              Integrasi desain teknis dengan kembaran digital untuk simulasi performa aset yang akurat. Optimalkan
              setiap tahap siklus hidup engineering Anda.
            </p>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full group-hover:bg-primary/30 transition-all duration-700"></div>
            <div className="glass-card rounded-2xl p-4 relative overflow-hidden border-primary/20">
              <img
                alt="Digital Engineering Visualization"
                className="w-full h-auto rounded-lg shadow-2xl"
                src={digitalEngineeringVisualization}
              />
              {/* Overlay Tag */}
              <div className="absolute bottom-8 right-8 bg-surface-container-lowest/90 backdrop-blur-md p-4 rounded-xl border border-white/10 flex items-center gap-3">
                <div className="p-2 bg-tertiary-container/20 rounded-lg">
                  <span className="material-symbols-outlined text-tertiary">analytics</span>
                </div>
                <div>
                  <div className="text-[10px] text-on-surface-variant uppercase tracking-tighter">Live Simulation</div>
                  <div className="font-label-sm text-on-surface">Efficiency: 94.2%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Capabilities Section: Bento Grid */}
      <section className="py-section-gap px-container-padding bg-surface-container-lowest/50">
        <div className="max-w-container-max mx-auto">
          <div className="mb-16 text-center">
            <h2 className="font-display-lg-mobile text-display-lg-mobile text-on-background mb-4">Core Capabilities</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Teknologi mutakhir untuk tantangan teknik yang kompleks.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-lg h-auto md:h-[600px]">
            {/* Digital Twin */}
            <div className="md:col-span-2 glass-card rounded-2xl p-8 flex flex-col justify-between group hover:border-primary/50 transition-all duration-500">
              <div>
                <span className="material-symbols-outlined text-4xl text-primary mb-4">dynamic_feed</span>
                <h3 className="font-headline-md text-headline-md mb-2">Digital Twin</h3>
                <p className="font-body-md text-on-surface-variant max-w-md">
                  Replika virtual yang tersinkronisasi secara real-time untuk memantau, menganalisis, dan
                  memprediksi performa aset industri dalam berbagai skenario operasional.
                </p>
              </div>
              <div className="mt-8 flex gap-4 overflow-hidden">
                <div className="h-24 w-full bg-surface-variant/30 rounded-lg border border-white/5 relative overflow-hidden">
                  <img alt="Digital Twin Visual" className="absolute inset-0 w-full h-full object-cover opacity-60" src={digitalTwin} />
                  <div className="absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-t from-primary/20 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center font-label-sm text-[10px] text-primary/50 uppercase">
                    Visual Integration
                  </div>
                </div>
                <div className="h-24 w-full bg-surface-variant/30 rounded-lg border border-white/5 relative overflow-hidden">
                  <div className="absolute bottom-0 left-0 h-3/4 w-full bg-gradient-to-t from-tertiary/20 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center font-label-sm text-[10px] text-tertiary/50 uppercase">
                    Data Synchronization
                  </div>
                </div>
              </div>
            </div>
            {/* Simulation */}
            <div className="glass-card rounded-2xl p-8 flex flex-col items-start hover:border-tertiary/50 transition-all duration-500">
              <div className="p-3 bg-tertiary-container/20 rounded-xl mb-6">
                <span className="material-symbols-outlined text-tertiary">model_training</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-2">Simulation</h3>
              <p className="font-body-md text-on-surface-variant">
                Lakukan simulasi stress-test dan CFD (Computational Fluid Dynamics) untuk memastikan integritas
                struktural sebelum konstruksi dimulai.
              </p>
            </div>
            {/* EDM */}
            <div className="glass-card rounded-2xl p-8 flex flex-col items-start hover:border-secondary/50 transition-all duration-500">
              <div className="p-3 bg-secondary-container/20 rounded-xl mb-6">
                <span className="material-symbols-outlined text-secondary">database</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-2">Data Management</h3>
              <p className="font-body-md text-on-surface-variant">
                Single source of truth untuk semua dokumen teknis, model 3D, dan spesifikasi material (EDM).
              </p>
            </div>
            {/* Design Optimization */}
            <div className="md:col-span-2 glass-card rounded-2xl p-8 flex items-center justify-between group hover:border-primary/50 transition-all duration-500">
              <div className="max-w-md">
                <span className="material-symbols-outlined text-4xl text-primary mb-4">precision_manufacturing</span>
                <h3 className="font-headline-md text-headline-md mb-2">Design Optimization</h3>
                <p className="font-body-md text-on-surface-variant">
                  Optimasi desain berbasis AI untuk meminimalkan penggunaan material tanpa mengurangi kekuatan
                  struktural atau fungsionalitas.
                </p>
              </div>
              <div className="hidden lg:block w-48 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes / Metrics Section */}
      <section className="py-section-gap px-container-padding relative">
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg">
          <div className="text-center p-8 border-r border-white/5">
            <div className="text-[48px] font-bold text-primary mb-2">-35%</div>
            <div className="font-label-sm text-label-sm text-on-surface-variant uppercase">Design Errors</div>
            <p className="text-[12px] mt-2 opacity-60">Reduksi kesalahan fatal pada fase desain awal.</p>
          </div>
          <div className="text-center p-8 border-r border-white/5">
            <div className="text-[48px] font-bold text-tertiary mb-2">+25%</div>
            <div className="font-label-sm text-label-sm text-on-surface-variant uppercase">Time-to-Market</div>
            <p className="text-[12px] mt-2 opacity-60">Akselerasi jadwal pengerjaan proyek EPC.</p>
          </div>
          <div className="text-center p-8 border-r border-white/5">
            <div className="text-[48px] font-bold text-secondary mb-2">-20%</div>
            <div className="font-label-sm text-label-sm text-on-surface-variant uppercase">Material Waste</div>
            <p className="text-[12px] mt-2 opacity-60">Optimalisasi penggunaan sumber daya fisik.</p>
          </div>
          <div className="text-center p-8">
            <div className="text-[48px] font-bold text-on-surface mb-2">99.8%</div>
            <div className="font-label-sm text-label-sm text-on-surface-variant uppercase">Model Accuracy</div>
            <p className="text-[12px] mt-2 opacity-60">Presisi tinggi antara model digital &amp; fisik.</p>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-section-gap px-container-padding">
        <div className="max-w-container-max mx-auto">
          <h2 className="font-display-lg-mobile text-display-lg-mobile text-on-background mb-12">Skenario Implementasi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
            {/* Case 1 */}
            <div className="relative h-[500px] rounded-3xl overflow-hidden group">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAy8Js06D9lHiR254XarT-qowZUGAljDWXegzgSGMmMvqJWliNhfBcIdS6U23_16cGVOgiK5Bh03j2AV_J9vpir6c45FAlSqseqZ9P5RK-IKywnmpL_1nbphs4X1qoGeJ0OksnuuP8r9Td3FVGOvA91vrY8b89a2ARfF8G3etZm9AY6vAR9h-8DOF3EI08Bd9SPPEKDgnaE2EWcmjtmcKpzFAP7vEefku03MKKaAAHfhS8LVu0a3d48FCvQTtOerz1IDNTfXCy_fPpx')",
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 p-10">
                <div className="text-primary font-label-sm text-label-sm mb-2 uppercase tracking-widest">Greenfield Development</div>
                <h3 className="font-headline-md text-headline-md text-on-background mb-4">EPC Projects Plant Design</h3>
                <p className="font-body-md text-on-surface-variant max-w-md">
                  Membangun dari nol dengan efisiensi maksimum melalui simulasi holistik seluruh ekosistem pabrik
                  sebelum peletakan batu pertama.
                </p>
              </div>
            </div>
            {/* Case 2 */}
            <div className="relative h-[500px] rounded-3xl overflow-hidden group">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCsgJAkE38D_yAOJnt9WQJaB606YT9GJGr4c3Mj51lSPHmoZ3uM9v15ayuXW90ZPl-txnJchBNRCE3Px8jgUypxmDzpIfbXylwF33rxX09uADxhSLKrxC9oqg-vmyLS90CU432UtBdyIiDxVPJNlqhvne5hONWjb2j8wHcVDjR_pYmRcA2YMjkCPuvlr-ytvYoYq03WMZ5ZURQYwmitt7ZBXgY-NvwjZnCrtGNhcksIzWSqx4EtYlddaYNnSIM3alGKlJymyQE5iTTE')",
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 p-10">
                <div className="text-tertiary font-label-sm text-label-sm mb-2 uppercase tracking-widest">Legacy Systems</div>
                <h3 className="font-headline-md text-headline-md text-on-background mb-4">Brownfield Modernization</h3>
                <p className="font-body-md text-on-surface-variant max-w-md">
                  Digitalisasi aset yang sudah ada untuk memperpanjang usia operasional dan mengintegrasikan sistem
                  kendali modern berbasis AI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCta
        title="Siap untuk Masa Depan Engineering?"
        description="Mulai transformasi digital Anda hari ini dengan solusi teknik berbasis data yang presisi."
      />
    </>
  );
}
