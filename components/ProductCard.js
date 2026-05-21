import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <article className="product-card">
      <Link href={`/products/${product.id}`} className="product-link">
        <div className="thumb-frame">
          <img src={product.thumbnail} alt={product.title} className="thumb" />
        </div>
        <div className="product-card-copy">
          <h2>{product.title}</h2>
          <p>${product.price.toFixed(2)}</p>
        </div>
      </Link>
    </article>
  );
}
