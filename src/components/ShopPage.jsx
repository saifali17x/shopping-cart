import React, { useState, useEffect } from "react";
import Button from "./Button";
import ProductCard from "./ProductCard";
import {
  fetchProducts,
  fetchCategories,
  getStaticProductData,
} from "../utils/api";

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState(["All"]);
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);

        // Fetch products from API
        const productsData = await fetchProducts();
        setProducts(productsData);

        // Fetch categories from API or extract from products
        try {
          const categoriesData = await fetchCategories();
          setCategories(["All", ...categoriesData]);
        } catch (categoryError) {
          // If categories endpoint fails, extract from products
          const uniqueCategories = [
            ...new Set(productsData.map((product) => product.category)),
          ];
          setCategories(["All", ...uniqueCategories]);
        }

        setError(null);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load products. Falling back to static data.");

        // Fallback to static data
        const staticProducts = await getStaticProductData();
        setProducts(staticProducts);
        setCategories([
          "All",
          ...new Set(staticProducts.map((product) => product.category)),
        ]);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const filteredProducts =
    filter === "All"
      ? products
      : products.filter((product) => product.category === filter);

  return (
    <div className="shop-page">
      <h1>Shop Products</h1>

      {error && (
        <div className="error-message">
          <p>{error}</p>
        </div>
      )}

      {loading ? (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading products...</p>
        </div>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default ShopPage;
