import { fetcher } from "@/lib/fetcher";
import { PublishProductsDocument } from "@/lib/generated/graphql";
import { reshapeProductWithSummary } from "@/lib/mappers";

type Args = {
  ids: string[];
};

export const publishProducts = async ({ ids }: Args) => {
  const result = await fetcher({
    query: PublishProductsDocument,
    variables: {
      ids,
    },
    cache: "no-store",
  });

  return result.publishManyProductsConnection.edges.map((item) =>
    reshapeProductWithSummary(item.node),
  );
};
