import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  console.log(request.headers);
  return new Response(request.headers.get("host"), { status: 200 });
}
