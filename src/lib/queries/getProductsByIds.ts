import { GetProductsByIdsDocument } from "@/lib/generated/graphql";
import { fetcher } from "@/lib/fetcher";
import { reshapeProductWithSummary } from "@/lib/mappers";

type Args = {
  ids: string[];
};

export const getProductsByIds = async ({ ids }: Args) => {
  const result = await fetcher({
    query: GetProductsByIdsDocument,
    variables: { ids },
    cache: "no-store",
  });

  return result.products.map((product) => {
    return reshapeProductWithSummary(product);
  });
};
