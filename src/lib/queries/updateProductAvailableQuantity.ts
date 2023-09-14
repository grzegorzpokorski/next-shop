import { fetcher } from "@/lib/fetcher";
import { UpdateProductAvailableQuantityDocument } from "@/lib/generated/graphql";
import { reshapeProductWithSummary } from "@/lib/mappers";

type Args = {
  productId: string;
  quantity: number;
};

export const updateProdcutAvailableQuantity = async ({
  productId,
  quantity,
}: Args) => {
  const result = await fetcher({
    query: UpdateProductAvailableQuantityDocument,
    variables: {
      productId,
      quantity,
    },
    cache: "no-store",
  });

  return result.updateProduct
    ? reshapeProductWithSummary(result.updateProduct)
    : null;
};
