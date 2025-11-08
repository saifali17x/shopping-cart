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
      <div className="min-h-screen bg-cream font-inter text-chocolate">
        <Navbar />
        <main className="max-w-6xl mx-auto px-8 py-8">
          <div className="text-center py-20 relative">
            <div className="absolute top-5 left-1/2 transform -translate-x-1/2 text-9xl font-black text-coral opacity-5 pointer-events-none">
              404
            </div>
            <div className="relative z-10">
              <h1 className="text-6xl font-black text-coral mb-6">Oops!</h1>
              <h2 className="text-2xl font-semibold text-chocolate mb-4">
                Sorry, an unexpected error has occurred.
              </h2>
              <p className="text-xl text-gray-medium mb-10">
                {error.statusText || error.message || "Page not found"}
              </p>
              <Link to="/">
                <Button size="large">
                  <span className="material-symbols-outlined">home</span>
                  Go back home
                </Button>
              </Link>
            </div>
          </div>
        </main>
        <footer className="bg-chocolate text-white text-center py-8 mt-20">
          <p className="opacity-90 tracking-wider">
            &copy; {new Date().getFullYear()} Shopping Cart. All rights
            reserved.
          </p>
        </footer>
      </div>
    </CartProvider>
  );
};

export default ErrorPage;
