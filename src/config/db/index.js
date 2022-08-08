import mongoose from "mongoose";

const URL =
  "mongodb+srv://admin:Z0k3PMopnHdOEZJT@cluster0.d6p4pp0.mongodb.net/?retryWrites=true&w=majority";

export async function connect() {
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log("Connect failure!!");
  }
}
