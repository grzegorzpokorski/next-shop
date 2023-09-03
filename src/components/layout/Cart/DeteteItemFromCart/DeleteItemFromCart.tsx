"use client";

import { useTransition } from "react";
import { FaPlus } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import { Button } from "@/components/ui/Button/Button";
import { removeItemFromCart } from "@/lib/actions";

type Props = {
  itemId: string;
};

export const DeleteItemFromCart = ({ itemId }: Props) => {
  const [isPending, startTransition] = useTransition();

  return (
    <Button
      size="icon-sm"
      variant="ghost"
      onClick={() => {
        startTransition(() => removeItemFromCart(itemId));
      }}
      aria-disabled={isPending}
    >
      <span className="sr-only">
        {isPending ? "usuwanie" : "usuń"} z koszyka
      </span>
      <FaPlus
        aria-hidden
        className={twMerge(
          !isPending && "rotate-45",
          isPending && "motion-safe:animate-spin",
        )}
      />
    </Button>
  );
};
