import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const BookingCalendar = () => {
  const [bookings, setBookings] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const fetchBookings = async () => {
    const res = await fetch("http://localhost:5000/api/bookings");
    const data = await res.json();
    setBookings(data);
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const bookingsOnDate = bookings.filter((booking) => {
    const bookingDate = new Date(booking.date).toDateString();

    return bookingDate === selectedDate.toDateString();
  });

  return (
    <div className="bg-gray-900 p-6 rounded-xl mt-8">
      <h2 className="text-xl mb-4">Booking Calendar</h2>

      <Calendar
        onChange={setSelectedDate}
        value={selectedDate}
        tileContent={({ date }) => {
          const hasBooking = bookings.some(
            (booking) =>
              new Date(booking.date).toDateString() === date.toDateString(),
          );

          return hasBooking ? (
            <span className="text-red-500 text-xs">●</span>
          ) : null;
        }}
      />

      <div className="mt-6">
        <h3 className="text-lg mb-2">
          Bookings on {selectedDate.toDateString()}
        </h3>

        {bookingsOnDate.length === 0 ? (
          <p>No bookings</p>
        ) : (
          bookingsOnDate.map((booking) => (
            <div key={booking._id} className="bg-gray-800 p-3 rounded mb-2">
              <p className="font-semibold">{booking.name}</p>
              <p>{booking.eventType}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BookingCalendar;
