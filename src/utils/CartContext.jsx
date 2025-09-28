import { createContext, useContext, useReducer, useEffect } from "react";

const CartContext = createContext();

const initialState = {
  items: [],
  itemCount: 0,
  totalAmount: 0,
};

// Load cart from localStorage on initial load
const loadCartFromStorage = () => {
  try {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      return JSON.parse(savedCart);
    }
  } catch (error) {
    console.error("Error loading cart from localStorage:", error);
  }
  return initialState;
};

const cartReducer = (state, action) => {
  let updatedItems;

  switch (action.type) {
    case "ADD_ITEM":
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex !== -1) {
        // Item already exists, update quantity
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1,
        };
      } else {
        // Add new item
        updatedItems = [...state.items, { ...action.payload, quantity: 1 }];
      }

      const newState = {
        items: updatedItems,
        itemCount: state.itemCount + 1,
        totalAmount: state.totalAmount + action.payload.price,
      };

      localStorage.setItem("cart", JSON.stringify(newState));
      return newState;

    case "REMOVE_ITEM":
      const itemToRemove = state.items.find(
        (item) => item.id === action.payload
      );

      if (!itemToRemove) return state;

      if (itemToRemove.quantity > 1) {
        // Decrease quantity
        updatedItems = state.items.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        // Remove item completely
        updatedItems = state.items.filter((item) => item.id !== action.payload);
      }

      const updatedState = {
        items: updatedItems,
        itemCount: state.itemCount - 1,
        totalAmount: state.totalAmount - itemToRemove.price,
      };

      localStorage.setItem("cart", JSON.stringify(updatedState));
      return updatedState;

    case "CLEAR_CART":
      localStorage.removeItem("cart");
      return initialState;

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    initialState,
    loadCartFromStorage
  );

  const addItem = (product) => {
    dispatch({ type: "ADD_ITEM", payload: product });
  };

  const removeItem = (productId) => {
    dispatch({ type: "REMOVE_ITEM", payload: productId });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const contextValue = {
    items: cartState.items,
    itemCount: cartState.itemCount,
    totalAmount: cartState.totalAmount,
    addItem,
    removeItem,
    clearCart,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
