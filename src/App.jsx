import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { CartProvider } from "./utils/CartContext";
import "./styles/App.css";

const App = () => {
  return (
    <CartProvider>
      <div
        className="min-h-screen font-inter"
        style={{
          backgroundColor: "var(--cream)",
          color: "var(--chocolate)",
        }}
      >
        <Navbar />
        <main className="max-w-6xl mx-auto px-8 py-8">
          <Outlet />
        </main>
        <footer
          className="text-white text-center py-8 mt-20"
          style={{ backgroundColor: "var(--chocolate)" }}
        >
          <p className="opacity-90 tracking-wider">
            &copy; {new Date().getFullYear()} Shopping Cart. All rights
            reserved.
          </p>
        </footer>
      </div>
    </CartProvider>
  );
};

export default App;
