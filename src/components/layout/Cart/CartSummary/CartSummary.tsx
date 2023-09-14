import { twMerge } from "tailwind-merge";
import { Button } from "@/components/ui/Button/Button";
import { formatPrice } from "@/utils/formatPrice";
import { Skeleton } from "@/components/ui/Skeleton/Skeleton";

type Props = {
  total: {
    amount: number;
    currency: string;
  };
  stickToTheBottom?: boolean;
  modal?: boolean;
};

export const CartSummary = ({ total, stickToTheBottom, modal }: Props) => {
  return (
    <div
      className={twMerge(
        stickToTheBottom && "sticky ",
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
      <form
        className="mt-6 grid @sm:grid-cols-1 @md:grid-cols-2 gap-2 text-center"
        action="/api/checkout"
        method="POST"
      >
        <Button variant="indigo" className="lg:order-2" type="submit">
          Złóż zamówienie
        </Button>
        <Button asChild variant="outline" className="lg:order-1">
          {modal ? (
            <a href="/cart">Edytuj koszyk</a>
          ) : (
            <a href="/products">Kontynuuj zakupy</a>
          )}
        </Button>
      </form>
    </div>
  );
};

export const CartSummarySkeleton = ({
  stickToTheBottom,
}: {
  stickToTheBottom?: boolean;
}) => {
  return (
    <div
      className={twMerge(
        stickToTheBottom && "sticky ",
        "bottom-0 left-0 right-0 p-4 lg:p-8 landscape:p-n8 flex flex-col justify-end bg-white/50 dark:bg-black/70 border-t backdrop-blur-lg",
        "@container",
      )}
    >
      <div className="flex justify-between text-base font-medium">
        <Skeleton className="h-6 w-32" />
        <Skeleton className="h-6 w-16" />
      </div>
      <Skeleton className="h-4 w-[45%] mt-1" />
      <div className="mt-6 grid @sm:grid-cols-1 @md:grid-cols-2 gap-2 text-center">
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
      </div>
    </div>
  );
};
