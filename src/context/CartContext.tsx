// Cart Context - manages shopping cart state across the app
import { createContext, useContext, useState, ReactNode } from "react";
import { Product } from "@/data/products";

// Define what a cart item looks like (product + quantity)
export interface CartItem {
  product: Product;
  quantity: number;
}

// Define the shape of our cart context
interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  getCartTotal: () => number;
  getCartCount: () => number;
}

// Create the context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Cart Provider component - wraps the app to provide cart functionality
export const CartProvider = ({ children }: { children: ReactNode }) => {
  // State to store cart items
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Add a product to cart (or increase quantity if already exists)
  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        // Product already in cart - increase quantity
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // New product - add to cart with quantity 1
      return [...prev, { product, quantity: 1 }];
    });
  };

  // Remove a product from cart entirely
  const removeFromCart = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  // Calculate total price of all items in cart
  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  };

  // Get total number of items in cart
  const getCartCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, getCartTotal, getCartCount }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart context in any component
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
