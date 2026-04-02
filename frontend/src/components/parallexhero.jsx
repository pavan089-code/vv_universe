
import { useEffect, useState } from "react";

export default function ParallaxHero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.pageYOffset);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{
          backgroundImage: "url('/hero.jpg')",
          transform: `translateY(${offset * 0.5}px)`
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">

        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          John Doe Photography
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Capturing timeless moments
        </p>

        <a
          href="#gallery"
          className="px-8 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition"
        >
          View Portfolio
        </a>

      </div>
    </section>
  );
}
