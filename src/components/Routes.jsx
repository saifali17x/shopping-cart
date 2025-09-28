import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import ShopPage from "./ShopPage";
import CartPage from "./Cartpage";
import ErrorPage from "./ErrorPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRoutes;
