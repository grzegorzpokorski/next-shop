import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ProductPage } from "@/components/pages/ProductPage/ProductPage";
import { getProductBySlug } from "@/queries/getProductBySlug";
import { getProductsByCategorySlug } from "@/queries/getProductsByCategorySlug";
import { shuffleArray } from "@/utils/shuffleArray";
import { getAllProducts } from "@/queries/getAllProducts";

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
    openGraph: product.gallery[0]
      ? {
          images: [
            {
              url: product.gallery[0].url,
              height: product.gallery[0].height || 0,
              width: product.gallery[0].width || 0,
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
    image: product.gallery[0].url,
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

  if (product) {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(productJsonLd),
          }}
        />
        <ProductPage
          product={product}
          relatedProducts={relatedWithoutCurrent.slice(0, 4)}
        />
      </>
    );
  }

  return notFound();
}
