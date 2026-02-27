import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

export default function AppNavbar() {
  return (
    <Navbar
      fluid
      rounded={false}
      className="bg-black/40! backdrop-blur-lg border-b! border-white/10!  fixed top-0 left-0 w-full z-50   px-6 md:px-12 py-4 shadow-none"
    >
      {/* Logo */}
      <NavbarBrand href="/" className="flex items-center gap-3">
        <img
          src="/src/assets/logo2.png"
          className="h-10 w-auto"
          alt="VV Universe Logo"
        />
        <span className="text-lg md:text-xl font-semibold tracking-wide text-white">
          VV Universe
        </span>
      </NavbarBrand>

      {/* Right Side */}
      <div className="flex items-center gap-4 md:order-2">
        <button
  className="
    px-4 py-1.5 text-sm 
    md:px-6 md:py-2 md:text-base
    rounded-lg font-medium
    bg-[#C6A75E] text-black
    hover:bg-[#b8954f]
    transition duration-300
    shadow-md
  "
>
  Book Now
</button>

        <NavbarToggle className="text-white hover:bg-white/10" />
      </div>

      {/* Links */}
      <NavbarCollapse className="md:gap-10 bg-transparent border-0">
        <NavbarLink
          href="#"
          active
          className="text-white hover:text-[#C6A75E] transition-colors duration-300"
        >
          Home
        </NavbarLink>

        <NavbarLink
          href="#"
          className="text-white hover:text-[#C6A75E] transition-colors duration-300"
        >
          Portfolio
        </NavbarLink>

        <NavbarLink
          href="#"
          className="text-white hover:text-[#C6A75E] transition-colors duration-300"
        >
          About
        </NavbarLink>

        <NavbarLink
          href="#"
          className="text-white hover:text-[#C6A75E] transition-colors duration-300"
        >
          Contact
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
