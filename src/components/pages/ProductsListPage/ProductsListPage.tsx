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
  description?: string;
  baseUrl: string;
};

export const ProductsListPage = ({
  currentPage,
  lastPage,
  products,
  title,
  description,
  baseUrl,
}: Props) => {
  return (
    <>
      <PageHeader title="Wszystkie produkty" />
      <Container as="section" aria-labelledby="page-title">
        <header className="flex flex-col gap-4 justify-between pt-16 pb-12 max-w-3xl">
          <Heading as="h2" size="3xl" id="page-title">
            {title}
          </Heading>
          {description && <p>{description}</p>}
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
