import { notFound } from "next/navigation";
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

export default async function Page({ params: { slug } }: Props) {
  const product = await getProductBySlug({ slug });

  const relatedProducts = await getProductsByCategorySlug({
    categorySlug: product?.category?.slug || "",
    limit: 20,
    skip: 0,
  });

  const relatedWithoutCurrent = shuffleArray({
    unshuffled: relatedProducts.products.filter((item) => item.slug !== slug),
  });

  if (product) {
    return (
      <ProductPage
        product={product}
        relatedProducts={relatedWithoutCurrent.slice(0, 4)}
      />
    );
  }

  return notFound();
}
