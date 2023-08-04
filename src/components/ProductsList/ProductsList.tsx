import { Product } from "@/components/ProductsList/components/Product/Product";
import type { ProductSummaryFragment } from "@/generated/graphql";

type Props = {
  products: ProductSummaryFragment[];
};

export const ProductsList = ({ products }: Props) => {
  return (
    <ul
      className="list-none grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4 py-4"
      role="list"
    >
      {products.length > 0 &&
        products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
    </ul>
  );
};
