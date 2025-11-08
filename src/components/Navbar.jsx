import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../utils/CartContext";

const Navbar = () => {
  const { itemCount } = useCart();

  return (
    <nav
      className="flex justify-between items-center px-8 py-4 sticky top-0 z-50"
      style={{
        backgroundColor: "var(--mint)",
        boxShadow: "0 2px 8px rgba(62, 47, 47, 0.1)",
      }}
    >
      <div>
        <Link
          to="/"
          className="text-2xl font-bold no-underline"
          style={{ color: "var(--coral)" }}
        >
          ShopSmart
        </Link>
      </div>
      <ul className="flex list-none gap-8 items-center">
        <li>
          <Link
            to="/"
            className="no-underline font-medium transition-all duration-200 hover:opacity-80"
            style={{ color: "var(--chocolate)" }}
            onMouseEnter={(e) => (e.target.style.color = "var(--coral)")}
            onMouseLeave={(e) => (e.target.style.color = "var(--chocolate)")}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/shop"
            className="no-underline font-medium transition-all duration-200 hover:opacity-80"
            style={{ color: "var(--chocolate)" }}
            onMouseEnter={(e) => (e.target.style.color = "var(--coral)")}
            onMouseLeave={(e) => (e.target.style.color = "var(--chocolate)")}
          >
            Shop
          </Link>
        </li>
        <li className="relative">
          <Link
            to="/cart"
            className="no-underline font-medium transition-all duration-200 hover:opacity-80"
            style={{ color: "var(--chocolate)" }}
            onMouseEnter={(e) => (e.target.style.color = "var(--coral)")}
            onMouseLeave={(e) => (e.target.style.color = "var(--chocolate)")}
          >
            <span className="material-symbols-outlined">shopping_cart</span>
            {itemCount > 0 && (
              <span
                className="absolute -top-2 -right-2 rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold animate-pulse"
                style={{
                  backgroundColor: "var(--sunny)",
                  color: "var(--chocolate)",
                }}
              >
                {itemCount}
              </span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
