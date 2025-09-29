import React from "react";
import { Link, useRouteError } from "react-router-dom";
import Button from "./Button";
import Navbar from "./Navbar";
import { CartProvider } from "../utils/CartContext";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <CartProvider>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <div className="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p className="error-message">
              {error.statusText || error.message || "Page not found"}
            </p>
            <Link to="/">
              <Button>Go back home</Button>
            </Link>
          </div>
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

export default ErrorPage;
