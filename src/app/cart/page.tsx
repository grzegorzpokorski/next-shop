import type { Metadata } from "next/types";
import { cookies } from "next/headers";
import { CartItemsList } from "@/components/layout/Cart/CartItemsList/CartItemsList";
import { CartSummary } from "@/components/layout/Cart/CartSummary/CartSummary";
import { Container } from "@/components/ui/Container/Container";
import { Heading } from "@/components/ui/Heading/Heading";
import { EmptyCartInfo } from "@/components/layout/Cart/EmptyCartInfo/EmptyCartInfo";
import { getCartById } from "@/lib/queries/getCartById";

export const metadata: Metadata = {
  title: `Koszyk`,
  alternates: {
    canonical: `/cart`,
  },
  openGraph: {
    images: [
      {
        url: `/api/og?width=1200&height=630&subtitle=${encodeURIComponent(
          "koszyk zakupowy",
        )}`,
        width: 1200,
        height: 630,
        alt: `Next Shop - koszyk zakupowy`,
      },
    ],
  },
};

export default async function Page() {
  const cookieStore = cookies();
  const cookieWithCartId = cookieStore.get("cartId");
  const cartId = cookieWithCartId?.value;

  if (!cookieWithCartId || !cartId) {
    return <Empty />;
  }

  const cart = await getCartById({ id: cartId });
  if (!cart || cart.items.length === 0) return <Empty />;

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
        <div className="bg-white dark:bg-black rounded-t">
          <CartItemsList items={cart.items} />
          <CartSummary total={{ amount: 998, currency: "PLN" }} />
        </div>
      </section>
    </Container>
  );
}

const Empty = () => {
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
        <div className="bg-white dark:bg-black rounded-t">
          <EmptyCartInfo />
        </div>
      </section>
    </Container>
  );
};
