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
