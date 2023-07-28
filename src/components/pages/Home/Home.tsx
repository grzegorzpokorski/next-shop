import data from "@/data/data.json";
import { ProductsList } from "@/components/layout/ProductsList/ProductsList";
import { Container } from "@/components/ui/Container/Container";

export const Home = () => {
  return (
    <Container as="section">
      <ProductsList products={data} />
    </Container>
  );
};
