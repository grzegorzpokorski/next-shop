import { AddItemToCartDocument } from "@/lib/generated/graphql";
import { fetcher } from "@/lib/fetcher";
import { reshapeCart } from "@/lib/mappers";

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
    cache: "no-store",
  });

  return result.updateCart ? reshapeCart(result.updateCart) : null;
};
