import AddToCartButton from "@/components/AddToCartButton";
import { getProductById } from "@/lib/api";

export default async function ProductDetailPage({ params }) {
  let product = null;
  let error = null;

  try {
    product = await getProductById(params.productId);
  } catch (err) {
    error = err;
  }

  if (error) {
    return (
      <section className="notice" role="alert">
        <h1>Product could not be loaded</h1>
        <p>{error.message}</p>
      </section>
    );
  }

  return (
    <section className="product-detail">
      <div className="detail-image-frame">
        <img src={product.thumbnail} alt={product.title} className="detail-image" />
      </div>
      <div className="detail-copy">
        <p className="eyebrow">Product #{product.id}</p>
        <h1>{product.title}</h1>
        <p className="description">{product.description}</p>
        <p className="price">${product.price.toFixed(2)}</p>
        <AddToCartButton product={product} />
      </div>
    </section>
  );
}
