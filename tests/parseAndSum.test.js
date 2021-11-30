import words from "../src/words.js";
import map from "../src/map.js";
import endsWith from "../src/endsWith.js";
import reduce from "../src/reduce.js";

test("Product prices are parsed from string to float with euro currency", () => {
  const input =
    "146.5€ 472.1£ 841.6€ 741.1$ 791.1£ 239.1$ 13.6£ 865.4$ 891.3€ 172.8$";

  // Parse and exchange prices to an array.
  const values = map(words(input, /[^\s]+/g), (str) => {
    const amount = parseFloat(str.slice(0, -1));
    let value;
    if (endsWith(str, "€")) value = amount;
    if (endsWith(str, "$")) value = amount * 0.85;
    if (endsWith(str, "£")) value = amount * 1.15;
    // Round to nearest cent.
    return Math.round(value * 100) / 100;
  });

  // Calculate the total price.
  expect(reduce(values, (t, v) => t + v, 0.0)).toEqual(5063.38);
});
