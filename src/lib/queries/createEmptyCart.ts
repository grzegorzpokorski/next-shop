import { fetcher } from "../fetcher";
import { CreateEmptyCartDocument } from "../generated/graphql";

export const createEmptyCart = async () => {
  const result = await fetcher({
    query: CreateEmptyCartDocument,
    variables: {},
    cache: "no-store",
  });

  return result.createCart;
};
