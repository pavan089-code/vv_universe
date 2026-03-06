export default function Booking() {
  return (
    <section id="book" className="py-24 bg-black text-white">

      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Book a Session
        </h2>

        <form className="grid gap-6">

          <input
            type="text"
            placeholder="Full Name"
            className="p-4 bg-[#0f0f0f] border border-white/10 rounded-lg focus:outline-none focus:border-[#C6A75E]"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="p-4 bg-[#0f0f0f] border border-white/10 rounded-lg focus:outline-none focus:border-[#C6A75E]"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="p-4 bg-[#0f0f0f] border border-white/10 rounded-lg focus:outline-none focus:border-[#C6A75E]"
          />

          <select
            className="p-4 bg-[#0f0f0f] border border-white/10 rounded-lg focus:outline-none focus:border-[#C6A75E]"
          >
            <option>Select Event Type</option>
            <option>Wedding</option>
            <option>Pre-Wedding</option>
            <option>Traditional Ceremony</option>
            <option>Model Shoot</option>
            <option>Event Coverage</option>
          </select>

          <input
            type="date"
            className="p-4 bg-[#0f0f0f] border border-white/10 rounded-lg focus:outline-none focus:border-[#C6A75E]"
          />

          <textarea
            rows="4"
            placeholder="Tell us about your event..."
            className="p-4 bg-[#0f0f0f] border border-white/10 rounded-lg focus:outline-none focus:border-[#C6A75E]"
          ></textarea>

          <button
            type="submit"
            className="mt-4 px-8 py-4 bg-[#C6A75E] text-black font-semibold rounded-lg hover:bg-[#b8964f] transition"
          >
            Send Booking Request
          </button>

        </form>

      </div>

    </section>
  );
}