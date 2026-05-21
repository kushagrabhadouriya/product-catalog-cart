import { addProductToCart, getItemCount, normalizeCart } from "@/lib/cart";

describe("cart helpers", () => {
  const product = {
    id: 7,
    title: "Sample product",
    price: 49,
    thumbnail: "https://example.com/product.png"
  };

  test("adds a new product with quantity one", () => {
    expect(addProductToCart([], product)).toEqual([
      {
        ...product,
        quantity: 1
      }
    ]);
  });

  test("increments quantity when the product already exists", () => {
    const cart = addProductToCart([{ ...product, quantity: 1 }], product);

    expect(cart).toHaveLength(1);
    expect(cart[0].quantity).toBe(2);
  });

  test("counts total quantities across cart items", () => {
    expect(
      getItemCount([
        { id: 1, title: "A", price: 10, quantity: 2 },
        { id: 2, title: "B", price: 20, quantity: 3 }
      ])
    ).toBe(5);
  });

  test("normalizes malformed persisted cart data", () => {
    expect(
      normalizeCart([
        null,
        { id: 1, title: "Valid", price: 10, quantity: 2.8 },
        { id: "bad", quantity: 1 }
      ])
    ).toEqual([{ id: 1, title: "Valid", price: 10, thumbnail: "", quantity: 2 }]);
  });
});
