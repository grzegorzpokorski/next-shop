import { twMerge } from "tailwind-merge";
import { ProductListItem } from "@/components/ProductListItem/ProductListItem";
import type { ProductSummaryFragment } from "@/generated/graphql";

type Props = {
  products: ProductSummaryFragment[];
  slider: boolean;
};

export const ProductsList = ({ products, slider }: Props) => {
  return (
    <ul
      className={twMerge(
        "list-none py-4 flex justify-between gap-y-4",
        slider ? "overflow-x-auto gap-x-4" : "flex-wrap",
      )}
      role="list"
    >
      {products.length > 0 &&
        products.map((product) => {
          return <ProductListItem key={product.id} product={product} />;
        })}
    </ul>
  );
};
