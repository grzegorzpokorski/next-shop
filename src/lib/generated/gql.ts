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
  "fragment Cart on Cart {\n  id\n  items(first: 100) {\n    ... on CartItem {\n      id\n      quantity\n      product {\n        ...ProductSummary\n      }\n    }\n  }\n}":
    types.CartFragmentDoc,
  "fragment CategoryDetails on Category {\n  id\n  name\n  slug\n  description\n  thumbnail {\n    ...ImageDetails\n  }\n}":
    types.CategoryDetailsFragmentDoc,
  "fragment ImageDetails on Asset {\n  id\n  mimeType\n  url(transformation: {document: {output: {format: webp}}})\n  width\n  height\n  fileName\n}":
    types.ImageDetailsFragmentDoc,
  "fragment Page on Page {\n  id\n  slug\n  title\n  content\n  seoTitle\n  seoDescription\n  createdAt\n  updatedAt\n}":
    types.PageFragmentDoc,
  "fragment ProductDetails on Product {\n  id\n  name\n  slug\n  description {\n    html\n  }\n  category {\n    ...CategoryDetails\n  }\n  price\n  currency\n  gallery {\n    ...ImageDetails\n  }\n  quantityAvailable\n  seoTitle\n  seoDescription\n  updatedAt\n  createdAt\n}":
    types.ProductDetailsFragmentDoc,
  "fragment ProductSummary on Product {\n  id\n  name\n  slug\n  price\n  currency\n  gallery(first: 1) {\n    ...ImageDetails\n  }\n  quantityAvailable\n  category {\n    ...CategoryDetails\n  }\n  updatedAt\n  createdAt\n}":
    types.ProductSummaryFragmentDoc,
  "mutation AddItemToCart($cartId: ID!, $productQty: Int!, $productId: ID!) {\n  updateCart(\n    where: {id: $cartId}\n    data: {items: {create: {CartItem: {data: {quantity: $productQty, product: {connect: {id: $productId}}}}}}}\n  ) {\n    ...Cart\n  }\n}":
    types.AddItemToCartDocument,
  "mutation CreateEmptyCart {\n  createCart(data: {items: {}}) {\n    ...Cart\n  }\n}":
    types.CreateEmptyCartDocument,
  "mutation DeleteCartById($id: ID!) {\n  deleteCart(where: {id: $id}) {\n    ...Cart\n  }\n}":
    types.DeleteCartByIdDocument,
  "mutation DeteteCartItem($cartId: ID!, $itemId: ID!) {\n  updateCart(\n    where: {id: $cartId}\n    data: {items: {delete: {CartItem: {id: $itemId}}}}\n  ) {\n    ...Cart\n  }\n}":
    types.DeteteCartItemDocument,
  "mutation DeleteCartsByDateTime($boundaryDate: DateTime!) {\n  deleteManyCarts(where: {updatedAt_lt: $boundaryDate}) {\n    count\n  }\n}":
    types.DeleteCartsByDateTimeDocument,
  "mutation PublishProducts($ids: [ID]) {\n  publishManyProductsConnection(where: {id_in: $ids}, to: PUBLISHED, first: 100) {\n    edges {\n      node {\n        ...ProductSummary\n      }\n    }\n  }\n}":
    types.PublishProductsDocument,
  "mutation UpdateCartItemQuantity($cartId: ID!, $itemId: ID!, $qty: Int!) {\n  update: updateCart(\n    where: {id: $cartId}\n    data: {items: {update: [{CartItem: {where: {id: $itemId}, data: {quantity: $qty}}}]}}\n  ) {\n    ...Cart\n  }\n}":
    types.UpdateCartItemQuantityDocument,
  "mutation UpdateProductById($id: ID!, $data: ProductUpdateInput!) {\n  updateProduct(where: {id: $id}, data: $data) {\n    ...ProductSummary\n  }\n}":
    types.UpdateProductByIdDocument,
  "query GetAllProducts($limit: Int!, $skip: Int!, $order: ProductOrderByInput = price_DESC, $searchQuery: String) {\n  products(\n    stage: PUBLISHED\n    locales: pl\n    first: $limit\n    skip: $skip\n    orderBy: $order\n    where: {name_contains: $searchQuery}\n  ) {\n    ...ProductSummary\n  }\n  productsConnection(stage: PUBLISHED, where: {name_contains: $searchQuery}) {\n    aggregate {\n      count\n    }\n  }\n}":
    types.GetAllProductsDocument,
  "query GetCartById($cartId: ID!) {\n  cart(where: {id: $cartId}) {\n    ...Cart\n  }\n}":
    types.GetCartByIdDocument,
  "query GetCategories {\n  categories(stage: PUBLISHED, first: 100) {\n    ...CategoryDetails\n  }\n}":
    types.GetCategoriesDocument,
  "query GetCategoriesBySlugs($slugs: [String]) {\n  categories(stage: PUBLISHED, first: 100, where: {slug_in: $slugs}) {\n    ...CategoryDetails\n  }\n}":
    types.GetCategoriesBySlugsDocument,
  "query GetCategoryNameBySlug($categorySlug: String!) {\n  category(stage: PUBLISHED, where: {slug: $categorySlug}) {\n    ...CategoryDetails\n  }\n}":
    types.GetCategoryNameBySlugDocument,
  "query GetPageBySlug($slug: String!) {\n  page(where: {slug: $slug}) {\n    ...Page\n  }\n}":
    types.GetPageBySlugDocument,
  "query GetProductBySlug($slug: String!) {\n  product(stage: PUBLISHED, where: {slug: $slug}, locales: pl) {\n    ...ProductDetails\n  }\n}":
    types.GetProductBySlugDocument,
  "query GetProductsByCategorySlug($categorySlug: String!, $limit: Int!, $skip: Int!, $order: ProductOrderByInput = price_DESC) {\n  products(\n    stage: PUBLISHED\n    locales: pl\n    where: {category: {Category: {slug: $categorySlug}}}\n    first: $limit\n    skip: $skip\n    orderBy: $order\n  ) {\n    ...ProductSummary\n  }\n  productsConnection(\n    stage: PUBLISHED\n    where: {category: {Category: {slug: $categorySlug}}}\n  ) {\n    aggregate {\n      count\n    }\n  }\n}":
    types.GetProductsByCategorySlugDocument,
  "query GetProductsByIds($ids: [ID]!) {\n  products(stage: PUBLISHED, where: {id_in: $ids}, first: 100, skip: 0) {\n    ...ProductSummary\n  }\n}":
    types.GetProductsByIdsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "fragment Cart on Cart {\n  id\n  items(first: 100) {\n    ... on CartItem {\n      id\n      quantity\n      product {\n        ...ProductSummary\n      }\n    }\n  }\n}",
): typeof import("./graphql").CartFragmentDoc;
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
  source: "fragment Page on Page {\n  id\n  slug\n  title\n  content\n  seoTitle\n  seoDescription\n  createdAt\n  updatedAt\n}",
): typeof import("./graphql").PageFragmentDoc;
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
  source: "mutation AddItemToCart($cartId: ID!, $productQty: Int!, $productId: ID!) {\n  updateCart(\n    where: {id: $cartId}\n    data: {items: {create: {CartItem: {data: {quantity: $productQty, product: {connect: {id: $productId}}}}}}}\n  ) {\n    ...Cart\n  }\n}",
): typeof import("./graphql").AddItemToCartDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "mutation CreateEmptyCart {\n  createCart(data: {items: {}}) {\n    ...Cart\n  }\n}",
): typeof import("./graphql").CreateEmptyCartDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "mutation DeleteCartById($id: ID!) {\n  deleteCart(where: {id: $id}) {\n    ...Cart\n  }\n}",
): typeof import("./graphql").DeleteCartByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "mutation DeteteCartItem($cartId: ID!, $itemId: ID!) {\n  updateCart(\n    where: {id: $cartId}\n    data: {items: {delete: {CartItem: {id: $itemId}}}}\n  ) {\n    ...Cart\n  }\n}",
): typeof import("./graphql").DeteteCartItemDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "mutation DeleteCartsByDateTime($boundaryDate: DateTime!) {\n  deleteManyCarts(where: {updatedAt_lt: $boundaryDate}) {\n    count\n  }\n}",
): typeof import("./graphql").DeleteCartsByDateTimeDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "mutation PublishProducts($ids: [ID]) {\n  publishManyProductsConnection(where: {id_in: $ids}, to: PUBLISHED, first: 100) {\n    edges {\n      node {\n        ...ProductSummary\n      }\n    }\n  }\n}",
): typeof import("./graphql").PublishProductsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "mutation UpdateCartItemQuantity($cartId: ID!, $itemId: ID!, $qty: Int!) {\n  update: updateCart(\n    where: {id: $cartId}\n    data: {items: {update: [{CartItem: {where: {id: $itemId}, data: {quantity: $qty}}}]}}\n  ) {\n    ...Cart\n  }\n}",
): typeof import("./graphql").UpdateCartItemQuantityDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "mutation UpdateProductById($id: ID!, $data: ProductUpdateInput!) {\n  updateProduct(where: {id: $id}, data: $data) {\n    ...ProductSummary\n  }\n}",
): typeof import("./graphql").UpdateProductByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "query GetAllProducts($limit: Int!, $skip: Int!, $order: ProductOrderByInput = price_DESC, $searchQuery: String) {\n  products(\n    stage: PUBLISHED\n    locales: pl\n    first: $limit\n    skip: $skip\n    orderBy: $order\n    where: {name_contains: $searchQuery}\n  ) {\n    ...ProductSummary\n  }\n  productsConnection(stage: PUBLISHED, where: {name_contains: $searchQuery}) {\n    aggregate {\n      count\n    }\n  }\n}",
): typeof import("./graphql").GetAllProductsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "query GetCartById($cartId: ID!) {\n  cart(where: {id: $cartId}) {\n    ...Cart\n  }\n}",
): typeof import("./graphql").GetCartByIdDocument;
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
  source: "query GetCategoriesBySlugs($slugs: [String]) {\n  categories(stage: PUBLISHED, first: 100, where: {slug_in: $slugs}) {\n    ...CategoryDetails\n  }\n}",
): typeof import("./graphql").GetCategoriesBySlugsDocument;
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
  source: "query GetPageBySlug($slug: String!) {\n  page(where: {slug: $slug}) {\n    ...Page\n  }\n}",
): typeof import("./graphql").GetPageBySlugDocument;
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
  source: "query GetProductsByCategorySlug($categorySlug: String!, $limit: Int!, $skip: Int!, $order: ProductOrderByInput = price_DESC) {\n  products(\n    stage: PUBLISHED\n    locales: pl\n    where: {category: {Category: {slug: $categorySlug}}}\n    first: $limit\n    skip: $skip\n    orderBy: $order\n  ) {\n    ...ProductSummary\n  }\n  productsConnection(\n    stage: PUBLISHED\n    where: {category: {Category: {slug: $categorySlug}}}\n  ) {\n    aggregate {\n      count\n    }\n  }\n}",
): typeof import("./graphql").GetProductsByCategorySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "query GetProductsByIds($ids: [ID]!) {\n  products(stage: PUBLISHED, where: {id_in: $ids}, first: 100, skip: 0) {\n    ...ProductSummary\n  }\n}",
): typeof import("./graphql").GetProductsByIdsDocument;

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
