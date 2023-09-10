import { GetPageBySlugDocument } from "@/lib/generated/graphql";
import { fetcher } from "@/lib/fetcher";

type Args = {
  slug: string;
};

export const getPageBySlug = async ({ slug }: Args) => {
  const result = await fetcher({
    query: GetPageBySlugDocument,
    variables: {
      slug,
    },
  });

  return result.page ? result.page : null;
};
