export default function Footer() {
  return (
    <footer className="bg-[#0B0B0D] text-gray-400 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold text-white mb-2">
              VV Productions
            </h3>
            <p className="text-gray-500 max-w-sm">
              Capturing timeless stories through creative photography.
              Weddings, celebrations & unforgettable moments.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href="#"
              className="hover:text-white transition duration-300"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/vv_productions223?igsh=MW1hdmhldXM2Mjh5eg=="
              className="hover:text-white transition duration-300"
            >
              Instagram
            </a>
            <a
              href="#"
              className="hover:text-white transition duration-300"
            >
              Twitter
            </a>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-10" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">

          <p>
            © {new Date().getFullYear()} VV Productions. All rights reserved.
          </p>

          <p>
            Designed with passion.
          </p>

        </div>

      </div>
    </footer>
  );
}