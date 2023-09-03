import Image from "next/image";
import { DecreaseItemQty } from "@/components/layout/Cart/DecreaseItemQty/DecreaseItemQty";
import { IncreaseItemQty } from "@/components/layout/Cart/IncreaseItemQty/IncreaseItemQty";
import { Heading } from "@/components/ui/Heading/Heading";
import { DeleteItemFromCart } from "@/components/layout/Cart/DeteteItemFromCart/DeleteItemFromCart";
import { formatPrice } from "@/utils/formatPrice";
import type { CartItem } from "@/lib/types";

type Props = {
  items: CartItem[];
};

export const CartItemsList = ({ items }: Props) => {
  return (
    <ul className="list-none flex flex-col" role="list">
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
};

const Item = ({ item }: { item: CartItem }) => {
  if (!item.product) return null;

  const { id, product, quantity } = item;

  return (
    <li
      key={id}
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
          <p className="text-primary/80 text-sm">{product.category?.name}</p>
        </div>
        <DeleteItemFromCart itemId={id} />
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1">
          <DecreaseItemQty itemId={id} quantity={quantity} />
          <span className="px-2 text-sm">
            {quantity} z {product.quantityAvailable}{" "}
            <span className="hidden md:inline">dostępnych</span>
          </span>
          <IncreaseItemQty
            itemId={id}
            quantity={quantity}
            quantityAvailable={product.quantityAvailable}
          />
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
            price: product.price * quantity,
          })}
        </p>
      </div>
    </li>
  );
};
