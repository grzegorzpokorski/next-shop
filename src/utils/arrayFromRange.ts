export const arrayFromRange = (start: number, end: number) =>
  end > start
    ? Array.from({ length: end - start }, (_, idx) => idx + start)
    : Array.from({ length: start - end }, (_, idx) => start - idx);
