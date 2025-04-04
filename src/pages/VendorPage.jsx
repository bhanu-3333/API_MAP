import React, { useState } from "react";
import axios from "axios";

const VendorPage = () => {
  const [name, setName] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/vendors/add", { name, lat, lng });
    alert("Vendor location added!");
  };

  return (
    <div>
      <h2>Add Vendor Shop Location</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Shop Name" onChange={(e) => setName(e.target.value)} required />
        <input type="number" step="0.0001" placeholder="Latitude" onChange={(e) => setLat(e.target.value)} required />
        <input type="number" step="0.0001" placeholder="Longitude" onChange={(e) => setLng(e.target.value)} required />
        <button type="submit">Save Location</button>
      </form>
    </div>
  );
};

export default VendorPage;
