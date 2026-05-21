import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/lib/api";

export default async function HomePage() {
  let products = [];
  let error = null;

  try {
    products = await getProducts();
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
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}
