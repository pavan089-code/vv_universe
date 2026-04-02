import { useState } from "react";
import { motion } from "framer-motion";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Booking() {
  const API_URL = import.meta.env.VITE_API_URL;

  const [selectedDate, setSelectedDate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState(null);

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

    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/api/bookings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, eventDate: selectedDate })
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

    setLoading(false);
  };

  const inputStyle = `
    p-4 rounded-lg bg-black/60 border border-white/10 
    text-white placeholder-gray-400
    focus:outline-none focus:border-[#C6A75E] focus:ring-1 focus:ring-[#C6A75E]
    transition duration-300
    autofill:bg-black autofill:text-white
  `;

  return (
    <section className="relative py-28 bg-[#050A14] text-white overflow-hidden">

      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050A14] to-black opacity-90" />
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-[-150px] left-1/2 -translate-x-1/2 
        w-[700px] h-[700px] bg-[#C6A75E]/10 blur-[140px] rounded-full"
      />

      <div className="relative max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-4">
            Book Your <span className="text-[#C6A75E]">Session</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base">
            Tell me about your event — I’ll make sure your story is captured in the most meaningful way.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="relative p-10 rounded-2xl 
          bg-white/5 backdrop-blur-xl border border-white/10 
          shadow-[0_0_50px_rgba(0,0,0,0.5)] 
          grid gap-6 font-[Inter]"
        >

          {/* Name */}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onFocus={() => setFocused("name")}
            onBlur={() => setFocused(null)}
            placeholder="Full Name"
            required
            className={inputStyle}
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onFocus={() => setFocused("email")}
            onBlur={() => setFocused(null)}
            placeholder="Email Address"
            required
            className={inputStyle}
          />

          {/* Phone */}
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
            className={inputStyle}
          />

          {/* Select */}
          <select
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            required
            className={inputStyle}
          >
            <option value="">Select Event Type</option>
            <option value="Wedding">Wedding</option>
            <option value="PreWedding">Pre-Wedding</option>
            <option value="Traditional Ceremony">Traditional Ceremony</option>
            <option value="Model Shoot">Model Shoot</option>
            <option value="Event Coverage">Event Coverage</option>
            <option value="Cinematic Film">Cinematic Film</option>
          </select>

          {/* Date */}
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            placeholderText="Select Event Date"
            className="p-4 w-full rounded-lg bg-black/60 border border-white/10 text-white focus:border-[#C6A75E] focus:outline-none"
          />

          {/* Message */}
          <textarea
            rows="4"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about your event..."
            className={inputStyle}
          />

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="mt-4 px-8 py-4 bg-[#C6A75E] text-black font-semibold rounded-lg 
            hover:scale-105 hover:shadow-lg hover:shadow-[#C6A75E]/40 
            transition duration-300 disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Booking Request"}
          </button>

        </form>

      </div>
    </section>
  );
}