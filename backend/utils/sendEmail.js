import nodemailer from "nodemailer";

const sendEmail = async (booking) => {

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: "New Booking Request - VV Productions",

    html: `
      <h2>New Booking Request</h2>

      <p><strong>Name:</strong> ${booking.name}</p>
      <p><strong>Email:</strong> ${booking.email}</p>
      <p><strong>Phone:</strong> ${booking.phone}</p>
      <p><strong>Event:</strong> ${booking.eventType}</p>
      <p><strong>Date:</strong> ${booking.date}</p>
    `
  };

  await transporter.sendMail(mailOptions);

};

export default sendEmail;