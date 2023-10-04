import type { TypedDocumentString } from "@/lib/generated/graphql";
import { env } from "@/lib/env.mjs";

const endpoint = env.HYGRAPH_URL;

type GraphQlError = {
  message: string;
};
type GraphQlErrorRespone<T> = { data: T } | { errors: readonly GraphQlError[] };
type HTTPRequestMethods =
  | "GET"
  | "POST"
  | "HEAD"
  | "PUT"
  | "DELETE"
  | "CONNECT"
  | "OPTIONS"
  | "TRACE"
  | "PATCH";

export async function fetcher<Result, Variables>({
  query,
  variables,
  headers,
  cache,
  method = "POST",
  tags,
}: {
  method?: HTTPRequestMethods;
  query: TypedDocumentString<Result, Variables>;
  variables: Variables;
  headers?: HeadersInit;
  cache?: RequestCache;
  tags?: NextFetchRequestConfig["tags"];
}): Promise<Result> {
  const options = cache
    ? { cache, next: { tags } }
    : { next: { revalidate: 900, tags } };
  const result = await fetch(endpoint, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${env.HYGRAPH_AUTH_TOKEN}`,
      ...headers,
    },
    body: JSON.stringify({
      query: query.toString(),
      ...(variables && { variables }),
    }),
    ...options,
  });

  const body = (await result.json()) as GraphQlErrorRespone<Result>;

  if ("errors" in body) {
    throw body.errors[0];
  }

  return body.data;
}
