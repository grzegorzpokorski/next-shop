import data from "@/data/data.json";
import { ProductsList } from "@/components/layout/ProductsList/ProductsList";
import { Container } from "@/components/ui/Container/Container";
import { Heading } from "@/components/ui/Heading/Heading";
import { PageHeader } from "@/components/layout/PageHeader/PageHeader";

export const Offer = () => {
  return (
    <>
      <PageHeader title="Wszystkie produkty" />
      <Container as="section" aria-labelledby="page-title">
        <header className="pt-8 pb-4">
          <Heading as="h2" id="page-title">
            Lista produktów
          </Heading>
        </header>
        <ProductsList products={data} />
      </Container>
    </>
  );
};
