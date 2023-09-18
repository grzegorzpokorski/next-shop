import { FaCheckCircle } from "react-icons/fa";
import { cookies } from "next/headers";
import { DeteteCartCookieOnClient } from "./DeteteCartCookieOnClient";
import { Container } from "@/components/ui/Container/Container";
import { Heading } from "@/components/ui/Heading/Heading";
import { deleteCartById } from "@/lib/queries/deleteCartById";
import { updateProdcutById } from "@/lib/queries/updateProductById";
import { publishProducts } from "@/lib/queries/publishProducts";

export default async function Page() {
  const cookieStore = cookies();
  const cookieWithCartId = cookieStore.get("cartId");
  const cartId = cookieWithCartId?.value;

  if (!cartId) throw new Error("There is no cartId provided.");

  const cart = await deleteCartById({ id: cartId });
  if (!cart) throw new Error("Invalid cartId provided.");

  if (cart.items) {
    try {
      const updatedProducts = await Promise.all(
        cart.items.flatMap((item) => {
          return item.product
            ? updateProdcutById({
                productId: item.product.id,
                data: {
                  quantityAvailable:
                    item.product.quantityAvailable - item.quantity,
                },
              })
            : [];
        }),
      );

      if (!updatedProducts) throw new Error();

      const updatedProductIds = updatedProducts.flatMap((product) =>
        product !== null ? [product.id] : [],
      );
      const publishedProducts = await publishProducts({
        ids: updatedProductIds,
      });

      if (!publishedProducts) throw new Error();
    } catch (e) {
      console.log(e);
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
