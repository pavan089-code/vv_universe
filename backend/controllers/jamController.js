import JamRegistration from "../models/JamRegistration.js";

export const registerJam = async (req, res) => {
  try {
    const { name, phone, instagram, utr, screenshot } = req.body;

    const existing = await JamRegistration.findOne({ utr });

    if (existing) {
      return res.status(400).json({
        success: false,
        message: "UTR already used",
      });
    }

    const registration = await JamRegistration.create({
      name,
      phone,
      instagram,
      utr,
      screenshot,
      paymentStatus: "pending",
    });

    res.status(201).json({
      success: true,
      message: "Registration submitted",
      registration,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export const getRegistrations = async (req, res) => {
  try {
    const data = await JamRegistration.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    console.error("Error fetching Jam registrations:", error);

    res.status(500).json({
      success: false,
      message: "Unable to fetch Jam registrations",
    });
  }
};

export const updateRegistrationStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { paymentStatus } = req.body;

    if (!["pending", "verified", "rejected"].includes(paymentStatus)) {
      return res.status(400).json({
        success: false,
        message: "Invalid payment status",
      });
    }

    const registration = await JamRegistration.findByIdAndUpdate(
      id,
      {
        paymentStatus,
        verified: paymentStatus === "verified",
      },
      { new: true },
    );

    if (!registration) {
      return res.status(404).json({
        success: false,
        message: "Registration not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Payment status updated",
      registration,
    });
  } catch (error) {
    console.error("Error updating Jam registration status:", error);

    res.status(500).json({
      success: false,
      message: "Unable to update payment status",
    });
  }
};
