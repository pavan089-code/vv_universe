import Booking from "../models/booking.js";
import sendEmail from "../utils/sendEmail.js";


export const getBookings = async (req, res) => {
  try {

    const bookings = await Booking.find().sort({ createdAt: -1 });

    res.status(200).json(bookings);

  } catch (error) {

    console.error("Fetch bookings error:", error);

    res.status(500).json({ message: "Error fetching bookings" });

  }
};


export const createBooking = async (req, res) => {
  try {

    const booking = new Booking(req.body);

    await booking.save();

    // Send email notification
    try {
      await sendEmail(booking);
    } catch (err) {
      console.log("Email failed but booking saved");
    }

    res.status(201).json(booking);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};


export const updateBookingStatus = async (req, res) => {

  const { status } = req.body;

  const booking = await Booking.findByIdAndUpdate(
    req.params.id,
    { status },
    { new: true }
  );

  if (status === "approved") {

    await sendBookingEmail(
      booking.email,
      booking.name,
      booking.eventType,
      booking.eventDate
    );

  }

  res.json(booking);

};


export const deleteBooking = async (req, res) => {

  try {

    const booking = await Booking.findByIdAndDelete(req.params.id);

    if (!booking) {

      return res.status(404).json({ message: "Booking not found" });

    }

    res.status(200).json({ message: "Booking deleted successfully" });

  } catch (error) {

    console.error("Delete booking error:", error);

    res.status(500).json({ message: "Error deleting booking" });

  }

};
