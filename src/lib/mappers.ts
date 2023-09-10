import type {
  Cart,
  Category,
  ProductWithDetails,
  ProductWithSummary,
} from "@/lib/types";
import type {
  CartFragment,
  CategoryDetailsFragment,
  PageFragment,
  ProductDetailsFragment,
  ProductSummaryFragment,
} from "@/lib/generated/graphql";

export const reshapeProductWithDetails = (
  product: ProductDetailsFragment,
): ProductWithDetails | undefined => {
  const images = product.gallery
    .filter((item) => item.mimeType?.includes("image"))
    .map((item) => ({
      url: item.url,
      alt: `${product.name} - ${item.fileName}`,
      width: item.width || 0,
      height: item.height || 0,
    }));

  return {
    id: product.id,
    name: product.name,
    slug: product.slug,
    description: {
      html: product.description.html,
    },
    seoTitle: product.seoTitle || product.name,
    seoDescription: product.seoDescription || product.description.html,
    price: product.price,
    currency: product.currency,
    quantityAvailable: product.quantityAvailable,
    images: images,
    updatedAt: product.updatedAt,
    createdAt: product.createdAt,
    category: product.category
      ? {
          name: product.category.name,
          slug: product.category.slug,
        }
      : undefined,
  };
};

export const reshapeProductWithSummary = (
  product: ProductSummaryFragment,
): ProductWithSummary => {
  const thumbnail = product.gallery
    .filter((item) => item.mimeType?.includes("image"))
    .map((item) => ({
      url: item.url,
      alt: `${product.name} - ${item.fileName}`,
      width: item.width || 0,
      height: item.height || 0,
    }))[0];

  return {
    id: product.id,
    name: product.name,
    slug: product.slug,
    price: product.price,
    currency: product.currency,
    quantityAvailable: product.quantityAvailable,
    thumbnail: thumbnail,
    category: product.category
      ? {
          name: product.category.name,
          slug: product.category.slug,
        }
      : undefined,
    updatedAt: product.updatedAt,
    createdAt: product.createdAt,
  };
};

export const reshapeCategory = (
  category: CategoryDetailsFragment,
): Category => {
  return {
    name: category.name,
    slug: category.slug,
    description: category.description ? category.description : undefined,
    thumbnail: category.thumbnail.mimeType?.includes("image")
      ? {
          url: category.thumbnail.url,
          alt: `${category.name} - ${category.thumbnail.fileName}`,
          width: category.thumbnail.width || 0,
          height: category.thumbnail.height || 0,
        }
      : undefined,
  };
};

export const reshapeCart = (cart: CartFragment): Cart => {
  return {
    id: cart.id,
    items: cart.items.map((item) => ({
      ...item,
      product: item.product ? reshapeProductWithSummary(item.product) : null,
    })),
    totalQty: cart.items.reduce((sum, curr) => {
      return curr.quantity + sum;
    }, 0),
    totalValue: cart.items.reduce((value, curr) => {
      if (curr.product?.price)
        return value + curr.product.price * curr.quantity;
      return value;
    }, 0),
  };
};

export const reshapePage = (page: PageFragment) => {
  return {
    id: page.id,
    slug: page.slug,
    title: page.title,
    content: page.content,
  };
};
