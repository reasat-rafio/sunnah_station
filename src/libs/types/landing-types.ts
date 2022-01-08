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

export interface Product {
  _createdAt: Date;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: Date;
  body: Body[];
  categories: Category[];
  colors?: string[];
  images: SanityImage[];
  offderPrice?: number;
  offerAvailable?: boolean;
  offerEndsAt?: Date;
  offerStartsAt?: Date;
  price: number;
  productId: string;
  seo: SEO;
  slug: Slug;
  tags: string[];
  title: string;
  grams?: number;
  showAction?: boolean;
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
