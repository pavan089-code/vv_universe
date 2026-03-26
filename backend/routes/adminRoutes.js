import express from "express";

const router = express.Router();

router.post("/login", (req, res) => {

  const { email, password } = req.body;

  if (email === "admin@vv.com" && password === "123456") {
    return res.json({ success: true });
  }

  res.status(401).json({ message: "Invalid credentials" });

});

export default router;