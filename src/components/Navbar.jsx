import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../utils/CartContext";

const Navbar = () => {
  const { itemCount } = useCart();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">ShopSmart</Link>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/shop" className="nav-link">
            Shop
          </Link>
        </li>
        <li className="nav-item cart-icon">
          <Link to="/cart" className="nav-link">
            <span className="material-symbols-outlined">shopping_cart</span>
            {itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
