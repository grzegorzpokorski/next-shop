import data from "@/data/data.json";
import { ProductsList } from "@/components/layout/ProductsList/ProductsList";
import { Container } from "@/components/ui/Container/Container";
import { Heading } from "@/components/ui/Heading/Heading";
import { PageHeader } from "@/components/layout/PageHeader/PageHeader";

export const Mice = () => {
  return (
    <>
      <PageHeader title="Myszki" />
      <Container as="section" aria-labelledby="page-title">
        <header className="pt-8 pb-4">
          <Heading as="h2" id="page-title">
            Myszki
          </Heading>
        </header>
        <ProductsList
          products={data.filter((item) => item.category === "mysz")}
        />
      </Container>
    </>
  );
};
