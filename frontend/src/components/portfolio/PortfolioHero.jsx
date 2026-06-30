import { ArrowDown, CalendarDays } from "lucide-react";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";

import { portfolioHero } from "../../data/portfolioData";

const stats = ["500+ Projects", "7+ Years Experience", "1000+ Happy Clients"];

export default function PortfolioHero() {
  return (
    <section className="relative min-h-[65vh] overflow-hidden">
      <img
        src={portfolioHero.image}
        alt="VV Productions cinematic wedding portfolio"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#040B17]/55 via-[#040B17]/70 to-[#040B17]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(198,164,108,0.20),transparent_34%),linear-gradient(90deg,rgba(4,11,23,0.92),rgba(4,11,23,0.24),rgba(4,11,23,0.82))]" />

      <Motion.div
        initial={{ opacity: 0, y: 34 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto flex min-h-[65vh] max-w-7xl flex-col justify-center px-5 pb-12 pt-28 sm:px-8 lg:px-10"
      >
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.34em] text-[#C6A46C]">
          VV Productions
        </p>
        <h1 className="max-w-4xl text-5xl font-bold leading-none tracking-normal text-white sm:text-6xl md:text-8xl">
          PORTFOLIO
        </h1>
        <p className="mt-6 max-w-2xl whitespace-pre-line text-base leading-8 text-[#D6DEEC] sm:text-lg">
          {"Every frame tells a story.\nFrom timeless weddings to cinematic portraits,\nwe capture moments that last forever."}
        </p>

        <div className="mt-8 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat}
              className="rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 shadow-2xl shadow-black/25 backdrop-blur-md"
            >
              <span className="block text-sm font-semibold text-white">{stat}</span>
            </div>
          ))}
        </div>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href="#portfolio-gallery"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-[#C6A46C] px-6 py-3 text-sm font-bold text-[#050505] shadow-lg shadow-[#C6A46C]/20 transition duration-300 hover:-translate-y-1 hover:shadow-[#C6A46C]/40 focus:outline-none focus:ring-2 focus:ring-[#C6A46C] focus:ring-offset-2 focus:ring-offset-[#040B17]"
          >
            Explore Gallery
            <ArrowDown size={18} aria-hidden="true" />
          </a>
          <Link
            to="/booking"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-[#C6A46C]/60 bg-white/[0.04] px-6 py-3 text-sm font-bold text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[#C6A46C] hover:text-[#C6A46C] focus:outline-none focus:ring-2 focus:ring-[#C6A46C] focus:ring-offset-2 focus:ring-offset-[#040B17]"
          >
            Book Your Shoot
            <CalendarDays size={18} aria-hidden="true" />
          </Link>
        </div>
      </Motion.div>
    </section>
  );
}
