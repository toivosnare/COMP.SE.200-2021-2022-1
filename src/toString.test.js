import toString from './toString';

describe('toString', () => {
  test('Give string input', () => {
    expect(toString('Hello, world')).toEqual('Hello, world');
  });
  test('Give array input', () => {
    expect(toString([1, 2, 3])).toEqual('1,2,3');
    expect(toString(['hello', 2, 3])).toEqual('hello,2,3');
    expect(toString([])).toEqual('');
  });
  test('Give number input', () => {
    expect(toString(42)).toEqual('42');
    expect(toString(3.14159265358979)).toEqual('3.14159265358979');
    expect(toString(-1)).toEqual('-1');
    expect(toString(NaN)).toEqual('NaN');

    const INFINITY = 1 / 0;
    expect(toString(INFINITY)).toEqual('Infinity');
    expect(toString(-INFINITY)).toEqual('-Infinity');
  });
  test('Give boolean input', () => {
    expect(toString(true)).toEqual('true');
    expect(toString(false)).toEqual('false');
  });
  test('Give object input', () => {
    expect(toString({})).toEqual('{}');
  });
  test('Give function input', () => {
    expect(toString(function() {})).toEqual('function () {}');
    expect(toString(() => {})).toEqual('() => {}');

    expect(toString((value) => {
      return 0;
    })).toEqual('value => {\n'+'      return 0;\n'+'    }');
  });
  test('Give undefined input', () => {
    expect(toString(undefined)).toEqual('undefined');
  });
});
