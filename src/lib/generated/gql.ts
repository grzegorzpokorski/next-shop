/* eslint-disable */
import * as types from "./graphql";

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  "fragment CategoryDetails on Category {\n  id\n  name\n  slug\n  description\n  thumbnail {\n    ...ImageDetails\n  }\n}":
    types.CategoryDetailsFragmentDoc,
  "fragment ImageDetails on Asset {\n  id\n  mimeType\n  url(transformation: {document: {output: {format: webp}}})\n  width\n  height\n  fileName\n}":
    types.ImageDetailsFragmentDoc,
  "fragment ProductDetails on Product {\n  id\n  name\n  slug\n  description {\n    html\n  }\n  category {\n    ...CategoryDetails\n  }\n  price\n  currency\n  gallery {\n    ...ImageDetails\n  }\n  quantityAvailable\n  seoTitle\n  seoDescription\n  updatedAt\n  createdAt\n}":
    types.ProductDetailsFragmentDoc,
  "fragment ProductSummary on Product {\n  id\n  name\n  slug\n  price\n  currency\n  gallery(first: 1) {\n    ...ImageDetails\n  }\n  quantityAvailable\n  category {\n    ...CategoryDetails\n  }\n  updatedAt\n  createdAt\n}":
    types.ProductSummaryFragmentDoc,
  "query GetAllProducts($limit: Int!, $skip: Int!, $order: ProductOrderByInput = price_DESC) {\n  products(locales: pl, first: $limit, skip: $skip, orderBy: $order) {\n    ...ProductSummary\n  }\n  productsConnection {\n    aggregate {\n      count\n    }\n  }\n}":
    types.GetAllProductsDocument,
  "query GetCategories {\n  categories(stage: PUBLISHED, first: 100) {\n    ...CategoryDetails\n  }\n}":
    types.GetCategoriesDocument,
  "query GetCategoryNameBySlug($categorySlug: String!) {\n  category(stage: PUBLISHED, where: {slug: $categorySlug}) {\n    ...CategoryDetails\n  }\n}":
    types.GetCategoryNameBySlugDocument,
  "query GetProductBySlug($slug: String!) {\n  product(stage: PUBLISHED, where: {slug: $slug}, locales: pl) {\n    ...ProductDetails\n  }\n}":
    types.GetProductBySlugDocument,
  "query GetProductsByCategorySlug($categorySlug: String!, $limit: Int!, $skip: Int!, $order: ProductOrderByInput = price_DESC) {\n  products(\n    stage: PUBLISHED\n    locales: pl\n    where: {category: {Category: {slug: $categorySlug}}}\n    first: $limit\n    skip: $skip\n    orderBy: $order\n  ) {\n    ...ProductSummary\n  }\n  productsConnection(where: {category: {Category: {slug: $categorySlug}}}) {\n    aggregate {\n      count\n    }\n  }\n}":
    types.GetProductsByCategorySlugDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "fragment CategoryDetails on Category {\n  id\n  name\n  slug\n  description\n  thumbnail {\n    ...ImageDetails\n  }\n}",
): typeof import("./graphql").CategoryDetailsFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "fragment ImageDetails on Asset {\n  id\n  mimeType\n  url(transformation: {document: {output: {format: webp}}})\n  width\n  height\n  fileName\n}",
): typeof import("./graphql").ImageDetailsFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "fragment ProductDetails on Product {\n  id\n  name\n  slug\n  description {\n    html\n  }\n  category {\n    ...CategoryDetails\n  }\n  price\n  currency\n  gallery {\n    ...ImageDetails\n  }\n  quantityAvailable\n  seoTitle\n  seoDescription\n  updatedAt\n  createdAt\n}",
): typeof import("./graphql").ProductDetailsFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "fragment ProductSummary on Product {\n  id\n  name\n  slug\n  price\n  currency\n  gallery(first: 1) {\n    ...ImageDetails\n  }\n  quantityAvailable\n  category {\n    ...CategoryDetails\n  }\n  updatedAt\n  createdAt\n}",
): typeof import("./graphql").ProductSummaryFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "query GetAllProducts($limit: Int!, $skip: Int!, $order: ProductOrderByInput = price_DESC) {\n  products(locales: pl, first: $limit, skip: $skip, orderBy: $order) {\n    ...ProductSummary\n  }\n  productsConnection {\n    aggregate {\n      count\n    }\n  }\n}",
): typeof import("./graphql").GetAllProductsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "query GetCategories {\n  categories(stage: PUBLISHED, first: 100) {\n    ...CategoryDetails\n  }\n}",
): typeof import("./graphql").GetCategoriesDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "query GetCategoryNameBySlug($categorySlug: String!) {\n  category(stage: PUBLISHED, where: {slug: $categorySlug}) {\n    ...CategoryDetails\n  }\n}",
): typeof import("./graphql").GetCategoryNameBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "query GetProductBySlug($slug: String!) {\n  product(stage: PUBLISHED, where: {slug: $slug}, locales: pl) {\n    ...ProductDetails\n  }\n}",
): typeof import("./graphql").GetProductBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "query GetProductsByCategorySlug($categorySlug: String!, $limit: Int!, $skip: Int!, $order: ProductOrderByInput = price_DESC) {\n  products(\n    stage: PUBLISHED\n    locales: pl\n    where: {category: {Category: {slug: $categorySlug}}}\n    first: $limit\n    skip: $skip\n    orderBy: $order\n  ) {\n    ...ProductSummary\n  }\n  productsConnection(where: {category: {Category: {slug: $categorySlug}}}) {\n    aggregate {\n      count\n    }\n  }\n}",
): typeof import("./graphql").GetProductsByCategorySlugDocument;

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
