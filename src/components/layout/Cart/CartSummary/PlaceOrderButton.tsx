"use client";

import { Button } from "@/components/ui/Button/Button";

type Props = {
  invalidProductsAmount: boolean;
};

export const PlaceOrderButton = ({ invalidProductsAmount }: Props) => {
  return (
    <Button
      variant="indigo"
      className="lg:order-2"
      type="submit"
      aria-disabled={invalidProductsAmount}
      onClick={(e) => invalidProductsAmount && e.preventDefault()}
    >
      Złóż zamówienie
    </Button>
  );
};
