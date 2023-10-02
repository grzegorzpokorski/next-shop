import { reshapeCategory } from "@/lib/mappers";
import { GetCategoriesDocument } from "@/lib/generated/graphql";
import { fetcher } from "@/lib/fetcher";
import { TAGS } from "@/lib/constants";

export const getCategories = async () => {
  const result = await fetcher({
    query: GetCategoriesDocument,
    variables: {},
    tags: [TAGS.categories],
  });

  return result.categories.map((category) => reshapeCategory(category));
};
