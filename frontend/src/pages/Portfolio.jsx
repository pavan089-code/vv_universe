import { useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Reviews from "../components/Reviews";

/* 🔥 Sample Images */
import img1 from "../assets/model/image1.jpg";
import img2 from "../assets/model/image2.jpeg";
import img3 from "../assets/model/image3.jpg";
import img4 from "../assets/model/image5.jpg";

export default function Portfolio() {
  const photos = [
    { src: img1, category: "Model", title: "Fashion Shoot", desc: "High-end model shoot with cinematic lighting" },
    { src: img2, category: "Model", title: "Studio Portrait", desc: "Clean and professional portrait session" },
    { src: img3, category: "Traditional", title: "Cultural Shoot", desc: "Traditional styling with vibrant colors" },
    { src: img4, category: "Events", title: "Event Coverage", desc: "Captured live moments with dynamic angles" },
  ];

  const categories = ["All", "Model", "Traditional", "Events"];

  const [activeCategory, setActiveCategory] = useState("All");
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState([]);

  const filteredPhotos =
    activeCategory === "All"
      ? photos
      : photos.filter((p) => p.category === activeCategory);

  return (
    <section className="bg-[#050A14] text-white overflow-hidden">

      {/* 🎬 HERO */}
      <div className="relative h-[50vh] sm:h-[55vh] md:h-[60vh] w-full overflow-hidden">
        <video
          src="/logovv.mp4"
          autoPlay
          loop
          muted
          className="w-full h-full object-cover scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_40%,rgba(0,0,0,0.9)_100%)]" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute inset-0 flex flex-col justify-center items-center text-center px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Our Work
          </h1>
          <p className="text-gray-300 max-w-xl">
            A cinematic collection of stories, moments, and creative visuals.
          </p>
        </motion.div>
      </div>

      {/* 🔥 MAIN */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 py-16 md:py-20"
      >

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4">
          Portfolio Showcase
        </h2>

        <p className="text-center text-gray-400 max-w-xl sm:max-w-2xl mx-auto mb-10 text-sm sm:text-base">
          Explore our latest projects across different categories — from cinematic shoots to creative storytelling.
        </p>

        {/* FILTER */}
        <div className="flex justify-center gap-3 flex-wrap mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 sm:px-5 py-2 rounded-full border text-xs sm:text-sm transition
              ${
                activeCategory === cat
                  ? "bg-[#C6A75E] text-black border-[#C6A75E]"
                  : "text-gray-300 border-white/10 hover:border-[#C6A75E]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 🎬 GRID */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6"
        >

          {filteredPhotos.map((photo, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 },
              }}
              className="relative overflow-hidden rounded-xl group cursor-pointer"
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
            >

              {/* 🔥 Skeleton */}
              {!loadedImages[i] && (
                <div className="absolute inset-0 animate-pulse bg-gray-800" />
              )}

              {/* Image */}
              <img
                src={photo.src}
                alt={photo.title}
                loading="lazy"
                onLoad={() =>
                  setLoadedImages((prev) => {
                    const updated = [...prev];
                    updated[i] = true;
                    return updated;
                  })
                }
                className={`w-full h-[250px] md:h-[280px] object-cover 
                transition-all duration-700 ease-out
                ${loadedImages[i] ? "opacity-100 blur-0" : "opacity-0 blur-md"}
                group-hover:scale-110`}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition" />

              {/* Glow */}
              <div className="absolute inset-0 border border-transparent group-hover:border-[#C6A75E]/50 rounded-xl transition" />

              {/* Text */}
              <div className="absolute bottom-0 p-4 translate-y-6 group-hover:translate-y-0 transition">
                <h3 className="text-lg font-semibold">{photo.title}</h3>
                <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition">
                  {photo.desc}
                </p>
              </div>

            </motion.div>
          ))}

        </motion.div>
      </motion.div>

      {/* LIGHTBOX */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={filteredPhotos.map((p) => ({ src: p.src }))}
      />

      {/* REVIEWS */}
      <div className="py-16 md:py-20 bg-gradient-to-t from-black to-transparent">
        <Reviews />
      </div>

    </section>
  );
}
