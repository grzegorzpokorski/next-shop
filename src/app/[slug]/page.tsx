import { notFound } from "next/navigation";
import type { Metadata } from "next/types";
import { ContentPageTemplate } from "@/components/templates/ContentPageTemplate/ContentPageTemplate";
import { getPageBySlug } from "@/lib/queries/getPageBySlug";

export const generateMetadata = async ({
  params: { slug },
}: {
  params: { slug: string };
}): Promise<Metadata> => {
  const page = await getPageBySlug({ slug });

  if (!page) return notFound();

  return {
    title: page.seoTitle ?? page.title,
    description: page.seoDescription,
    alternates: {
      canonical: page.slug,
    },
    openGraph: {
      images: [
        {
          url: `/api/og?width=1200&height=630&subtitle=${encodeURIComponent(
            page.title,
          )}`,
          width: 1200,
          height: 630,
          alt: `Next Shop - ${page.title}`,
        },
      ],
    },
  };
};

export default async function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const page = await getPageBySlug({ slug });

  if (!page) return notFound();

  return <ContentPageTemplate page={page} />;
}
