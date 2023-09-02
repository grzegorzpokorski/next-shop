"use server";

import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";
import { deleteCartItem } from "@/lib/queries/deteteCartItem";
import { TAGS } from "@/lib/constants";
import { createEmptyCart } from "@/lib/queries/createEmptyCart";
import { getCartById } from "@/lib/queries/getCartById";
import { addItemToCart } from "@/lib/queries/addItemToCart";

export const getCart = async () => {
  const cookieStore = cookies();
  const cookieWithCartId = cookieStore.get("cartId");
  const cartId = cookieWithCartId?.value;

  if (cartId) return await getCartById({ id: cartId });

  const cart = await createEmptyCart();

  if (cart) {
    cookieStore.set("cartId", cart.id);
    return cart;
  }

  throw new Error("Cannot get cart.");
};

export const addNewItemToCart = async (productId: string) => {
  const cart = await getCart();
  if (!cart) throw new Error(`Cannot add product to cart.`);

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
