import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import authRouter from "./routes/auth.js";

import contactRouter from "./routes/contact.js"; // NEW



dotenv.config();
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRouter);



// Routes
app.use("/api/contact", contactRouter);  // NEW

// MongoDB Connect
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Error:", err));

// Server
app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);


// import express from "express";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import cors from "cors";

// import authRouter from "./routes/auth.js";
// import workoutRouter from "./routes/workout.js";  
// import contactRouter from "./routes/contact.js";
// import nutritionRouter from "./routes/nutrition.js";

// dotenv.config();
// const app = express();

// app.use(cors({ origin: "http://localhost:5173", methods: ["GET", "POST", "DELETE"], credentials: true }));
// app.use(express.json());

// // Routes
// app.use("/api/auth", authRouter);
// app.use("/api/workout", workoutRouter);
// app.use("/api/contact", contactRouter);
// app.use("/api/nutrition", nutritionRouter);

// // MongoDB Connect
// mongoose.connect(process.env.MONGO_URL)
//   .then(() => console.log("MongoDB Connected"))
//   .catch((err) => console.log("MongoDB Error:", err));

// // Server
// app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
