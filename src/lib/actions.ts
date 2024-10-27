"use server";

import { cookies } from "next/headers";
import { updateCartItemQuantity } from "@/lib/queries/cart/updateCartItemQuantity";
import { deleteCartItem } from "@/lib/queries/cart/deteteCartItem";
import { createEmptyCart } from "@/lib/queries/cart/createEmptyCart";
import { getCartById } from "@/lib/queries/cart/getCartById";
import { addItemToCart } from "@/lib/queries/cart/addItemToCart";
import { env } from "@/lib/env.mjs";
import type { Cart, CartItem } from "@/lib/types";

const expirationTimeInSeconds = 60 * 60 * 24 * env.COOKIE_MAX_AGE_IN_DAYS;

const getCartIdFromCookie = async () => {
  const cookieStore = await cookies();
  const cookieWithCartId = cookieStore.get("cartId");
  return cookieWithCartId?.value;
};

const setCartIdInCookie = async (cartId: string) => {
  const cookieStore = await cookies();
  cookieStore.set("cartId", cartId, { maxAge: expirationTimeInSeconds });
};

const createNewCart = async () => {
  const cart = await createEmptyCart();

  if (cart) {
    await setCartIdInCookie(cart.id);
    return cart;
  }

  throw new Error("Cannot set new cart.");
};

const getCart = async () => {
  const cartId = await getCartIdFromCookie();

  if (!cartId) return await createNewCart();

  const currentCart = await getCartById({ id: cartId });
  if (currentCart) return currentCart;

  return await createNewCart();
};

const refreshCookie = async () => {
  const cartId = await getCartIdFromCookie();

  if (cartId) {
    await setCartIdInCookie(cartId);
  }
};

export const increaseProductQuantityInExistingCartItem = async ({
  cart,
  existingCartItem,
}: {
  cart: Cart;
  existingCartItem: CartItem;
}) => {
  if (
    existingCartItem.quantity === existingCartItem.product?.quantityAvailable
  ) {
    return cart;
  }

  const updatedCart = await updateCartItemQuantity({
    cartId: cart.id,
    itemId: existingCartItem.id,
    qty: existingCartItem.quantity + 1,
  });

  if (updatedCart) {
    await refreshCookie();
    return updatedCart;
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
    });
  }

  const updatedCartWithNewlyAddedItem = await addItemToCart({
    cartId: cart.id,
    productId: productId,
    productQty: 1,
  });

  if (updatedCartWithNewlyAddedItem) {
    await refreshCookie();
    return updatedCartWithNewlyAddedItem;
  }

  return null;
};

export const removeItemFromCart = async (itemId: string) => {
  const cart = await getCart();
  if (!cart) throw new Error(`Cannot remove item from cart.`);

  const updatedCart = await deleteCartItem({ cartId: cart.id, itemId });

  if (updatedCart) {
    await refreshCookie();
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
    await refreshCookie();
  }
};
