"use client";

import { useId } from "react";
import { FaPlus, FaSearch } from "react-icons/fa";
import { useSearchForm } from "./hooks/useSearchForm";
import { Button } from "@/components/ui/Button/Button";

export const SearchForm = () => {
  const { onSubmit, searchQuery, setSearchQuery } = useSearchForm();
  const inputId = useId();

  return (
    <search className="w-full lg:min-w-[200px] lg:max-w-[400px]">
      <form onSubmit={onSubmit} className="relative flex">
        <label className="sr-only" htmlFor={inputId}>
          Szukaj produktów
        </label>
        <input
          name="q"
          type="text"
          placeholder="Szukaj produktów..."
          className="h-11 pr-24 w-full rounded-lg border bg-white dark:bg-neutral-800 px-4 py-2 text-sm text-black placeholder:text-neutral-500 dark:border-neutral-800 dark:text-white dark:placeholder:text-neutral-400"
          id={inputId}
          value={searchQuery}
          autoComplete="off"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="absolute right-0">
          {searchQuery.length > 0 && (
            <Button
              type="reset"
              size="icon"
              variant="search"
              onClick={() => setSearchQuery("")}
              className=""
            >
              <span className="sr-only">wyczyść pole wyszukiwania</span>
              <FaPlus className="rotate-45" />
            </Button>
          )}
          <Button
            type="submit"
            size="icon"
            variant="search"
            disabled={searchQuery.length === 0}
          >
            <span className="sr-only">szukaj</span>
            <FaSearch />
          </Button>
        </div>
      </form>
    </search>
  );
};
