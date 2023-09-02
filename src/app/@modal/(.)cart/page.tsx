import { cookies } from "next/headers";
import { CartItemsList } from "@/components/layout/Cart/CartItemsList/CartItemsList";
import { CartModal } from "@/components/layout/Cart/CartModal/CartModal";
import { CartSummary } from "@/components/layout/Cart/CartSummary/CartSummary";
import { CloseCartButton } from "@/components/layout/Cart/CloseCartButton/CloseCartButton";
import { Heading } from "@/components/ui/Heading/Heading";
import { getAllProducts } from "@/lib/queries/getAllProducts";
import { EmptyCartInfo } from "@/components/layout/Cart/EmptyCartInfo/EmptyCartInfo";

export default async function Page() {
  const cookieStore = cookies();
  const cookieWithCartId = cookieStore.get("cartId");

  if (!cookieWithCartId) {
  }

  const { products } = await getAllProducts({ limit: 0, skip: 0 });

  return (
    <CartModal>
      <div className="flex flex-col h-full justify-between">
        <div className="flex flex-col w-full h-full">
          <div className="sticky top-0 flex py-4 px-3 md:px-8 items-center justify-between border-b bg-white/60 dark:bg-neutral-900/60 backdrop-blur-lg z-50">
            <Heading as="h2" size="2xl">
              Twój koszyk
            </Heading>
            <CloseCartButton />
          </div>
          {products.length > 0 ? (
            <CartItemsList products={products} />
          ) : (
            <EmptyCartInfo />
          )}
        </div>
        {products.length > 0 && (
          <CartSummary
            total={{ amount: 998, currency: "PLN" }}
            stickToTheBottom
          />
        )}
      </div>
    </CartModal>
  );
}
