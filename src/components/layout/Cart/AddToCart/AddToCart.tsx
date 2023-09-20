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
  currentQuantityInCart: number;
};

export const AddToCart = ({
  availableQuantity,
  productId,
  currentQuantityInCart,
}: Props) => {
  const [isPending, startTransition] = useTransition();
  const [visibleButtonToCart, setVisibleButtonToCart] = useState(
    currentQuantityInCart === availableQuantity && availableQuantity > 0,
  );
  const isDisabled =
    availableQuantity === 0 ||
    isPending ||
    currentQuantityInCart >= availableQuantity;

  const addToCart = () => {
    if (isDisabled) return;

    startTransition(async () => {
      const currentItemQuantityInCart = await addNewItemToCart(productId);
      if (
        currentItemQuantityInCart &&
        currentItemQuantityInCart >= availableQuantity
      ) {
        setVisibleButtonToCart(true);
      }
    });
  };

  if (visibleButtonToCart) {
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
      aria-disabled={isDisabled}
    >
      <FaPlus
        className={twMerge("mr-2", isPending && "motion-safe:animate-spin")}
        aria-hidden
      />
      Dodaj do koszyka
    </Button>
  );
};
