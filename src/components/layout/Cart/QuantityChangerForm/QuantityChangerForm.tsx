"use client";

import { useOptimistic as useOptimistic } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button/Button";
import { updateItemQuantity } from "@/lib/actions";

type Props = {
  itemId: string;
  quantity: number;
  maxQuantity: number;
};

export const QuantityChangerForm = ({
  itemId,
  quantity,
  maxQuantity,
}: Props) => {
  const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(quantity);
  const router = useRouter();

  return (
    <form className="flex items-center gap-1">
      <Button
        size="icon-sm"
        variant="outline"
        formAction={async () => {
          if (optimisticQuantity > 1) {
            setOptimisticQuantity(optimisticQuantity - 1);
            await updateItemQuantity({
              itemId,
              quantity: optimisticQuantity - 1,
            });
            router.refresh();
          }
        }}
        aria-disabled={optimisticQuantity === 1}
      >
        <span className="sr-only">zwiększ ilość</span>
        <FaMinus aria-hidden />
      </Button>
      <span className="px-2 text-sm">
        {optimisticQuantity} z {maxQuantity}{" "}
        <span className="hidden md:inline">dostępnych</span>
      </span>
      <Button
        size="icon-sm"
        variant="outline"
        formAction={async () => {
          if (optimisticQuantity < maxQuantity) {
            setOptimisticQuantity(optimisticQuantity + 1);
            await updateItemQuantity({
              itemId,
              quantity: optimisticQuantity + 1,
            });
            router.refresh();
          }
        }}
        aria-disabled={optimisticQuantity >= maxQuantity}
      >
        <span className="sr-only">zwiększ ilość</span>
        <FaPlus aria-hidden />
      </Button>
    </form>
  );
};
