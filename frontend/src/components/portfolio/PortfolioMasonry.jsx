import { motion as Motion } from "framer-motion";

import PortfolioCard from "./PortfolioCard";

export default function PortfolioMasonry({ photos, onOpen }) {
  return (
    <section id="portfolio-gallery" className="bg-[#040B17] px-3 py-12 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-3 px-2 sm:px-0 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C6A46C]">
              Gallery
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Cinematic Frames
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-[#A9B4C6]">
            {photos.length} selected photographs arranged with a natural editorial rhythm.
          </p>
        </div>

        <Motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.055 } },
          }}
          className="columns-2 gap-3 sm:columns-3 sm:gap-4 lg:columns-4"
        >
          {photos.map((photo, index) => (
            <PortfolioCard
              key={photo.id}
              photo={photo}
              index={index}
              onOpen={() => onOpen(photo)}
            />
          ))}
        </Motion.div>
      </div>
    </section>
  );
}
