import { SanityImage } from "sanity-react-extra";

export interface HighlightDeals {
  _createdAt: Date;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: Date;
  appliesTo: Product[];
  banner: SanityImage;
  slug: Slug;
  title: string;
}

export interface Variation {
  _type: string;
  _key: string;
  value: string;
  color?: string;
  attribute: {
    name: "Color" | "Size" | "Weight";
  };
}

export interface Product {
  _createdAt: Date;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: Date;
  name: string;
  price: number;
  sale_price: number;
  slug: Slug;
  productId: string;
  description: string;
  body: Body[];
  image: SanityImage;
  gallery?: SanityImage[];
  categories: Category[];
  tags: { value: string; label: string }[];
  variations: Variation[];
}

export interface ICategory {
  _createdAt: Date;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: Date;
  image: SanityImage;
  slug: Slug;
  title: string;
  parents?: any[];
}

export interface DefaultProductVariant {
  _type: string;
  barcode: SanityImage;
  grams: number;
  images: SanityImage[];
  price: number;
}

export interface Category {
  _key: string;
  _ref: string;
  _type: string;
}

export interface ImageBanner {
  _key: string;
  _type: string;
  href: string;
  image: SanityImage;
  name: string;
}
