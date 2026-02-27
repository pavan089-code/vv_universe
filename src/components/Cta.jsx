export default function CTA() {
  return (
    <section className="relative py-24 bg-[#0B0B0D]  from-black to-gray-900 text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Let’s Capture Your Story
        </h2>

        <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
          Whether it’s a wedding, birthday, or special celebration —
          let’s create timeless memories together.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          <button className="px-8 py-3 bg-[#C6A75E] text-black hover:bg-[#b8954f] font-semibold rounded-lg  transition duration-300">
            Book a Session
          </button>

          <button className="px-8 py-3 border border-[#C6A75E] text-[#C6A75E] hover:bg-[#C6A75E] hover:text-black rounded-lg transition duration-300">
            View Portfolio
          </button>
        </div>

      </div>
    </section>
  );
}