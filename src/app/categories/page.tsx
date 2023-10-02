import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container/Container";
import { Heading } from "@/components/ui/Heading/Heading";
import { getCategories } from "@/lib/queries/categories/getCategories";
import { CategoriesList } from "@/components/sections/CategoriesList/CategoriesList";

export function generateMetadata(): Metadata {
  return {
    title: "Kategorie",
    alternates: {
      canonical: `/categories`,
    },
    openGraph: {
      images: [
        {
          url: `/api/og?width=1200&height=630&subtitle=${encodeURIComponent(
            "wszystkie kategorie",
          )}`,
          width: 1200,
          height: 630,
          alt: `Next Shop - wszystkie kategorie`,
        },
      ],
    },
  };
}

export default async function Page() {
  const categories = await getCategories();
  if (categories.length === 0) return notFound();

  return (
    <Container as="div">
      <header
        className="flex flex-col gap-4 justify-between pt-16 pb-12 max-w-3xl"
        aria-labelledby="page-title"
      >
        <Heading as="h1" size="3xl" id="page-title">
          Kategorie
        </Heading>
      </header>
      <CategoriesList categories={categories} />
    </Container>
  );
}
