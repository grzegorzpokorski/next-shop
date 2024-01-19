"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

type Props = {
  page: number;
  currentPage: number;
};

export const PaginationLink = ({ page, currentPage }: Props) => {
  const searchParams = useSearchParams();

  return (
    <Link
      href={
        searchParams.toString()
          ? `${page}?${searchParams.toString()}`
          : `${page}`
      }
      aria-label={`Strona ${page}${
        currentPage - 1 === page
          ? ", poprzednia"
          : currentPage + 1 === page
            ? ", kolejna"
            : ""
      }`}
    >
      {page}
    </Link>
  );
};
