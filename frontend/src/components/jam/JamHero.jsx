import { useState, useEffect } from "react";

import hero1 from "../../assets/model/image8.jpg";
import hero2 from "../../assets/model/image2.jpeg";
import hero3 from "../../assets/model/image3.jpg";
import hero4 from "../../assets/model/image5.jpg";
import hero5 from "../../assets/model/image10.jpg";

export default function JamHero() {
  const images = [hero1, hero2, hero3, hero4, hero5];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[75vh] w-full overflow-hidden">
      {/* Background Images */}
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt="Jam Session"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-2000 ease-in-out animate-kenburns ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center text-center h-full px-4">
        <div className="text-white max-w-3xl">
          <p className="uppercase tracking-[0.3em] text-gray-300 text-sm mb-4">
            Live Music • Open Mic • Goa Nights
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            VIVA JAM SESSION 🎵
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-200 leading-relaxed">
            Experience an unforgettable night of live performances,
            music, vibes, and creative energy.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <a
              href="#register"
              className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition"
            >
              Register Now
            </a>

            <a
              href="#details"
              className="px-8 py-4 border border-white rounded-full hover:bg-white hover:text-black transition"
            >
              Event Details
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}