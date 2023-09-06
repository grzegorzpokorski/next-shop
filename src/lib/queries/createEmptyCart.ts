import { fetcher } from "@/lib/fetcher";
import { CreateEmptyCartDocument } from "@/lib/generated/graphql";
import { reshapeCart } from "@/lib/mappers";

export const createEmptyCart = async () => {
  const result = await fetcher({
    query: CreateEmptyCartDocument,
    variables: {},
    cache: "no-store",
  });

  return result.createCart ? reshapeCart(result.createCart) : null;
};
