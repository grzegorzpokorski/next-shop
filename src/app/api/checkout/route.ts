import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { Stripe } from "stripe";
import { env } from "@/lib/env.mjs";
import { getCartById } from "@/lib/queries/getCartById";
import { siteUrl } from "@/lib/constants";
import { notEmpty } from "@/lib/types";

const stripe = new Stripe(env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-08-16",
  typescript: true,
});

export async function POST(request: NextRequest) {
  const host =
    request.headers.get("host") === "localhost:3000"
      ? "http://localhost:3000"
      : `https://${request.headers.get("host")}` ?? siteUrl;

  const cookieStore = cookies();
  const cookieWithCartId = cookieStore.get("cartId");
  const cartId = cookieWithCartId?.value;

  if (!cartId) return new Response("brak id kosza", { status: 500 });

  try {
    const cart = await getCartById({ id: cartId });

    if (!cart || !cart.items)
      return new Response("brak kosza", { status: 500 });

    const items = cart.items.map((item) => {
      return (
        item.product && {
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
        }
      );
    });

    const session = await stripe.checkout.sessions.create({
      line_items: items.filter(notEmpty),
      // line_items: [
      //   {
      //     price_data: {
      //       unit_amount: 2137,
      //       currency: "PLN",
      //       product_data: {
      //         name: "title",
      //         description: "desc",
      //         images: [
      //           "https://next-shop-gp.vercel.app/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2Foutput%3Dformat%3Awebp%2FvUonHzwzS4iJ65NLomjm&w=640&q=75",
      //         ],
      //       },
      //     },
      //     adjustable_quantity: {
      //       enabled: false,
      //     },
      //     quantity: 1,
      //   },
      // ],
      mode: "payment",
      shipping_address_collection: {
        allowed_countries: ["PL"],
      },
      phone_number_collection: {
        enabled: true,
      },
      success_url: `${host}/cart/success`,
      cancel_url: `${host}/cart/canceled`,
    });

    // console.log(session);
    if (!session || !session.url) return new Response("", { status: 500 });
    // console.log(session.url);
    return NextResponse.redirect(session.url, 303);
  } catch (err) {
    console.log(err);
    return new Response("err", { status: 500 });
  }
  // const host = request.headers.get("host") ?? siteUrl;
  // return new Response(host, { status: 200 });
}
