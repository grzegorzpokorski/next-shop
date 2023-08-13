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
  title: "Cena: od najtańszego",
  slug: "price-asc",
  sortKey: ProductOrderByInput.PriceAsc,
};

export const sorting: SortFilterItem[] = [
  defaultSort,
  {
    title: "Cena: od najdroższego",
    slug: "price-desc",
    sortKey: ProductOrderByInput.PriceDesc,
  },
  {
    title: "Data dodania: od najstarszego",
    slug: "latest-desc",
    sortKey: ProductOrderByInput.PublishedAtAsc,
  },
  {
    title: "Data dodania: od najnowszego",
    slug: "latest-asc",
    sortKey: ProductOrderByInput.PublishedAtDesc,
  },
];
