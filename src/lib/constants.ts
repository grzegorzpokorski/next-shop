import { ProductOrderByInput } from "@/lib/generated/graphql";

export const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : "http://localhost:3000";

export type SortFilterItem = {
  title: string;
  slug: string;
  sortKey: ProductOrderByInput;
};

export const defaultSort = {
  title: "Cena: od najniższej",
  slug: "price-asc",
  sortKey: ProductOrderByInput.PriceAsc,
};

export const sorting: SortFilterItem[] = [
  defaultSort,
  {
    title: "Cena: od najwyższej",
    slug: "price-desc",
    sortKey: ProductOrderByInput.PriceDesc,
  },
  {
    title: "Data dodania: od najstarszej",
    slug: "latest-desc",
    sortKey: ProductOrderByInput.PublishedAtAsc,
  },
  {
    title: "Data dodania: od najnowszej",
    slug: "latest-asc",
    sortKey: ProductOrderByInput.PublishedAtDesc,
  },
];

export const TAGS = {
  products: "products",
  categories: "categories",
  cart: "cart",
  pages: "pages",
};

const productionHost = "next-shop-gp.vercel.app";
const devHost = "localhost:3000";
const host = process.env.NODE_ENV === "production" ? productionHost : devHost;
const protocol = process.env.NODE_ENV === "production" ? "https" : "http";

export const siteUrl = `${protocol}://${host}`;
