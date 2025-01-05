import express from "express";
import Joi from "joi";
import mongoose from "mongoose";
import { hashPassword } from "./utils.js";
export const registerUser = new mongoose.Schema({
  UserName: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 50,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
    maxLength: 100,
  },
  phone: {
    type: String,
    required: true,
    minLength: 10,
    maxLength: 15,
  },
});

// Hash password before saving
registerUser.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await hashPassword(this.password);
  }
  next();
});

const validateRegisterUser = (registerUser) => {
  const Schema = Joi.object({
    UserName: Joi.string().min(3).max(50).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).max(100).required(),
    phone: Joi.string().min(10).max(15).required(),
  });
  return Schema.validate(registerUser);
};
const users = mongoose.model("users", registerUser);
export { validateRegisterUser, users };
