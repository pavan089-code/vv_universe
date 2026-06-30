import model1 from "../assets/model/image1.jpg";
import model2 from "../assets/model/image2.jpeg";
import model3 from "../assets/model/image3.jpg";
import model4 from "../assets/model/image4.jpeg";
import model5 from "../assets/model/image5.jpg";
import model6 from "../assets/model/image6.png";
import model7 from "../assets/model/image7.png";

import traditional1 from "../assets/traditonal/image1.jpeg";
import traditional2 from "../assets/traditonal/image2.jpeg";
import traditional3 from "../assets/traditonal/image3.jpeg";
import traditional4 from "../assets/traditonal/image4.jpeg";
import traditional5 from "../assets/traditonal/image5.jpeg";
import traditional6 from "../assets/traditonal/image6.jpeg";
import traditional7 from "../assets/traditonal/image7.jpeg";
import traditional8 from "../assets/traditonal/image8.jpeg";
import traditional9 from "../assets/traditonal/image9.jpeg";
import traditional10 from "../assets/traditonal/image10.jpeg";
import traditional11 from "../assets/traditonal/image11.jpeg";
import traditional12 from "../assets/traditonal/image12.jpeg";
import traditional13 from "../assets/traditonal/image13.jpeg";

export const portfolioCategories = [
  "All",
  "Wedding",
  "Pre-Wedding",
  "Traditional",
  "Model",
  "Events",
];

export const portfolioCollections = [
  {
    category: "Wedding",
    title: "Wedding",
    cover: traditional10,
    description: "Ceremonies shaped with emotion, grandeur, and timeless detail.",
    images: [traditional10, traditional11, traditional12, traditional13],
  },
  {
    category: "Pre-Wedding",
    title: "Pre-Wedding",
    cover: model4,
    description: "Editorial love stories with cinematic locations and soft direction.",
    images: [model4, model5, traditional8, traditional9],
  },
  {
    category: "Traditional",
    title: "Traditional",
    cover: traditional1,
    description: "Culture, ritual, and heritage captured with rich visual texture.",
    images: [
      traditional1,
      traditional2,
      traditional3,
      traditional4,
      traditional5,
      traditional6,
      traditional7,
    ],
  },
  {
    category: "Model",
    title: "Model",
    cover: model1,
    description: "Fashion-forward portraits with confident lighting and mood.",
    images: [model1, model2, model3, model6, model7],
  },
  {
    category: "Events",
    title: "Events",
    cover: traditional3,
    description: "Live moments, celebrations, and atmosphere preserved as cinema.",
    images: [traditional3, traditional5, traditional6, model2],
  },
];

const photoTitles = {
  Wedding: ["Sacred Vows", "Golden Ceremony", "Family Blessings", "Forever Begins"],
  "Pre-Wedding": ["Before Forever", "Quiet Romance", "Editorial Promise", "Golden Hour Story"],
  Traditional: [
    "Heritage Portrait",
    "Ritual Light",
    "Cultural Grace",
    "Timeless Detail",
    "Ancestral Colors",
    "Ceremonial Mood",
    "Festival Frame",
  ],
  Model: ["Fashion Noir", "Studio Poise", "Editorial Gaze", "Modern Muse", "Luxe Portrait"],
  Events: ["Celebration Pulse", "Stage Lights", "Candid Energy", "Live Story"],
};

const aspectRhythms = [
  "aspect-[4/5]",
  "aspect-[3/4]",
  "aspect-[5/7]",
  "aspect-[4/3]",
  "aspect-[2/3]",
  "aspect-[5/6]",
];

export const portfolioPhotos = portfolioCollections.flatMap((collection) =>
  collection.images.map((src, index) => ({
    id: `${collection.category}-${index}`,
    src,
    title: photoTitles[collection.category][index] || collection.title,
    category: collection.category,
    description: collection.description,
    aspect: aspectRhythms[index % aspectRhythms.length],
  }))
);

export const portfolioHero = {
  image: traditional10,
};
