import words from "./words";

describe("words", () => {
  test("Lowercase string", () => {
    const input = "abc";
    expect(words(input)).toEqual([input]);
  });
  test("Alphanumeric string", () => {
    expect(words("abc123ABC")).toEqual(["abc", "123", "ABC"]);
  });
  test("Unicode input string", () => {
    expect(words("👁👄👁okay then")).toEqual(["👁", "👄", "👁", "okay", "then"]);
  });
  test("Use regex pattern", () => {
    expect(words("abc123ABC", /[\x30-\x39]/g)).toEqual(["1", "2", "3"]);
  });
  test("Use regex pattern with no matches", () => {
    expect(words("ABC", /D/g)).toEqual([]);
  });
  test("Input is undefined", () => {
    expect(words(undefined)).toEqual(undefined);
  });
  test("Input is empty string", () => {
    expect(words("")).toEqual([]);
  });
});
