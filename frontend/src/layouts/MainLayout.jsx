import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
export default function MainLayout() {
  return (
    <>
      <Navbar />
      <WhatsAppButton />

      <main className="">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}