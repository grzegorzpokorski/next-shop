export type Image = {
  url: string;
  alt: string;
  width: number;
  height: number;
};

export type Category = {
  name: string;
  slug: string;
  description?: string;
  thumbnail?: Image;
};

type ProductCommonFields = {
  id: string;
  name: string;
  slug: string;
  price: number;
  currency: string;
  quantityAvailable: number;
  updatedAt: string;
  createdAt: string;
};

export type ProductWithDetails = ProductCommonFields & {
  description: {
    html: string;
  };
  seoTitle: string;
  seoDescription: string;
  images: Image[];
  category?: {
    name: string;
    slug: string;
  };
};

export type ProductWithSummary = ProductCommonFields & {
  thumbnail: Image;
  category?: {
    name: string;
    slug: string;
  };
};

export type CartItem = {
  id: string;
  quantity: number;
  product: ProductWithSummary | null;
};

export type Cart = {
  id: string;
  totalValue: number;
  totalQty: number;
  items: CartItem[];
};

// export const notEmpty = <TValue>(
//   value: TValue | null | undefined,
// ): value is TValue => {
//   if (value === null || value === undefined) return false;
//   return true;
// };

export const notEmpty = <TValue>(
  value: TValue | null | undefined,
): value is TValue => {
  return value !== null && value !== undefined;
};
