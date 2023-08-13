"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { defaultSort, sorting } from "@/lib/constants";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select/Select";

export const Filters = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentSortSlug = searchParams.get("sort") || defaultSort.slug;

  const appendSelectedSortingMethod = (sortSlug: string) => {
    const currentSearchParams = new URLSearchParams(searchParams.toString());
    currentSearchParams.set("sort", sortSlug);
    const paramsString = currentSearchParams.toString();
    router.push(`${pathname}?${paramsString}`);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-end">
      <Select
        value={currentSortSlug}
        onValueChange={appendSelectedSortingMethod}
      >
        <SelectTrigger className="w-full lg:w-72">
          <SelectValue placeholder="Sortowanie" />
        </SelectTrigger>
        <SelectContent>
          {sorting.map((item) => {
            return (
              <SelectItem key={item.slug} value={item.slug}>
                {item.title}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};
