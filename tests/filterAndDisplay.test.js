/* eslint-disable require-jsdoc */

import filter from "../src/filter.js";
import map from "../src/map.js";
import toString from "../src/toString.js";
import defaultToAny from "../src/defaultToAny.js";
import reduce from "../src/reduce.js";
import * as product from "./product.js";

test("Filter and display product descriptions", () => {
  const correctOutput =
    "Refined Fresh Chips by Medhurst - Rau - $474.00\nNo description provided.\nLicensed Soft Shoes by Mitchell, Stiedemann and Little - $521.00\nNew range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart\nIntelligent Soft Fish by Mitchell, Stiedemann and Little - $457.00\nNo description provided.\n";
  const products = product.generateMockProducts(5, 5, 0);

  // Filter products based on price.
  const filteredProducts = filter(
    products,
    (product) => product.price > 450 && product.price < 550
  );
  expect(filteredProducts.length).toEqual(3);

  // Create a short description of each product.
  const descriptions = map(filteredProducts, (product) => {
    const price = toString(product.price);
    const description = defaultToAny(
      product.description,
      "No description provided."
    );
    return `${product.name} by ${product.producer} - $${price}\n${description}\n`;
  });

  // Create a list of all the products.
  const output = reduce(descriptions, (o, d) => o + d, "");
  expect(output).toEqual(correctOutput);
});
