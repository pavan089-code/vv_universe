import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [focused, setFocused] = useState(null);

  return (
    <section className="relative py-16 sm:py-20 md:py-28 bg-[#050A14] text-[#F5F7FA] overflow-hidden">
      {/* 🎬 Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050A14] to-black opacity-90" />
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-[-150px] left-1/2 -translate-x-1/2 
        w-[600px] h-[600px] bg-[#C6A75E]/10 blur-[120px] rounded-full"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 md:grid-cols-2 items-start">
        {/* 🔥 LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Let’s Create Something{" "}
            <span className="text-[#C6A75E]">Meaningful</span>
          </h2>

          <p className="text-[#B8C4D9] max-w-full sm:max-w-md leading-relaxed">
            Whether it’s a wedding, an event, or a creative project — I’d love
            to hear your story and help you capture it in a way that feels real
            and timeless.
          </p>

          {/* Contact Info */}
          <div className="space-y-6 pt-4">
            <div className="flex items-center gap-4 group">
              <div className="p-3 rounded-lg bg-[#C6A75E]/10 group-hover:bg-[#C6A75E]/20 transition">
                📞
              </div>
              <p className="text-gray-300 group-hover:text-white transition">
                +91 9966233224
              </p>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="p-3 rounded-lg bg-[#C6A75E]/10 group-hover:bg-[#C6A75E]/20 transition">
                📧
              </div>
              <p className="text-gray-300 group-hover:text-white transition">
                vvproductions@gmail.com
              </p>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="p-3 rounded-lg bg-[#C6A75E]/10 group-hover:bg-[#C6A75E]/20 transition">
                📍
              </div>
              <p className="text-gray-300 group-hover:text-white transition">
                Hyderabad, India
              </p>
            </div>
          </div>
        </motion.div>

        {/* 🎬 FORM */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative p-10 rounded-2xl 
          bg-white/5 backdrop-blur-xl border border-white/10 
          shadow-[0_0_40px_rgba(0,0,0,0.4)] 
          grid gap-6"
        >
          {/* Glow border hover */}
          <div
            className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition 
bg-gradient-to-r from-[#C6A75E]/20 to-transparent blur-xl pointer-events-none"
          />

          {/* Input */}
          <input
            type="text"
            placeholder="Your Name"
            onFocus={() => setFocused("name")}
            onBlur={() => setFocused(null)}
            className={`p-4 rounded-lg bg-black/40 border transition 
            ${focused === "name" ? "border-[#C6A75E]" : "border-white/10"}
            focus:outline-none text-white`}
          />

          <input
            type="email"
            placeholder="Your Email"
            onFocus={() => setFocused("email")}
            onBlur={() => setFocused(null)}
            className={`p-4 rounded-lg bg-black/40 border transition 
            ${focused === "email" ? "border-[#C6A75E]" : "border-white/10"}
            focus:outline-none text-white`}
          />

          <textarea
            rows="4"
            placeholder="Tell me about your project..."
            onFocus={() => setFocused("message")}
            onBlur={() => setFocused(null)}
            className={`p-4 rounded-lg bg-black/40 border transition 
            ${focused === "message" ? "border-[#C6A75E]" : "border-white/10"}
            focus:outline-none text-white`}
          />

          {/* Button */}
          <button
            type="submit"
            className="relative px-8 py-4 rounded-lg font-semibold 
            bg-[#C6A75E] text-black 
            hover:scale-105 hover:shadow-lg hover:shadow-[#C6A75E]/40 
            transition duration-300"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
