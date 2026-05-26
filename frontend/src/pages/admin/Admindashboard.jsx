import { useEffect, useState } from "react";

import DashboardCards from "../../components/admin/Dashbordcards";
import BookingChart from "../../components/admin/Bookingcharts";
import RecentBookings from "../../components/admin/Recentbooking";
import BookingCalendar from "../../components/admin/BookingCalender";

const AdminDashboard = () => {
  const API_URL = import.meta.env.VITE_API_URL;

  const [bookings, setBookings] = useState([]);
  const [chartData, setChartData] = useState([]);

  const processChartData = (bookings) => {
    const months = [
      "Jan","Feb","Mar","Apr","May","Jun",
      "Jul","Aug","Sep","Oct","Nov","Dec"
    ];

    const counts = new Array(12).fill(0);

    bookings.forEach((booking) => {
      const date = new Date(booking.date);
      const monthIndex = date.getMonth();
      counts[monthIndex] += 1;
    });

    const chart = months.map((month, i) => ({
      name: month,
      bookings: counts[i]
    }));

    setChartData(chart);
  };

  const fetchBookings = async () => {
    const res = await fetch(`${API_URL}/api/bookings`);
    const data = await res.json();

    setBookings(data);
    processChartData(data);
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div className="p-0 sm:p-4 lg:p-6">

      <p className="text-gray-400 mb-4">Welcome back, Admin 👋</p>
      <h1 className="mb-8 text-2xl font-bold sm:text-3xl">Dashboard Overview</h1>

      <DashboardCards bookingCount={bookings.length} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <BookingChart data={chartData} />
        <BookingCalendar />
      </div>

      <div className="mt-8 rounded-xl bg-gray-900 p-4 sm:p-6">
        <RecentBookings bookings={bookings} />
      </div>

    </div>
  );
};

export default AdminDashboard;
