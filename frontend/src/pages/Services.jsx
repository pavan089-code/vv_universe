import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Visual Production",
      subtitle: "Cinematic storytelling & visual excellence",
      items: [
        "Wedding Stories",
        "Event Coverage",
        "Drone Photography",
        "Creative Visual Content",
        "Music Videos",
        "Short Films",
        "Corporate Films",
        "Documentaries",
      ],
    },
    {
      title: "Event Planning",
      subtitle: "Crafting unforgettable experiences",
      items: [
        "Wedding Planning",
        "Corporate Events",
        "Private Celebrations",
        "Full Event Management",
      ],
    },
    {
      title: "Digital Marketing",
      subtitle: "Growing your brand with strategy & creativity",
      items: [
        "Social Media Management",
        "Content Creation",
        "Brand Strategy",
        "Ad Campaigns",
      ],
    },
  ];

  return (
    <section className="bg-[#050A14] text-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">

      {/* 🎬 HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-14 md:mb-20"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Our Services
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          From cinematic storytelling to full-scale event planning and digital growth — we deliver complete creative solutions.
        </p>
      </motion.div>

      {/* 🔥 SERVICES BLOCKS */}
      <div className="max-w-6xl mx-auto space-y-16">

        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="relative group"
          >

            {/* Glow background */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-[#C6A75E]/10 to-transparent blur-2xl" />

            {/* Card */}
            <div className="relative z-10 p-6 sm:p-8 md:p-10 rounded-2xl 
              bg-white/5 backdrop-blur-lg border border-white/10 
              hover:border-[#C6A75E]/40 transition duration-500">

              {/* Title */}
              <h2 className="text-2xl md:text-3xl font-semibold mb-2">
                {service.title}
              </h2>

              {/* Subtitle */}
              <p className="text-gray-400 mb-6">
                {service.subtitle}
              </p>

              {/* Items Grid */}
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

                {service.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="px-4 py-3 rounded-lg bg-black/40 border border-white/5 
                    hover:border-[#C6A75E]/40 hover:bg-black/60 
                    transition duration-300 text-sm text-gray-300"
                  >
                    {item}
                  </div>
                ))}

              </div>

            </div>
          </motion.div>
        ))}

      </div>

      {/* 🎯 CTA */}
      <div className="mt-20 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-3xl font-semibold mb-4">
          Ready to bring your vision to life?
        </h2>
        <a
          href="/booking"
          className="inline-block w-full sm:w-auto px-6 py-3 bg-[#C6A75E] text-black font-semibold rounded-lg 
          hover:scale-105 hover:shadow-lg hover:shadow-[#C6A75E]/40 transition"
        >
          Book Now
        </a>
      </div>

    </section>
  );
}