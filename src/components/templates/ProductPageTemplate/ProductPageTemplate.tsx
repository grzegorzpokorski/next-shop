import Link from "next/link";
import { cookies } from "next/headers";
import { twMerge } from "tailwind-merge";
import { ProductsList } from "@/components/blocks/ProductsList/ProductsList";
import { Container } from "@/components/ui/Container/Container";
import { Heading } from "@/components/ui/Heading/Heading";
import { formatPrice } from "@/utils/formatPrice";
import { badgeVariants } from "@/components/ui/Badge/Badge";
import { Gallery } from "@/components/blocks/Gallery/Gallery";
import { AddToCart } from "@/components/layout/Cart/AddToCart/AddToCart";
import { Button } from "@/components/ui/Button/Button";
import { StockAvailabilityIndicator } from "@/components/blocks/StockAvailabilityIndicator/StockAvailabilityIndicator";
import { getCartById } from "@/lib/queries/getCartById";
import type { ProductWithDetails, ProductWithSummary } from "@/lib/types";

type Props = {
  product: ProductWithDetails;
  relatedProducts: ProductWithSummary[];
};

export const ProductPageTemplate = async ({
  product,
  relatedProducts,
}: Props) => {
  const cookieStore = cookies();
  const cartId = cookieStore.get("cartId")?.value;

  const checkIfBlockAddToCartButton = async ({
    cartId,
    productId,
  }: {
    cartId: string;
    productId: string;
  }) => {
    const cart = await getCartById({ id: cartId });
    if (!cart || cart.items.length < 1) return false;

    return cart.items.some(
      (cartItem) =>
        cartItem.product?.id === productId &&
        cartItem.quantity >= cartItem.product.quantityAvailable,
    );
  };

  const blockAddToCart = cartId
    ? await checkIfBlockAddToCartButton({
        cartId,
        productId: product.id,
      })
    : false;

  return (
    <div className="flex flex-col gap-8 py-8">
      <Container as="article" aria-labelledby="product-title">
        <div className="flex flex-col md:flex-row gap-8 bg-white dark:bg-black p-8 rounded-md border">
          <div className="flex flex-col h-full w-full md:w-1/2 overflow-hidden md:sticky md:top-20">
            <Gallery images={product.images} />
          </div>
          <div className="flex flex-col items-start justify-center gap-4 w-full md:w-1/2">
            {product.category && (
              <Link
                href={`/category/${product.category?.slug}`}
                className={badgeVariants({ variant: "category" })}
              >
                {product.category?.name}
              </Link>
            )}
            <header className="mb-4">
              <Heading as="h1" size="4xl" id="product-title">
                {product.name}
              </Heading>
            </header>
            <p className={twMerge("text-2xl font-medium")}>
              {formatPrice({
                price: product.price,
                currency: product.currency,
              })}
            </p>
            <div
              className="prose prose-neutral dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: product.description.html }}
            />
            <StockAvailabilityIndicator
              available={product.quantityAvailable > 0}
            />
            {blockAddToCart ? (
              <Button variant="indigo" size="lg" asChild>
                <Link href="/cart">Edytuj ilość produktu w koszyku</Link>
              </Button>
            ) : (
              <AddToCart
                productId={product.id}
                availableQuantity={product.quantityAvailable}
              />
            )}
          </div>
        </div>
      </Container>
      {relatedProducts.length > 0 && (
        <Container as="section" aria-labelledby="related-products">
          <header className="flex flex-col gap-2">
            <Heading as="h2" size="2xl" id="related-products">
              Podobne produkty
            </Heading>
          </header>
          <ProductsList products={relatedProducts} slider />
        </Container>
      )}
    </div>
  );
};
