import React from "react";
import Navbar from "./components/Navbar";
import AppRoutes from "./components/Routes";
import { CartProvider } from "./utils/CartContext";
import "./styles/App.css";

const App = () => {
  return (
    <CartProvider>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <AppRoutes />
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
