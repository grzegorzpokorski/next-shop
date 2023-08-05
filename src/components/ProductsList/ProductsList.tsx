import { twMerge } from "tailwind-merge";
import { ProductListItem } from "@/components/ProductListItem/ProductListItem";
import type { ProductSummaryFragment } from "@/generated/graphql";

type Props = {
  products: ProductSummaryFragment[];
  slider?: boolean;
};

export const ProductsList = ({ products, slider }: Props) => {
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
          return <ProductListItem key={product.id} product={product} slider />;
        })}
    </ul>
  );
};
