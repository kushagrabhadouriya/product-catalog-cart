import { getProductById, getProducts } from "@/lib/api";

describe("DummyJSON API helpers", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("returns products from a valid products response", async () => {
    const products = [{ id: 1, title: "Phone" }];
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ products })
    });

    await expect(getProducts()).resolves.toEqual(products);
    expect(global.fetch).toHaveBeenCalledWith("https://dummyjson.com/products", {
      next: { revalidate: 60 }
    });
  });

  test("throws on a failed products response", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      status: 500
    });

    await expect(getProducts()).rejects.toThrow("status 500");
  });

  test("rejects invalid product ids before fetching", async () => {
    global.fetch = jest.fn();

    await expect(getProductById("abc")).rejects.toThrow("valid product id");
    expect(global.fetch).not.toHaveBeenCalled();
  });
});
