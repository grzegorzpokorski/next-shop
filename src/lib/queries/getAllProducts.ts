import type { ProductOrderByInput } from "@/lib/generated/graphql";
import { GetAllProductsDocument } from "@/lib/generated/graphql";
import { fetcher } from "@/lib/fetcher";
import { reshapeProductWithSummary } from "@/lib/mappers";

type Args = {
  limit: number;
  skip: number;
  order?: ProductOrderByInput;
  searchQuery?: string;
};

export const getAllProducts = async ({
  limit,
  skip,
  order,
  searchQuery,
}: Args) => {
  const result = await fetcher({
    query: GetAllProductsDocument,
    variables: {
      limit,
      skip,
      order,
      searchQuery: searchQuery || "",
    },
  });

  return {
    products: result.products.map((product) =>
      reshapeProductWithSummary(product),
    ),
    count: result.productsConnection.aggregate.count,
  };
};
