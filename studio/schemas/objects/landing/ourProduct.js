import { AiOutlineShoppingCart } from "react-icons/ai";
export default {
  name: "landingProduct",
  title: "Our Product",
  type: "document",
  icon: AiOutlineShoppingCart,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },

    {
      name: "tagline",
      title: "Tagline",
      type: "text",
    },
    {
      name: "highlightDeals",
      title: "Highlight Deals",
      type: "reference",
      to: [{ type: "deal" }],
    },
  ],
};
