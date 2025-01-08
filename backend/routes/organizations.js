import express from "express";
import {
  organizations,
  validateOrganization,
} from "../mongoDB/models/organizationsModel.js";

export const organizationRoute = express.Router();

// GET request
organizationRoute.get("/", async (req, res) => {
  try {
    const registeredOrganizations = await organizations.find();
    if (!registeredOrganizations.length) {
      return res.status(404).json({
        status: 404,
        message: "No organization found",
      });
    }
    res.status(200).json({
      status: 200,
      message: "Organizations fetched successfully",
      organizations: registeredOrganizations,
    });
  } catch (error) {
    console.log("🚀 ~ organizationRoute.get ~ error:", error);
    res.status(500).json({
      status: 500,
      message: "Internal server error",
      error: error.message,
    });
  }
});

// POST request
organizationRoute.post("/", async (req, res) => {
  try {
    const organizationData = req.body;
    const { error } = validateOrganization(organizationData);
    if (error) {
      return res.status(400).json({
        status: 400,
        message: error.details[0].message,
      });
    }
    const newOrganization = new organizations(organizationData);
    await newOrganization.save();

    res.status(201).json({
      status: 201,
      message: "Organization added successfully",
      organization: newOrganization,
    });
  } catch (error) {
    console.log("🚀 ~ organizationRoute.post ~ error:", error);
    res.status(500).json({
      status: 500,
      message: "Internal server error",
      error: error.message,
    });
  }
});

// PUT request
organizationRoute.put("/:id", async (req, res) => {
  try {
    const organizationData = req.body;
    const { id } = req.params;

    const { error } = validateOrganization(organizationData);
    if (error) {
      return res.status(400).json({
        status: 400,
        message: error.details[0].message,
      });
    }
    const updatedOrganization = await organizations.findByIdAndUpdate(
      id,
      organizationData,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updatedOrganization) {
      return res.status(404).json({
        status: 404,
        message: "Organization not found",
      });
    }
    res.status(200).json({
      status: 200,
      message: "Organization updated successfully",
      updatedOrganization: updatedOrganization,
    });
  } catch (error) {
    console.log("🚀 ~ organizationRoute.put ~ error:", error);
    res.status(500).json({
      status: 500,
      message: "Internal server error",
      error: error.message,
    });
  }
});

// DELETE request
organizationRoute.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedOrganization = await organizations.findByIdAndDelete(id);
    if (!deletedOrganization) {
      return res.status(404).json({
        status: 404,
        message: "Organization not found",
      });
    }
    res.status(200).json({
      status: 200,
      message: "Organization deleted successfully",
    });
  } catch (error) {
    console.log("🚀 ~ organizationRoute.delete ~ error:", error);
    res.status(500).json({
      status: 500,
      message: "Internal server error",
      error: error.message,
    });
  }
});
