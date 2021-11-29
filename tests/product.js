/* eslint-disable require-jsdoc */
import faker from 'faker';


class MockProduct {
  constructor(name, price, producer) {
    this.name = name;
    this.price = price;
    this.producer = producer;
  }
};

export function generateMockProducts(numberOfCompanies, productsPerCompany, seed) {
  const productList = [];

  faker.seed(seed);

  const companies = [];
  for (let i = 0; i < numberOfCompanies; i++) {
    companies.push(faker.company.companyName());
  }

  for (const company of companies) {
    for (let i = 0; i < productsPerCompany; i++) {
      productList.push(new MockProduct(
          faker.commerce.productName(),
          faker.commerce.price(),
          company,
      ));
    }
  }

  return productList;
}
