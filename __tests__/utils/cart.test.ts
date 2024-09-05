import { getCartSum, loadCart, storeCart } from "@/utils/cart";
import AsyncStorage from "@react-native-async-storage/async-storage";

jest.mock("@react-native-async-storage/async-storage", () => ({
  setItem: jest.fn(),
  getItem: jest.fn(),
}));

describe("Cart", () => {
  test("getCartSum", () => {
    const cart = [
      { id: 1, name: "item1", price: 100, quantity: 2 },
      { id: 2, name: "item2", price: 200, quantity: 1 },
    ];
    expect(getCartSum(cart)).toBe(300);
  });

  test("Returns the correct cart item", async () => {
    const cart = [
      { id: 1, name: "item1", price: 100, quantity: 2 },
      { id: 2, name: "item2", price: 200, quantity: 1 },
    ];

    storeCart(cart);
    expect(AsyncStorage.setItem).toHaveBeenCalledWith("cart", JSON.stringify(cart));

    loadCart();
    expect(AsyncStorage.getItem).toHaveBeenCalledWith("cart");
    expect(AsyncStorage.getItem).toHaveBeenCalledTimes(1);
  });

  test("Loads the correct cart items", async () => {
    const cart = [
      { id: 1, name: "item1", price: 100, quantity: 2 },
      { id: 2, name: "item2", price: 200, quantity: 1 },
    ];
    AsyncStorage.getItem = jest.fn().mockResolvedValueOnce(JSON.stringify(cart));
    const loadedCart = await loadCart();

    expect(loadedCart).toEqual(cart);
  });
});
