# ShopSmart - Modern Shopping Cart Application

![ShopSmart Logo](/public/icons/favicon.svg)

A modern, responsive e-commerce shopping cart application built with React and Vite. ShopSmart features a clean design with interactive components, product filtering, and a complete cart management system.

## ✨ Features

- **Modern UI**: Clean and intuitive user interface
- **Responsive Design**: Works seamlessly across all device sizes
- **Interactive Elements**: Buttons with ripple effects and hover states
- **Product Catalog**: Browse products with category filtering
- **Shopping Cart**: Add/remove items and manage quantities
- **Context API**: State management using React's Context API
- **React Router**: Smooth navigation between pages

## 📸 Screenshots

_(Placeholder - Add screenshots of your application here)_

## 🛠️ Technologies Used

- **React**: Frontend library for building the user interface
- **Vite**: Next-generation frontend tooling
- **React Router**: For application routing
- **Context API**: For state management
- **CSS Variables**: For consistent theming
- **Material Icons**: For UI icons

## 🏗️ Project Structure

```
shopping-cart/
├── public/               # Static assets
│   ├── icons/            # App icons
│   └── manifest.json     # Web app manifest
├── src/
│   ├── assets/           # Application assets
│   ├── components/       # React components
│   ├── styles/           # CSS styles
│   ├── utils/            # Utility functions and data
│   ├── App.jsx           # Main application component
│   └── main.jsx          # Application entry point
├── index.html            # HTML entry point
└── package.json          # Project dependencies
```

## 🚦 Getting Started

### Prerequisites

- Node.js (v18.0.0 or newer)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/shopping-cart.git
   cd shopping-cart
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## 🧩 Key Components

### App.jsx

Main application component that wraps the entire application with necessary providers.

### Button.jsx

Reusable button component with multiple variants, sizes, and interactive effects.

### CartPage.jsx

Displays cart contents and allows users to manage items and quantities.

### Homepage.jsx

Landing page with hero section and key features.

### Navbar.jsx

Navigation header with links and cart indicator.

### ProductCard.jsx

Displays individual product information in a consistent layout.

### ShopPage.jsx

Shows all available products with category filtering.

## 🔧 Utilities

### CartContext.jsx

Provides cart state management using React's Context API with functions for adding, removing, and clearing items.

### productData.js

Contains sample product data used throughout the application.

## 📝 Usage Instructions

1. **Browse Products**: Visit the Shop page to view all products
2. **Filter by Category**: Use category buttons to filter products
3. **Add to Cart**: Click "Add to Cart" on any product
4. **Manage Cart**: View cart to add/remove items and see total
5. **Checkout**: Click "Proceed to Checkout" to complete order

## 🔮 Future Enhancements

- User authentication system
- Product search functionality
- Order processing and checkout
- Product reviews and ratings
- Wishlist functionality
- Detailed product pages

## 👥 Contributors

- Your Name - [GitHub Profile](https://github.com/saifali17x)

---

Made with ❤️ by Saif Ali
