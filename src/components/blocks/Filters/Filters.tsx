"use client";

import { useFilters } from "@/components/blocks/Filters/hooks/useFilters";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select/Select";

export const Filters = () => {
  const { changeSortingMethod, currentSortSlug, sortingOptions } = useFilters();

  return (
    <div className="flex flex-col lg:flex-row items-center justify-end">
      <label className="w-full lg:w-72">
        <span className="sr-only">Sorotwanie</span>
        <Select value={currentSortSlug} onValueChange={changeSortingMethod}>
          <SelectTrigger>
            <SelectValue placeholder="Sorotwanie" />
          </SelectTrigger>
          {/* TODO: remove this hack when this PR (https://github.com/radix-ui/primitives/pull/2085) will be merged or this issue resolved (https://github.com/radix-ui/primitives/issues/1658) */}
          <SelectContent
            ref={(ref) => {
              if (!ref) return;
              ref.ontouchstart = (e) => {
                e.preventDefault();
              };
            }}
          >
            {sortingOptions.map((option) => {
              return (
                <SelectItem key={option.slug} value={option.slug}>
                  {option.title}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </label>
    </div>
  );
};
