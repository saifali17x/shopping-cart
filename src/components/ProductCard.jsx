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
    <div className="product-card flex flex-col">
      <div
        style={{ height: "240px", overflow: "hidden", position: "relative" }}
      >
        {imageLoading && (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#f5f5f5",
            }}
          >
            <div
              style={{
                width: "32px",
                height: "32px",
                border: "4px solid var(--coral)",
                borderTop: "4px solid transparent",
                borderRadius: "50%",
                animation: "spin 1s linear infinite",
              }}
            ></div>
          </div>
        )}
        <img
          src={product.image}
          alt={product.name}
          onLoad={handleImageLoad}
          onError={handleImageError}
          style={{ display: imageLoading ? "none" : "block" }}
          className={`w-full h-full object-cover transition-transform duration-500 hover:scale-105 ${
            imageError ? "hidden" : ""
          }`}
        />
        {imageError && (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#f5f5f5",
            }}
          >
            <span
              className="material-symbols-outlined"
              style={{
                fontSize: "3rem",
                color: "var(--sunny)",
                opacity: 0.7,
              }}
            >
              image_not_supported
            </span>
          </div>
        )}
      </div>

      <div
        style={{
          padding: "1.5rem",
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          textAlign: "center",
        }}
      >
        <h3
          style={{
            fontSize: "1.25rem",
            fontWeight: "600",
            marginBottom: "0.5rem",
            color: "var(--chocolate)",
            transition: "color 0.2s ease",
          }}
        >
          {product.name}
        </h3>
        <p
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "var(--coral)",
            marginBottom: "0.75rem",
          }}
        >
          ${product.price.toFixed(2)}
        </p>
        <span
          style={{
            display: "inline-block",
            backgroundColor: "rgba(255, 107, 107, 0.1)",
            color: "var(--coral)",
            padding: "0.25rem 0.75rem",
            borderRadius: "20px",
            fontSize: "0.875rem",
            marginBottom: "0.75rem",
            fontWeight: "500",
          }}
        >
          {product.category}
        </span>
        <p className="text-gray-medium mb-6 text-sm leading-relaxed flex-grow">
          {product.description}
        </p>
        <Button
          onClick={() => addItem(product)}
          className="w-full"
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
