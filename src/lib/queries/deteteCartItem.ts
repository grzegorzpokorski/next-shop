import { DeteteCartItemDocument } from "@/lib/generated/graphql";
import { fetcher } from "@/lib/fetcher";

type Args = {
  cartId: string;
  itemId: string;
};

export const deleteCartItem = async ({ cartId, itemId }: Args) => {
  const result = await fetcher({
    query: DeteteCartItemDocument,
    variables: {
      cartId,
      itemId,
    },
  });

  return result.updateCart;
};
