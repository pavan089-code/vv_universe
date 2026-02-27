import heroImage from "../assets/me1.jpeg";

export default function Hero() {
  return (
    <section className="relative h-screen w-full">

      <img
        src={heroImage}
        alt="photographer"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex items-center h-full max-w-7xl mx-auto px-6">
        <div className="text-[#F5F5F5] max-w-2xl space-y-6">

          <p className="uppercase tracking-[0.3em] text-gray-300 text-sm">
            Weddings • Events • Pre-Shoots
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Vishnu Teja
          </h1>

          <p className="text-gray-200 text-lg md:text-xl">
            Capturing timeless stories through elegant and emotional photography.
          </p>

          <div className="flex gap-6 pt-4">
            <button className="px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition duration-300">
              View Portfolio
            </button>

            <button className="px-8 py-3 border border-white rounded-full hover:bg-white hover:text-black transition duration-300">
              Book Now
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}