import Link from "next/link";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { formatPrice } from "@/utils/formatPrice";
import type { ProductWithSummary } from "@/lib/types";

type ProductsListProps = {
  products: ProductWithSummary[];
  slider?: boolean;
};

export const ProductsList = ({ products, slider }: ProductsListProps) => {
  return (
    <ul
      className={twMerge(
        "list-none py-4 gap-3 md:gap-4",
        slider
          ? "flex flex-row overflow-x-auto"
          : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
      )}
      role="list"
    >
      {products.length > 0 &&
        products.map((product) => {
          return (
            <ProductListItem key={product.name} product={product} slider />
          );
        })}
    </ul>
  );
};

type ProductListItemProps = {
  product: ProductWithSummary;
  slider?: boolean;
};

const ProductListItem = ({ product, slider }: ProductListItemProps) => {
  return (
    <li
      key={product.name}
      className={twMerge(
        "aspect-square transition-opacity motion-reduce:transition-none motion-safe:animate-fadeIn w-full",
        slider && "min-w-[280px]",
      )}
    >
      <Link
        href={`/product/${product.slug}`}
        className="inline-block w-full h-full"
      >
        <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-indigo-600 dark:hover:border-indigo-500 dark:bg-black relative border-neutral-200 dark:border-neutral-800">
          <Image
            src={product.thumbnail.url}
            width={product.thumbnail.width}
            height={product.thumbnail.height}
            alt={product.thumbnail.alt}
            className="relative h-full w-full object-contain transition motion-reduce:transition-none duration-300 ease-in-out motion-safe:hover:scale-105"
            unoptimized
          />
          <div className="absolute bottom-0 left-0 right-0 flex w-full px-4 pb-4">
            <div className="flex w-full gap-4 items-center rounded border bg-white/70 p-1 font-medium text-black backdrop-blur-md text-xs dark:border-neutral-800 dark:bg-black/70 dark:text-white">
              <h3 className="inline leading-none tracking-tight mr-auto pl-2">
                {product.name}
              </h3>
              <p
                className={twMerge(
                  "flex-none rounded bg-indigo-600 p-2 text-white",
                )}
              >
                {formatPrice({
                  price: product.price,
                  currency: product.currency,
                })}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};
