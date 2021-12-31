import { SanityImage } from 'sanity-react-extra'

export interface CtaButton {
  _type: string
  href: string
  title: string
}

export interface Child {
  _key: string
  _type: string
  marks: string[]
  text: string
}

export interface Heading {
  _key: string
  _type: string
  children: Child[]
  markDefs: any[]
  style: string
}

export interface Video {
  hevc: string
  webm: string
}

export interface FavPerson {
  _key: string
  _type: string
  logo: SanityImage
  name: string
  url?: string
}

export interface Award {
  for: string
  icon: SanityImage
  title: string
  url: string
  _key: string
}

export interface Background {
  title: string
  value: string
}

export interface Service {
  _key: string
  _type: string
  cardBackground: Background
  circleBackground: Background
  heading: Heading[]
  image: SanityImage
  tagline: Heading[]
}

export interface _Award {
  _createdAt: Date
  _id: string
  _rev: string
  _type: string
  _updatedAt: Date
  description?: Heading[]
  icon: null
  image: SanityImage
  image2: SanityImage | null
  memberBackground?: Background
  siteType: string
  siteUrl?: string
  siteUrlTitle?: string
  subtitle: string
  title: string
  type: string
  date?: Date
}

export interface _Service {
  _key: string
  _type: string
  image: SanityImage
  title: string
}

export interface Hsl {
  _type: string
  a: number
  h: number
  l?: number
  s: number
  v?: number
}

export interface RGB {
  _type: string
  a: number
  b: number
  g: number
  r: number
}
export interface Color {
  _type: string
  alpha: number
  hex: string
  hsl: Hsl
  hsv: Hsl
  rgb: RGB
}
export interface ContactCard {
  _key: string
  description: string
  icon: SanityImage
  title: string
  type: string
}

export interface Testimonial {
  _key: string
  _type: string
  clientName: string
  clientRole: string
  description: Heading[]
  logo: SanityImage
}

export interface OldVsnew {
  _key: string
  _type: string
  newImage?: SanityImage
  newVideo?: Video
  oldImage?: SanityImage
  oldVideo?: Video
}

export interface Result {
  _key: string
  _type: string
  description: string
  image: SanityImage
}

export interface Customer {
  _key: string
  _type: string
  asset: SanityImage
}
export interface Customers {
  customer: SanityImage[]
  title: string
}
