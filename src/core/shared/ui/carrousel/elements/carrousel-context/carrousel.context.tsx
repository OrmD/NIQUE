'use client'

import { createContext } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

import { ICarouselProps } from '../../types'

interface ICarouselContextProps extends ICarouselProps {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
  isScrollable: boolean
}

const CarrouselContext = createContext<ICarouselContextProps | null>(null)

export default CarrouselContext
