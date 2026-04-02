import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function SocialMedia() {
  const platforms = [
    {
      name: "Instagram",
      icon: <FaInstagram size={28} />,
      desc: "Explore our latest reels, shoots & behind-the-scenes.",
      link: "https://instagram.com/yourhandle",
      color: "hover:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500",
    },
    {
      name: "Facebook",
      icon: <FaFacebookF size={26} />,
      desc: "Stay updated with our projects and client work.",
      link: "https://facebook.com/yourhandle",
      color: "hover:bg-blue-600",
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp size={28} />,
      desc: "Directly connect with us for bookings and inquiries.",
      link: "https://wa.me/919999999999",
      color: "hover:bg-green-500",
    },
  ];

  return (
    <section className="bg-transparent text-white py-24">

      <div className="max-w-6xl mx-auto px-4 text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Connect With Us
        </h2>

        <p className="text-gray-400 max-w-xl mx-auto mb-16">
          Follow VV Productions across platforms and stay connected with our latest work and updates.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {platforms.map((platform, i) => (
            <motion.a
              key={i}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className={`group border border-[#1B3B6F] rounded-2xl p-8 transition duration-300 ${platform.color}`}
            >
              {/* Icon */}
              <div className="mb-4 flex justify-center text-[#C6A75E] group-hover:text-white transition">
                {platform.icon}
              </div>

              {/* Name */}
              <h3 className="text-xl font-semibold mb-2">
                {platform.name}
              </h3>

              {/* Description */}
              <p className="text-gray-400 group-hover:text-white text-sm mb-4">
                {platform.desc}
              </p>

              {/* CTA */}
              <span className="text-sm font-medium underline">
                Visit →
              </span>
            </motion.a>
          ))}

        </div>

      </div>

    </section>
  );
}