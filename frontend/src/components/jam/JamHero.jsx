export default function JamHero() {
  return (
    <section className="relative min-h-[65vh] md:min-h-[80vh] w-full overflow-hidden">
      {/* Background */}
      <img
        src="/RegistrationInvite.jpeg"
        alt="Jam Session"
        className="absolute inset-0 w-full h-full object-cover object-center blur-sm scale-110"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/90" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[65vh] md:min-h-[80vh] px-5 py-16">
        <div className="max-w-5xl text-center text-white">

          {/* Main Title */}
          <h1 className="font-extrabold tracking-tight leading-none">
            <span className="block text-5xl sm:text-6xl md:text-8xl bg-gradient-to-r from-white via-gray-100 to-yellow-400 bg-clip-text text-transparent">
              JAM SESSION
            </span>
          </h1>

          {/* Music Icon */}
          <div className="text-4xl md:text-6xl mt-3">
            🎵
          </div>

          {/* Accent Line */}
          <div className="w-20 md:w-24 h-1 bg-yellow-400 rounded-full mx-auto mt-4 mb-6" />

          {/* Presented By */}
          <p className="uppercase tracking-[0.4em] text-yellow-400 text-[11px] sm:text-xs mb-4">
            Presented By
          </p>

          {/* Sponsor Logos */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-8">
            <img
              src="/f6.png"
              alt="F6 Fashion Store"
              className="h-12 sm:h-16 md:h-20 object-contain transition-transform duration-300 hover:scale-105"
            />

            <div className="h-8 md:h-12 w-px bg-white/20" />

            <img
              src="/bfc.png"
              alt="Brutal Fight Club"
              className="h-12 sm:h-16 md:h-20 object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Tagline */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            One Beat. Many Souls. Infinite Music.
          </p>

          {/* Slots Badge */}
          <div className="mt-6 flex justify-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-yellow-400/30 bg-yellow-500/10">
              <span className="animate-pulse">🎟</span>
              <span className="text-yellow-300 font-medium">
                Limited Slots Available
              </span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
            <button
              onClick={() =>
                document
                  .getElementById("register")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition-all duration-300 hover:scale-105 shadow-lg shadow-yellow-500/20"
            >
              Register Now
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("payment")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white hover:text-black transition-all duration-300 hover:scale-105"
            >
              Pay Now
            </button>
          </div>

          {/* Event Categories */}
          <p className="mt-8 text-xs sm:text-sm text-gray-400 tracking-wider uppercase">
            Live Music • Open Mic • Performances • Community
          </p>
        </div>
      </div>
    </section>
  );
}