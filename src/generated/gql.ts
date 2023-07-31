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
  "fragment ProductDetails on Product {\n  id\n  slug\n  name\n  isAvailableForPurchase\n  description\n  seoTitle\n  seoDescription\n  pricing {\n    priceRange {\n      start {\n        gross {\n          currency\n          amount\n        }\n      }\n      stop {\n        gross {\n          currency\n          amount\n        }\n      }\n    }\n  }\n  media {\n    url(size: 1080)\n    type\n    alt\n  }\n  collections {\n    name\n  }\n  updatedAt\n}":
    types.ProductDetailsFragmentDoc,
  'query GetProductBySlug($slug: String!) {\n  product(channel: "pl", slug: $slug) {\n    ...ProductDetails\n  }\n}':
    types.GetProductBySlugDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "fragment ProductDetails on Product {\n  id\n  slug\n  name\n  isAvailableForPurchase\n  description\n  seoTitle\n  seoDescription\n  pricing {\n    priceRange {\n      start {\n        gross {\n          currency\n          amount\n        }\n      }\n      stop {\n        gross {\n          currency\n          amount\n        }\n      }\n    }\n  }\n  media {\n    url(size: 1080)\n    type\n    alt\n  }\n  collections {\n    name\n  }\n  updatedAt\n}",
): typeof import("./graphql").ProductDetailsFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query GetProductBySlug($slug: String!) {\n  product(channel: "pl", slug: $slug) {\n    ...ProductDetails\n  }\n}',
): typeof import("./graphql").GetProductBySlugDocument;

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
