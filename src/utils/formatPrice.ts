const CURRENCY_FORMATTER = new Intl.NumberFormat("pl-PL", {
  currency: "PLN",
  style: "currency",
});

export const formatPrice = (number: number): string =>
  CURRENCY_FORMATTER.format(number);
