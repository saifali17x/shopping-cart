/**
 * API service for fetching products from Fake Store API
 */

const BASE_URL = "https://fakestoreapi.com";

/**
 * Fetches all products from the API
 * @returns {Promise<Array>} - Array of products
 */
export const fetchProducts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    // Transform the data to match our application's format
    return data.map((item) => ({
      id: item.id,
      name: item.title, // API uses 'title', our app uses 'name'
      price: item.price,
      image: item.image,
      description: item.description,
      category: item.category,
    }));
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

/**
 * Fetches all product categories
 * @returns {Promise<Array>} - Array of category names
 */
export const fetchCategories = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products/categories`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

/**
 * Fallback to static product data in case API fails
 */
export const getStaticProductData = () => {
  return import("./productData").then((module) => module.default);
};
