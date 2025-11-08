import React from "react";
import { useCart } from "../utils/CartContext";
import Button from "./Button";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { items, totalAmount, addItem, removeItem, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="text-center py-20 bg-mint rounded-3xl shadow-warm relative">
        <div className="absolute inset-5 border-2 border-dashed border-coral border-opacity-20 rounded-2xl pointer-events-none"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-6 text-chocolate">
            Your Shopping Cart
          </h1>
          <p className="text-xl text-gray-medium mb-10">Your cart is empty.</p>
          <Link to="/shop">
            <Button variant="accent" size="large">
              <span className="material-symbols-outlined">shopping_bag</span>
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-4xl font-bold mb-10 text-chocolate relative inline-block pb-4">
        Your Shopping Cart
        <div className="absolute bottom-0 left-0 w-24 h-1 bg-gradient-to-r from-coral to-sunny rounded-full"></div>
      </h1>

      <div className="flex flex-col gap-4 mb-10">
        {items.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-1 md:grid-cols-4 items-center gap-6 p-6 bg-mint rounded-2xl shadow-warm transition-all duration-300 hover:shadow-warm-lg hover:-translate-y-1"
          >
            <div className="w-32 h-32 mx-auto md:mx-0 overflow-hidden rounded-xl">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold mb-2 text-chocolate">
                {item.name}
              </h3>
              <p className="text-lg text-coral font-bold">
                ${item.price.toFixed(2)}
              </p>
            </div>

            <div className="flex items-center justify-center gap-3">
              <Button
                onClick={() => removeItem(item.id)}
                ariaLabel="Decrease quantity"
                variant="outline"
                size="small"
                className="w-9 h-9 p-0 rounded-full border-coral text-coral hover:bg-coral hover:text-white"
              >
                <span className="material-symbols-outlined text-lg">
                  remove
                </span>
              </Button>
              <span className="font-bold text-lg w-8 text-center">
                {item.quantity}
              </span>
              <Button
                onClick={() => addItem(item)}
                ariaLabel="Increase quantity"
                variant="outline"
                size="small"
                className="w-9 h-9 p-0 rounded-full border-coral text-coral hover:bg-coral hover:text-white"
              >
                <span className="material-symbols-outlined text-lg">add</span>
              </Button>
            </div>

            <div className="text-center md:text-right">
              <p className="text-xl font-bold text-coral">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-soft-pink p-8 rounded-2xl shadow-warm">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-chocolate mb-4">
            Total: ${totalAmount.toFixed(2)}
          </h3>
        </div>

        <div className="flex justify-center gap-4 mb-6 flex-wrap">
          <Button onClick={clearCart} variant="secondary" size="medium">
            <span className="material-symbols-outlined">delete</span>
            Clear Cart
          </Button>
          <Button
            variant="primary"
            size="large"
            className="font-bold tracking-wide"
          >
            <span className="material-symbols-outlined">payment</span>
            Proceed to Checkout
          </Button>
        </div>

        <div className="text-center">
          <Link to="/shop">
            <Button
              variant="outline"
              size="medium"
              className="transition-transform duration-200 hover:-translate-y-0.5"
            >
              <span className="material-symbols-outlined">arrow_back</span>
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
