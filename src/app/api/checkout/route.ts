import { NextResponse } from "next/server";
import { Stripe } from "stripe";
import { siteUrl } from "@/lib/constants";
import { env } from "@/lib/env.mjs";

const stripe = new Stripe(env.STRIPE_SECRET_KEY, { apiVersion: "2023-08-16" });

export async function POST() {
  console.log("hey");
  // const cookieStore = cookies();
  // const cookieWithCartId = cookieStore.get("cartId");
  // const cartId = cookieWithCartId?.value;

  // if (!cartId) return new Response("", { status: 500 });

  try {
    // const cart = await getCartById({ id: cartId });

    // if (!cart || !cart.items) return new Response("", { status: 500 });

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            unit_amount: 2137,
            currency: "PLN",
            product_data: {
              name: "title",
              description: "desc",
              images: [
                "https://next-shop-gp.vercel.app/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2Foutput%3Dformat%3Awebp%2FvUonHzwzS4iJ65NLomjm&w=640&q=75",
              ],
            },
          },
          adjustable_quantity: {
            enabled: false,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${siteUrl}/cart/?success=true`,
      cancel_url: `${siteUrl}/cart/?canceled=true`,
    });

    console.log(session);
    if (!session || !session.url) return new Response("", { status: 500 });

    return NextResponse.redirect(session.url);
  } catch (err) {
    console.log(err);
    return new Response("", { status: 500 });
  }
  // const host = request.headers.get("host") ?? siteUrl;
  // return new Response(host, { status: 200 });
}

// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     try {
//       // Create Checkout Sessions from body params.
//       const session = await stripe.checkout.sessions.create({
//         line_items: [
//           {
//             // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
//             price: "{{PRICE_ID}}",
//             quantity: 1,
//           },
//         ],
//         mode: "payment",
//         success_url: `${req.headers.origin}/?success=true`,
//         cancel_url: `${req.headers.origin}/?canceled=true`,
//       });
//       res.redirect(303, session.url);
//     } catch (err) {
//       res.status(err.statusCode || 500).json(err.message);
//     }
//   } else {
//     res.setHeader("Allow", "POST");
//     res.status(405).end("Method Not Allowed");
//   }
// }
