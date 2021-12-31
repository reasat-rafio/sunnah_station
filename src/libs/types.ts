import { SanityImage, SanityPickerColor } from 'sanity-react-extra'

export enum ServiceSide {
  Left,
  Right,
}

export interface ColorListColor {
  title: string
  value: string
}

export interface ServiceBgDecor {
  shape: 'circle' | 'roundedRect'
  color: ColorListColor
}
export interface ServiceDecor {
  bg: ServiceBgDecor
  circle1: ColorListColor
  circle2: ColorListColor
  circle3: ColorListColor
}

export interface SiteData {
  logo: SanityImage
}

export interface ContactCard {
  type: string
  title: string
  color: SanityPickerColor
}

export interface ContactData {
  ctaTitle: string
  ctaText: string
  title: string
  serviceTitle: string
  phone: string
  whatsapp: string
  whatsappNumber: string
  email: string
  officeAddress: string
  officeLocation: { lat: number; lng: number }
  services: string[]
  requirements: string[]
}

export interface PageData<T = any> {
  site: SiteData
  contact: ContactData
  page: T
}

export interface MenuItem {
  title: string
  slug: { current: string }
  highlight: boolean
  submenu?: MenuItem[]
}
