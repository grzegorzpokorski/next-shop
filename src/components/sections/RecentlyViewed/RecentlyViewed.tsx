import { cookies } from "next/headers";
import { ProductsList } from "@/components/blocks/ProductsList/ProductsList";
import { Container } from "@/components/ui/Container/Container";
import { Heading } from "@/components/ui/Heading/Heading";
import { getProductsByIds } from "@/lib/queries/products/getProductsByIds";
import { validateRecentViewedCookieValue } from "@/utils/validateRecentViewedCookieValue";

export const RecentlyViewed = async () => {
  const cookieStore = await cookies();
  const cookieWithRecentlyViewed = cookieStore.get("recentlyViewed");

  if (!cookieWithRecentlyViewed) return null;

  try {
    const ids: unknown = JSON.parse(cookieWithRecentlyViewed.value);

    if (!validateRecentViewedCookieValue(ids)) return null;

    const products = await getProductsByIds({ ids });

    if (products.length < 0) return null;

    products.sort((a, b) => ids.indexOf(a.id) - ids.indexOf(b.id));

    return (
      <Container as="section" aria-labelledby="recently-viewed-products">
        <header className="flex flex-col gap-2">
          <Heading as="h2" size="2xl" id="recently-viewed-products">
            Ostatnio przeglądane
          </Heading>
        </header>
        <ProductsList products={products} slider />
      </Container>
    );
  } catch (e) {
    if (e instanceof Error) {
      return null;
    }
  }
};
