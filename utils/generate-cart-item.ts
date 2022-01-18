import { SanityImage } from "sanity-react-extra";
import { Variation } from "@libs/types/landing-types";
import isEmpty from "lodash/isEmpty";

interface Item {
  id: string | number;
  name: string;
  slug: string;
  image: SanityImage;
  price: number;
  sale_price?: number;
  [key: string]: unknown;
}
export function generateCartItem(
  item: Item,
  attributes: { [key: string]: Variation }
) {
  const { _id, name, slug, image, price, sale_price } = item;
  return {
    id: !isEmpty(attributes)
      ? `${_id}.${Object.values(attributes).join(".")}`
      : _id,
    name,
    slug,
    image,
    price: sale_price ? sale_price : price,
    attributes,
  };
}
