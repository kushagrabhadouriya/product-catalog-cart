"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import {
  CART_STORAGE_KEY,
  addProductToCart,
  getItemCount,
  normalizeCart
} from "@/lib/cart";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const storedCart = window.localStorage.getItem(CART_STORAGE_KEY);
      setItems(normalizeCart(storedCart ? JSON.parse(storedCart) : []));
    } catch {
      setItems([]);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (isLoaded) {
      window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    }
  }, [items, isLoaded]);

  const value = useMemo(
    () => ({
      items,
      itemCount: getItemCount(items),
      addItem(product) {
        setItems((currentItems) => addProductToCart(currentItems, product));
      }
    }),
    [items]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}
