import JamRegistration from "../models/JamRegistration.js";

import {
  sendVerificationEmail,
  sendRejectionEmail,
} from "../services/emailServices.js";

export const registerJam = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      instagram,
    } = req.body;

    const screenshot = req.file?.path;

    if (!screenshot) {
      return res.status(400).json({
        success: false,
        message: "Payment screenshot is required",
      });
    }

    const existing = await JamRegistration.findOne({
      email,
      paymentStatus: {
        $in: ["pending", "verified"],
      },
    });

    if (existing) {
      return res.status(400).json({
        success: false,
        message:
          "You already have an active registration",
      });
    }

    const registration =
      await JamRegistration.create({
        name,
        email,
        phone,
        instagram,
        screenshot,
        paymentStatus: "pending",
      });

    res.status(201).json({
      success: true,
      message:
        "Registration submitted successfully. Awaiting verification.",
      registration,
    });
  } catch (error) {
    console.error(
      "Registration Error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export const getRegistrations = async (
  req,
  res
) => {
  try {
    const data =
      await JamRegistration.find().sort({
        createdAt: -1,
      });

    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    console.error(
      "Error fetching Jam registrations:",
      error
    );

    res.status(500).json({
      success: false,
      message:
        "Unable to fetch Jam registrations",
    });
  }
};

export const updateRegistrationStatus = async (
  req,
  res
) => {
  try {
    const { id } = req.params;
    const { paymentStatus } = req.body;

    if (
      ![
        "pending",
        "verified",
        "rejected",
      ].includes(paymentStatus)
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Invalid payment status",
      });
    }

    const registration =
      await JamRegistration.findById(id);

    if (!registration) {
      return res.status(404).json({
        success: false,
        message:
          "Registration not found",
      });
    }

    registration.paymentStatus =
      paymentStatus;

    registration.verified =
      paymentStatus === "verified";

    if (
      paymentStatus === "verified"
    ) {
      if (
        !registration.registrationToken
      ) {
        registration.registrationToken =
          `VVJAM-${Math.floor(
            100000 + Math.random() * 900000
          )}`;
      }

      registration.verifiedAt =
        new Date();
    }

    await registration.save();

    try {
      if (
        paymentStatus === "verified"
      ) {
        console.log(
          "Sending verification email to:",
          registration.email
        );
        await sendVerificationEmail(
          registration.email,
          registration.name,
          registration.registrationToken
        );
      }

      if (
        paymentStatus === "rejected"
      ) {
        await sendRejectionEmail(
          registration.email,
          registration.name
        );
      }
    } catch (emailError) {
      console.error(
        "Email Error:",
        emailError
      );
    }

    res.status(200).json({
      success: true,
      message:
        "Payment status updated successfully",
      registration,
    });
  } catch (error) {
    console.error(
      "Error updating Jam registration status:",
      error
    );

    res.status(500).json({
      success: false,
      message:
        "Unable to update payment status",
    });
  }
};