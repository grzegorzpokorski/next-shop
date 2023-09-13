"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { defaultSort, sorting } from "@/lib/constants";

export const useFilters = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const sortingSlugs = sorting.map((item) => item.slug);
  const currentSortSlug = searchParams.get("sort") || defaultSort.slug;

  const changeSortingMethod = (sortSlug: string) => {
    const currentSearchParams = new URLSearchParams(searchParams.toString());
    currentSearchParams.set("sort", sortSlug);
    const paramsString = currentSearchParams.toString();
    router.push(`${pathname}?${paramsString}`);
  };

  return {
    currentSortSlug: sortingSlugs.includes(currentSortSlug)
      ? currentSortSlug
      : defaultSort.slug,
    sortingOptions: sorting,
    changeSortingMethod,
  };
};
