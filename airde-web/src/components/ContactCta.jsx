import { Link } from "react-router-dom";

export default function ContactCta({
  title = "Siap Memulai Transformasi Anda?",
  description = "Hubungi tim ahli kami untuk mendiskusikan bagaimana AIRDE dapat disesuaikan dengan kebutuhan operasional Anda.",
  primaryLabel = "Hubungi Kami",
}) {
  return (
    <section className="py-xl px-gutter mb-xl">
      <div className="max-w-container-max mx-auto glass-panel rounded-3xl p-xl relative overflow-hidden border-2 border-primary/20">
        <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
        <div className="relative z-10 text-center">
          <h2 className="font-display-lg text-display-lg text-on-surface mb-lg">{title}</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl max-w-2xl mx-auto">{description}</p>
        </div>
        <div className="relative z-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/about#contact-us"
            className="bg-secondary-container text-on-secondary-container px-8 py-3.5 rounded-full font-bold hover:brightness-110 transition-all shadow-lg shadow-secondary-container/20"
          >
            {primaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
