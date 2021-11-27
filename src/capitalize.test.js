import capitalize from './capitalize.js';

describe('capitalize', () => {
  test('Input is uppercase string', () => {
    const input = 'THIS IS A TEST SENTENCE';
    const output = 'This is a test sentence';
    expect(capitalize(input)).toEqual(output);
  });
  test('Input is lowercase string', () => {
    const input = 'this is a test sentence';
    const output = 'This is a test sentence';
    expect(capitalize(input)).toEqual(output);
  });
  test('Input is already capitalized', () => {
    const input = 'This is a test sentence';
    expect(capitalize(input)).toEqual(input);
  });
  test('Input is undefined', () => {
    expect(capitalize(undefined)).toEqual(undefined);
  });
  test('Input is empty string', () => {
    const input = '';
    expect(capitalize(input)).toEqual(input);
  });
});
