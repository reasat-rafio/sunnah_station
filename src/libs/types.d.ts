interface Slug {
  _type: string;
  current: string;
}

interface SEO {
  _type: string;
  description?: string;
  seoImage: SEOImage;
  title: string;
}

interface FooterWidget {
  _key: string;
  _type: string;
  lists: FooterList[];
  title: string;
}

interface FooterList {
  _key: string;
  _type: string;
  icon?: any;
  path?: string;
  title: string;
}
