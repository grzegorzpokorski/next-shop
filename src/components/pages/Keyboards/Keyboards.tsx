import data from "@/data/data.json";
import { ProductsList } from "@/components/layout/ProductsList/ProductsList";
import { Container } from "@/components/ui/Container/Container";
import { Heading } from "@/components/ui/Heading/Heading";
import { PageHeader } from "@/components/layout/PageHeader/PageHeader";

export const Keyboards = () => {
  return (
    <>
      <PageHeader title="Klawiatury" />
      <Container as="section">
        <header className="pt-8 pb-4">
          <Heading as="h2">Klawiatury</Heading>
        </header>
        <ProductsList
          products={data.filter((item) => item.category === "klawiatura")}
        />
      </Container>
    </>
  );
};
