import express from "express";
import { validateLoginUser } from "../mongoDB/models/login.js";
import { users } from "../mongoDB/models/register.js";

export const loginUserRouter = express.Router();

loginUserRouter.post("/", async (req, res) => {
  try {
    const loginUserData = req.body;
    const { error } = validateLoginUser(loginUserData);
    if (error) {
      return res.status(400).json({
        status: 400,
        message: error.details[0].message,
      });
    }
    const { email, password } = loginUserData;
    const user = await users.findOne({ email, password });
    if (user) {
      console.log("🚀 ~ loginUserRouter.post ~ user:", user);
      return res.status(200).json({
        status: 200,
        message: "log in successfull",
        user: user,
      });
    }
    return res.status(401).json({
      status: 401,
      message: "Invalid credientials",
    });
  } catch (error) {
    console.log("🚀 ~ loginUserRouter.post ~ error:", error);
    return res.status(500).json({
      status: 500,
      message: "Internal server error",
    });
  }
});
