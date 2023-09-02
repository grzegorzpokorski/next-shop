"use client";

import { useTransition } from "react";
import { FaPlus } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import { Button } from "@/components/ui/Button/Button";
import { addNewItemToCart } from "@/lib/actions";

type Props = {
  available: boolean;
  productId: string;
};

export const AddToCart = ({ available, productId }: Props) => {
  const [isPending, startTransition] = useTransition();

  return (
    <Button
      variant="indigo"
      size="lg"
      onClick={() => {
        if (available) {
          startTransition(() => addNewItemToCart(productId));
        }
      }}
      aria-disabled={!available}
    >
      <FaPlus
        className={twMerge("mr-2", isPending && "motion-safe:animate-spin")}
        aria-hidden
      />

      {isPending ? "Dodawanie do koszyka" : "Dodaj do koszyka"}
    </Button>
  );
};
