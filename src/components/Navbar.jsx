import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

import { Link } from "react-router-dom";
import logo from "../assets/logo.PNG";

export default function AppNavbar() {
  return (
    <Navbar
      fluid
      rounded={false}
      className="bg-black/40 backdrop-blur-lg border-b border-white/10 fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-4 shadow-none"
    >
      {/* Logo */}
      <NavbarBrand as={Link} to="/" className="flex items-center gap-3">
        <img src={logo} className="h-10 w-auto" alt="VV Productions Logo" />
        <span className="text-lg md:text-xl font-semibold tracking-wide text-white">
          VV Productions
        </span>
      </NavbarBrand>

      {/* Right Side */}
      <div className="flex items-center gap-4 md:order-2 ">

        <Link to="/Booking">
          <button className="px-4 py-1.5 md:px-6 md:py-2 rounded-lg font-medium bg-[#C6A75E] text-black hover:bg-[#b8954f] transition">
            Book Now
          </button>
        </Link>

        <NavbarToggle />
      </div>

      {/* Links */}
      <NavbarCollapse>

        <NavbarLink as={Link} to="/">
          Home
        </NavbarLink>

        <NavbarLink as={Link} to="/portfolio">
          Portfolio
        </NavbarLink>

        <NavbarLink as={Link} to="/services">
          Services
        </NavbarLink>

        <NavbarLink as={Link} to="/about">
          About
        </NavbarLink>

        <NavbarLink as={Link} to="/blog">
          Blog
        </NavbarLink>

        <NavbarLink as={Link} to="/contact">
          Contact
        </NavbarLink>

      </NavbarCollapse>
    </Navbar>
  );
}