import { GetProductBySlugDocument } from "@/lib/generated/graphql";
import { fetcher } from "@/lib/fetcher";
import { reshapeProductWithDetails } from "@/lib/mappers";

type Args = {
  slug: string;
};

export const getProductBySlug = async ({ slug }: Args) => {
  const result = await fetcher({
    query: GetProductBySlugDocument,
    variables: { slug },
  });

  return result.product ? reshapeProductWithDetails(result.product) : null;
};
