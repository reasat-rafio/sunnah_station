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
