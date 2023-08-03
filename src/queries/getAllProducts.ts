import { GetAllProductsDocument } from "@/generated/graphql";
import { fetcher } from "@/lib/fetcher";

type Args = {
  limit: number;
  skip: number;
};

export const getAllProducts = async ({ limit, skip }: Args) => {
  const result = await fetcher({
    query: GetAllProductsDocument,
    variables: {
      limit,
      skip,
    },
  });

  return result;
};
