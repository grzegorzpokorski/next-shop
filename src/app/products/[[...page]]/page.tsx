import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllProducts } from "@/lib/queries/getAllProducts";
import { env } from "@/lib/env.mjs";
import { ProductsList } from "@/components/blocks/ProductsList/ProductsList";
import { Container } from "@/components/ui/Container/Container";
import { Heading } from "@/components/ui/Heading/Heading";
import { Pagination } from "@/components/blocks/Pagination/Pagination";

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

export default async function Page({ params: { page } }: Props) {
  const currentPage = typeof page === "undefined" ? 1 : parseInt(page);

  if (Number.isNaN(currentPage) || currentPage < 1) return notFound();

  const { products, count } = await getAllProducts({
    limit: env.PRODUCTS_PER_PAGE,
    skip: ((currentPage < 1 ? 1 : currentPage) - 1) * env.PRODUCTS_PER_PAGE,
  });

  return (
    <Container as="div">
      <header
        className="flex flex-col gap-4 justify-between pt-16 pb-12 max-w-3xl"
        aria-labelledby="page-title"
      >
        <Heading as="h1" size="3xl" id="page-title">
          Wszytkie produkty
        </Heading>
      </header>
      <section aria-labelledby="heading-of-section-with-products">
        <Heading as="h2" id="heading-of-section-with-products" hidden>
          Lista produktów
        </Heading>
        <ProductsList products={products} />
        <Pagination
          pagination={{
            currentPage: currentPage,
            totalPages: Math.ceil(count / env.PRODUCTS_PER_PAGE),
            searchParams: null,
            baseUrl: "/products",
          }}
        />
      </section>
    </Container>
  );
}
