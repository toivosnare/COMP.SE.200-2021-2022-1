import toString from "./toString";

describe("toString", () => {
  test("Give string input", () => {
    expect(toString("Hello, world")).toEqual("Hello, world");
  });
  test("Give array input", () => {
    expect(toString([1, 2, 3])).toEqual("1,2,3");
    expect(toString(["hello", 2, 3])).toEqual("hello,2,3");
    expect(toString([])).toEqual("");
  });
  test("Give number input", () => {
    expect(toString(42)).toEqual("42");
    expect(toString(3.14159265358979)).toEqual("3.14159265358979");
    expect(toString(-1)).toEqual("-1");
    expect(toString(NaN)).toEqual("NaN");

    const INFINITY = 1 / 0;
    expect(toString(INFINITY)).toEqual("Infinity");
    expect(toString(-INFINITY)).toEqual("-Infinity");
  });
  test("Give boolean input", () => {
    expect(toString(true)).toEqual("true");
    expect(toString(false)).toEqual("false");
  });
  test("Give object input", () => {
    expect(toString({})).toEqual("{}");
  });
  test("Give function input", () => {
    expect(toString(function () {})).toEqual("function () {}");
    expect(toString(() => {})).toEqual("() => {}");

    expect(toString((value) => 0)).toEqual("value => 0");
  });
  test("Give undefined input", () => {
    expect(toString(undefined)).toEqual("undefined");
  });
  test("Give array with null values", () => {
    expect(toString([null])).toEqual("");
    expect(toString([0, null])).toEqual("0,");
  });
  test("Give a negative zero", () => {
    expect(toString(-0)).toEqual("-0");
  });
  test("Give a symbol value", () => {
    expect(toString(Symbol())).toEqual("Symbol()");
    expect(toString(Symbol("foobar"))).toEqual("Symbol(foobar)");
  });
});
