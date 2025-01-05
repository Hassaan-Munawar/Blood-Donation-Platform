import express from "express";
import { users, validateRegisterUser } from "../mongoDB/models/register.js";

export const registerUserRouter = express.Router();

// register user get router
registerUserRouter.get("/", async (req, res) => {
  try {
    const registerUsers = await users.find();
    if (users) {
      res.status(200).json({
        status: 200,
        message: "Registers users fetch successfully",
        users: registerUsers,
      });
    }
  } catch (error) {
    console.log("🚀 ~ registerUserRouter.get ~ error:", error);
    res.status(500).json({
      status: 500,
      message: "Internal server error",
    });
  }
});

// register user post route
registerUserRouter.post("/", async (req, res) => {
  try {
    const registerUserData = req.body;
    const { error } = validateRegisterUser(registerUserData);
    if (error) {
      res.status(400).json({
        status: 400,
        message: error.details[0].message,
      });
    }

    const newRegUser = new users(registerUserData);
    await newRegUser.save();

    res.status(201).json({
      status: 201,
      message: "New user added successfully",
      newRegUser: newRegUser,
    });
  } catch (error) {
    console.log("🚀 ~ registerUserRouter.post ~ error:", error);
    res.status(500).json({
      status: 500,
      message: "Internal server error",
    });
  }
});
