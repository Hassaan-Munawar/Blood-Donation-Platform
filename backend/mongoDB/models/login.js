import Joi from "joi";
import mongoose from "mongoose";

const loginUsers = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
    maxLength: 100,
  },
});

const validateLoginUser = (loginUser) => {
  const Schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).max(100).required(),
  });
  return Schema.validate(loginUser);
};

export { loginUsers, validateLoginUser };
