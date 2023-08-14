"use client";

import { useRouter, useSearchParams } from "next/navigation";
import type { FormEvent } from "react";
import { useEffect, useState } from "react";
import { createUrl } from "@/utils/createUrl";

export const useSearchForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    setSearchValue(searchParams?.get("q") || "");
  }, [searchParams, setSearchValue]);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const input = e.currentTarget.elements.namedItem("q");
    const newParams = new URLSearchParams(searchParams.toString());

    if (input instanceof HTMLInputElement) {
      newParams.set("q", input.value);
    } else {
      newParams.delete("q");
    }

    router.push(createUrl("/products", newParams));
  }

  const setSearchQuery = (value: string) => setSearchValue(value);

  return { searchQuery: searchValue, setSearchQuery, onSubmit };
};
