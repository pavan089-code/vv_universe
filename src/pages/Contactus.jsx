export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-black text-white">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">

        {/* Contact Info */}
        <div className="space-y-6">

          <h2 className="text-4xl md:text-5xl font-bold">
            Contact Us
          </h2>

          <p className="text-gray-400">
            Have an event coming up? Let's capture your special moments.
            Feel free to reach out through phone, email, or social media.
          </p>

          <div className="space-y-4 text-gray-300">

            <p>📞 +91 9876543210</p>
            <p>📧 vvproductions@gmail.com</p>
            <p>📍 Hyderabad, India</p>

          </div>

        </div>

        {/* Contact Form */}
        <form className="grid gap-6">

          <input
            type="text"
            placeholder="Your Name"
            className="p-4 bg-[#0f0f0f] border border-white/10 rounded-lg focus:outline-none focus:border-[#C6A75E]"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="p-4 bg-[#0f0f0f] border border-white/10 rounded-lg focus:outline-none focus:border-[#C6A75E]"
          />

          <textarea
            rows="4"
            placeholder="Your Message"
            className="p-4 bg-[#0f0f0f] border border-white/10 rounded-lg focus:outline-none focus:border-[#C6A75E]"
          ></textarea>

          <button
            type="submit"
            className="px-8 py-4 bg-[#C6A75E] text-black font-semibold rounded-lg hover:bg-[#b8964f] transition"
          >
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}