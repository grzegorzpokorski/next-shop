import { notFound } from "next/navigation";
import { OffersListPage } from "@/components/pages/OffersListPage/OffersListPage";
import { getAllProducts } from "@/queries/getAllProducts";
import { env } from "@/lib/env.mjs";

type Props = {
  params: {
    page: string | undefined;
  };
};

export default async function Page({ params: { page } }: Props) {
  const currentPage = typeof page === "undefined" ? 1 : parseInt(page);

  if (Number.isNaN(currentPage) || currentPage < 1) return notFound();

  const { products, count } = await getAllProducts({
    limit: 8,
    skip: ((currentPage < 1 ? 1 : currentPage) - 1) * env.OFFERS_PER_PAGE,
  });

  return (
    <OffersListPage
      products={products}
      currentPage={currentPage}
      lastPage={Math.ceil(count / env.OFFERS_PER_PAGE)}
      count={count}
      title="Wszystkie produkty"
    />
  );
}
