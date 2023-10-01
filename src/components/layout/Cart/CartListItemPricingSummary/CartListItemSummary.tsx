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
  const totalPrice = formatPrice({
    currency: currency,
    price: price * quantity,
  });
  const unitPrice = formatPrice({
    currency: currency,
    price: price,
  });

  return (
    <p className="text-sm flex flex-col items-end">
      <span className="font-medium">{unitPrice}</span>
      {quantity > 1 && <>za sztukę {totalPrice}</>}
    </p>
  );
};
