import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from "flowbite-react";

import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.PNG";

export default function AppNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 CLOSE MENU ON ROUTE CHANGE
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Navbar
        fluid
        rounded={false}
        className={`fixed top-0 left-0 w-full z-50 px-3 sm:px-4 md:px-8 lg:px-12 py-2 sm:py-3 transition-all duration-500

        ${
          scrolled
            ? "bg-[#0B1A2A]/80 backdrop-blur-md shadow-lg"
            : "!bg-transparent backdrop-blur-0 shadow-none border-none"
        }`}
      >
        {/* Logo */}
        <NavbarBrand as={NavLink} to="/" className="flex items-center gap-2 sm:gap-3">
          <img
            src={logo}
            className="h-8 md:h-10 w-auto"
            alt="VV Productions Logo"
          />
          <span className="text-base md:text-xl font-semibold tracking-wide text-white">
            VV Productions
          </span>
        </NavbarBrand>

        {/* Right Side */}
        <div className="flex items-center gap-3 md:gap-4 md:order-2">

          {/* Desktop CTA */}
          <NavLink to="/booking" className="hidden sm:inline-block">
            <button className="px-4 py-2 rounded-lg font-semibold 
              bg-[#C6A75E] text-black 
              hover:scale-105 hover:shadow-lg hover:shadow-[#C6A75E]/40
              transition duration-300">
              Book Now
            </button>
          </NavLink>

          {/* 🔥 CONTROLLED TOGGLE */}
          <NavbarToggle
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:bg-white/10 rounded-lg p-2 transition"
          />
        </div>

        {/* 🔥 CONTROLLED COLLAPSE */}
        <NavbarCollapse
          className={`${isOpen ? "block" : "hidden"} md:flex w-full sm:w-auto 
          bg-[#0B1A2A]/95 md:bg-transparent 
          backdrop-blur-md md:backdrop-blur-0 border-0 md:gap-8
          divide-y md:divide-none divide-white/10 py-2 sm:py-0 px-4 sm:px-0`}
        >

          {/* Mobile CTA */}
          <div className="flex flex-col sm:hidden gap-2 px-2 pb-3">
            <NavLink to="/booking" onClick={() => setIsOpen(false)}>
              <button className="w-full px-3 py-2 rounded-md font-semibold
                bg-[#C6A75E] text-black
                hover:scale-105 hover:shadow-lg hover:shadow-[#C6A75E]/40
                transition duration-300">
                Book Now
              </button>
            </NavLink>
          </div>

          {/* Links */}
          {["/", "/portfolio", "/services", "/about", "/blog", "/contact"].map(
            (path, i) => {
              const labels = [
                "Home",
                "Portfolio",
                "Services",
                "About",
                "Blog",
                "Contact",
              ];

              return (
                <NavLink
                  key={i}
                  to={path}
                  onClick={() => setIsOpen(false)} // 🔥 CLOSE ON CLICK
                  className={({ isActive }) =>
                    `relative block py-2 md:py-0 text-sm md:text-base whitespace-nowrap transition-all duration-300
                    ${
                      isActive
                        ? "text-[#C6A75E]"
                        : "text-gray-300 hover:text-[#C6A75E]"
                    }

                    after:content-['']
                    after:absolute after:left-0 after:-bottom-1
                    after:h-[2px] after:w-0
                    after:bg-[#C6A75E]
                    after:transition-all after:duration-300
                    hover:after:w-full`
                  }
                >
                  {labels[i]}
                </NavLink>
              );
            }
          )}
        </NavbarCollapse>
      </Navbar>
    </motion.div>
  );
}