import { reshapeCategory } from "@/lib/mappers";
import { GetCategoriesBySlugsDocument } from "@/lib/generated/graphql";
import { fetcher } from "@/lib/fetcher";
import { TAGS } from "@/lib/constants";

type Args = {
  slugs: string[];
};

export const getCategoriesBySlugs = async ({ slugs }: Args) => {
  const result = await fetcher({
    query: GetCategoriesBySlugsDocument,
    variables: {
      slugs,
    },
    tags: [TAGS.categories],
  });

  return result.categories.map((category) => reshapeCategory(category));
};
