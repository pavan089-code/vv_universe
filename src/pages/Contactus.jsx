export default function Contact() {
  return (
    <section id="contact" className="py-28 bg-[#000F26] text-[#F5F7FA]">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">

        {/* Contact Info */}
        <div className="space-y-8">

          <h2 className="text-4xl md:text-5xl font-bold">
            Contact Us
          </h2>

          <p className="text-[#B8C4D9] max-w-md">
            Have an event coming up? Let's capture your special moments.
            Reach out through phone, email, or send us a message below.
          </p>

          <div className="space-y-5 text-[#B8C4D9]">

            <p className="flex text-[#C6A75E] items-center gap-3">
              <span className="text-[#C6A75E] text-xl">📞</span>
              +91 9966233224
            </p>

            <p className="flex items-center gap-3">
              <span className="text-[#C6A75E] text-xl">📧</span>
              vvproductions@gmail.com
            </p>

            <p className="flex items-center gap-3">
              <span className="text-[#C6A75E] text-xl">📍</span>
              Hyderabad, India
            </p>

          </div>

        </div>

        {/* Contact Form */}
        <form className="p-10 bg-[#071B3A] border border-[#1B3B6F] rounded-2xl grid gap-6">

          <input
            type="text"
            placeholder="Your Name"
            className="p-4 bg-[#000F26] border border-[#1B3B6F] rounded-lg focus:outline-none focus:border-[#C6A75E] text-[#F5F7FA]"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="p-4 bg-[#000F26] border border-[#1B3B6F] rounded-lg focus:outline-none focus:border-[#C6A75E] text-[#F5F7FA]"
          />

          <textarea
            rows="4"
            placeholder="Your Message"
            className="p-4 bg-[#000F26] border border-[#1B3B6F] rounded-lg focus:outline-none focus:border-[#C6A75E] text-[#F5F7FA]"
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