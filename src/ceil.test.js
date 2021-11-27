import ceil from './ceil';

describe('ceil', () => {
  test('Give negative number and precision', () => {
    expect(ceil(-543.14159, -1)).toEqual(-540);
    expect(ceil(-1543, -2)).toEqual(-1500);
  });
  test('Give positive number and precision', () => {
    expect(ceil(543.14159, 1)).toEqual(543.2);
    expect(ceil(1.54312, 2)).toEqual(1.55);
  });
  test('Give zero number and precision', () => {
    expect(ceil(0, 0)).toEqual(0);
  });
  test('Give small number and low precision', () => {
    expect(ceil(14, -3)).toEqual(1000);
    expect(ceil(-3, -15)).toEqual(0);
  });
  test('Give large number and high precision', () => {
    expect(ceil(1234, 4)).toEqual(1234);
    expect(ceil(-98654, 8)).toEqual(-98654);
  });
  test('Give NaN numbers and undefined and null values', () => {
    expect(ceil(NaN, 4)).toEqual(NaN);
    expect(ceil(NaN, -4)).toEqual(NaN);

    expect(ceil(undefined, 1)).toEqual(NaN);
    expect(ceil(undefined, -1)).toEqual(NaN);

    expect(ceil(null, 10)).toEqual(NaN);
    expect(ceil(null, -10)).toEqual(NaN);
  });
  test('Give infinite number and non-infinite precision', () => {
    const INFINITY = 1 / 0;

    expect(ceil(INFINITY, 1)).toEqual(INFINITY);
    expect(ceil(-INFINITY, 1)).toEqual(-INFINITY);
  });
  test('Give non-infinite number and infinite precision', () => {
    const INFINITY = 1 / 0;

    expect(ceil(1, INFINITY)).toEqual(1);
    expect(ceil(-1, INFINITY)).toEqual(-1);
  });
});
