import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function PortfolioCTA() {
  return (
    <section className="relative overflow-hidden bg-[#040B17] px-5 py-16 sm:px-8 lg:px-10">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(198,164,108,0.18),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_28%)]" />
      <div className="relative mx-auto max-w-7xl rounded-[20px] border border-[#C6A46C]/25 bg-[#0D1728]/80 px-6 py-10 shadow-2xl shadow-black/30 backdrop-blur-md sm:px-10 sm:py-14">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C6A46C]">
            Begin Your Session
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-5xl">
            Ready To Create Your Story?
          </h2>
          <p className="mt-5 text-base leading-8 text-[#A9B4C6]">
            Tell us what you are celebrating, and we will shape a photography experience that feels personal, cinematic, and unforgettable.
          </p>
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/booking"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-[#C6A46C] px-6 py-3 text-sm font-bold text-black shadow-lg shadow-[#C6A46C]/20 transition hover:-translate-y-1 hover:shadow-[#C6A46C]/40 focus:outline-none focus:ring-2 focus:ring-[#C6A46C] focus:ring-offset-2 focus:ring-offset-[#0D1728]"
          >
            Book Your Shoot
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-[#C6A46C]/60 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-1 hover:border-[#C6A46C] hover:text-[#C6A46C] focus:outline-none focus:ring-2 focus:ring-[#C6A46C] focus:ring-offset-2 focus:ring-offset-[#0D1728]"
          >
            Contact Us
            <MessageCircle size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
