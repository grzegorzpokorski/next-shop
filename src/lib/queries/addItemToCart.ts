import { AddItemToCartDocument } from "@/lib/generated/graphql";
import { fetcher } from "@/lib/fetcher";

type Args = {
  cartId: string;
  productId: string;
  productQty: number;
};

export const addItemToCart = async ({
  cartId,
  productId,
  productQty,
}: Args) => {
  const result = await fetcher({
    query: AddItemToCartDocument,
    variables: {
      cartId,
      productId,
      productQty,
    },
  });

  return result.updateCart;
};
