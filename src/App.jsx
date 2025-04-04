import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserPage from "./pages/UserPage";
import VendorPage from "./pages/VendorPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user" element={<UserPage />} />
        <Route path="/vendor" element={<VendorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
