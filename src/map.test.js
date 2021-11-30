import map from "./map";

describe("map", () => {
  test("Give array of integers and identity iteratee-function", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8];
    expect(map(array, (value) => value)).toEqual(array);
  });
  test("Give array of integers and simple iteratee-function", () => {
    const fewInts = [1, 2, 3, 4];

    const times2Ints = [2, 4, 6, 8];
    expect(map(fewInts, (value) => value * 2)).toEqual(times2Ints);

    const power2Ints = [1, 4, 9, 16];
    expect(map(fewInts, (value) => value ** 2)).toEqual(power2Ints);

    const words = ["foo", "bar", "hello", "world"];
    const firstLetters = ["f", "b", "h", "w"];
    // Map by taking first character from each word.
    expect(map(words, (value) => value[0])).toEqual(firstLetters);
  });
  test("Give an empty array", () => {
    expect(map([], (value) => value)).toEqual([]);
  });
  test("Give undefined array", () => {
    expect(map(undefined, (value) => value)).toEqual(undefined);
  });
  test("Give undefined iteratee", () => {
    expect(map([1, 2, 3], undefined)).toEqual(undefined);
  });
  test("Predicate function has the wrong interface", () => {
    expect(map([1, 2, 3], () => true)).toEqual([true, true, true]);
    expect(map([1, 2, 3], (first, second) => 0)).toEqual([0, 0, 0]);
  });
});
