import express from "express";
import {
  Donor,
  validateDonor,
  validateDonorUpdate,
} from "../mongoDB/models/donorModel.js";

export const donorRouter = express.Router();

// post req
donorRouter.post("/", async (req, res) => {
  try {
    const donorData = req.body;
    const { error } = validateDonor(donorData);
    if (error) {
      return res.status(400).json({
        status: 400,
        error: error.details[0].message,
      });
    }

    const newDonor = new Donor(donorData);
    await newDonor.save();

    res.status(201).json({
      status: 201,
      message: "Donor data saved successfully",
      donor: newDonor,
    });
  } catch (error) {
    console.log("🚀 ~ donorRouter.post ~ error:", error);
    res.status(500).json({
      status: 500,
      message: "Internal server error",
    });
  }
});

// get req
donorRouter.get("/", async (req, res) => {
  try {
    const donors = await Donor.find();
    res.status(200).json({
      status: 200,
      message: "Donor data fetched successfully",
      donors: donors,
    });
  } catch (error) {
    console.log("🚀 ~ donorRouter.get ~ error:", error);
    res.status(500).json({
      status: 500,
      message: "Internal server error",
    });
  }
});

// update req
donorRouter.put("/:id", async (req, res) => {
  try {
    const donorID = req.params.id;
    const updatedData = req.body;

    const { error } = validateDonorUpdate(updatedData);
    if (error) {
      return res.status(400).json({
        status: 400,
        message: error.details[0].message,
      });
    }

    const updatedDonor = await Donor.findByIdAndUpdate(donorID, updatedData, {
      new: true, // Returns the updated document
      runValidators: true, // Validates the updated document against schema
    });

    if (!updatedDonor) {
      return res.status(404).json({
        status: 404,
        message: "Donor not found",
      });
    }

    res.status(200).json({
      status: 200,
      message: "Donor data updated successfully",
      donor: updatedDonor,
    });
  } catch (error) {
    console.log("🚀 ~ donorRouter.put ~ error:", error);
    res.status(500).json({
      status: 500,
      message: "Internal Server Error",
    });
  }
});

// delete req
donorRouter.delete("/:id", async (req, res) => {
  try {
    const donorID = req.params.id;
    const deletedDonor = await Donor.findByIdAndDelete(donorID);
    if (!deletedDonor) {
      return res.status(404).json({
        status: 404,
        message: "Donor not found",
      });
    }

    res.status(200).json({
      status: 200,
      message: "Donor deleted successfully",
      donor: deletedDonor,
    });
  } catch (error) {
    console.log("🚀 ~ donorRouter.delete ~ error:", error);
    res.status(500).json({
      status: 500,
      message: "Internal server error",
    });
  }
});
