import React, { useState } from "react";
import products from "../utils/productData";
import Button from "./Button";
import ProductCard from "./ProductCard";

const ShopPage = () => {
  const [filter, setFilter] = useState("All");

  // Get unique categories for filter
  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts =
    filter === "All"
      ? products
      : products.filter((product) => product.category === filter);

  return (
    <div className="shop-page">
      <h1>Shop Products</h1>

      <div className="filters">
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => setFilter(category)}
            className={`filter-btn ${filter === category ? "active" : ""}`}
            variant={filter === category ? "primary" : "outline"}
            size="small"
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="products-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="no-products">No products found in this category.</p>
      )}
    </div>
  );
};

export default ShopPage;
