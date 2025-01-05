import express from "express";
import { loginUsers, validateLoginUser } from "../mongoDB/models/login.js";
import { users } from "../mongoDB/models/register.js";
import { status } from "init";

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
    const registerUsers = await users.find();
    const user = registerUsers.find((user) => {
      user.email === email && user.password === password;
      return user;
    });
    if (user) {
      console.log("user mil gya =>", user);
      return res.status(200).json({
        status: 200,
        message: "logged in successfull",
        user: user,
      });
    }
    if (!user.email)
      return res.status(404).json({
        status: 404,
        message: "User not Found",
      });
    if (!user)
      return res.status(401).json({
        status: 401,
        message: "Invalid cradientials",
      });
  } catch (error) {
    console.log("🚀 ~ loginUserRouter.post ~ error:", error);
    return res.status(500).json({
      status: 500,
      message: "Internal server error",
    });
  }
});
