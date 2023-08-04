import { GetCategoryNameBySlugDocument } from "@/generated/graphql";
import { fetcher } from "@/lib/fetcher";

type Args = {
  slug: string;
};

export const getCategoryNameBySlug = async ({ slug }: Args) => {
  const result = await fetcher({
    query: GetCategoryNameBySlugDocument,
    variables: { categorySlug: slug },
  });

  return result.category;
};