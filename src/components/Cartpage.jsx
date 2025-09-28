import React from "react";
import { useCart } from "../utils/CartContext";
import Button from "./Button";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { items, totalAmount, addItem, removeItem, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="empty-cart">
        <h1>Your Shopping Cart</h1>
        <p>Your cart is empty.</p>
        <Link to="/shop" className="continue-shopping">
          <Button variant="accent" size="large">
            <span className="material-symbols-outlined">shopping_bag</span>
            Continue Shopping
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>

      <div className="cart-items">
        {items.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="cart-item-image">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p className="item-price">${item.price.toFixed(2)}</p>
            </div>
            <div className="cart-item-quantity">
              <Button
                onClick={() => removeItem(item.id)}
                className="quantity-btn"
                ariaLabel="Decrease quantity"
                variant="outline"
                size="small"
              >
                <span className="material-symbols-outlined">remove</span>
              </Button>
              <span className="quantity">{item.quantity}</span>
              <Button
                onClick={() => addItem(item)}
                className="quantity-btn"
                ariaLabel="Increase quantity"
                variant="outline"
                size="small"
              >
                <span className="material-symbols-outlined">add</span>
              </Button>
            </div>
            <div className="cart-item-subtotal">
              <p>${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <div className="cart-total">
          <h3>Total: ${totalAmount.toFixed(2)}</h3>
        </div>

        <div className="cart-actions">
          <Button
            onClick={clearCart}
            className="clear-cart-btn"
            variant="secondary"
            size="medium"
          >
            <span className="material-symbols-outlined">delete</span>
            Clear Cart
          </Button>
          <Button className="checkout-btn" variant="primary" size="large">
            <span className="material-symbols-outlined">payment</span>
            Proceed to Checkout
          </Button>
        </div>

        <Link to="/shop" className="continue-shopping">
          <Button variant="outline" size="medium">
            <span className="material-symbols-outlined">arrow_back</span>
            Continue Shopping
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
