export default function JamHero() {
  return (
    <section className="relative h-[65vh] w-full overflow-hidden">
      {/* Background */}
      <img
        src="/RegistrationInvite.jpeg"
        alt="Jam Session"
        className="absolute inset-0 w-full h-full object-cover object-center blur-sm scale-110"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center text-center h-full px-4">
        <div className="text-white max-w-4xl">
          {/* Small Heading */}
          <p className="uppercase tracking-[0.3em] text-gray-300 text-sm mb-4">
            Live Music • Open Mic • Goa Nights
          </p>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
            JAM SESSION 🎵
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-lg sm:text-xl text-gray-300 leading-relaxed">
            One Beat. Many Souls. Infinite Music.
          </p>

          {/* Limited Slots */}
          <p className="mt-3 text-yellow-400 font-medium">
            🎟 Limited Slots Available
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <a
              href="#register"
              className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition duration-300"
            >
              Register Now
            </a>

            <a
              href="#payment"
              className="px-8 py-4 border border-white rounded-full hover:bg-white hover:text-black transition duration-300"
            >
              Pay Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
