import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Booking() {

  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <section id="book" className="py-28 bg-[#000F26] text-[#F5F7FA]">

      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Book a Session
        </h2>

        <form className="p-10 bg-[#071B3A] border border-[#1B3B6F] rounded-2xl grid gap-6">

          <input
            type="text"
            placeholder="Full Name"
            className="p-4 bg-[#000F26] border border-[#1B3B6F] rounded-lg focus:outline-none focus:border-[#C6A75E]"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="p-4 bg-[#000F26] border border-[#1B3B6F] rounded-lg focus:outline-none focus:border-[#C6A75E]"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="p-4 bg-[#000F26] border border-[#1B3B6F] rounded-lg focus:outline-none focus:border-[#C6A75E]"
          />

          <select
            className="p-4 bg-[#000F26] border border-[#1B3B6F] rounded-lg focus:outline-none focus:border-[#C6A75E]"
          >
            <option>Select Event Type</option>
            <option>Wedding</option>
            <option>Pre-Wedding</option>
            <option>Traditional Ceremony</option>
            <option>Model Shoot</option>
            <option>Event Coverage</option>
            <option>Cinematic Film</option>
          </select>

          {/* Styled Calendar */}
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            placeholderText="Select Event Date"
            className="p-4 w-full bg-[#000F26] border border-[#1B3B6F] rounded-lg focus:outline-none focus:border-[#C6A75E]"
            calendarClassName="bg-[#071B3A] border border-[#1B3B6F]"
          />

          <textarea
            rows="4"
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