import endsWith from './endsWith.js';

describe('endsWith', () => {
  test('String ends with target string, no position argument', () => {
    expect(endsWith('abc', 'c')).toEqual(true);
  });
  test('String doesn’t end with target string, no position argument', () => {
    expect(endsWith('abc', 'd')).toEqual(false);
  });
  test('String ends with target string at position argument', () => {
    expect(endsWith('abc', 'b', 2)).toEqual(true);
  });
  test('String doesn’t end with target string at position argument', () => {
    expect(endsWith('abc', 'c', 2)).toEqual(false);
  });
  test('Input string is undefined', () => {
    expect(endsWith(undefined, 'a')).toEqual(undefined);
  });
  test('Target string is undefined', () => {
    expect(endsWith('abc', undefined)).toEqual(undefined);
  });
  test('Position argument is greater than the inputs strings length', () => {
    expect(endsWith('abc', 'c', 10)).toEqual(true);
  });
  test('Position argument is less or equal to zero', () => {
    expect(endsWith('abc', 'a', 0)).toEqual(false);
    expect(endsWith('abc', '', 0)).toEqual(true);
    expect(endsWith('', 'a', 0)).toEqual(false);
    expect(endsWith('', '', 0)).toEqual(true);
    expect(endsWith('abc', 'a', -1)).toEqual(false);
    expect(endsWith('abc', '', -1)).toEqual(true);
    expect(endsWith('', 'a', -1)).toEqual(false);
    expect(endsWith('', '', -1)).toEqual(true);
  });
  test('Input string is empty, and target is non-empty', () => {
    expect(endsWith('', 'c')).toEqual(false);
  });
  test('Input string is non-empty, and target is empty ', () => {
    expect(endsWith('abc', '')).toEqual(true);
  });
  test('Both input string and target are empty', () => {
    expect(endsWith('', '')).toEqual(true);
  });
});
