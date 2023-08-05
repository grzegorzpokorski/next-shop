import Link from "next/link";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import type { ProductSummaryFragment } from "@/generated/graphql";
import { PriceTag } from "@/components/PriceTag/PriceTag";

type Props = {
  product: ProductSummaryFragment;
  slider?: boolean;
};

export const ProductListItem = ({ product, slider }: Props) => {
  return (
    <li
      key={product.id}
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
            src={product.gallery[0].url}
            width={product.gallery[0].width || 0}
            height={product.gallery[0].height || 0}
            alt={product.gallery[0].fileName}
            className="relative h-full w-full object-contain transition motion-reduce:transition-none duration-300 ease-in-out motion-safe:hover:scale-105"
            unoptimized
          />
          <div className="absolute bottom-0 left-0 right-0 flex w-full px-4 pb-4">
            <div className="flex w-full gap-4 items-center rounded border bg-white/70 p-1 font-medium text-black backdrop-blur-md text-xs dark:border-neutral-800 dark:bg-black/70 dark:text-white">
              <h3 className="inline leading-none tracking-tight mr-auto pl-2">
                {product.name}
              </h3>
              <PriceTag currency={product.currency} price={product.price} />
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};