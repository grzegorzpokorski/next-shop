import type { NextRequest } from "next/server";
import { revalidateTag } from "next/cache";
import { env } from "@/lib/env.mjs";
import { TAGS } from "@/lib/constants";

export async function POST(request: NextRequest) {
  const cronSecret = request.headers.get("Authorization")?.split(" ")[1];
  const tag = request.nextUrl.searchParams.get("tag");

  if (cronSecret !== env.CRON_SECRET) {
    return new Response("Forbidden", { status: 403 });
  }

  if (!tag || !Object.values(TAGS).includes(tag))
    return new Response("Bad Request", { status: 400 });

  switch (tag) {
    case TAGS.cart:
      revalidateTag(TAGS.cart);
      break;
    case TAGS.categories:
      revalidateTag(TAGS.categories);
      break;
    case TAGS.pages:
      revalidateTag(TAGS.pages);
      break;
    case TAGS.products:
      revalidateTag(TAGS.products);
      break;
  }

  return new Response(null, { status: 204 });
}
