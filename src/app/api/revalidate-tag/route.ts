import type { NextRequest } from "next/server";
import { revalidateTag } from "next/cache";
import { verifyWebhookSignature } from "@hygraph/utils";
import { env } from "@/lib/env.mjs";
import { TAGS } from "@/lib/constants";

export async function POST(request: NextRequest) {
  const gcmsSignature = request.headers.get("gcms-signature");

  if (!gcmsSignature) {
    return new Response("Forbidden", { status: 403 });
  }

  const json: unknown = await request.json();

  console.log(json);

  if (
    !json ||
    !(json instanceof Object && "data" in json) ||
    !(json.data instanceof Object && "__typename" in json.data)
  ) {
    return Response.json({ status: 204 });
  }

  const isValid = verifyWebhookSignature({
    body: json,
    signature: gcmsSignature,
    secret: env.CRON_SECRET,
  });

  console.log("isValid", isValid);

  if (!isValid) {
    return Response.json({ status: 204 });
  }

  switch (json.data.__typename) {
    case TAGS.cart:
      revalidateTag(TAGS.cart);
      console.log("revalidateTag(TAGS.cart);");
      break;
    case "Category":
      revalidateTag(TAGS.categories);
      console.log("revalidateTag(TAGS.categories);");
      break;
    case "Page":
      revalidateTag(TAGS.pages);
      console.log("revalidateTag(TAGS.pages);");
      break;
    case "Product":
      revalidateTag(TAGS.products);
      console.log("revalidateTag(TAGS.products);");
      break;
  }

  console.log("revalidation done");

  return new Response(null, { status: 204 });
}
