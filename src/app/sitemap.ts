import type { MetadataRoute } from "next";
import { getAllProducts } from "@/lib/queries/products/getAllProducts";
import { siteUrl } from "@/lib/constants";
import { getCategories } from "@/lib/queries/categories/getCategories";
import { env } from "@/lib/env.mjs";
import { getProductsByCategorySlug } from "@/lib/queries/products/getProductsByCategorySlug";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = [""];
  const routesMap = [
    ...routes.map((item) => ({
      url: `${siteUrl}${item}`,
    })),
  ];

  const products = await getAllProducts({ limit: 100, skip: 0 });
  const productsMap = [
    ...products.products.map((item) => ({
      url: `${siteUrl}/product/${item.slug}`,
      lastModified: new Date(item.updatedAt).toISOString(),
    })),
  ];

  const productsArchives = [
    ...Array.from(
      { length: Math.ceil(products.count / env.PRODUCTS_PER_PAGE) },
      (_, idx) => ({
        url: `${siteUrl}/products/${idx + 1}`,
      }),
    ),
  ];

  const categories = await getCategories();
  const categoriesMap = [
    ...categories.map((item) => ({
      url: `${siteUrl}/category/${item.slug}`,
    })),
  ];

  const categoryArchives = [
    ...(await Promise.all(
      categories.map(async (category) => {
        const { count } = await getProductsByCategorySlug({
          categorySlug: category.slug,
          limit: 0,
          skip: 0,
        });
        return Array.from(
          { length: Math.ceil(count / env.PRODUCTS_PER_PAGE) },
          (_, idx) => ({
            url: `${siteUrl}/category/${category.slug}/${idx + 1}`,
          }),
        );
      }),
    )),
  ].flat();

  return [
    ...routesMap,
    ...productsMap,
    ...productsArchives,
    ...categoriesMap,
    ...categoryArchives,
  ];
}
