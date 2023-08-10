import { ProductsList } from "@/components/blocks/ProductsList/ProductsList";
import { Container } from "@/components/ui/Container/Container";
import { Heading } from "@/components/ui/Heading/Heading";
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
    <Container as="div">
      <header
        className="flex flex-col gap-4 justify-between pt-16 pb-12 max-w-3xl"
        aria-labelledby="page-title"
      >
        <Heading as="h1" size="3xl" id="page-title">
          {title}
        </Heading>
        {description && <p>{description}</p>}
      </header>
      <section aria-labelledby="secion-with-products-heading">
        <Heading as="h2" id="secion-with-products-heading" hidden>
          Lista produktów
        </Heading>
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
      </section>
    </Container>
  );
};
