import Image from "next/image";
import { FaMinus, FaPlus } from "react-icons/fa";
import type { ProductWithSummary } from "@/lib/types";
import { Heading } from "@/components/ui/Heading/Heading";
import { Button } from "@/components/ui/Button/Button";
import { formatPrice } from "@/utils/formatPrice";

type Props = {
  products: ProductWithSummary[];
};

export const CartItemsList = ({ products }: Props) => {
  return (
    <ul className="list-none flex flex-col" role="list">
      {products.map((product) => (
        <li
          key={product.id}
          className="border-b last:border-0 p-4 lg:p-8 flex flex-col gap-4"
        >
          <div className="flex gap-4 items-center">
            <a
              href={`/product/${product.slug}`}
              className="h-20 w-20 flex-shrink-0 overflow-hidden rounded border bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-900/50 dark:hover:bg-neutral-900/40 motion-safe:transition-colors"
            >
              <Image
                src={product.thumbnail.url}
                width={product.thumbnail.width}
                height={product.thumbnail.height}
                alt={product.thumbnail.alt}
                className="h-full w-full object-cover object-center"
              />
            </a>
            <div className="flex flex-col items-start mr-auto gap-1">
              <a href={`/product/${product.slug}`}>
                <Heading as="h2" size="default">
                  {product.name}
                </Heading>
              </a>
              <p className="text-primary/80 text-sm">
                {product.category?.name}
              </p>
            </div>
            <Button size="icon-sm" variant="ghost">
              <span className="sr-only">usuń z koszyka</span>
              <FaPlus aria-hidden className="rotate-45" />
            </Button>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1">
              <Button size="icon-sm" variant="outline">
                <span className="sr-only">zmniejsz ilość</span>
                <FaMinus aria-hidden />
              </Button>
              <span className="px-2 text-sm">
                1 z {product.quantityAvailable}{" "}
                <span className="hidden md:inline">dostępnych</span>
              </span>
              <Button size="icon-sm" variant="outline">
                <span className="sr-only">zwiększ ilość</span>
                <FaPlus aria-hidden />
              </Button>
            </div>
            <p className="text-sm">
              <span className="font-medium block">
                {formatPrice({
                  currency: product.currency,
                  price: product.price,
                })}
              </span>{" "}
              za sztukę{" "}
              {formatPrice({
                currency: product.currency,
                price: product.price * 2,
              })}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};
