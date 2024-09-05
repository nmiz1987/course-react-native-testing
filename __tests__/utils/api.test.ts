import { getProducts } from "@/utils/api";

describe("Api", () => {
  test("getProducts return 20 items", async () => {
    const products = await getProducts();
    expect(products).toHaveLength(20);
  });

  test("Reject the promise", async () => {
    global.fetch = jest.fn(() => Promise.reject("API is down"));
    await expect(getProducts()).rejects.toMatch("API is down");
  });

  test("Calls the right endpoint", async () => {
    const fetchMock = global.fetch as jest.MockedFunction<typeof global.fetch>;

    // @ts-ignore
    fetchMock.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce([]),
    });

    await getProducts();

    expect(fetchMock).toHaveBeenCalledWith("https://fakestoreapi.com/products");
  });

  test("Return the correct data", async () => {
    const fakeProducts = [
      {
        id: 1,
        title: "Test Products",
        price: 100,
      },
    ];

    global.fetch = jest.fn().mockImplementationOnce(() => {
      return new Promise((resolve, reject) => {
        resolve({
          json: () => {
            return fakeProducts;
          },
        });
      });
    });

    const products = await getProducts();

    expect(products).toEqual(fakeProducts);
  });
});
