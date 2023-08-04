import Link from "next/link";
import { Button } from "@/components/ui/Button/Button";
import { arrayFromRange } from "@/utils/arrayFromRange";

type Props = {
  pagination: {
    currentPage: number;
    totalPages: number;
    searchParams: string | null;
    baseUrl: string;
  };
};

export const QUESTIONS_PAGINATION_SEPARATOR = Symbol(
  "QUESTIONS_PAGINATION_SEPARATOR",
);

export const getPages = ({
  first,
  last,
  current,
}: {
  first: number;
  last: number;
  current: number;
}): ReadonlyArray<number | typeof QUESTIONS_PAGINATION_SEPARATOR> => {
  if (first === last) {
    return [1];
  }

  const previous = current - (1 + Math.max(0, current - (last - 2)));
  const next = current + (1 + Math.max(0, 3 - current));
  const firstMiddle = Math.max(first + 1, previous);
  const lastMiddle = Math.min(last - 1, next);
  const middle = arrayFromRange(firstMiddle, lastMiddle + 1);

  return [
    first,
    firstMiddle === first + 1 ? undefined : QUESTIONS_PAGINATION_SEPARATOR,
    ...middle,
    lastMiddle === last - 1 ? undefined : QUESTIONS_PAGINATION_SEPARATOR,
    last,
  ].filter(
    (el): el is number | typeof QUESTIONS_PAGINATION_SEPARATOR =>
      el !== undefined,
  );
};

export const Pagination = ({ pagination }: Props) => {
  const pages = getPages({
    first: 1,
    current: pagination.currentPage,
    last: pagination.totalPages,
  });

  if (pagination.totalPages === 1) return null;

  return (
    <nav aria-label="Paginacja" role="navigation" className="mb-8 mt-4">
      <ul className="flex justify-center items-center gap-2">
        {pages.map((page, idx) =>
          page === QUESTIONS_PAGINATION_SEPARATOR ? (
            <li key={`${page.toString()}_${idx}`} aria-hidden="true">
              <span className="iline-flex items-center justify-center text-secondary after:content-['…'] after:top-1/2 after:translate-y-1/2"></span>
            </li>
          ) : (
            <li key={page}>
              <Button
                asChild
                variant={
                  pagination.currentPage === page ? "outline-active" : "outline"
                }
              >
                <Link
                  href={
                    pagination.searchParams
                      ? `${pagination.baseUrl}/${page}?${pagination.searchParams}`
                      : `${pagination.baseUrl}/${page}`
                  }
                  aria-label={`Strona ${page}${
                    pagination.currentPage - 1 === page
                      ? ", poprzednia"
                      : pagination.currentPage + 1 === page
                      ? ", kolejna"
                      : ""
                  }`}
                >
                  {page}
                </Link>
              </Button>
            </li>
          ),
        )}
      </ul>
    </nav>
  );
};
