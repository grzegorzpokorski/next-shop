import { describe, expect, it } from "vitest";
import { formatPrice } from "./formatPrice";

describe("should", () => {
  it.each([
    { input: 100, expected: "100,00 zł" },
    { input: 0, expected: "0,00 zł" },
    { input: -5, expected: "-5,00 zł" },
    { input: 1.06, expected: "1,06 zł" },
    { input: -1.02, expected: "-1,02 zł" },
    { input: -0.5, expected: "-0,50 zł" },
    { input: NaN, expected: "NaN zł" },
    { input: 1.003, expected: "1,00 zł" },
    { input: 1.005, expected: "1,01 zł" },
    { input: 1.007, expected: "1,01 zł" },
  ])(`formatPrice($input) return $expected`, ({ input, expected }) => {
    expect(formatPrice(input)).toEqual(expected);
  });
});
