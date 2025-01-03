import mongoose from "mongoose";
import Joi from "joi";

// Define the Donor schema
const donorSchema = new mongoose.Schema({
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
    min: 18,
    max: 65, // Standard blood donation age range
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
  availability: {
    type: Boolean,
    required: true,
    default: true, // Whether the donor is available for donation
  },
  lastDonationDate: {
    type: Date,
    default: null, // To calculate eligibility based on donation frequency
  },
  medicalConditions: {
    type: [String], // Array of medical conditions, if any
    default: [],
  },
  verified: {
    type: Boolean,
    required: true,
    default: false, // Whether the donor's account is verified
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically track account creation
  },
});

// Joi validation schema
const validateDonor = (donor) => {
  const schema = Joi.object({
    userName: Joi.string().min(3).max(50).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).max(100).required(),
    age: Joi.number().min(18).max(65).required(),
    bloodGroup: Joi.string()
      .valid("A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-")
      .required(),
    phone: Joi.string().min(10).max(15).required(),
    address: Joi.object({
      area: Joi.string().required(),
      city: Joi.string().required(),
      state: Joi.string().required(),
      zip: Joi.string().required(),
    }).required(),
    availability: Joi.boolean().required(),
    lastDonationDate: Joi.date().allow(null),
    medicalConditions: Joi.array().items(Joi.string()),
    verified: Joi.boolean(),
  });

  return schema.validate(donor);
};

// Export the model and validation function
const Donor = mongoose.model("donor", donorSchema);

export { Donor, validateDonor };
