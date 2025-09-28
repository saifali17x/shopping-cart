import React from "react";
import Button from "./Button";
import { useCart } from "../utils/CartContext";

const ProductCard = ({ product }) => {
  const { addItem } = useCart();

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <p className="product-category">{product.category}</p>
        <p className="product-description">{product.description}</p>
        <Button
          onClick={() => addItem(product)}
          className="add-to-cart-btn"
          variant="primary"
          size="medium"
        >
          <span className="material-symbols-outlined">shopping_cart</span>
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
