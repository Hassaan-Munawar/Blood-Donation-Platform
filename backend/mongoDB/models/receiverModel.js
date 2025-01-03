import express from "express";
import Joi from "joi";
import mongoose from "mongoose";

// Define the Receiver schema
const receiverSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 100,
  },
  age: {
    type: Number,
    required: true,
    min: 0, // No minimum age requirement for receivers
    max: 120,
  },
  bloodGroup: {
    type: String,
    required: true,
    enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"], // Valid blood groups
  },
  phone: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 15,
  },
  address: {
    area: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true },
  },
  urgent: {
    type: Boolean,
    required: true,
    default: false, // Whether the request is urgent
  },
  requirementDetails: {
    quantityRequired: {
      type: Number,
      required: true,
      min: 1, // Minimum one unit of blood
    },
    requiredDate: {
      type: Date,
      required: true, // Date when blood is needed
    },
    reason: {
      type: String,
      required: true, // Medical reason for blood requirement
      minlength: 10,
      maxlength: 500,
    },
  },
  medicalHistory: {
    type: [String], // Array of medical conditions or reasons
    default: [],
  },
  verified: {
    type: Boolean,
    required: true,
    default: false, // Whether the receiver's account is verified
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically track account creation
  },
});

// for get delete post
const validateReceiver = (receiver) => {
  const schema = Joi.object({
    userName: Joi.string().min(3).max(50).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).max(100).required(),
    age: Joi.number().min(0).max(120).required(),
    bloodGroup: Joi.string()
      .valid("A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-")
      .required(),
    phone: Joi.string().min(10).max(15).required(),
    address: Joi.object({
      area: Joi.string().required(),
      city: Joi.string().required(),
      state: Joi.string().required(),
      zip: Joi.string().required(),
    }),
    urgent: Joi.boolean().required(),
    requirementDetails: Joi.object({
      quantityRequired: Joi.number().min(1).required(),
      requiredDate: Joi.date().required(),
      reason: Joi.string().min(10).max(500).required(),
    }).required(),
    medicalHistory: Joi.array().items(Joi.string()),
    verified: Joi.boolean(),
  });

  return schema.validate(receiver);
};

// for put
const validateReceiverUpdate = (receiver) => {
  const schema = Joi.object({
    userName: Joi.string().min(3).max(50).optional(),
    email: Joi.string().email().optional(),
    password: Joi.string().min(8).max(100).optional(),
    age: Joi.number().min(0).max(120).optional(),
    bloodGroup: Joi.string()
      .valid("A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-")
      .optional(),
    phone: Joi.string().min(10).max(15).optional(),
    address: Joi.object({
      area: Joi.string().optional(),
      city: Joi.string().optional(),
      state: Joi.string().optional(),
      zip: Joi.string().optional(),
    }),
    urgent: Joi.boolean().optional(),
    requirementDetails: Joi.object({
      quantityRequired: Joi.number().min(1).optional(),
      requiredDate: Joi.date().optional(),
      reason: Joi.string().min(10).max(500).optional(),
    }).optional(),
    medicalHistory: Joi.array().items(Joi.string()),
    verified: Joi.boolean(),
  });

  return schema.validate(receiver);
};

const receiver = mongoose.model("receiver", receiverSchema);
export { receiver, validateReceiver, validateReceiverUpdate };
