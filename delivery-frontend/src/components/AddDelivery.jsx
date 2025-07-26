import React, { useState } from "react";
import axios from "axios";

function AddDelivery({ onAdded }) {
  const [form, setForm] = useState({
    customerName: "",
    address: "",
    status: "Pending",
    orderDate: "",
    driverName: "",
    employeeNumber: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const deliveryData = {
      customerName: form.customerName,
      address: form.address,
      status: form.status,
      orderDate: form.orderDate,
      driver: {
        name: form.driverName,
        employeeNumber: form.employeeNumber
      }
    };

    try {
      await axios.post("http://localhost:5000/api/deliveries", deliveryData);
      alert("Delivery added!");
      onAdded(); // Refresh list
      setForm({
        customerName: "",
        address: "",
        status: "Pending",
        orderDate: "",
        driverName: "",
        employeeNumber: ""
      });
    } catch (error) {
      console.error("Error adding delivery:", error);
      alert("Failed to add delivery.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Delivery</h2>

      <input
        type="text"
        name="customerName"
        placeholder="Customer Name"
        value={form.customerName}
        onChange={handleChange}
        required
      /><br />

      <input
        type="text"
        name="address"
        placeholder="Address"
        value={form.address}
        onChange={handleChange}
        required
      /><br />

      <select name="status" value={form.status} onChange={handleChange}>
        <option value="Pending">Pending</option>
        <option value="Shipped">Shipped</option>
        <option value="Delivered">Delivered</option>
      </select><br />

      <input
        type="date"
        name="orderDate"
        value={form.orderDate}
        onChange={handleChange}
        required
      /><br />

      <input
        type="text"
        name="driverName"
        placeholder="Driver Name"
        value={form.driverName}
        onChange={handleChange}
        required
      /><br />

      <input
        type="text"
        name="employeeNumber"
        placeholder="Driver Employee #"
        value={form.employeeNumber}
        onChange={handleChange}
        required
      /><br />

      <button type="submit">Add Delivery</button>
    </form>
  );
}

export default AddDelivery;

