"use client";

import { useTransition } from "react";
import { FaMinus } from "react-icons/fa";
import { Button } from "@/components/ui/Button/Button";
import { updateItemQuantity } from "@/lib/actions";

type Props = {
  itemId: string;
  quantity: number;
};

export const DecreaseItemQty = ({ itemId, quantity }: Props) => {
  const [isPending, startTransition] = useTransition();
  const disabled = quantity === 1 || isPending;

  return (
    <Button
      size="icon-sm"
      variant="outline"
      onClick={() => {
        if (quantity > 1) {
          startTransition(() =>
            updateItemQuantity({ itemId, quantity: quantity - 1 }),
          );
        }
      }}
      aria-disabled={disabled}
    >
      <span className="sr-only">zmniejsz ilość</span>
      <FaMinus aria-hidden />
    </Button>
  );
};
