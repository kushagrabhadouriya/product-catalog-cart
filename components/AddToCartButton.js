"use client";

import { useCart } from "@/context/CartContext";

export default function AddToCartButton({ product }) {
  const { addItem } = useCart();

  return (
    <button className="primary-button" type="button" onClick={() => addItem(product)}>
      Add to Cart
    </button>
  );
}
