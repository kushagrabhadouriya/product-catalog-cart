"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const { itemCount } = useCart();

  return (
    <header className="site-header">
      <Link className="brand" href="/">
        Product Catalog
      </Link>
      <div className="cart-count" aria-label={`Cart contains ${itemCount} items`}>
        Cart <span>{itemCount}</span>
      </div>
    </header>
  );
}
