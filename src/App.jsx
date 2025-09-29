import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { CartProvider } from "./utils/CartContext";
import "./styles/App.css";

const App = () => {
  return (
    <CartProvider>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Outlet />
        </main>
        <footer className="footer">
          <p>
            &copy; {new Date().getFullYear()} Shopping Cart. All rights
            reserved.
          </p>
        </footer>
      </div>
    </CartProvider>
  );
};

export default App;
