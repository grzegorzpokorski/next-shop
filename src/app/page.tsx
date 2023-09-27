import { Suspense } from "react";
import { RecentlyViewed } from "@/components/sections/RecentlyViewed/RecentlyViewed";
import { RecentlyViewedSkeleton } from "@/components/sections/RecentlyViewed/RecentlyViewedSkeleton";
import { RecommendedCategories } from "@/components/sections/RecommendedCategories/RecommendedCategories";
import { getCategoriesBySlugs } from "@/lib/queries/getCategoriesBySlugs";

export default async function Page() {
  const categories = await getCategoriesBySlugs({
    slugs: ["myszki", "sluchawki", "klawiatury"],
  });

  return (
    <>
      <RecommendedCategories categories={categories} />
      <Suspense fallback={<RecentlyViewedSkeleton />}>
        <RecentlyViewed />
      </Suspense>
    </>
  );
}
