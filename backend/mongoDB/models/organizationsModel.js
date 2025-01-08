import mongoose from "mongoose";
import { hashPassword } from "./utils.js";
import Joi from "joi";

const organizationSchema = new mongoose.Schema(
  {
    organizationName: {
      type: String,
      required: true,
      unique: true,
      minLength: 3,
      maxLength: 50,
    },
    organizationType: {
      type: String,
      enum: ["NGO", "Blood Bank", "Hospitals"],
      required: true,
    },
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
    verified: {
      type: Boolean,
      required: true,
      default: false, // Organizations need to be verified by an admin
    },
    address: {
      area: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      zip: { type: String, required: true },
      country: { type: String, required: true, default: "Pakistan" },
    },
    phone: {
      type: String,
      required: true,
      minLength: 10,
      maxLength: 15,
    },
    services: {
      type: [String],
      default: ["Blood Collection", "Blood Donation", "Health Camps"],
      required: true,
    },
  },
  { timestamps: true }
);

// Hash password before saving
organizationSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await hashPassword(this.password);
  }
  next();
});

const validateOrganization = (organization) => {
  const Schema = Joi.object({
    organizationName: Joi.string().min(3).max(50).required().messages({
      "string.min": "Organization name must be at least 3 characters.",
      "string.max":
        "Organization name must be less than or equal to 50 characters.",
      "any.required": "Organization name is required.",
    }),
    organizationType: Joi.string()
      .valid("NGO", "Blood Bank", "Hospitals")
      .required()
      .messages({
        "any.only":
          "Organization type must be one of NGO, Blood Bank, or Hospitals.",
        "any.required": "Organization type is required.",
      }),
    email: Joi.string().email().required().messages({
      "string.email": "Invalid email format.",
      "any.required": "Email is required.",
    }),
    password: Joi.string().min(8).max(100).required().messages({
      "string.min": "Password must be at least 8 characters.",
      "string.max": "Password must be less than or equal to 100 characters.",
      "any.required": "Password is required.",
    }),
    address: Joi.object({
      area: Joi.string().required(),
      city: Joi.string().required(),
      state: Joi.string().required(),
      zip: Joi.string().required(),
      country: Joi.string().default("Pakistan"),
    }).required(),
    phone: Joi.string().min(10).max(15).required().messages({
      "string.min": "Phone number must be at least 10 characters.",
      "string.max": "Phone number must be less than or equal to 15 characters.",
      "any.required": "Phone number is required.",
    }),
    services: Joi.array()
      .items(Joi.string())
      .default(["Blood Collection", "Blood Donation", "Health Camps"])
      .required(),
  });

  return Schema.validate(organization);
};

const organizations = mongoose.model("organizations", organizationSchema);
export { organizations, validateOrganization };
