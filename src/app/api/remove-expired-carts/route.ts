import { env } from "@/lib/env.mjs";
import { deleteCartsByDateTime } from "@/lib/queries/deleteCartsByDateTime";

export async function GET(request: Request) {
  const cronSecret = request.headers.get("Authorization")?.split(" ")[1];

  if (cronSecret !== env.CRON_SECRET) {
    return new Response("Forbidden", { status: 403 });
  }

  const currentDate = new Date();
  const expirationBoundaryDate = new Date(
    currentDate.setDate(currentDate.getDate() - env.COOKIE_MAX_AGE_IN_DAYS),
  );

  try {
    await deleteCartsByDateTime({
      dateTime: expirationBoundaryDate.toISOString(),
    });
    return new Response("OK", { status: 200 });
  } catch (e) {
    return new Response("Error", { status: 500 });
  }
}
