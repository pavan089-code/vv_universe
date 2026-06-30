import { motion as Motion } from "framer-motion";

export default function CategoryFilter({ categories, activeCategory, onChange }) {
  return (
    <div className="sticky top-[64px] z-30 border-y border-white/10 bg-[#040B17]/82 px-3 py-3 backdrop-blur-xl sm:top-[72px]">
      <nav
        aria-label="Portfolio category filter"
        className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-2"
      >
        {categories.map((category) => {
          const isActive = activeCategory === category;

          return (
            <button
              type="button"
              key={category}
              onClick={() => onChange(category)}
              className={`relative min-h-11 shrink-0 rounded-full border px-5 text-sm font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#C6A46C] focus:ring-offset-2 focus:ring-offset-[#040B17] ${
                isActive
                  ? "border-[#C6A46C] text-black"
                  : "border-[#C6A46C]/45 text-[#F5F5F5] hover:border-[#C6A46C] hover:text-[#C6A46C]"
              }`}
            >
              {isActive && (
                <Motion.span
                  layoutId="portfolio-filter-indicator"
                  className="absolute inset-0 rounded-full bg-[#C6A46C]"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
