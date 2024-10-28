"use client";

import Form from "next/form";
import { useId } from "react";
import { FaSearch } from "react-icons/fa";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/Button/Button";

export const SearchForm = () => {
  const inputId = useId();
  const searchParams = useSearchParams();
  const searchTerm = searchParams?.get("q");

  return (
    <search className="w-full lg:min-w-[200px] lg:max-w-[400px]">
      <Form action="/products" className="relative flex">
        <label className="sr-only" htmlFor={inputId}>
          Szukaj produktów
        </label>
        <input
          name="q"
          type="text"
          placeholder="Szukaj produktów..."
          className="h-11 pr-24 w-full rounded-lg border bg-white dark:bg-neutral-800 px-4 py-2 text-sm text-black placeholder:text-neutral-500 dark:border-neutral-800 dark:text-white dark:placeholder:text-neutral-400"
          id={inputId}
          autoComplete="off"
          defaultValue={searchTerm ?? ""}
        />
        <div className="absolute right-0">
          <Button type="submit" size="icon" variant="search">
            <span className="sr-only">szukaj</span>
            <FaSearch />
          </Button>
        </div>
      </Form>
    </search>
  );
};
