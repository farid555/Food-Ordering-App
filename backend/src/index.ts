import express, { Request, Response } from "express";
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";
import myUserRoute from "./routes/MyUserRoute";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(() => {
  console.log("Connected to MongoDB...");
});

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/my/user", myUserRoute);

app.listen(7002, () => {
  console.log("listening on http://localhost:7002");
});
