type Props = {
  quantity: number;
};

export const CartListItemQuantitySummary = ({ quantity }: Props) => {
  return (
    <p className="text-sm">
      <span className="font-medium">Ilość w koszyku: </span>
      {quantity}
    </p>
  );
};
