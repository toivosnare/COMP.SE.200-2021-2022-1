import filter from './filter';

describe('filter', () => {
  test('Leave array empty', () => {
    expect(filter([], (value) => value == 0)).toEqual([]);
  });
  test('Leave array undefined', () => {
    expect(filter(undefined, (value) => value == 0)).toEqual(undefined);
  });
  test('Leave predicate undefined', () => {
    expect(filter([], undefined)).toEqual(undefined);
  });
  test('Predicate returns true for some elements', () => {
    const array = [1, 2, 3, 4];
    expect(filter(array, (value) => value > 2)).toEqual([3, 4]);

    const textArray = ['one', 'two', 'three', 'four',
      'five', 'six', 'seven', 'eight'];
    expect(filter(textArray,
        (value) => value.length <= 3))
        .toEqual(['one', 'two', 'six']);
  });
  test('Predicate always returns true', () => {
    const array = [1, 2, 3, 4];
    expect(filter(array, (value) => true)).toEqual(array);
  });
  test('Predicate always returns false', () => {
    const array = [1, 2, 3, 4];
    expect(filter(array, (value) => false)).toEqual([]);
  });
  test('Predicate function has the wrong interface', () => {
    const array = [1, 2, 3, 4];
    expect(filter(array, () => 'foo')).toEqual(array);

    expect(filter(array, (first, second) => undefined)).toEqual([]);
  });
});
