import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { FaPlus } from "react-icons/fa";
import { ProductsList } from "@/components/blocks/ProductsList/ProductsList";
import { Container } from "@/components/ui/Container/Container";
import { Heading } from "@/components/ui/Heading/Heading";
import { Button } from "@/components/ui/Button/Button";
import { formatPrice } from "@/utils/formatPrice";
import { badgeVariants } from "@/components/ui/Badge/Badge";
import type { ProductWithDetails, ProductWithSummary } from "@/lib/types";

type Props = {
  product: ProductWithDetails;
  relatedProducts: ProductWithSummary[];
};

export const ProductPage = async ({ product, relatedProducts }: Props) => {
  return (
    <div className="flex flex-col gap-8 py-8">
      <Container as="article" aria-labelledby="product-title">
        <div className="flex flex-col md:flex-row gap-8 bg-white dark:bg-black p-8 rounded-md border">
          <div className="h-full w-full md:w-1/2 overflow-hidden md:sticky md:top-20">
            <Image
              src={product.images[0].url}
              alt={product.images[0].alt}
              width={product.images[0].width}
              height={product.images[0].height}
              className="relative m-auto object-contain"
              priority
            />
          </div>
          <div className="flex flex-col items-start justify-center gap-4 w-full md:w-1/2">
            <Link
              href={`/category/${product.category?.slug}`}
              className={badgeVariants({ variant: "category" })}
            >
              {product.category?.name}
            </Link>
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
