"use server";

import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";
import { updateCartItemQuantity } from "@/lib/queries/updateCartItemQuantity";
import { deleteCartItem } from "@/lib/queries/deteteCartItem";
import { TAGS } from "@/lib/constants";
import { createEmptyCart } from "@/lib/queries/createEmptyCart";
import { getCartById } from "@/lib/queries/getCartById";
import { addItemToCart } from "@/lib/queries/addItemToCart";
import { env } from "@/lib/env.mjs";
import type { Cart, CartItem } from "@/lib/types";

const expirationTimeInSeconds = 60 * 60 * 24 * env.COOKIE_MAX_AGE_IN_DAYS;

const getCartIdFromCookie = () => {
  const cookieStore = cookies();
  const cookieWithCartId = cookieStore.get("cartId");
  return cookieWithCartId?.value;
};

const setCartIdInCookie = (cartId: string) => {
  const cookieStore = cookies();
  cookieStore.set("cartId", cartId, { maxAge: expirationTimeInSeconds });
};

const createNewCart = async () => {
  const cart = await createEmptyCart();

  if (cart) {
    setCartIdInCookie(cart.id);
    return cart;
  }

  throw new Error("Cannot set new cart.");
};

const getCart = async () => {
  const cartId = getCartIdFromCookie();

  if (!cartId) return await createNewCart();

  const currentCart = await getCartById({ id: cartId });
  if (currentCart) return currentCart;

  return await createNewCart();
};

const refreshCookie = () => {
  const cartId = getCartIdFromCookie();

  if (cartId) {
    const cookieStore = cookies();
    cookieStore.set("cartId", cartId, { maxAge: expirationTimeInSeconds });
  }
};

export const increaseProductQuantityInExistingCartItem = async ({
  cart,
  existingCartItem,
  productId,
}: {
  cart: Cart;
  existingCartItem: CartItem;
  productId: string;
}) => {
  if (
    existingCartItem.quantity === existingCartItem.product?.quantityAvailable
  ) {
    return existingCartItem.quantity;
  }

  const updatedCart = await updateCartItemQuantity({
    cartId: cart.id,
    itemId: existingCartItem.id,
    qty: existingCartItem.quantity + 1,
  });

  if (updatedCart) {
    revalidateTag(TAGS.cart);
    refreshCookie();
  }

  const updatedCartItem = updatedCart?.items.find(
    (item) => item.product && item.product.id === productId,
  );

  if (updatedCartItem) {
    return updatedCartItem.quantity;
  }

  throw new Error("Can not return updated cart item.");
};

export const addNewItemToCart = async (productId: string) => {
  const cart = await getCart();
  if (!cart) throw new Error(`Cannot add product to cart.`);

  const currentlyExistedCartItemWithGivenProduct = cart.items.find(
    (item) => item.product && item.product.id === productId,
  );

  if (currentlyExistedCartItemWithGivenProduct) {
    return increaseProductQuantityInExistingCartItem({
      cart,
      existingCartItem: currentlyExistedCartItemWithGivenProduct,
      productId,
    });
  }

  const updatedCartWithNewlyAddedItem = await addItemToCart({
    cartId: cart.id,
    productId: productId,
    productQty: 1,
  });

  if (updatedCartWithNewlyAddedItem) {
    revalidateTag(TAGS.cart);
    refreshCookie();
  }
};

export const removeItemFromCart = async (itemId: string) => {
  const cart = await getCart();
  if (!cart) throw new Error(`Cannot remove item from cart.`);

  const updatedCart = await deleteCartItem({ cartId: cart.id, itemId });

  if (updatedCart) {
    revalidateTag(TAGS.cart);
    refreshCookie();
  }
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

  if (updatedCart) {
    revalidateTag(TAGS.cart);
    refreshCookie();
  }
};
