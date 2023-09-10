import { notFound } from "next/navigation";
import { ContentPageTemplate } from "@/components/templates/ContentPageTemplate/ContentPageTemplate";
import { getPageBySlug } from "@/lib/queries/getPageBySlug";

export default async function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const page = await getPageBySlug({ slug });

  if (!page) return notFound();

  return <ContentPageTemplate page={page} />;
}
