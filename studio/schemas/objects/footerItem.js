import { AiOutlineOrderedList } from "react-icons/ai";
import { VscDebugBreakpointData } from "react-icons/vsc";

export default {
  name: "footerItem",
  type: "object",
  title: "Footer Item",
  icon: AiOutlineOrderedList,
  fields: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "lists",
      type: "array",
      of: [
        {
          name: "listItem",
          title: "List Item",
          type: "object",
          icon: VscDebugBreakpointData,
          fields: [
            { name: "title", type: "string" },
            {
              name: "path",
              type: "string",
            },
            { name: "icon", type: "image" },
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "path",
              media: "icon",
            },
          },
        },
      ],
    },
  ],
};
