import { GetCategoriesDocument } from "@/generated/graphql";
import { fetcher } from "@/lib/fetcher";

export const getCategories = async () => {
  const result = await fetcher({
    query: GetCategoriesDocument,
    variables: {},
  });

  return result.categories;
};
