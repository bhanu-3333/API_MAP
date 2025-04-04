import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import axios from "axios";

const mapContainerStyle = { width: "100%", height: "500px" };

const GoogleMapComponent = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/vendors")
      .then((response) => setVendors(response.data))
      .catch((error) => console.error("Error fetching vendors:", error));

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        () => alert("Geolocation not supported!")
      );
    }
  }, []);

  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={userLocation || { lat: 20.5937, lng: 78.9629 }}
        zoom={14}
      >
        {userLocation && <Marker position={userLocation} label="You" />}
        {vendors.map((vendor) => (
          <Marker key={vendor.id} position={{ lat: vendor.lat, lng: vendor.lng }} label={vendor.name} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
