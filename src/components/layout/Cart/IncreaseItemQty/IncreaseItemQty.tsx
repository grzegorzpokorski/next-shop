"use client";

import { useTransition } from "react";
import { FaPlus } from "react-icons/fa";
import { Button } from "@/components/ui/Button/Button";
import { updateItemQuantity } from "@/lib/actions";

type Props = {
  itemId: string;
  quantity: number;
  quantityAvailable: number;
};

export const IncreaseItemQty = ({
  itemId,
  quantity,
  quantityAvailable,
}: Props) => {
  const [isPending, startTransition] = useTransition();
  const disabled = quantityAvailable === quantity || isPending;

  return (
    <Button
      size="icon-sm"
      variant="outline"
      onClick={() => {
        if (quantity < quantityAvailable) {
          startTransition(() =>
            updateItemQuantity({ itemId, quantity: quantity + 1 }),
          );
        }
      }}
      aria-disabled={disabled}
    >
      <span className="sr-only">zwiększ ilość</span>
      <FaPlus aria-hidden />
    </Button>
  );
};
