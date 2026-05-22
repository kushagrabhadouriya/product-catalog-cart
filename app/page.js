import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/lib/api";

export default async function HomePage() {
  let products = [];
  let error = null;

  try {
    const response = await fetch("https://dummyjson.com/products");
    products = await response.json();
  } catch (err) {
    error = err;
  }

  return (
    <section>
      <div className="page-heading">
        <p className="eyebrow">DummyJSON catalog</p>
        <h1>Products</h1>
      </div>

      {error ? (
        <div className="notice" role="alert">
          <h2>Products could not be loaded</h2>
          <p>{error.message}</p>
        </div>
      ) : (
        <div className="product-grid">
          {products?.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}
