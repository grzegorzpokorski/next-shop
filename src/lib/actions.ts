"use server";

import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";
import { updateCartItemQuantity } from "@/lib/queries/updateCartItemQuantity";
import { deleteCartItem } from "@/lib/queries/deteteCartItem";
import { TAGS } from "@/lib/constants";
import { createEmptyCart } from "@/lib/queries/createEmptyCart";
import { getCartById } from "@/lib/queries/getCartById";
import { addItemToCart } from "@/lib/queries/addItemToCart";

export const getCart = async () => {
  const cookieStore = cookies();
  const cookieWithCartId = cookieStore.get("cartId");
  const cartId = cookieWithCartId?.value;
  const weekInSeconds = 60 * 60 * 24 * 7;

  const setNewCart = async () => {
    const cart = await createEmptyCart();
    if (cart) {
      cookieStore.set("cartId", cart.id, { maxAge: weekInSeconds });
      return cart;
    }
    throw new Error("Cannot set new cart.");
  };

  if (cartId) {
    const currentCart = await getCartById({ id: cartId });
    if (currentCart) return currentCart;
    return await setNewCart();
  }

  return await setNewCart();
};

export const addNewItemToCart = async (productId: string) => {
  const cart = await getCart();
  if (!cart) throw new Error(`Cannot add product to cart.`);

  const currentlyExistedCartItemWithGivenProduct = cart.items.filter(
    (item) => item.product && item.product.id === productId,
  );

  if (currentlyExistedCartItemWithGivenProduct.length > 0) {
    if (
      currentlyExistedCartItemWithGivenProduct[0].quantity ===
      currentlyExistedCartItemWithGivenProduct[0].product?.quantityAvailable
    ) {
      return;
    }

    const { id: itemId, quantity } =
      currentlyExistedCartItemWithGivenProduct[0];
    const updatedCart = await updateCartItemQuantity({
      cartId: cart.id,
      itemId,
      qty: quantity + 1,
    });
    if (updatedCart) revalidateTag(TAGS.cart);
    return;
  }

  const updatedCart = await addItemToCart({
    cartId: cart.id,
    productId: productId,
    productQty: 1,
  });
  if (updatedCart) revalidateTag(TAGS.cart);
};

export const removeItemFromCart = async (itemId: string) => {
  const cart = await getCart();
  if (!cart) throw new Error(`Cannot remove item from cart.`);

  const updatedCart = await deleteCartItem({ cartId: cart.id, itemId });
  if (updatedCart) revalidateTag(TAGS.cart);
};

export const updateItemQuantity = async ({
  itemId,
  quantity,
}: {
  itemId: string;
  quantity: number;
}) => {
  const cart = await getCart();
  if (!cart) throw new Error(`Cannot remove item from cart.`);

  const updatedCart = await updateCartItemQuantity({
    cartId: cart.id,
    itemId,
    qty: quantity,
  });
  if (updatedCart) revalidateTag(TAGS.cart);
};
