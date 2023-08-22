import { CartItemsList } from "@/components/layout/Cart/CartItemsList/CartItemsList";
import { CartModal } from "@/components/layout/Cart/CartModal/CartModal";
import { CartSummary } from "@/components/layout/Cart/CartSummary/CartSummary";
import { CloseCartButton } from "@/components/layout/Cart/CloseCartButton/CloseCartButton";
import { Heading } from "@/components/ui/Heading/Heading";
import { getAllProducts } from "@/lib/queries/getAllProducts";

export default async function Page() {
  const { products } = await getAllProducts({ limit: 5, skip: 0 });
  return (
    <CartModal>
      <div className="w-full max-w-screen-sm fixed top-0 right-0 bottom-0 bg-white dark:bg-neutral-900 overflow-y-auto z-50">
        <div className="sticky top-0 flex py-4 px-3 md:px-8 items-center justify-between border-b bg-white/60 dark:bg-neutral-900/60 backdrop-blur-lg z-50">
          <Heading as="h2" size="2xl">
            Twój koszyk
          </Heading>
          <CloseCartButton />
        </div>
        <CartItemsList products={products} />
        <CartSummary total={{ amount: 998, currency: "PLN" }} sticky />
      </div>
    </CartModal>
  );
}
