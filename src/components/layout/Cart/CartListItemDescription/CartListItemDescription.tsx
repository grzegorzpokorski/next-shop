import { Heading } from "@/components/ui/Heading/Heading";
import type { ProductWithSummary } from "@/lib/types";

type Props = {
  product: ProductWithSummary;
};

export const CartListItemDescription = ({ product }: Props) => {
  return (
    <div className="flex flex-col items-start mr-auto gap-1">
      <a href={`/product/${product.slug}`}>
        <Heading as="h2" size="default">
          {product.name}
        </Heading>
      </a>
      <p className="text-primary/80 text-sm">{product.category?.name}</p>
    </div>
  );
};
