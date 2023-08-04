type Args = {
  price: number;
  currency: string;
};

export const formatPrice = ({ price, currency }: Args): string => {
  return new Intl.NumberFormat("pl-PL", {
    currency: currency,
    style: "currency",
    minimumFractionDigits: 2,
  }).format(price);
};
