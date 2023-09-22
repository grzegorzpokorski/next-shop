import { Suspense } from "react";
import { RecentlyViewed } from "@/components/sections/RecentlyViewed/RecentlyViewed";
import { RecentlyViewedSkeleton } from "@/components/sections/RecentlyViewed/RecentlyViewedSkeleton";
import { RecommendedCategories } from "@/components/sections/RecommendedCategories/RecommendedCategories";
import { getCategories } from "@/lib/queries/getCategories";

export default async function Page() {
  const categories = await getCategories();

  return (
    <>
      <RecommendedCategories categories={categories} />
      <Suspense fallback={<RecentlyViewedSkeleton />}>
        <RecentlyViewed />
      </Suspense>
    </>
  );
}
