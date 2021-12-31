import { withDimensions } from "sanity-react-extra";
import { groq } from "next-sanity";

export const siteQuery = groq`*[_id == "site"][0] {
  ...,
  "logo": ${withDimensions("logo")}
}`;

export const pageQuery = (query?: string) => groq`{
    "site": ${siteQuery},
    "page": ${query}
  }`;
