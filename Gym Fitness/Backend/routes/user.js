import express from "express";
import User from "../Models/User.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

// ADMIN — Get all users
router.get("/all", auth, async (req, res) => {
  try {
    // Only admin ko access
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Access denied. Admin only." });
    }

    const users = await User.find().select("-password");
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
