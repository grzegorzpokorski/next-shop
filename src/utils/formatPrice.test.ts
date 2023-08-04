import { describe, expect, it } from "vitest";
import { formatPrice } from "./formatPrice";

describe("should", () => {
  it.each([
    { input: { price: 100, currency: "PLN" }, expected: "100,00 zł" },
    { input: { price: 0, currency: "PLN" }, expected: "0,00 zł" },
    { input: { price: -5, currency: "PLN" }, expected: "-5,00 zł" },
    { input: { price: 1.06, currency: "PLN" }, expected: "1,06 zł" },
    { input: { price: -1.02, currency: "PLN" }, expected: "-1,02 zł" },
    { input: { price: -0.5, currency: "PLN" }, expected: "-0,50 zł" },
    { input: { price: NaN, currency: "PLN" }, expected: "NaN zł" },
    { input: { price: 1.003, currency: "PLN" }, expected: "1,00 zł" },
    { input: { price: 1.005, currency: "PLN" }, expected: "1,01 zł" },
    { input: { price: 1.007, currency: "PLN" }, expected: "1,01 zł" },
  ])(`formatPrice($input) return $expected`, ({ input, expected }) => {
    expect(formatPrice(input)).toEqual(expected);
  });
});
