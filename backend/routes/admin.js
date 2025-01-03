import express from "express";

const app = express();

app.use(express.json());

try {
  app.get("/", (req, res) => res.send("blood Donation"));

  app.listen(PORT, () => console.log("backend is running", PORT));
} catch (err) {
  console.log("🚀 ~ err:", err);
}
