import { withDimensions } from "sanity-react-extra";
import { groq } from "next-sanity";

export const siteQuery = groq`*[_id == "siteConfig"][0] {
  ...,
  "logo": ${withDimensions("logo")},
  footer[]{
    ...,
    lists[]{
      ...,
    "icon": ${withDimensions("icon")},
    }
  }
}`;

export const pageQuery = (query?: string) => groq`{
    "site": ${siteQuery},
    "page": ${query}
  }`;
