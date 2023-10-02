import { reshapeCategory } from "@/lib/mappers";
import { GetCategoryNameBySlugDocument } from "@/lib/generated/graphql";
import { fetcher } from "@/lib/fetcher";
import { TAGS } from "@/lib/constants";

type Args = {
  slug: string;
};

export const getCategoryNameBySlug = async ({ slug }: Args) => {
  const result = await fetcher({
    query: GetCategoryNameBySlugDocument,
    variables: { categorySlug: slug },
    tags: [TAGS.categories],
  });

  return result.category ? reshapeCategory(result.category) : null;
};
