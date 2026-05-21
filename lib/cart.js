export const CART_STORAGE_KEY = "product-catalog-cart";

export function normalizeCart(items) {
  if (!Array.isArray(items)) {
    return [];
  }

  return items
    .filter((item) => item && Number.isFinite(item.id) && Number.isFinite(item.quantity))
    .map((item) => ({
      id: item.id,
      title: item.title || "Untitled product",
      price: Number(item.price) || 0,
      thumbnail: item.thumbnail || "",
      quantity: Math.max(1, Math.floor(item.quantity))
    }));
}

export function getItemCount(items) {
  return normalizeCart(items).reduce((total, item) => total + item.quantity, 0);
}

export function addProductToCart(items, product) {
  if (!product || !Number.isFinite(product.id)) {
    throw new Error("A valid product is required");
  }

  const currentItems = normalizeCart(items);
  const existingItem = currentItems.find((item) => item.id === product.id);

  if (existingItem) {
    return currentItems.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }

  return [
    ...currentItems,
    {
      id: product.id,
      title: product.title || "Untitled product",
      price: Number(product.price) || 0,
      thumbnail: product.thumbnail || "",
      quantity: 1
    }
  ];
}
