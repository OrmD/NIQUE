import { useContext } from 'react'

import CarrouselContext from '../carrousel.context'

export function useCarousel() {
  const context = useContext(CarrouselContext)
  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />')
  }
  return context
}
