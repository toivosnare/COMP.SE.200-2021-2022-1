import * as product from "./product";
import map from "../src/map";
import capitalize from "../src/capitalize";
import words from "../src/words";
import reduce from "../src/reduce";

test("Make sure product descriptions' words start with uppercase letter", () => {
  const products = product.generateMockProducts(5, 5, 42);

  // Regex to match to words containing lowercase or uppercase letters.
  const wordRegex = new RegExp(/[a-zA-Z]+/g);

  // Capitalizes each word in the given string.
  // Result contains only words separated by spaces.
  const wordsToUpper = (str) => {
    return reduce(
      map(words(str, wordRegex), (word) => capitalize(word)),
      (total, word) => {
        if (total == "") {
          return word;
        }
        return total + " " + word;
      },
      ""
    );
  };

  // Use wordsToUpper on all product descriptions.
  const products_with_capital_desc = map(products, (product) => {
    return {
      ...product,
      description: product.description
        ? wordsToUpper(product.description)
        : undefined,
    };
  });

  for (const product of products_with_capital_desc) {
    if (product.description) {
      for (const word of words(product.description, wordRegex)) {
        // Expect all words begin with capital letter.
        expect(word.match(/[A-Z][a-z]*/)).not.toEqual([]);
      }
    }
  }
});
