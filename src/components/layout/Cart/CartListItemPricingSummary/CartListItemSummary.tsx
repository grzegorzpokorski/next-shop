import { formatPrice } from "@/utils/formatPrice";

type Props = {
  currency: string;
  price: number;
  quantity: number;
};

export const CartListItemPricingSummary = ({
  currency,
  price,
  quantity,
}: Props) => {
  return (
    <p className="text-sm flex flex-col items-end">
      <span className="font-medium">
        {formatPrice({
          currency: currency,
          price: price * quantity,
        })}
      </span>{" "}
      {quantity > 1 && (
        <>
          za sztukę{" "}
          {formatPrice({
            currency: currency,
            price: price,
          })}
        </>
      )}
    </p>
  );
};
