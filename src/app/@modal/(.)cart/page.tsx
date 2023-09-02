import { cookies } from "next/headers";
import { CartItemsList } from "@/components/layout/Cart/CartItemsList/CartItemsList";
import { CartModal } from "@/components/layout/Cart/CartModal/CartModal";
import { CartSummary } from "@/components/layout/Cart/CartSummary/CartSummary";
import { CloseCartButton } from "@/components/layout/Cart/CloseCartButton/CloseCartButton";
import { Heading } from "@/components/ui/Heading/Heading";
import { EmptyCartInfo } from "@/components/layout/Cart/EmptyCartInfo/EmptyCartInfo";
import { getCartById } from "@/lib/queries/getCartById";

export default async function Page() {
  const cookieStore = cookies();
  const cookieWithCartId = cookieStore.get("cartId");
  const cartId = cookieWithCartId?.value;

  if (!cookieWithCartId || !cartId) {
    return <EmptyCart />;
  }

  const cart = await getCartById({ id: cartId });
  if (!cart) return <EmptyCart />;

  return (
    <CartModal>
      <div className="flex flex-col h-full justify-between">
        <div className="flex flex-col w-full min-h-max">
          <div className="sticky top-0 flex py-4 px-3 md:px-8 items-center justify-between border-b bg-white/60 dark:bg-neutral-900/60 backdrop-blur-lg z-50">
            <Heading as="h2" size="2xl">
              Twój koszyk
            </Heading>
            <CloseCartButton />
          </div>
          {cart.items && cart.items.length > 0 ? (
            <CartItemsList items={cart.items} />
          ) : (
            <EmptyCartInfo />
          )}
        </div>
        {cart.items && cart.items.length > 0 && (
          <CartSummary
            total={{ amount: cart.totalValue, currency: "PLN" }}
            stickToTheBottom
          />
        )}
      </div>
    </CartModal>
  );
}

const EmptyCart = () => (
  <CartModal>
    <div className="flex flex-col h-full justify-between">
      <div className="flex flex-col w-full h-full">
        <div className="sticky top-0 flex py-4 px-3 md:px-8 items-center justify-between border-b bg-white/60 dark:bg-neutral-900/60 backdrop-blur-lg z-50">
          <Heading as="h2" size="2xl">
            Twój koszyk
          </Heading>
          <CloseCartButton />
        </div>
        <EmptyCartInfo />
      </div>
    </div>
  </CartModal>
);
