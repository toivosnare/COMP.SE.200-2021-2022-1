import faker from "faker";

import upperFirst from "../src/upperFirst";
import map from "../src/map";
import filter from "../src/filter";

test("Product names are formatted and filtered", () => {
  // Seed to ensure list stays the same between test runs.
  faker.seed(42);

  const products = [];
  // Generate a list of products where first array element is element to be
  // converted and filtered and the second element is valid output from
  // upperFirst function.
  for (let i = 0; i < 50; i++) {
    const pro = faker.commerce.product();
    products.push([pro.toLowerCase(), pro]);
  }
  for (let i = 0; i < 50; i++) {
    const proUpper = faker.commerce.product().toUpperCase();
    products.push([proUpper, proUpper]);
  }

  const upperedProducts = map(products, ([gen, valid]) => [
    upperFirst(gen),
    valid,
  ]);
  for (const [gen, valid] of upperedProducts) {
    expect(gen).toEqual(valid);
  }

  // Filter product names which begin with B.
  const filterProducts = filter(
    upperedProducts,
    ([gen, valid]) => gen[0] == "B"
  );
  for (const [gen, valid] of filterProducts) {
    expect(gen[0]).toEqual("B");
  }
});
