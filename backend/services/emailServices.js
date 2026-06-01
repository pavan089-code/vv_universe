import { Resend } from "resend";

const resend = new Resend(
  process.env.RESEND_API_KEY
);

export const sendVerificationEmail = async (
  email,
  name,
  token
) => {
  const result = await resend.emails.send({
   from: "VV Productions <events@vvproductions.in>",
    to: email,
    subject: "Jam Session Registration Confirmed",

    html: `
      <h2>Hello ${name},</h2>

      <p>Your payment has been verified.</p>

      <p>
        Your registration for VV Productions
        Jam Session has been confirmed.
      </p>

      <h3>Registration Token</h3>

      <p><strong>${token}</strong></p>

      <p>Please keep this token safe.</p>

      <p>Team VV Productions</p>
    `,
  });

  console.log("EMAIL RESULT:", result);

  return result;
};

export const sendRejectionEmail = async (
  email,
  name
) => {
  const result = await resend.emails.send({
   from: "VV Productions <events@vvproductions.in>",
    to: email,
    subject: "Jam Session Registration Update",

    html: `
      <h2>Hello ${name},</h2>

      <p>
        We could not verify your payment screenshot.
      </p>

      <p>
        Please upload a valid screenshot and try again.
      </p>

      <p>Team VV Productions</p>
    `,
  });

  console.log("EMAIL RESULT:", result);

  return result;
};