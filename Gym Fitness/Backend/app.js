import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import indexRouter from "./routes/index.js";
import usersRouter from "./routes/users.js";

dotenv.config();

const app = express();
app.use(express.json());

// MongoDB Connect
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Error:", err));

// Routes
app.use("/", indexRouter);
app.use("/users", usersRouter);

export default app;
