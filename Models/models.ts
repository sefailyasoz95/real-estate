export type AdvertModel = {
  id: number | string
  cover: string
  bedroom: number
  bath: number
  garage: number
  title: string
  postedAt: Date
  numberOfAvailableRooms?: number
  description?: string
  hasACommonSpace?: boolean
  images?: CarouselModel[]
  showInCarousel?: boolean
}

export type CarouselModel = {
  headerText?: string | null
  subText?: string | null
  image: string
}
