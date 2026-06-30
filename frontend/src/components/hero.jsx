import { useState, useEffect } from "react";

import hero1 from "../assets/model/image6.png";
import hero2 from "../assets/model/image2.jpeg";
import hero3 from "../assets/model/image3.jpg";
import hero4 from "../assets/model/image5.jpg";
import hero5 from "../assets/model/image7.png";

const images = [hero1, hero2, hero3, hero4, hero5];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      {/* Images */}
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt="Photography"
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-2000 ease-in-out animate-kenburns ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#000F26]/85 via-[#000F26]/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex items-center h-full max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-[#F5F5F5] max-w-xl sm:max-w-2xl space-y-5">
          <p className="uppercase tracking-[0.3em] text-gray-300 text-sm">
            Weddings • Events • Pre-Shoots
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold">Vishnu Teja</h1>

          <p className="text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed">
            Capturing timeless stories through elegant and emotional
            photography.
          </p>

          <div className="flex flex-wrap gap-3 sm:gap-4 pt-4">
            <a
              href="#portfolio"
              className="w-full sm:w-auto px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition duration-300 text-center"
            >
              View Portfolio
            </a>

            <a
              href="#book"
              className="w-full sm:w-auto px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition duration-300 text-center"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
