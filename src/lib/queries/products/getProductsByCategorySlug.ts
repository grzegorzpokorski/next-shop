import type { ProductOrderByInput } from "@/lib/generated/graphql";
import { GetProductsByCategorySlugDocument } from "@/lib/generated/graphql";
import { fetcher } from "@/lib/fetcher";
import { reshapeProductWithSummary } from "@/lib/mappers";
import { TAGS } from "@/lib/constants";

type Args = {
  limit: number;
  skip: number;
  categorySlug: string;
  order?: ProductOrderByInput;
};

export const getProductsByCategorySlug = async ({
  limit,
  skip,
  categorySlug,
  order,
}: Args) => {
  const result = await fetcher({
    query: GetProductsByCategorySlugDocument,
    variables: {
      limit,
      skip,
      categorySlug,
      order,
    },
    next: { tags: [TAGS.categories, TAGS.products], revalidate: 60 },
  });

  return {
    products: result.products.map((product) =>
      reshapeProductWithSummary(product),
    ),
    count: result.productsConnection.aggregate.count,
  };
};
