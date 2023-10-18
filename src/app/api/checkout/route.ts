import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { Stripe } from "stripe";
import { env } from "@/lib/env.mjs";
import { getCartById } from "@/lib/queries/cart/getCartById";

const stripe = new Stripe(env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-10-16",
  typescript: true,
});

export async function POST(request: NextRequest) {
  const host =
    request.headers.get("host") === "localhost:3000"
      ? "http://localhost:3000"
      : `https://${request.headers.get("host")}`;

  const cartId = request.cookies.get("cartId")?.value;

  if (!cartId) return new Response("cartId not provided", { status: 500 });

  try {
    const cart = await getCartById({ id: cartId });

    if (!cart || !cart.items)
      return new Response("cart does not exists", { status: 500 });

    const stripeLineItems = cart.items.flatMap((item) => {
      return item.product
        ? [
            {
              price_data: {
                unit_amount: item.product.price * 100,
                currency: item.product.currency,
                product_data: {
                  name: item.product.name,
                  images: [item.product.thumbnail.url],
                },
              },
              adjustable_quantity: {
                enabled: false,
              },
              quantity: item.quantity,
            },
          ]
        : [];
    });

    const session = await stripe.checkout.sessions.create({
      line_items: stripeLineItems,
      mode: "payment",
      shipping_address_collection: {
        allowed_countries: ["PL"],
      },
      phone_number_collection: {
        enabled: true,
      },
      success_url: `${host}/cart/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${host}/cart/canceled?session_id={CHECKOUT_SESSION_ID}`,
    });

    if (!session || !session.url) return new Response("", { status: 500 });

    return NextResponse.redirect(session.url, 303);
  } catch (err) {
    return NextResponse.json({ status: 500 });
  }
}
