import { fetcher } from "@/lib/fetcher";
import { DeleteCartByIdDocument } from "@/lib/generated/graphql";
import { reshapeCart } from "@/lib/mappers";

type Args = {
  id: string;
};

export const deleteCartById = async ({ id }: Args) => {
  const result = await fetcher({
    query: DeleteCartByIdDocument,
    variables: {
      id,
    },
    cache: "no-store",
  });

  return result.deleteCart ? reshapeCart(result.deleteCart) : null;
};
