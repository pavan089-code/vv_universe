import { ArrowUpRight } from "lucide-react";
import { motion as Motion } from "framer-motion";

export default function PortfolioCard({ photo, index, onOpen }) {
  return (
    <Motion.button
      type="button"
      variants={{
        hidden: { opacity: 0, y: 34 },
        show: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      onClick={onOpen}
      className="group mb-3 block w-full break-inside-avoid overflow-hidden rounded-2xl border border-white/10 bg-[#0D1728] text-left shadow-xl shadow-black/25 outline-none transition duration-500 hover:-translate-y-1 hover:border-[#C6A46C] focus:ring-2 focus:ring-[#C6A46C] sm:mb-4"
      aria-label={`Open ${photo.title} from ${photo.category}`}
    >
      <div className={`relative w-full overflow-hidden ${photo.aspect}`}>
        <div className="absolute inset-0 animate-pulse bg-[#121E31]" />
        <img
          src={photo.src}
          alt={photo.title}
          loading={index < 4 ? "eager" : "lazy"}
          decoding="async"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="relative z-10 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.08]"
        />
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#040B17]/95 via-[#040B17]/22 to-transparent opacity-65 transition duration-500 group-hover:opacity-100" />
        <div className="absolute inset-x-0 bottom-0 z-30 translate-y-4 p-4 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C6A46C]">
            {photo.category}
          </p>
          <h3 className="mt-1 text-base font-semibold text-white sm:text-lg">{photo.title}</h3>
          <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-white">
            View Gallery
            <ArrowUpRight size={16} aria-hidden="true" />
          </span>
        </div>
      </div>
    </Motion.button>
  );
}
