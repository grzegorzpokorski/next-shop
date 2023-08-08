import { GetProductsByCategorySlugDocument } from "@/lib/generated/graphql";
import { fetcher } from "@/lib/fetcher";
import { reshapeProductWithSummary } from "@/lib/mappers";

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

  return {
    products: result.products.map((product) =>
      reshapeProductWithSummary(product),
    ),
    count: result.productsConnection.aggregate.count,
  };
};
