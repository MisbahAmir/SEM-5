import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.json({ message: "No token provided" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;

    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid Token" });
  }
};

// import jwt from "jsonwebtoken";
// import User from "../Models/User.js";

// export const auth = async (req, res, next) => {
//   try {
//     const token = req.header("Authorization")?.replace("Bearer ", "");
//     if (!token) {
//       return res.status(401).json({ message: "No token provided" });
//     }

//     // JWT verify
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     // Find user
//     const user = await User.findById(decoded.id);
//     if (!user) {
//       return res.status(401).json({ message: "User not found" });
//     }

//     req.user = user; // ✅ Set user for controller
//     next();
//   } catch (err) {
//     res.status(401).json({ message: "Unauthorized: " + err.message });
//   }
// };





// import jwt from "jsonwebtoken";
// import User from "../Models/usermodel.js";

// export const auth = async (req, res, next) => {
//   let token = req.headers.authorization;

//   if (!token) return res.status(400).json({ message: "Token is Required" });

//   try {
//     if (token.startsWith("Bearer")) token = token.slice(7).trim();

//     const verifyUser = jwt.verify(token, process.env.JWT_SECRET);
//     const user = await User.findById(verifyUser.userId).select("-password");

//     if (!user) return res.status(400).json({ message: "User not found" });

//     req.user = user;
//     next();
//   } catch (err) {
//     return res.status(400).json({ message: "Invalid or expired Token" });
//   }
// };
