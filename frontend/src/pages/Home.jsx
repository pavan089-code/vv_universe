import Hero from "../components/hero";
import LogoVideo from "../components/logovid";
import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import SocialMedia from "../components/SocialMedia";

export default function Home() {
  return (
    <>
      <LogoVideo />   {/* Logo + Tagline */}
      <Services />    {/* Mini services */}
      <SocialMedia /> {/* Social media links */}
    </>
  );
}