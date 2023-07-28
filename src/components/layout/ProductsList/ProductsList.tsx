import Link from "next/link";
import Image from "next/image";
import type data from "@/data/data.json";
import { formatPrice } from "@/utils/formatPrice";

type Props = {
  products: (typeof data)[number][];
};

export const ProductsList = ({ products }: Props) => {
  return (
    <ul
      className="list-none grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4 py-4"
      role="list"
    >
      {products.length > 0 &&
        products.map((product) => {
          return (
            <li
              key={product.id}
              className="aspect-square transition-opacity motion-reduce:transition-none motion-safe:animate-fadeIn"
            >
              <Link
                href={`/product/${product.slug}`}
                className="inline-block w-full h-full"
              >
                <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-indigo-600 dark:hover:border-indigo-500 dark:bg-black relative border-neutral-200 dark:border-neutral-800">
                  <Image
                    src={product.image.url}
                    width={product.image.width}
                    height={product.image.height}
                    alt={product.image.alt}
                    className="relative h-full w-full object-contain transition motion-reduce:transition-none duration-300 ease-in-out motion-safe:hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label">
                    <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md @[275px]/label:text-xs dark:border-neutral-800 dark:bg-black/70 dark:text-white">
                      <h3 className="mr-4 inline pl-2 leading-none tracking-tight">
                        {product.name}
                      </h3>
                      <p className="flex-none rounded-full bg-indigo-600 p-2 text-white">
                        {formatPrice(product.price)}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
    </ul>
  );
};
