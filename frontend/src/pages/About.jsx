import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import aboutImage from "../assets/me1.jpeg";

export default function About() {

  // 🔥 Cursor spotlight
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-[#050A14] text-[#F5F7FA] overflow-hidden">

      {/* 🎬 Animated Gradient Background */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 opacity-20 
        bg-[linear-gradient(120deg,#000000,#0B1A2A,#000000)]
        bg-[length:200%_200%]"
      />

      {/* 🔥 Glow */}
      <motion.div
        initial={{ opacity: 0.4 }}
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-[-150px] left-1/2 -translate-x-1/2 
        w-[700px] h-[700px] bg-[#C6A75E]/10 blur-[140px] rounded-full"
      />

      {/* 🎯 Cursor Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(198,167,94,0.12), transparent 200px)`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 z-10">

        {/* 🔥 LOGO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, y: [-5, 5, -5] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-[#C6A75E]/20 blur-2xl rounded-full" />

            <img
              src="./public/logo2.png"
              alt="VV Productions Logo"
              className="relative w-28 md:w-36 rounded-full border border-white/10 
              shadow-[0_0_30px_rgba(198,167,94,0.3)]"
            />
          </div>
        </motion.div>

        {/* 🎬 STORY */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Hi, I'm{" "}
            <span className="text-[#C6A75E]">Vishnu Teja</span>
          </h2>

          <p className="text-gray-400 leading-relaxed mb-4">
            I'm a B.Tech student and the person behind VV Productions.
            What started as a simple interest in photography slowly became something
            I genuinely enjoy doing — capturing moments, emotions, and real stories.
          </p>

          <p className="text-gray-400 leading-relaxed mb-4">
            I started VV Productions with a simple idea — to create visuals that feel real,
            not forced. Whether it's a wedding, an event, or a creative shoot,
            I focus on capturing things as they naturally happen.
          </p>

          <p className="text-gray-400 leading-relaxed">
            I'm still at the beginning of my journey, learning and improving with every project.
            But one thing I make sure of — every client I work with gets my full effort,
            attention, and honesty in the work I deliver.
          </p>
        </motion.div>

        {/* 👤 IMAGE + DETAILS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-[#C6A75E]/10 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500 rounded-xl" />

            <img
              src={aboutImage}
              alt="Vishnu Teja"
              className="relative rounded-xl w-full object-cover border border-white/10 
              shadow-[0_0_40px_rgba(0,0,0,0.6)] group-hover:scale-[1.02] transition duration-500"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl md:text-4xl font-semibold">
              What I Focus On
            </h3>

            <p className="text-gray-400 leading-relaxed">
              For me, it’s not just about taking photos or videos — it’s about
              understanding what matters to you and capturing it in a way that feels meaningful.
            </p>

            <p className="text-gray-400 leading-relaxed">
              I work on weddings, events, and creative projects, and I’m constantly
              exploring new ways to improve my storytelling and visual style.
            </p>

            <p className="text-gray-400 leading-relaxed">
              VV Productions is just getting started, but the goal is clear —
              to grow into a creative space where every story is told with honesty and quality.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-6">
              <div>
                <h3 className="text-3xl font-bold text-[#C6A75E]">20+</h3>
                <p className="text-gray-400 text-sm">Events Covered</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#C6A75E]">2+</h3>
                <p className="text-gray-400 text-sm">Years Learning</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#C6A75E]">50+</h3>
                <p className="text-gray-400 text-sm">Happy Clients</p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* 🎯 CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            If you have a story, I’d love to help you capture it
          </h2>

          <a
            href="/booking"
            className="inline-block px-6 py-3 bg-[#C6A75E] text-black font-semibold rounded-lg 
            hover:scale-105 hover:shadow-lg hover:shadow-[#C6A75E]/40 transition"
          >
            Let’s Work Together
          </a>
        </motion.div>

      </div>
    </section>
  );
}