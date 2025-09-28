/**
 * Static product data used as a fallback when the API request fails
 * This ensures the application can still function even if the API is unavailable
 */
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 149.99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=300",
    description:
      "Premium wireless headphones with noise cancellation technology.",
    category: "Electronics",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 249.99,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=300",
    description:
      "Track your fitness and stay connected with this modern smartwatch.",
    category: "Electronics",
  },
  {
    id: 3,
    name: "Digital Camera",
    price: 399.99,
    image:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=300",
    description:
      "Capture your memories in high resolution with this compact digital camera.",
    category: "Electronics",
  },
  {
    id: 4,
    name: "Cotton T-Shirt",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=300",
    description: "Comfortable 100% cotton t-shirt perfect for everyday wear.",
    category: "Clothing",
  },
  {
    id: 5,
    name: "Running Shoes",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=300",
    description:
      "Lightweight running shoes with superior cushioning and support.",
    category: "Footwear",
  },
  {
    id: 6,
    name: "Coffee Maker",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?q=80&w=300",
    description:
      "Start your day with freshly brewed coffee from this programmable coffee maker.",
    category: "Home",
  },
];

export default products;
