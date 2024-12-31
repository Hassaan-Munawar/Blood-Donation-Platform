import mongoose from "mongoose";
import "dotenv/config.js";

const PORT = process.env.MONGODB_URI;

export async function mongoDBConnect() {
  await mongoose
    .connect(PORT)
    .then(() => console.log("mongoDB is Connected"))
    .catch((error) => console.log(error.message));
}
