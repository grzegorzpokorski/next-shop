"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import { Button } from "@/components/ui/Button/Button";
import { addNewItemToCart } from "@/lib/actions";

type Props = {
  availableQuantity: number;
  productId: string;
};

export const AddToCart = ({ availableQuantity, productId }: Props) => {
  const [isPending, startTransition] = useTransition();
  const [block, setBlock] = useState(!Boolean(availableQuantity));
  const disabled = !Boolean(availableQuantity) || isPending;

  const addToCart = () => {
    if (disabled) return;

    startTransition(async () => {
      const currentItemQuantityInCart = await addNewItemToCart(productId);
      if (
        currentItemQuantityInCart &&
        currentItemQuantityInCart >= availableQuantity
      ) {
        setBlock(true);
      }
    });
  };

  if (block) {
    return (
      <Button variant="indigo" size="lg" asChild>
        <Link href="/cart">Edytuj ilość produktu w koszyku</Link>
      </Button>
    );
  }

  return (
    <Button
      variant="indigo"
      size="lg"
      onClick={addToCart}
      aria-disabled={disabled}
    >
      <FaPlus
        className={twMerge("mr-2", isPending && "motion-safe:animate-spin")}
        aria-hidden
      />
      Dodaj do koszyka
    </Button>
  );
};
