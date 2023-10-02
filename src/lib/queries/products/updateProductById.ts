import { fetcher } from "@/lib/fetcher";
import type { ProductUpdateInput } from "@/lib/generated/graphql";
import { UpdateProductByIdDocument } from "@/lib/generated/graphql";
import { reshapeProductWithSummary } from "@/lib/mappers";

type Args = {
  productId: string;
  data: ProductUpdateInput;
};

export const updateProdcutById = async ({ productId, data }: Args) => {
  const result = await fetcher({
    query: UpdateProductByIdDocument,
    variables: {
      id: productId,
      data,
    },
    cache: "no-store",
  });

  return result.updateProduct
    ? reshapeProductWithSummary(result.updateProduct)
    : null;
};
