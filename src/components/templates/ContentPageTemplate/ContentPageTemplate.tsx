import { Heading } from "@/components/ui/Heading/Heading";
import { MDXContent } from "@/components/blocks/MDXContent/MDXContent";
import type { PageFragment } from "@/lib/generated/graphql";

type Props = {
  page: PageFragment;
};

export const ContentPageTemplate = async ({ page }: Props) => {
  return (
    <article className="container max-w-[65ch] mx-auto px-3 lg:px-6 pb-16">
      <header
        className="flex flex-col gap-4 justify-between pt-16 pb-12 max-w-3xl"
        aria-labelledby="page-title"
      >
        <Heading as="h1" size="3xl" id="page-title">
          {page.title}
        </Heading>
      </header>
      {page.content && (
        <div className="prose dark:prose-invert mx-auto">
          <MDXContent source={page.content} />
        </div>
      )}
    </article>
  );
};
