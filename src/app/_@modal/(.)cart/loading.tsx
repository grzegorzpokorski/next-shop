import { CartModal } from "@/components/layout/Cart/CartModal/CartModal";
import { CartSummarySkeleton } from "@/components/layout/Cart/CartSummary/CartSummary";
import { Skeleton } from "@/components/ui/Skeleton/Skeleton";

export default function Page() {
  return (
    <div role="status">
      <CartModal>
        <div className="flex flex-col h-full justify-between">
          <div className="flex flex-col w-full min-h-max">
            <div className="sticky top-0 flex py-4 px-3 md:px-8 items-center justify-between border-b bg-white/60 dark:bg-neutral-900/60 backdrop-blur-lg z-50">
              <Skeleton className="w-48 h-8" />
              <Skeleton className="w-11 h-11" />
            </div>
          </div>
          <CartSummarySkeleton />
        </div>
      </CartModal>
    </div>
  );
}
