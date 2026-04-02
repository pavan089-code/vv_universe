import { useEffect, useState } from "react";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="relative bg-[#050A14] text-gray-400 border-t border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* 🔥 MAIN ROW */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Brand */}
          <div className="flex items-center gap-3">
            <img
              src="/logo2.PNG"
              className="w-9 h-9 rounded-full"
              alt="VV Productions"
            />
            <span className="text-white font-semibold">
              VV Productions
            </span>
          </div>

          {/* Tagline */}
          <p className="text-sm text-center md:text-left max-w-md">
            Capturing real moments through cinematic storytelling.
          </p>

          {/* Socials */}
          <div className="flex gap-5 text-sm">

            <a
              href="#"
              className="hover:text-[#C6A75E] transition"
            >
              Facebook
            </a>

            <a
              href="https://www.instagram.com/vv_productions223"
              target="_blank"
              className="hover:text-[#C6A75E] transition"
            >
              Instagram
            </a>

            <a
              href="#"
              className="hover:text-[#C6A75E] transition"
            >
              Twitter
            </a>

          </div>

        </div>

        {/* 🔥 DIVIDER */}
        <div className="border-t border-white/10 my-6" />

        {/* 🔥 BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs gap-4">

          <p>
            © {new Date().getFullYear()} VV Productions
          </p>

          <p className="text-gray-500">
            Crafted with passion 🎬
          </p>

        </div>

      </div>

      {/* 🔥 SCROLL TO TOP */}
      {showTop && (
        <button
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
          className="fixed bottom-6 right-6 z-50 
          p-3 rounded-full bg-[#C6A75E] text-black 
          shadow-lg hover:scale-110 transition"
        >
          ↑
        </button>
      )}
    </footer>
  );
}