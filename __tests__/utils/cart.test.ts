import { getCartSum } from "@/utils/cart";

describe("Cart", () => {
  test("getCartSum", () => {
    const cart = [
      { id: 1, name: "item1", price: 100, quantity: 2 },
      { id: 2, name: "item2", price: 200, quantity: 1 },
    ];
    expect(getCartSum(cart)).toBe(300);
  });
});
