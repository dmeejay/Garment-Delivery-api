// src/App.js
import React, { useState } from "react";
import DeliveryList from "./components/DeliveryList";
import AddDelivery from "./components/AddDelivery";

function App() {
  const [refresh, setRefresh] = useState(false);

  const handleAdded = () => setRefresh(!refresh);

  return (
    <div className="App">
      <h1>Delivery Management System</h1>
      <AddDelivery onAdded={handleAdded} />
      <DeliveryList key={refresh} />
    </div>
  );
}

export default App;
