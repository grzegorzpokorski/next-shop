import { GetCartByIdDocument } from "@/lib/generated/graphql";
import { fetcher } from "@/lib/fetcher";
import { reshapeCart } from "@/lib/mappers";

type Args = {
  id: string;
};

export const getCartById = async ({ id }: Args) => {
  const result = await fetcher({
    query: GetCartByIdDocument,
    variables: {
      cartId: id,
    },
    cache: "no-store",
  });

  return result.cart ? reshapeCart(result.cart) : null;
};
