import { cookies } from "next/headers";
import { CartModal } from "@/components/layout/Cart/CartModal/CartModal";
import { CartSummary } from "@/components/layout/Cart/CartSummary/CartSummary";
import { CloseButton } from "@/components/layout/Cart/CloseButton/CloseButton";
import { Heading } from "@/components/ui/Heading/Heading";
import { EmptyCartInfo } from "@/components/layout/Cart/EmptyCartInfo/EmptyCartInfo";
import { getCartById } from "@/lib/queries/cart/getCartById";
import { CartItemsTemplate } from "@/components/templates/CartItemsTemplate/CartItemsTemplate";

export default async function Page() {
  const cookieStore = cookies();
  const cookieWithCartId = cookieStore.get("cartId");
  const cartId = cookieWithCartId?.value;

  if (!cookieWithCartId || !cartId) {
    return <EmptyCart />;
  }

  const cart = await getCartById({ id: cartId });

  if (!cart) return <EmptyCart />;

  const invalidProductsAmount = cart.items.some(
    (item) => item.quantity > (item.product?.quantityAvailable ?? 0),
  );

  return (
    <CartModal>
      <div className="flex flex-col h-full justify-between">
        <div className="flex flex-col w-full min-h-max">
          <div className="sticky top-0 flex py-4 px-3 md:px-8 items-center justify-between border-b bg-white/60 dark:bg-neutral-900/60 backdrop-blur-lg z-50">
            <Heading as="h2" size="2xl">
              Twój koszyk
            </Heading>
            <CloseButton />
          </div>
          {cart.items && cart.items.length > 0 ? (
            <CartItemsTemplate items={cart.items} modal />
          ) : (
            <EmptyCartInfo />
          )}
        </div>
        {cart.items && cart.items.length > 0 && (
          <CartSummary
            total={{ amount: cart.totalValue, currency: "PLN" }}
            stickToTheBottom
            modal
            invalidProductsAmount={invalidProductsAmount}
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
          <CloseButton />
        </div>
        <EmptyCartInfo />
      </div>
    </div>
  </CartModal>
);
