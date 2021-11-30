/* eslint-disable require-jsdoc */
import faker from "faker";

class MockProduct {
  constructor(name, price, producer) {
    this.name = name;
    this.price = price;
    this.producer = producer;
    this.description = undefined;
  }
}

export function generateMockProducts(
  numberOfCompanies,
  productsPerCompany,
  seed
) {
  const productList = [];

  faker.seed(seed);

  const companies = [];
  for (let i = 0; i < numberOfCompanies; i++) {
    companies.push(faker.company.companyName());
  }

  for (const company of companies) {
    for (let i = 0; i < productsPerCompany; i++) {
      const product = new MockProduct(
        faker.commerce.productName(),
        faker.commerce.price(),
        company
      );
      if (product.price > 500.0)
        product.description = faker.commerce.productDescription();
      productList.push(product);
    }
  }

  return productList;
}
