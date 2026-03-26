import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import img1 from "../assets/model/image1.jpg";
import img2 from "../assets/model/image2.jpeg";
import img3 from "../assets/model/image3.jpg";
import img4 from "../assets/model/image5.jpg";

export default function Portfolio() {

  const photos = [
    { src: img1, category: "Model" },
    { src: img2, category: "Model" },
    { src: img3, category: "Traditional" },
    { src: img4, category: "Events" },
  ];

  const categories = ["All", "Model", "Traditional", "Events"];

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPhotos =
    activeCategory === "All"
      ? photos
      : photos.filter((photo) => photo.category === activeCategory);

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <section id="portfolio" className="py-28 bg-[#000F26] text-[#F5F7FA]">

      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center">
          Portfolio
        </h2>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">

          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-lg border transition ${
                activeCategory === cat
                  ? "bg-[#C6A75E] text-black border-[#C6A75E]"
                  : "border-[#1B3B6F] text-[#B8C4D9] hover:border-[#C6A75E]"
              }`}
            >
              {cat}
            </button>
          ))}

        </div>

        {/* Gallery */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-8 space-y-8 bg-[#071B3A] p-10 rounded-2xl">

          {filteredPhotos.map((photo, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl group cursor-pointer border border-[#1B3B6F]"
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
            >

              <img
                src={photo.src}
                alt="portfolio"
                className="w-full h-auto object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
              />

            </div>
          ))}

        </div>

      </div>

      {/* Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={filteredPhotos.map((p) => ({ src: p.src }))}
      />

    </section>
  );
}