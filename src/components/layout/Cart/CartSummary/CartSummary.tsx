import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { Button } from "@/components/ui/Button/Button";
import { formatPrice } from "@/utils/formatPrice";

type Props = {
  total: {
    amount: number;
    currency: string;
  };
  sticky?: boolean;
};

export const CartSummary = ({ total, sticky }: Props) => {
  return (
    <div
      className={twMerge(
        sticky && "sticky",
        "bottom-0 left-0 right-0 p-4 lg:p-8 landscape:p-n8 flex flex-col justify-end bg-white/50 dark:bg-black/70 border-t backdrop-blur-lg",
        "@container",
      )}
    >
      <div className="flex justify-between text-base font-medium">
        <p>Razem do zapłaty:</p>
        <p>
          {formatPrice({
            currency: total.currency,
            price: total.amount,
          })}
        </p>
      </div>
      <p className="text-primary/80 text-xs mt-1">
        Koszty dostawy zostaną obliczone w kolejnym kroku.
      </p>
      <div className="mt-6 grid @sm:grid-cols-1 @md:grid-cols-2 gap-2 text-center">
        <Button variant="indigo" className="lg:order-2">
          Złóż zamówienie
        </Button>
        <Button asChild variant="outline" className="lg:order-1">
          <Link href="/products">
            Kontynuuj zakupy<span aria-hidden="true"> →</span>
          </Link>
        </Button>
      </div>
    </div>
  );
};
