import * as product from "./product";
import reduce from "../src/reduce";
import ceil from "../src/ceil";
import toString from "../src/toString";

describe("Calculate and format total price", () => {
  test("Calculate total price rounded to thousands", () => {
    const products = product.generateMockProducts(5, 5, 42);

    // Calculate total price of products.
    const totalPrice = reduce(
      products,
      (total, product) => total + product.price,
      0
    );
    expect(totalPrice).toEqual(12780);

    // Round up to thousands.
    const roundedPrice = ceil(totalPrice, -3);
    expect(roundedPrice).toEqual(13000);

    const roundedPriceStr = toString(roundedPrice);
    expect(roundedPriceStr).toEqual("13000");
  });
  test("Calculate sum with initial price and convert to string", () => {
    const products = product.generateMockProducts(1, 5, 42);

    // Calculate the total price with initial price.
    const totalPrice = reduce(
      products,
      (total, product) => total + product.price,
      1000
    );
    expect(totalPrice).toEqual(4301);

    const totalPriceStr = toString(totalPrice);
    expect(totalPriceStr).toEqual("4301");
  });
});
