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
    <div>
      <h1 className="text-4xl font-bold mb-8 text-chocolate relative inline-block pb-4">
        Shop Products
        <div className="absolute bottom-0 left-0 w-24 h-1 bg-gradient-to-r from-coral to-sunny rounded-full"></div>
      </h1>

      {error && (
        <div className="bg-coral bg-opacity-10 border-l-4 border-coral p-4 mb-6 rounded">
          <p className="text-coral font-medium">{error}</p>
        </div>
      )}

      {loading ? (
        <div className="flex flex-col items-center justify-center py-12">
          <div className="w-12 h-12 border-4 border-coral border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-coral font-medium">Loading products...</p>
        </div>
      ) : (
        <>
          <div className="flex gap-2 mb-10 flex-wrap bg-mint p-4 rounded-2xl shadow-warm">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setFilter(category)}
                className={`rounded-full ${
                  filter === category ? "" : "border-gray-medium text-chocolate"
                }`}
                variant={filter === category ? "secondary" : "outline"}
                size="small"
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 animate-fade-in">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <p className="text-center text-xl text-gray-medium mt-8">
              No products found in this category.
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default ShopPage;
