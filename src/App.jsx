import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contactus.jsx";
import Booking from "./components/booknow.jsx";

function App() {
  return (
    <Routes>

      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />

        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />

      </Route>

    </Routes>
  );
}

export default App;