import { GetPageBySlugDocument } from "@/lib/generated/graphql";
import { fetcher } from "@/lib/fetcher";
import { TAGS } from "@/lib/constants";

type Args = {
  slug: string;
};

export const getPageBySlug = async ({ slug }: Args) => {
  const result = await fetcher({
    query: GetPageBySlugDocument,
    variables: {
      slug,
    },
    cache: "force-cache",
    tags: [TAGS.pages],
  });

  return result.page ? result.page : null;
};
