import { GetProductsByCategorySlugDocument } from "@/generated/graphql";
import { fetcher } from "@/lib/fetcher";

type Args = {
  limit: number;
  skip: number;
  categorySlug: string;
};

export const getProductsByCategorySlug = async ({
  limit,
  skip,
  categorySlug,
}: Args) => {
  const result = await fetcher({
    query: GetProductsByCategorySlugDocument,
    variables: {
      limit,
      skip,
      categorySlug,
    },
  });

  return result.products;
};
