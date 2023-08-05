import { twMerge } from "tailwind-merge";
import { formatPrice } from "@/utils/formatPrice";

type Props = {
  price: number;
  currency: string;
};

export const PriceTag = ({ price, currency }: Props) => {
  return (
    <p className={twMerge("flex-none rounded bg-indigo-600 p-2 text-white")}>
      {formatPrice({
        price,
        currency,
      })}
    </p>
  );
};
