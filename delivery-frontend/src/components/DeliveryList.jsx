import React, { useEffect, useState } from "react";
import axios from "axios";

function DeliveryList() {
  const [deliveries, setDeliveries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:5000/api/deliveries")
      .then(res => {
        setDeliveries(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching deliveries:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading deliveries...</p>;

  if (deliveries.length === 0) return <p>No deliveries found.</p>;

  return (
    <div>
      <h2>Deliveries</h2>
      <ul>
        {deliveries.map(delivery => (
          <li key={delivery._id} style={{ marginBottom: "1.5rem" }}>
            <strong>Customer:</strong> {delivery.customerName}<br />
            <strong>Address:</strong> {delivery.address}<br />
            <strong>Status:</strong> {delivery.status}<br />
            <strong>Order Date:</strong> {new Date(delivery.orderDate).toLocaleDateString()}<br />
            {delivery.driver ? (
              <>
                <strong>Driver:</strong> {delivery.driver.name} (Employee #: {delivery.driver.employeeNumber})
              </>
            ) : (
              <em>No driver assigned</em>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DeliveryList;
