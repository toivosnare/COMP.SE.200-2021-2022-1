import faker from "faker";

import upperFirst from "../src/upperFirst";
import map from "../src/map";

test("Parts of description are made sure to contain at least one capital letter", () => {
  const products = [];
  for (let i = 0; i < 50; i++) {
    const pro = faker.commerce.product();
    products.push([pro.toLowerCase(), pro]);
  }
  for (let i = 0; i < 50; i++) {
    const proUpper = faker.commerce.product().toUpperCase();
    products.push([proUpper, proUpper]);
  }

  for (const [gen, valid] of products) {
    expect(upperFirst(gen)).toEqual(valid);
  }
});
