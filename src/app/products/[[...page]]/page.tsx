import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllProducts } from "@/lib/queries/products/getAllProducts";
import { env } from "@/lib/env.mjs";
import { ProductsList } from "@/components/blocks/ProductsList/ProductsList";
import { Container } from "@/components/ui/Container/Container";
import { Heading } from "@/components/ui/Heading/Heading";
import { Pagination } from "@/components/blocks/Pagination/Pagination";
import { Filters } from "@/components/blocks/Filters/Filters";
import { defaultSort, sorting } from "@/lib/constants";

type Props = {
  params: {
    page: string | undefined;
  };
  searchParams?: Record<string, string>;
};

export function generateMetadata({
  params: { page },
  searchParams,
}: Props): Metadata {
  const currentPage = typeof page === "undefined" ? 1 : parseInt(page);
  if (Number.isNaN(currentPage) || currentPage < 1) return notFound();
  const searchQuery = searchParams?.q;

  if (searchQuery) {
    return {
      title: `Wyszukiwanie`,
      description: "Szukaj produktów w sklepie.",
      alternates: {
        canonical: `/products/${currentPage}?q=${searchQuery}`,
      },
    };
  }

  return {
    title: `Oferta: strona ${currentPage}`,
    alternates: {
      canonical: `/products/${currentPage}`,
    },
    openGraph: {
      images: [
        {
          url: `/api/og?width=1200&height=630&subtitle=${encodeURIComponent(
            "wszystkie produkty",
          )}`,
          width: 1200,
          height: 630,
          alt: `Next Shop - wszystkie produkty`,
        },
      ],
    },
  };
}

export default async function Page({ params: { page }, searchParams }: Props) {
  const currentPage = typeof page === "undefined" ? 1 : parseInt(page);
  if (Number.isNaN(currentPage) || currentPage < 1) return notFound();

  const { sortKey } =
    sorting.find((item) => item.slug === searchParams?.sort) || defaultSort;

  const searchQuery = searchParams?.q;

  const { products, count } = await getAllProducts({
    limit: env.PRODUCTS_PER_PAGE,
    skip: ((currentPage < 1 ? 1 : currentPage) - 1) * env.PRODUCTS_PER_PAGE,
    order: sortKey,
    searchQuery: searchQuery,
  });

  return (
    <Container as="div">
      <header
        className="flex flex-col gap-4 justify-between pt-16 pb-12 max-w-3xl"
        aria-labelledby="page-title"
      >
        <Heading as="h1" size="3xl" id="page-title">
          {searchQuery
            ? `Znaleziono ${count} wyników dla frazy: ${searchQuery}`
            : "Wszytkie produkty"}
        </Heading>
      </header>
      <section aria-labelledby="heading-of-section-with-products">
        <Heading as="h2" id="heading-of-section-with-products" hidden>
          Lista produktów
        </Heading>
        {count > 0 && (
          <>
            <Filters />
            <ProductsList products={products} />
            <Pagination
              pagination={{
                currentPage: currentPage,
                totalPages: Math.ceil(count / env.PRODUCTS_PER_PAGE),
                searchParams: new URLSearchParams(searchParams).toString(),
                baseUrl: "/products",
              }}
            />
          </>
        )}
      </section>
    </Container>
  );
}
