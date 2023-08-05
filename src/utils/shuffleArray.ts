export const shuffleArray = <T>({ unshuffled }: { unshuffled: Array<T> }) => {
  return unshuffled
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
};
