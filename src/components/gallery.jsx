import { useState } from "react";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");

  const images = [
    {
      id: 1,
      category: "wedding",
      url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486",
    },
    {
      id: 2,
      category: "birthday",
      url: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    },
    {
      id: 3,
      category: "preshoot",
      url: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    },
    {
      id: 4,
      category: "event",
      url: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678",
    },
    {
      id: 5,
      category: "wedding",
      url: "https://images.unsplash.com/photo-1519741497674-611481863552",
    },
    {
      id: 6,
      category: "birthday",
      url: "https://images.unsplash.com/photo-1464349153735-7db50ed83c84",
    },
  ];

  const filteredImages =
    activeCategory === "all"
      ? images
      : images.filter((img) => img.category === activeCategory);

  const categories = ["all", "wedding", "birthday", "preshoot", "event"];

  return (
    <section className="py-24 bg-[#0B0B0D] text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <h2 className="section-title">Featured Work</h2>

        <p className="section-subtitle">
          Capturing weddings, celebrations and timeless memories.
        </p>

        {/* Category Buttons */}
        <div className="flex justify-center flex-wrap gap-4 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm uppercase tracking-wide transition duration-300
                ${
                  activeCategory === cat
                    ? "bg-[#C6A75E] text-black"
                    : "border-[#C6A75E] text-[#C6A75E] hover:bg-[#C6A75E] hover:text-black"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="overflow-hidden rounded-xl group cursor-pointer"
            >
              <img
                src={`${image.url}?auto=format&fit=crop&w=800&q=80`}
                alt={image.category}
                className="w-full h-80 object-cover transform group-hover:scale-110 transition duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
