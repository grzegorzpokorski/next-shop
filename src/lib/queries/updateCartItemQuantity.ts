import { UpdateCartItemQuantityDocument } from "@/lib/generated/graphql";
import { fetcher } from "@/lib/fetcher";

type Args = {
  cartId: string;
  itemId: string;
  qty: number;
};

export const addItemToCart = async ({ cartId, itemId, qty }: Args) => {
  const result = await fetcher({
    query: UpdateCartItemQuantityDocument,
    variables: {
      cartId,
      itemId,
      qty,
    },
  });

  return result.update;
};
