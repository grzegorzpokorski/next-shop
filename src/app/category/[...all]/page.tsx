import { notFound } from "next/navigation";
import { ProductsListPage } from "@/components/pages/ProductsListPage/ProductsListPage";
import { getProductsByCategorySlug } from "@/queries/getProductsByCategorySlug";
import { env } from "@/lib/env.mjs";
import { getCategoryNameBySlug } from "@/queries/getCategoryNameBySlug";

type Props = {
  params: {
    all: string[];
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
    limit: 8,
    skip: ((currentPage < 1 ? 1 : currentPage) - 1) * env.OFFERS_PER_PAGE,
  });
  const category = await getCategoryNameBySlug({ slug: categorySlug });

  if (!category || products.length === 0) return notFound();

  return (
    <ProductsListPage
      products={products}
      currentPage={currentPage}
      lastPage={Math.ceil(count / env.OFFERS_PER_PAGE)}
      count={count}
      title={`Kategoria: ${category.name}`}
      baseUrl={`/category/${category.name}`}
    />
  );
}
