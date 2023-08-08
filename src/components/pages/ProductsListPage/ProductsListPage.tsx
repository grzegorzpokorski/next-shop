import { ProductsList } from "@/components/blocks/ProductsList/ProductsList";
import { Container } from "@/components/ui/Container/Container";
import { Heading } from "@/components/ui/Heading/Heading";
import { PageHeader } from "@/components/layout/PageHeader/PageHeader";
import { Pagination } from "@/components/blocks/Pagination/Pagination";
import type { ProductWithSummary } from "@/lib/types";

type Props = {
  currentPage: number;
  lastPage: number;
  products: ProductWithSummary[];
  title: string;
  count: number;
  baseUrl: string;
};

export const ProductsListPage = ({
  currentPage,
  lastPage,
  products,
  count,
  title,
  baseUrl,
}: Props) => {
  return (
    <>
      <PageHeader title="Wszystkie produkty" />
      <Container as="section" aria-labelledby="page-title">
        <header className="flex justify-between items-center pt-8 pb-4">
          <Heading as="h2" id="page-title">
            {title}
          </Heading>
          <p className="text-neutral-500 text-sm">
            {" "}
            {products.length} {products.length > 1 ? "ofert" : "oferta"} z{" "}
            {count}
          </p>
        </header>
        {products.length > 0 ? (
          <ProductsList products={products} />
        ) : (
          <p>Brak produktów</p>
        )}
        <Pagination
          pagination={{
            currentPage: currentPage,
            totalPages: lastPage,
            searchParams: null,
            baseUrl: baseUrl,
          }}
        />
      </Container>
    </>
  );
};
