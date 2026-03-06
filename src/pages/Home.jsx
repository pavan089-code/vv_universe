import Hero from "../components/hero";
import Portfolio from "./Portfolio";
import Services from "./Services";
import About from "./About";
import Reviews from "../components/Reviews";
import Booking from "../components/booknow";

export default function Home() {
  return (
    <>
      <Hero />
      <Portfolio />
      <Services />
      <About />
      <Reviews />
      <Booking />
    </>
  );
}