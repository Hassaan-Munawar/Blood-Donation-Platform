import express from "express";
import "dotenv/config.js";
import { mongoDBConnect } from "./mongoDB/connectDB.js";
import { donorRouter } from "./routes/donors.js";
import { receiverRouter } from "./routes/receivers.js";

const app = express();
app.use(express.json());

const PORT = process.env.PORT_LOCAL;

try {
  app.get("/", (req, res) => res.send("Blood Bank App"));
  app.listen(PORT, console.log("Backend is on port=>", PORT));
  mongoDBConnect();
  app.use("/donors", donorRouter);
  app.use("/receivers", receiverRouter);
} catch (error) {
  console.log("🚀 ~ error:", error);
}
