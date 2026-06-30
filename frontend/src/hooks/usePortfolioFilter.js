import { useMemo, useState } from "react";

import {
  portfolioCategories,
  portfolioCollections,
  portfolioPhotos,
} from "../data/portfolioData";

export function usePortfolioFilter() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPhotos = useMemo(() => {
    if (activeCategory === "All") return portfolioPhotos;
    return portfolioPhotos.filter((photo) => photo.category === activeCategory);
  }, [activeCategory]);

  return {
    categories: portfolioCategories,
    collections: portfolioCollections,
    activeCategory,
    setActiveCategory,
    filteredPhotos,
  };
}
