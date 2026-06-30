import { ArrowRight } from "lucide-react";
import { motion as Motion } from "framer-motion";

export default function FeaturedCollections({ collections, onSelectCollection }) {
  const handleSelect = (category) => {
    onSelectCollection(category);
    window.requestAnimationFrame(() => {
      document.getElementById("portfolio-gallery")?.scrollIntoView({ behavior: "smooth" });
    });
  };

  return (
    <section className="bg-gradient-to-b from-[#040B17] to-[#0D1728] px-5 py-14 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C6A46C]">
              Featured Collections
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Stories Curated By Mood
            </h2>
          </div>
          <p className="max-w-lg text-sm leading-7 text-[#A9B4C6]">
            Move through weddings, portraits, traditions, and live celebrations with the pace of a private studio viewing.
          </p>
        </div>

        <div className="-mx-5 flex snap-x gap-4 overflow-x-auto px-5 pb-3 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 md:grid-cols-3">
          {collections.map((collection, index) => (
            <Motion.button
              type="button"
              key={collection.category}
              initial={{ opacity: 0, y: 26, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: index * 0.06, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => handleSelect(collection.category)}
              className="group relative min-w-[82vw] snap-start overflow-hidden rounded-[20px] border border-white/10 bg-[#08111F] text-left shadow-2xl shadow-black/25 outline-none transition duration-500 hover:-translate-y-1 hover:border-[#C6A46C] focus:ring-2 focus:ring-[#C6A46C] sm:min-w-0"
            >
              <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[5/6]">
                <img
                  src={collection.cover}
                  alt={`${collection.title} collection`}
                  loading={index < 2 ? "eager" : "lazy"}
                  decoding="async"
                  sizes="(max-width: 640px) 82vw, (max-width: 1024px) 50vw, 33vw"
                  className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040B17] via-[#040B17]/45 to-transparent opacity-90 transition group-hover:opacity-95" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <div className="mb-3 flex items-center justify-between gap-4">
                  <h3 className="text-2xl font-semibold text-white">{collection.title}</h3>
                  <ArrowRight
                    className="text-[#C6A46C] transition duration-300 group-hover:translate-x-1"
                    size={22}
                    aria-hidden="true"
                  />
                </div>
                <p className="mb-3 text-sm font-semibold text-[#C6A46C]">
                  {collection.images.length} Photos
                </p>
                <p className="text-sm leading-6 text-[#D4DBE8]">{collection.description}</p>
              </div>
            </Motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
