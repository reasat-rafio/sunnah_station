import { FiStar } from "react-icons/fi";

export default {
  name: "landingHero",
  type: "object",
  title: "Hero",
  icon: FiStar,
  fields: [
    {
      name: "image",
      title: "Images",
      type: "array",
      of: [{ type: "image" }],
    },
  ],
};
