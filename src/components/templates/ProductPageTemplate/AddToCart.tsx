"use client";

import { useTransition } from "react";
import { FaPlus } from "react-icons/fa";
import { Button } from "@/components/ui/Button/Button";
import { addNewItemToCart } from "@/lib/actions";

type Props = {
  productId: string;
};

export const AddToCart = ({ productId }: Props) => {
  const [isPending, startTransition] = useTransition();

  return (
    <Button
      variant="indigo"
      size="lg"
      onClick={() => startTransition(() => addNewItemToCart(productId))}
    >
      <FaPlus className="mr-2" aria-hidden />
      {isPending ? "Dodawanie do koszyka" : "Dodaj do koszyka"}
    </Button>
  );
};
