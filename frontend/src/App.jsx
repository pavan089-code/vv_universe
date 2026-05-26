import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import StarBackground from "./components/StarBackground.jsx";
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";

import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contactus.jsx";
import Booking from "./components/booknow.jsx";

import AdminBookings from "./pages/admin/Adminbooking.jsx";
import AdminLogin from "./pages/admin/AdminLogin.jsx";
import AdminDashboard from "./pages/admin/Admindashboard.jsx";
import AdminReviews from "./pages/admin/AdminReviews.jsx";
import AdminPortfolio from "./pages/admin/Adminportfolio.jsx";
import AdminJamRegistrations from "./pages/admin/AdminJamRegistrations.jsx";
import ProtectedRoute from "./components/admin/AdminprotectedRoutes.jsx";
import JamSession from "./pages/JamSession.jsx";

function App() {
  return (
    <>
      <StarBackground />

      <div className="relative z-10">
      <ToastContainer position="top-right" />
      <Routes>
        {/* PUBLIC WEBSITE */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/jamsession" element={<JamSession />} />
        </Route>

        {/* ADMIN LOGIN (no layout) */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* ADMIN DASHBOARD */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <AdminDashboard />
              </AdminLayout>
            </ProtectedRoute>
          }
        />
        {/* ADMIN Bookings */}
        <Route
          path="/admin/bookings"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <AdminBookings />
              </AdminLayout>
            </ProtectedRoute>
          }
        />
        {/* ADMIN Portfolio */}
        <Route
          path="/admin/portfolio"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <AdminPortfolio />
              </AdminLayout>
            </ProtectedRoute>
          }
        />

        {/* ADMIN Reviews */}
        <Route path="/admin/reviews" element={<AdminReviews />} />

        {/* ADMIN Jam Session Registrations */}
        <Route
          path="/admin/jam-registrations"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <AdminJamRegistrations />
              </AdminLayout>
            </ProtectedRoute>
          }
        />
      </Routes>
      </div>
    </>
  );
}

export default App;
