import { SanityImage } from "sanity-react-extra";

export interface HighlightDeals {
  _createdAt: Date;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: Date;
  appliesTo: AppliesTo[];
  banner: SanityImage;
  slug: Slug;
  title: string;
}

export interface AppliesTo {
  _createdAt: Date;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: Date;
  categories: Category[];
  defaultProductVariant: DefaultProductVariant;
  slug: Slug;
  tags: string[];
  title: string;
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
