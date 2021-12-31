export interface MediaImage {
  url: string
  width: number
  height: number
  aspect: number
}

export interface MediaVideo {
  poster?: any
  webm?: string
  hevc?: string
}
