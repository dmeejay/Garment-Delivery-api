// backend/controllers/delivery.controller.js
import Delivery from "../models/delivery.model.js";

export const getDeliveries = async (req, res) => {
  try {
    const deliveries = await Delivery.find();
    res.status(200).json(deliveries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createDelivery = async (req, res) => {
  const { customerName, address, status, orderDate,driver  } = req.body;

  if (!customerName || !address || !status || !orderDate||!driver?.name || !driver?.employeeNumber) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const delivery = new Delivery({ customerName, address, status, orderDate,driver, });
    await delivery.save();
    res.status(201).json({ success: true, data: delivery });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};
export const updateDeliveryStatus = async (req, res) => {
  const { id } = req.params;
  const updates = req.body; // ✅ Accept all fields

  try {
    const delivery = await Delivery.findByIdAndUpdate(
      id,
      updates,            // ✅ Apply all updates
      { new: true }        // Return the updated document
    );

    if (!delivery) {
      return res.status(404).json({ message: "Delivery not found" });
    }

    res.status(200).json(delivery);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteDelivery = async (req, res) => {
  const { id } = req.params;

  try {
    const delivery = await Delivery.findByIdAndDelete(id);

    if (!delivery) {
      return res.status(404).json({ message: "Delivery not found" });
    }

    res.status(200).json({ message: "Delivery deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
