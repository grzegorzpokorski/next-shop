"use client";

import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import { useAddToCart } from "./useAddToCart";
import { Button } from "@/components/ui/Button/Button";

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
  const { isVisibleLinkToCart, addToCart, isDisabled, isPending } =
    useAddToCart({
      availableQuantity,
      productId,
      currentQuantityInCart,
    });

  if (isVisibleLinkToCart) {
    return (
      <Button
        variant="indigo"
        size="lg"
        asChild
        data-testid="add-to-cart-button"
      >
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
      data-testid="add-to-cart-button"
    >
      <FaPlus
        className={twMerge("mr-2", isPending && "motion-safe:animate-spin")}
        aria-hidden
      />
      Dodaj do koszyka
    </Button>
  );
};
