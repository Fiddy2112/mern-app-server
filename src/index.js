import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import posts from "./routes/posts.js";
import { connect } from "./config/db/index.js";

// import mongoose from "mongoose";

// const URL =
//   "mongodb+srv://admin:Z0k3PMopnHdOEZJT@cluster0.d6p4pp0.mongodb.net/?retryWrites=true&w=majority";

const app = express();

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.use(cors());

app.use("/posts", posts);

// connect to mongoDB
connect();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
