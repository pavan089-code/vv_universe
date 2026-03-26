import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from "flowbite-react";

import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/logo.PNG";

export default function AppNavbar() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      fluid
      rounded={false}
      className={`fixed top-0 left-0 w-full z-50 px-4 md:px-12 py-3 md:py-4 transition-all duration-300
      ${
        scrolled
          ? "bg-[#000F26] border-b border-[#1B3B6F] shadow-md"
          : "bg-[#000F26]/70 backdrop-blur-xl border-b border-transparent"
      }`}
    >

      {/* Logo */}
      <NavbarBrand as={NavLink} to="/" className="flex items-center gap-3">
        <img
          src={logo}
          className="h-8 md:h-10 w-auto"
          alt="VV Productions Logo"
        />
        <span className="text-base md:text-xl font-semibold tracking-wide text-[#F5F7FA]">
          VV Productions
        </span>
      </NavbarBrand>

      {/* Right Side */}
      <div className="flex items-center gap-3 md:gap-4 md:order-2">

        <NavLink to="/booking">
          <button className="px-4 py-1.5 md:px-6 md:py-2 text-sm md:text-base rounded-lg font-medium bg-[#C6A75E] text-black hover:bg-[#b8954f] transition duration-300 shadow-md">
            Book Now
          </button>
        </NavLink>

        <NavbarToggle className="text-white hover:bg-[#1B3B6F] rounded-lg p-2" />

      </div>

      {/* Navigation Links */}
      <NavbarCollapse
        className="bg-[#000F26] md:bg-transparent border-0 md:gap-8
        divide-y md:divide-none divide-[#1B3B6F]
        transition-all duration-300 ease-in-out"
      >

        <NavLink
          to="/"
          className={({ isActive }) =>
            `block py-3 md:py-0 transition-colors duration-300 ${
              isActive
                ? "text-[#C6A75E]"
                : "text-[#B8C4D9] hover:text-[#C6A75E]"
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/portfolio"
          className={({ isActive }) =>
            `block py-3 md:py-0 transition-colors duration-300 ${
              isActive
                ? "text-[#C6A75E]"
                : "text-[#B8C4D9] hover:text-[#C6A75E]"
            }`
          }
        >
          Portfolio
        </NavLink>

        <NavLink
          to="/services"
          className={({ isActive }) =>
            `block py-3 md:py-0 transition-colors duration-300 ${
              isActive
                ? "text-[#C6A75E]"
                : "text-[#B8C4D9] hover:text-[#C6A75E]"
            }`
          }
        >
          Services
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `block py-3 md:py-0 transition-colors duration-300 ${
              isActive
                ? "text-[#C6A75E]"
                : "text-[#B8C4D9] hover:text-[#C6A75E]"
            }`
          }
        >
          About
        </NavLink>

        <NavLink
          to="/blog"
          className={({ isActive }) =>
            `block py-3 md:py-0 transition-colors duration-300 ${
              isActive
                ? "text-[#C6A75E]"
                : "text-[#B8C4D9] hover:text-[#C6A75E]"
            }`
          }
        >
          Blog
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `block py-3 md:py-0 transition-colors duration-300 ${
              isActive
                ? "text-[#C6A75E]"
                : "text-[#B8C4D9] hover:text-[#C6A75E]"
            }`
          }
        >
          Contact
        </NavLink>

      </NavbarCollapse>

    </Navbar>
  );
}