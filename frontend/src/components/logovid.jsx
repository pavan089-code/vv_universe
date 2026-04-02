import { motion } from "framer-motion";

export default function LogoVideo() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden text-white">

      {/* 🎥 Background Video with cinematic zoom */}
      <motion.video
        autoPlay
        muted
        loop
        playsInline
        initial={{ scale: 1 }}
        animate={{ scale: 1.08 }}
        transition={{ duration: 12, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
        className="absolute w-full h-full object-cover"
      >
        <source src="/logovv.mp4" type="video/mp4" />
      </motion.video>

      {/* 🎬 Cinematic layered overlays */}
      
      {/* Dark top fade (important for navbar blend) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90" />

      {/* Center vignette (adds focus) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_40%,rgba(0,0,0,0.8)_100%)]" />

      {/* Subtle golden tint (brand feel) */}
      <div className="absolute inset-0 bg-[#C6A75E]/10 mix-blend-overlay" />

      {/* 🔥 Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 pt-20">

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-wide mb-4 
                     drop-shadow-[0_5px_20px_rgba(0,0,0,0.8)]"
        >
          VV Productions
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-base sm:text-lg md:text-xl text-gray-300 max-w-lg sm:max-w-xl mb-8 leading-relaxed"
        >
          Crafting cinematic visuals that turn ideas into powerful stories.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full justify-center"
        >
          <a
            href="#portfolio"
            className="w-full sm:w-auto text-center px-6 py-3 bg-[#C6A75E] text-black font-semibold rounded-lg 
                       hover:scale-105 hover:shadow-xl hover:shadow-[#C6A75E]/40 
                       transition duration-300"
          >
            View Work
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto text-center px-6 py-3 border border-white/70 rounded-lg 
                       hover:bg-white hover:text-black 
                       hover:scale-105 transition duration-300"
          >
            Contact Us
          </a>
        </motion.div>
      </div>

      {/* 🎬 Bottom fade */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />

      {/* 🔽 Scroll indicator */}
      <div className="absolute bottom-6 w-full flex justify-center">
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-gray-400 text-sm tracking-wider"
        >
          ↓ Scroll
        </motion.div>
      </div>

    </section>
  );
}