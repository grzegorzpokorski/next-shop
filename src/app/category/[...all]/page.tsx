import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ProductsListPage } from "@/components/pages/ProductsListPage/ProductsListPage";
import { getProductsByCategorySlug } from "@/lib/queries/getProductsByCategorySlug";
import { env } from "@/lib/env.mjs";
import { getCategoryNameBySlug } from "@/lib/queries/getCategoryNameBySlug";

type Props = {
  params: {
    all: string[];
  };
};

export const generateMetadata = async ({
  params: {
    all: [categorySlug],
  },
}: Props): Promise<Metadata> => {
  const category = await getCategoryNameBySlug({ slug: categorySlug });

  if (!category) return notFound();

  return {
    title: category.name,
    description: category.description,
    alternates: {
      canonical: `/category/${categorySlug}`,
    },
    openGraph: {
      images: [
        {
          url: `/api/og?width=1200&height=630&subtitle=${encodeURIComponent(
            "Finansowanie",
          )}`,
          width: 1200,
          height: 630,
          alt: "",
        },
      ],
    },
  };
};

export default async function Page({
  params: {
    all: [categorySlug, page],
  },
}: Props) {
  const currentPage = typeof page === "undefined" ? 1 : parseInt(page);

  if (Number.isNaN(currentPage) || currentPage < 1) return notFound();

  const { products, count } = await getProductsByCategorySlug({
    categorySlug,
    limit: env.PRODUCTS_PER_PAGE,
    skip: ((currentPage < 1 ? 1 : currentPage) - 1) * env.PRODUCTS_PER_PAGE,
  });
  const category = await getCategoryNameBySlug({ slug: categorySlug });

  if (!category || products.length === 0) return notFound();

  return (
    <ProductsListPage
      products={products}
      currentPage={currentPage}
      lastPage={Math.ceil(count / env.PRODUCTS_PER_PAGE)}
      count={count}
      title={`Kategoria: ${category.name}`}
      baseUrl={`/category/${category.name}`}
    />
  );
}
