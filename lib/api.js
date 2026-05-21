const API_BASE_URL = "https://dummyjson.com";

async function fetchJson(path) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    next: {
      revalidate: 60
    }
  });

  if (!response.ok) {
    throw new Error(`DummyJSON request failed with status ${response.status}`);
  }

  return response.json();
}

export async function getProducts() {
  const data = await fetchJson("/products");

  if (!Array.isArray(data.products)) {
    throw new Error("DummyJSON returned an invalid products response");
  }

  return data.products;
}

export async function getProductById(productId) {
  if (!productId || Number.isNaN(Number(productId))) {
    throw new Error("A valid product id is required");
  }

  const product = await fetchJson(`/products/${productId}`);

  if (!product || !product.id) {
    throw new Error("DummyJSON returned an invalid product response");
  }

  return product;
}
