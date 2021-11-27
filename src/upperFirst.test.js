import upperFirst from './upperFirst';

describe('upperFirst', () => {
  test('Input’s first character is non-uppercase', () => {
    const input = 'this is a test sentence';
    const output = 'This is a test sentence';
    expect(upperFirst(input)).toEqual(output);
  });
  test('Input’s first character is non-uppercase', () => {
    const input = 'This is a test sentence';
    expect(upperFirst(input)).toEqual(input);
  });
  test('Input is undefined', () => {
    expect(upperFirst(undefined)).toEqual(undefined);
  });
  test('Input is empty string', () => {
    const input = '';
    expect(upperFirst(input)).toEqual(input);
  });
});
