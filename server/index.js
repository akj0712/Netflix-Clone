import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import movieRoute from "./routes/movies.js";
import listRoute from "./routes/lists.js";

const app = express();

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("database connected.");
  } catch (err) {
    console.log(err);
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("database disconnected.");
});

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);

app.listen(process.env.PORT || 5555, () => {
  connect();
  console.log("server is running.");
});
