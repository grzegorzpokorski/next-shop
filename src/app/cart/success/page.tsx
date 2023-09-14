import { FaCheckCircle } from "react-icons/fa";
import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";
import { DeteteCartCookieOnClient } from "./DeteteCartCookieOnClient";
import { Container } from "@/components/ui/Container/Container";
import { Heading } from "@/components/ui/Heading/Heading";
import { deleteCartById } from "@/lib/queries/deleteCartById";
import { updateProdcutAvailableQuantity } from "@/lib/queries/updateProductAvailableQuantity";
import { TAGS } from "@/lib/constants";

export default async function Page() {
  // TODO:
  // display order summary
  // decrease available items
  // remove cart from db
  // destroy cart stored in cookie

  const cookieStore = cookies();
  const cookieWithCartId = cookieStore.get("cartId");
  const cartId = cookieWithCartId?.value;

  if (!cartId) throw new Error();

  const cart = await deleteCartById({ id: cartId });

  if (!cart) throw new Error();

  if (cart.items) {
    try {
      const result = await Promise.all(
        cart.items.flatMap((item) => {
          return item.product
            ? updateProdcutAvailableQuantity({
                productId: item.product.id,
                quantity: item.product.quantityAvailable - item.quantity,
              })
            : [];
        }),
      );

      if (!result) throw new Error();

      revalidateTag(TAGS.cart);
      revalidateTag(TAGS.products);
    } catch (e) {
      throw new Error();
    }
  }

  return (
    <>
      <DeteteCartCookieOnClient />
      <Container as="section" aria-labelledby="title">
        <div className="mx-auto my-4 flex max-w-xl flex-col gap-4 rounded border bg-white p-8 dark:bg-black md:p-12">
          <p className="flex gap-2 items-center">
            <FaCheckCircle aria-hidden className="text-green-500 text-xl" />
            Dziękujemy!
          </p>
          <Heading as="h1" size="3xl" id="title">
            Twoja płatność powiodła się!
          </Heading>
          <p className="my-2">
            Twoje zamówienie zostało przyjęte i wkrótce zostanie wysłane.
          </p>
        </div>
      </Container>
    </>
  );
}
