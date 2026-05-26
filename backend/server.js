import "dotenv/config";

import express from "express";
import cors from "cors";

import connectDB from "./config/db.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import portfolioRoutes from "./routes/portfolioRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";
import jamRoutes from "./routes/jamRoutes.js";

const app = express();

// connect to database
connectDB();

// middleware
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://www.vvproductions.in",
    "https://vvproductions.in"
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));
app.use(express.json());

app.use("/api/admin", adminRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/portfolio", portfolioRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/jam", jamRoutes);

// test route
app.get("/", (req, res) => {
  res.send("VV Productions Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
