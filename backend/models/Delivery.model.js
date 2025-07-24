import mongoose from "mongoose";

const deliverySchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    orderDate: {
      type: Date,
      required: true,
    },
    driver: {
      name: {
        type: String,
        required: true,
      },
      employeeNumber: {
        type: String,
        required: true,
      },
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt
  }
);

const Delivery = mongoose.model("Delivery", deliverySchema);
export default Delivery;
