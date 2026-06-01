import mongoose from "mongoose";

const jamRegistrationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    instagram: {
      type: String,
      trim: true,
    },

    screenshot: {
      type: String, // Firebase/Cloudinary URL
      required: true,
    },

    paymentStatus: {
      type: String,
      enum: ["pending", "verified", "rejected"],
      default: "pending",
    },

    verified: {
      type: Boolean,
      default: false,
    },

    registrationToken: {
      type: String,
      default: null,
    },

    verifiedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(
  "JamRegistration",
  jamRegistrationSchema
);