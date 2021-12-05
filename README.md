# Software Testing course project

[![Coverage Status](https://coveralls.io/repos/github/toivosnare/COMP.SE.200-2021-2022-1/badge.svg?branch=main)](https://coveralls.io/github/toivosnare/COMP.SE.200-2021-2022-1?branch=main)

## Purpose of this repository

This repository contains the source code related to the Software Testing course project at Tampere University.

## Folder structure

Unit tests are located in the `./src` directory and their file names end with `.test.js`.

Integration tests in the `./tests` directory and their file names also end with `.test.js`. Directory `./tests` additionally contains `product.js` used for creating mock units.

## Running the tests

From repository root
```
npm install
npm test
```

This install the dependencies, runs the tests and produces test coverage reports which are viewable from `./coverage` directory using a browser.
