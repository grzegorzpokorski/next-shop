import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { FaPlus } from "react-icons/fa";
import { ProductsList } from "@/components/ProductsList/ProductsList";
import { Container } from "@/components/ui/Container/Container";
import { Heading } from "@/components/ui/Heading/Heading";
import type {
  ProductDetailsFragment,
  ProductSummaryFragment,
} from "@/generated/graphql";
import { Button } from "@/components/ui/Button/Button";
import { formatPrice } from "@/utils/formatPrice";

type Props = {
  product: ProductDetailsFragment;
  relatedProducts: ProductSummaryFragment[];
};

export const ProductPage = async ({ product, relatedProducts }: Props) => {
  return (
    <div className="flex flex-col gap-8 py-8">
      <Container as="div" aria-labelledby="product-title">
        <div className="flex flex-col md:flex-row gap-8 bg-white dark:bg-black p-8 rounded-md border">
          <div className="flex flex-col md:w-1/2 md:min-h-[500px]">
            <Image
              src={product.gallery[0].url}
              alt={""}
              width={product.gallery[0].width || 0}
              height={product.gallery[0].height || 0}
              className="w-auto h-auto max-h-[500px] m-auto"
              priority
            />
          </div>
          <div className="flex flex-col items-start justify-center gap-4 w-full md:w-1/2">
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
            <Button variant="indigo" size="lg">
              <FaPlus className="mr-2" aria-hidden />
              Dodaj do koszyka
            </Button>
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