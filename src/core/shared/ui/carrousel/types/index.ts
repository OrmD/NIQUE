import { DependencyList } from 'react'
import useEmblaCarousel, { UseEmblaCarouselType } from 'embla-carousel-react'

export type ICarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

export interface ICarouselProps {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: 'horizontal' | 'vertical'
  setApi?: (api: ICarouselApi) => void
  isAutoplay?: boolean
}
