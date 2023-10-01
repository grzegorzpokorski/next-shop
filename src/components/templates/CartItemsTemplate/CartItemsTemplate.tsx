import { CartList } from "@/components/layout/Cart/CartList/CartList";
import { CartListItem } from "@/components/layout/Cart/CartListItem/CartListItem";
import { CartListItemDescription } from "@/components/layout/Cart/CartListItemDescription/CartListItemDescription";
import { CartListItemImage } from "@/components/layout/Cart/CartListItemImage/CartListItemImage";
import { CartListItemPricingSummary } from "@/components/layout/Cart/CartListItemPricingSummary/CartListItemSummary";
import { CartListItemQuantitySummary } from "@/components/layout/Cart/CartListItemQuantitySummary/CartListItemQuantitySummary";
import { DeleteItemFromCart } from "@/components/layout/Cart/DeteteItemFromCart/DeleteItemFromCart";
import { QuantityChangerForm } from "@/components/layout/Cart/QuantityChangerForm/QuantityChangerForm";
import type { CartItem } from "@/lib/types";

type Props = {
  items: CartItem[];
  modal?: boolean;
};

export const CartItemsTemplate = ({ items, modal = false }: Props) => {
  return (
    <CartList>
      {items.map(
        (item) =>
          item.product && (
            <CartListItem key={item.id}>
              <div className="flex gap-4 items-center">
                <CartListItemImage
                  href={`/product/${item.product.slug}`}
                  image={item.product.thumbnail}
                />
                <CartListItemDescription product={item.product} />
                {!modal && <DeleteItemFromCart itemId={item.id} />}
              </div>
              <div className="flex justify-between items-center">
                {modal ? (
                  <CartListItemQuantitySummary quantity={item.quantity} />
                ) : (
                  <QuantityChangerForm
                    itemId={item.id}
                    quantity={item.quantity}
                    maxQuantity={item.product.quantityAvailable}
                  />
                )}
                <CartListItemPricingSummary
                  currency={item.product.currency}
                  price={item.product.price}
                  quantity={item.quantity}
                />
              </div>
            </CartListItem>
          ),
      )}
    </CartList>
  );
};
