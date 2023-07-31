import { GetProductBySlugDocument } from "@/generated/graphql";
import { fetcher } from "@/lib/fetcher";

type Args = {
  slug: string;
};

export const getProductBySlug = async ({ slug }: Args) => {
  const result = await fetcher({
    query: GetProductBySlugDocument,
    variables: { slug },
  });

  return result.product;
};
