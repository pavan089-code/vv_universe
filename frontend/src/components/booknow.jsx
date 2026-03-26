import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Booking() {

  const [selectedDate, setSelectedDate] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedDate) {
      alert("Please select an event date");
      return;
    }

    try {
      const res = await fetch("https://vv-universe.onrender.com/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          eventDate: selectedDate
        })
      });

      const data = await res.json();

      if (res.ok) {
        alert("Booking request sent successfully!");

        setFormData({
          name: "",
          email: "",
          phone: "",
          eventType: "",
          message: ""
        });

        setSelectedDate(null);
      } else {
        alert(data.message || "Something went wrong");
      }

    } catch (error) {
      console.error(error);
      alert("Failed to send booking request");
    }
  };

  return (
    <section id="book" className="py-28 bg-[#000F26] text-[#F5F7FA]">

      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Book a Session
        </h2>

        <form
          onSubmit={handleSubmit}
          className="p-10 bg-[#071B3A] border border-[#1B3B6F] rounded-2xl grid gap-6"
        >

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="p-4 bg-[#000F26] border border-[#1B3B6F] rounded-lg focus:outline-none focus:border-[#C6A75E]"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="p-4 bg-[#000F26] border border-[#1B3B6F] rounded-lg focus:outline-none focus:border-[#C6A75E]"
          />

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
            className="p-4 bg-[#000F26] border border-[#1B3B6F] rounded-lg focus:outline-none focus:border-[#C6A75E]"
          />

          <select
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            required
            className="p-4 bg-[#000F26] border border-[#1B3B6F] rounded-lg focus:outline-none focus:border-[#C6A75E]"
          >
            <option value="">Select Event Type</option>
            <option value="Wedding">Wedding</option>
            <option value="PreWedding">Pre-Wedding</option>
            <option value="Traditional Ceremony">Traditional Ceremony</option>
            <option value="Model Shoot">Model Shoot</option>
            <option value="Event Coverage">Event Coverage</option>
            <option value="Cinematic Film">Cinematic Film</option>
          </select>

          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            placeholderText="Select Event Date"
            required
            className="p-4 w-full bg-[#000F26] border border-[#1B3B6F] rounded-lg focus:outline-none focus:border-[#C6A75E]"
            calendarClassName="bg-[#071B3A] border border-[#1B3B6F]"
          />

          <textarea
            rows="4"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your event..."
            className="p-4 bg-[#000F26] border border-[#1B3B6F] rounded-lg focus:outline-none focus:border-[#C6A75E]"
          />

          <button
            type="submit"
            className="mt-4 px-8 py-4 bg-[#C6A75E] text-black font-semibold rounded-lg hover:bg-[#b8964f] transition"
          >
            Send Booking Request
          </button>

        </form>

      </div>

    </section>
  );
}
