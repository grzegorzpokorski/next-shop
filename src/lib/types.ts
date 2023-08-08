export type Image = {
  url: string;
  alt: string;
  width: number;
  height: number;
};

export type ProductWithDetails = {
  name: string;
  slug: string;
  description: {
    html: string;
  };
  seoTitle: string;
  seoDescription: string;
  price: number;
  currency: string;
  quantityAvailable: number;
  images: Image[];
  updatedAt: string;
  createdAt: string;
  category?: {
    name: string;
    slug: string;
  };
};

export type ProductWithSummary = {
  name: string;
  slug: string;
  price: number;
  currency: string;
  quantityAvailable: number;
  thumbnail: Image;
  category?: {
    name: string;
    slug: string;
  };
  updatedAt: string;
  createdAt: string;
};
