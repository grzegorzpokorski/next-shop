import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ProductsListPage } from "@/components/pages/ProductsListPage/ProductsListPage";
import { getAllProducts } from "@/queries/getAllProducts";
import { env } from "@/lib/env.mjs";

type Props = {
  params: {
    page: string | undefined;
  };
};

export function generateMetadata({
  params: { page },
}: {
  params: { page: string };
}): Metadata {
  return {
    title: `Oferta`,
    alternates: {
      canonical: `/products/${page}`,
    },
  };
}

export default async function Page({ params: { page } }: Props) {
  const currentPage = typeof page === "undefined" ? 1 : parseInt(page);

  if (Number.isNaN(currentPage) || currentPage < 1) return notFound();

  const { products, count } = await getAllProducts({
    limit: env.PRODUCTS_PER_PAGE,
    skip: ((currentPage < 1 ? 1 : currentPage) - 1) * env.PRODUCTS_PER_PAGE,
  });

  console.log(env.PRODUCTS_PER_PAGE);

  return (
    <ProductsListPage
      products={products}
      currentPage={currentPage}
      lastPage={Math.ceil(count / env.PRODUCTS_PER_PAGE)}
      count={count}
      title="Wszystkie produkty"
      baseUrl="/products"
    />
  );
}
