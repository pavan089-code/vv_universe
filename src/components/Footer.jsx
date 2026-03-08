import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#000F26] text-[#B8C4D9] border-t border-[#1B3B6F]">

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <h3 className="text-2xl font-semibold text-[#F5F7FA] mb-4">
              VV Productions
            </h3>

            <p className="max-w-sm">
              Capturing timeless stories through creative photography and cinematic films.
              Weddings, celebrations, and unforgettable moments.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-[#F5F7FA] mb-4">
              Quick Links
            </h4>

            <div className="flex flex-col gap-3">

              <Link to="/" className="hover:text-[#C6A75E] transition">
                Home
              </Link>

              <Link to="/portfolio" className="hover:text-[#C6A75E] transition">
                Portfolio
              </Link>

              <Link to="/services" className="hover:text-[#C6A75E] transition">
                Services
              </Link>

              <Link to="/about" className="hover:text-[#C6A75E] transition">
                About
              </Link>

              <Link to="/contact" className="hover:text-[#C6A75E] transition">
                Contact
              </Link>

            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-[#F5F7FA] mb-4">
              Follow Us
            </h4>

            <div className="flex gap-6">

              <a
                href="#"
                className="hover:text-[#C6A75E] transition"
              >
                Facebook
              </a>

              <a
                href="https://www.instagram.com/vv_productions223?igsh=MW1hdmhldXM2Mjh5eg=="
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

        </div>

        {/* Divider */}
        <div className="border-t border-[#1B3B6F] my-10" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm gap-4">

          <p>
            © {new Date().getFullYear()} VV Productions. All rights reserved.
          </p>

          <p className="text-[#B8C4D9]">
            Designed with passion.
          </p>

        </div>

      </div>

    </footer>
  );
}