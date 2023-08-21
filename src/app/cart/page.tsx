import { CartItemsList } from "@/components/layout/Cart/CartItemsList/CartItemsList";
import { CartSummary } from "@/components/layout/Cart/CartSummary/CartSummary";
import { Container } from "@/components/ui/Container/Container";
import { Heading } from "@/components/ui/Heading/Heading";
import { getAllProducts } from "@/lib/queries/getAllProducts";

export default async function Page() {
  const { products } = await getAllProducts({ limit: 5, skip: 0 });

  return (
    <Container as="div">
      <header
        className="flex flex-col gap-4 justify-between pt-16 pb-12 max-w-3xl"
        aria-labelledby="page-title"
      >
        <Heading as="h1" size="3xl" id="page-title">
          Twój koszyk
        </Heading>
      </header>
      <section
        aria-labelledby="heading-of-section-with-products"
        className="mb-16"
      >
        <Heading as="h2" id="heading-of-section-with-products" hidden>
          Lista produktów w koszyku
        </Heading>
        <div className="bg-black rounded-t">
          <CartItemsList products={products} />
          <CartSummary total={{ amount: 998, currency: "PLN" }} />
        </div>
      </section>
    </Container>
  );
}
