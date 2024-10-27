import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { cookies } from "next/headers";
import { notFound, redirect } from "next/navigation";
import Stripe from "stripe";
import { DeteteCartCookieOnClient } from "./DeteteCartCookieOnClient";
import { env } from "@/lib/env.mjs";
import { Container } from "@/components/ui/Container/Container";
import { Heading } from "@/components/ui/Heading/Heading";
import { deleteCartById } from "@/lib/queries/cart/deleteCartById";
import { updateProdcutById } from "@/lib/queries/products/updateProductById";
import { publishProducts } from "@/lib/queries/products/publishProducts";
import { formatPrice } from "@/utils/formatPrice";

export default async function Page(props: {
  searchParams: Promise<{ session_id?: string | undefined | string[] }>;
}) {
  const searchParams = await props.searchParams;
  if (typeof searchParams.session_id !== "string") {
    redirect("/");
  }

  const stripe = new Stripe(env.STRIPE_SECRET_KEY, {
    apiVersion: "2024-04-10",
    typescript: true,
  });

  const checkout = await stripe.checkout.sessions
    .retrieve(searchParams.session_id, {
      expand: ["invoice", "line_items"],
      // expand: ["invoice", "line_items", "line_items.data.discounts"],
    })
    .catch((err) => {
      console.error(err);
      notFound();
    });

  const cookieStore = await cookies();
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
            Zamówienie zostało przyjęte i wkrótce zostanie wysłane. Poniżej
            podsumowanie zamówienia:
          </p>
          <table className="table-auto">
            <tbody className="">
              <tr className="border-b last:border-none">
                <td className="py-1.5">Kupujący:</td>
                <td className="py-1.5">{checkout.customer_details?.name}</td>
              </tr>
              <tr className="border-b last:border-none">
                <td className="py-1.5">Adres:</td>
                <td className="py-1.5">
                  {checkout.customer_details?.address?.line1}
                  {checkout.customer_details?.address?.line2},{" "}
                  {checkout.customer_details?.address?.postal_code}{" "}
                  {checkout.customer_details?.address?.city}
                </td>
              </tr>
              <tr className="border-b last:border-none">
                <td className="py-1.5">Email:</td>
                <td className="py-1.5">{checkout.customer_details?.email}</td>
              </tr>
              <tr className="border-b last:border-none">
                <td className="py-1.5">Numer telefonu:</td>
                <td className="py-1.5">{checkout.customer_details?.phone}</td>
              </tr>
              <tr className="border-b last:border-none">
                <td className="py-1.5">Wartość zamówienia:</td>
                <td className="py-1.5">
                  {formatPrice({
                    price: (checkout.amount_total ?? 0) / 100,
                    currency: checkout.currency ?? "PLN",
                  })}
                </td>
              </tr>
              <tr className="border-b last:border-none">
                <td className="py-1.5">Status płatności:</td>
                <td className="py-1.5 flex gap-1 items-center">
                  {checkout.payment_status === "paid" ? (
                    <>
                      <FaCheckCircle aria-hidden className="text-green-500" />{" "}
                      opłacone
                    </>
                  ) : (
                    <>
                      <FaTimesCircle aria-hidden className="text-red-500" />{" "}
                      nieopłacone
                    </>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
    </>
  );
}
