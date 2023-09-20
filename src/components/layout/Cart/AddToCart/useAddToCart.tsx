"use client";

import { useState, useTransition } from "react";
import { addNewItemToCart } from "@/lib/actions";

type Args = {
  availableQuantity: number;
  productId: string;
  currentQuantityInCart: number;
};

export const useAddToCart = ({
  availableQuantity,
  productId,
  currentQuantityInCart,
}: Args) => {
  const [isPending, startTransition] = useTransition();
  const [visibleButtonToCart, setVisibleButtonToCart] = useState(
    currentQuantityInCart > 0 && availableQuantity > 0,
  );
  const isDisabled = availableQuantity === 0 || isPending;

  const addToCart = () => {
    if (isDisabled) return;
    startTransition(async () => {
      const currentItemQuantityInCart = await addNewItemToCart(productId);
      const isProductAddedToCart = currentItemQuantityInCart?.items.some(
        (item) => item.product?.id === productId,
      );
      if (isProductAddedToCart) {
        setVisibleButtonToCart(true);
      }
    });
  };

  return { visibleButtonToCart, addToCart, isDisabled, isPending };
};
