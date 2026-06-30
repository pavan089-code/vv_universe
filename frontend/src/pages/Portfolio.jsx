import { useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";

import BehindTheLens from "../components/portfolio/BehindTheLens";
import CategoryFilter from "../components/portfolio/CategoryFilter";
import FeaturedCollections from "../components/portfolio/FeaturedCollections";
import PortfolioCTA from "../components/portfolio/PortfolioCTA";
import PortfolioHero from "../components/portfolio/PortfolioHero";
import PortfolioLightbox from "../components/portfolio/PortfolioLightbox";
import PortfolioMasonry from "../components/portfolio/PortfolioMasonry";
import { usePortfolioFilter } from "../hooks/usePortfolioFilter";

export default function Portfolio() {
  const { categories, collections, activeCategory, setActiveCategory, filteredPhotos } =
    usePortfolioFilter();
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (photo) => {
    const nextIndex = filteredPhotos.findIndex((item) => item.id === photo.id);
    setLightboxIndex(Math.max(nextIndex, 0));
  };

  return (
    <section className="relative overflow-hidden bg-[#040B17] text-[#F5F5F5]">
      <PortfolioHero />

      <FeaturedCollections
        collections={collections}
        onSelectCollection={setActiveCategory}
      />

      <CategoryFilter
        categories={categories}
        activeCategory={activeCategory}
        onChange={setActiveCategory}
      />

      <AnimatePresence mode="wait">
        <Motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -18 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <PortfolioMasonry photos={filteredPhotos} onOpen={openLightbox} />
        </Motion.div>
      </AnimatePresence>

      <PortfolioLightbox
        photos={filteredPhotos}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onChange={setLightboxIndex}
      />

      <BehindTheLens />
      <PortfolioCTA />
    </section>
  );
}
