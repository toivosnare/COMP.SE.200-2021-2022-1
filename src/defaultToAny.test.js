import defaultToAny from "./defaultToAny.js";

describe("defaultToAny", () => {
  test("Defined input without any default values", () => {
    const input = true;
    expect(defaultToAny(input)).toEqual(input);
  });
  test("Defined input with default values", () => {
    const input = true;
    expect(defaultToAny(input, 0, 1, 2)).toEqual(input);
  });
  test("Undefined input with default values, where at least one is not undefined, null or NaN", () => {
    const input = true;
    expect(defaultToAny(undefined, null, input, false)).toEqual(input);
  });
  test("Undefined input with default values, which are all undefined, null or NaN", () => {
    expect(defaultToAny(undefined, undefined, null, NaN)).toEqual(undefined);
  });
  test("Undefined input without any default values", () => {
    expect(defaultToAny(undefined)).toEqual(undefined);
  });
});
