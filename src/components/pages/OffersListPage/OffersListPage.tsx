import { ProductsList } from "@/components/ProductsList/ProductsList";
import { Container } from "@/components/ui/Container/Container";
import { Heading } from "@/components/ui/Heading/Heading";
import { PageHeader } from "@/components/layout/PageHeader/PageHeader";
import type { ProductSummaryFragment } from "@/generated/graphql";

type Props = {
  currentPage: number;
  lastPage: number;
  products: ProductSummaryFragment[];
  title: string;
  count: number;
};

export const OffersListPage = ({
  /*currentPage,
  lastPage,*/ products,
  count,
  title,
}: Props) => {
  return (
    <>
      <PageHeader title="Wszystkie produkty" />
      <Container as="section" aria-labelledby="page-title">
        <header className="pt-8 pb-4">
          <Heading as="h2" id="page-title">
            {title} ({products.length} z {count})
          </Heading>
        </header>
        <ProductsList products={products} />
      </Container>
    </>
  );
};
