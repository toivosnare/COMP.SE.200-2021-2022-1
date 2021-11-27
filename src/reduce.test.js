import reduce from './reduce';

describe('reduce', () => {
  test('Sum array elements', () => {
    const array = [1, 2, 3, 4];

    expect(reduce(array, (result, value) => result + value, 0)).toEqual(10);
  });
  test('Sum object keys and values together', () => {
    const obj = {1: 9, 2: 8, 3: 7, 4: 6};

    expect(reduce(obj,
        (result, value, key) => result + value + key, 0))
        .toEqual(40);
  });
  test('Sum with empty array', () => {
    expect(reduce([], (result, value) => result + value, 0)).toEqual(0);
  });
  test('Sum with empty object', () => {
    expect(reduce({},
        (result, value, key) => result + value + key, 0))
        .toEqual(0);
  });
  test('Leave collection undefined', () => {
    expect(reduce(undefined, (result, value) => result + value, 0)).toEqual(0);
    expect(reduce(undefined,
        (result, value, key) => result + value + key, 0))
        .toEqual(0);
  });
  test('Leave iteratee undefined', () => {
    expect(reduce([], undefined, 0)).toEqual(0);
    expect(reduce({}, undefined, 0)).toEqual(0);
  });
  test('Leave accumulator undefined with sum function', () => {
    const array = [1, 2, 3, 4];

    expect(reduce(array,
        (result, value) => result + value, undefined))
        .toEqual(0);
  });
});
