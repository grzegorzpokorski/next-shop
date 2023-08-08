import type { ProductWithDetails, ProductWithSummary } from "./types";
import type {
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
