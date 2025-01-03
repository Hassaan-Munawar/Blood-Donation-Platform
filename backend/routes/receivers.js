import express from "express";
import { receiver, validateReceiver } from "../mongoDB/models/receiverModel.js";
import { status } from "init";
import { json } from "stream/consumers";

export const receiverRouter = express.Router();

// post
receiverRouter.post("/", async (req, res) => {
  try {
    const receiverData = req.body;
    const { error } = validateReceiver(receiverData);
    if (error) {
      res.status(400).json({
        status: 400,
        error: error.details[0].message,
      });
    }

    const newReceiver = new receiver(receiverData);
    await newReceiver.save();
    res.status(201).json({
      status: 201,
      message: "Receiver added successfully",
      newReceiver: newReceiver,
    });
  } catch (error) {
    console.log("🚀 ~ receiverRouter.post ~ error:", error);
    res.status(500).json({
      status: 500,
      message: "Internal server error",
    });
  }
});

//get
receiverRouter.get("/", async (req, res) => {
  try {
    const receivers = await receiver.find();
    res.status(200).json({
      status: 200,
      message: "receivers fetch successfully",
      receivers: receivers,
    });
  } catch (error) {
    console.log("🚀 ~ receiverRouter.get ~ error:", error);
    res.status(500).json({
      status: 500,
      message: "Internal server error",
    });
  }
});

//put

receiverRouter.put("/:id", async (req, res) => {
  try {
    const receiverID = req.params.id;
    const receiverData = req.body;

    const { error } = validateReceiver(receiverData);
    if (error) {
      res.status(400).json({
        status: 400,
        message: error.details[0].message,
      });
    }
    const updatedReceiver = await receiver.findByIdAndUpdate(
      receiverID,
      receiverData,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updatedReceiver) {
      res.status(404).json({
        status: 404,
        message: "Receiver not found",
      });
    }

    res.status(200).json({
      status: 200,
      message: "receiver updated successfully",
      updatedReceiver: updatedReceiver,
    });
  } catch (error) {
    console.log("🚀 ~ receiverRouter.put ~ error:", error);
    res.status(500).json({
      status: 500,
      message: "Internal server error",
    });
  }
});

// delte
receiverRouter.delete("/:id", async (req, res) => {
  try {
    const receiverID = req.params.id;
    const deletedReceiver = await receiver.findByIdAndDelete(receiverID);
    if (!deletedReceiver) {
      res.status(404).json({
        status: 404,
        message: "Receiver not found",
      });
      res.status(200).json({
        status: 200,
        message: "receiver delted successfully",
      });
    }
  } catch (error) {
    console.log("🚀 ~ receiverRouter.delete ~ error:", error);
    res.status(500),
      json({
        status: 500,
        message: "Internal server error",
      });
  }
});
