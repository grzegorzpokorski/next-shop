import { UpdateCartItemQuantityDocument } from "@/lib/generated/graphql";
import { fetcher } from "@/lib/fetcher";

type Args = {
  cartId: string;
  itemId: string;
  qty: number;
};

export const updateCartItemQuantity = async ({ cartId, itemId, qty }: Args) => {
  const result = await fetcher({
    query: UpdateCartItemQuantityDocument,
    variables: {
      cartId,
      itemId,
      qty,
    },
    cache: "no-store",
  });

  return result.update;
};
