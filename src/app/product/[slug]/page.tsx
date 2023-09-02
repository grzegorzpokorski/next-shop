import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import { ProductPageTemplate } from "@/components/templates/ProductPageTemplate/ProductPageTemplate";
import { getProductBySlug } from "@/lib/queries/getProductBySlug";
import { getProductsByCategorySlug } from "@/lib/queries/getProductsByCategorySlug";
import { shuffleArray } from "@/utils/shuffleArray";
import { getAllProducts } from "@/lib/queries/getAllProducts";
import { RecentlyViewedCookieSetter } from "@/components/sections/RecentlyViewed/RecentlyViewedCookieSetter";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const { products } = await getAllProducts({ limit: 100, skip: 0 });

  return products.map((product) => ({
    slug: product.slug,
  }));
}

export const generateMetadata = async ({
  params: { slug },
}: Props): Promise<Metadata> => {
  const product = await getProductBySlug({ slug });
  if (!product) return notFound();

  return {
    title: product.name,
    description: product.seoDescription
      ? product.seoDescription
      : product.description.html || "",
    openGraph: product.images[0]
      ? {
          images: [
            {
              url: product.images[0].url,
              height: product.images[0].height,
              width: product.images[0].width,
              alt: product.name,
            },
          ],
        }
      : null,
    alternates: {
      canonical: `/product/${slug}`,
    },
  };
};

export default async function Page({ params: { slug } }: Props) {
  const product = await getProductBySlug({ slug });

  if (!product) return notFound();

  const relatedProducts = await getProductsByCategorySlug({
    categorySlug: product?.category?.slug || "",
    limit: 20,
    skip: 0,
  });

  const relatedWithoutCurrent = shuffleArray({
    unshuffled: relatedProducts.products.filter((item) => item.slug !== slug),
  });

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.images[0].url,
    offers: {
      "@type": "AggregateOffer",
      availability:
        product.quantityAvailable > 0
          ? "https://schema.org/InStock"
          : "https://schema.org/OutOfStock",
      priceCurrency: product.currency,
      price: product.price,
    },
  };

  const cookieStore = cookies();
  const cookieWithRecentlyViewed = cookieStore.get("recentlyViewed");

  return (
    <>
      <RecentlyViewedCookieSetter
        productId={product.id}
        cookie={cookieWithRecentlyViewed}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd),
        }}
      />
      <ProductPageTemplate
        product={product}
        relatedProducts={relatedWithoutCurrent.slice(0, 4)}
      />
    </>
  );
}
