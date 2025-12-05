import User from "../Models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// ===================== REGISTER =====================
export const registerUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Check if already exists
    const exists = await User.findOne({ email });
    if (exists)
      return res.json({ message: "User already exists" });

    // Hash password
    const hashed = await bcrypt.hash(password, 10);

    // Create user with role (default = user)
    const user = await User.create({
      name,
      email,
      password: hashed,
      role: role || "user",
    });

    res.json({
      message: "User Registered Successfully",
      user,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ===================== LOGIN =====================
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user)
      return res.json({ message: "Invalid Credentials" });

    const ok = await bcrypt.compare(password, user.password);
    if (!ok)
      return res.json({ message: "Invalid Credentials" });

    // token includes id + role
    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      message: "Login Success",
      token,
      role: user.role,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
