import { GetProductBySlugDocument } from "@/lib/generated/graphql";
import { fetcher } from "@/lib/fetcher";
import { reshapeProductWithDetails } from "@/lib/mappers";
import { TAGS } from "@/lib/constants";

type Args = {
  slug: string;
};

export const getProductBySlug = async ({ slug }: Args) => {
  const result = await fetcher({
    query: GetProductBySlugDocument,
    variables: { slug },
    cache: "force-cache",
    tags: [TAGS.products],
  });

  return result.product ? reshapeProductWithDetails(result.product) : null;
};
