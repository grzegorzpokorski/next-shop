import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProductsByCategorySlug } from "@/lib/queries/products/getProductsByCategorySlug";
import { env } from "@/lib/env.mjs";
import { getCategoryNameBySlug } from "@/lib/queries/categories/getCategoryNameBySlug";
import { Container } from "@/components/ui/Container/Container";
import { Heading } from "@/components/ui/Heading/Heading";
import { ProductsList } from "@/components/blocks/ProductsList/ProductsList";
import { Pagination } from "@/components/blocks/Pagination/Pagination";
import { Filters } from "@/components/blocks/Filters/Filters";
import { defaultSort, sorting } from "@/lib/constants";

type Props = {
  params: {
    all: string[];
  };
  searchParams: Record<string, string>;
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
            category.name,
          )}`,
          width: 1200,
          height: 630,
          alt: `Next Shop - ${category.name}`,
        },
      ],
    },
  };
};

export default async function Page({
  params: {
    all: [categorySlug, page],
  },
  searchParams,
}: Props) {
  const currentPage = typeof page === "undefined" ? 1 : parseInt(page);
  if (Number.isNaN(currentPage) || currentPage < 1) return notFound();

  const { sortKey } =
    sorting.find((item) => item.slug === searchParams?.sort) || defaultSort;

  const { products, count } = await getProductsByCategorySlug({
    categorySlug,
    limit: env.PRODUCTS_PER_PAGE,
    skip: ((currentPage < 1 ? 1 : currentPage) - 1) * env.PRODUCTS_PER_PAGE,
    order: sortKey,
  });
  const category = await getCategoryNameBySlug({ slug: categorySlug });

  if (!category || products.length === 0) return notFound();

  return (
    <Container as="div">
      <header
        className="flex flex-col gap-4 justify-between pt-16 pb-12 max-w-3xl"
        aria-labelledby="page-title"
      >
        <Heading as="h1" size="3xl" id="page-title">
          Kategoria: {category.name}
        </Heading>
        {category.description && <p>{category.description}</p>}
      </header>
      <section aria-labelledby="heading-of-section-with-products">
        <Heading as="h2" id="heading-of-section-with-products" hidden>
          Lista produktów
        </Heading>
        <Filters />
        <ProductsList products={products} />
        <Pagination
          pagination={{
            currentPage: currentPage,
            totalPages: Math.ceil(count / env.PRODUCTS_PER_PAGE),
            searchParams: new URLSearchParams(searchParams).toString(),
            baseUrl: `/category/${category.name}`,
          }}
        />
      </section>
    </Container>
  );
}
