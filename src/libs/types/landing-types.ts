import { SanityImage } from "sanity-react-extra";

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
