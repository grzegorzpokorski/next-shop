import { describe, expect, it } from "vitest";
import { arrayFromRange } from "./arrayFromRange";

describe("utils/", () => {
  describe("arrayFromRange", () => {
    it.each([
      { start: -10, end: -2, expected: [-10, -9, -8, -7, -6, -5, -4, -3] },
      { start: -5, end: 5, expected: [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4] },
      { start: 2, end: -3, expected: [2, 1, 0, -1, -2] },
      { start: 0, end: 1, expected: [0] },
      { start: 0, end: 10, expected: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
      { start: 10, end: 11, expected: [10] },
      { start: 10, end: 15, expected: [10, 11, 12, 13, 14] },
    ])(
      `arrayFromRange($start, $end) return $expected`,
      ({ start, end, expected }) => {
        expect(arrayFromRange(start, end)).toEqual(expected);
      },
    );
  });
});
