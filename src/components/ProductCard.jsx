import React, { useState } from "react";
import Button from "./Button";
import { useCart } from "../utils/CartContext";

const ProductCard = ({ product }) => {
  const { addItem } = useCart();
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const handleImageError = () => {
    setImageLoading(false);
    setImageError(true);
  };

  return (
    <div className="product-card">
      <div className="product-image">
        {imageLoading && (
          <div className="image-placeholder">
            <div className="loading-spinner product-spinner"></div>
          </div>
        )}
        <img
          src={product.image}
          alt={product.name}
          onLoad={handleImageLoad}
          onError={handleImageError}
          style={{ display: imageLoading ? "none" : "block" }}
          className={imageError ? "image-error" : ""}
        />
        {imageError && (
          <div className="image-error-placeholder">
            <span className="material-symbols-outlined image-error-icon">
              image_not_supported
            </span>
          </div>
        )}
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
