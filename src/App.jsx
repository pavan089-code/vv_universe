import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar  from './components/Navbar.jsx';
import  Gallery  from './components/gallery.jsx'; 
import Footer from './components/Footer.jsx'
import Hero from './components/hero.jsx';
import ParallaxHero from './components/parallexhero.jsx';
import CTA from './components/Cta.jsx';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Hero/>
    {/* <ParallaxHero /> */}
    <Gallery />
    <CTA />
    <Footer />
    </>
  )
}

export default App
