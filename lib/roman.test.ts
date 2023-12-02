import { roman2arabic } from "./roman";

type TestCase = [string, number];
describe("Roman to latin", () => {
  (
    [
      ["I", 1],
      ["II", 2],
      ["III", 3],
      ["IV", 4],
      ["V", 5],
      ["VI", 6],
      ["IX", 9],
      ["X", 10],
      ["XIX", 19],
      ["XX", 20],
      ["XXIX", 29],
      ["XL", 40],
      ["L", 50],
      ["XC", 90],
      ["C", 100],
      ["CV", 105],
      ["CCC", 300],
      ["M", 1000],
      ["MMML", 3050],
    ] as TestCase[]
  ).forEach(([roman, latin]) => {
    it(`rzymskie ${roman} to ${latin}`, () => {
      expect(roman2arabic(roman)).toEqual(latin);
    });
  });

  it("should throw error, when at least one character is incorrect", () => {
    expect(() => roman2arabic("XZOP")).toThrow(
      new Error("Unknown character: P"),
    );
  });
});
