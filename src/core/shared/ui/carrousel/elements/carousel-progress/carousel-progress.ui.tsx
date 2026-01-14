'use client'

import { FC, memo, useCallback, useEffect, useState } from 'react'
import { EmblaCarouselType } from 'embla-carousel'

import { useCarousel } from '../carrousel-context'

import { TVariant, useVariant } from './services/use-variant.service'

import { cn } from '@/core/shared/utils/cn'

interface CarouselProgressProps {
  className?: string
  variant?: TVariant
}

const CarouselProgressUi: FC<CarouselProgressProps> = ({ className, variant }) => {
  const { api } = useCarousel()
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [slideCount, setSlideCount] = useState(1)
  const currentVariant = useVariant({ variant })

  const onSelect = useCallback((api: EmblaCarouselType) => {
    setSelectedIndex(api.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!api) return

    setSlideCount(api.scrollSnapList().length)
    onSelect(api)

    api.on('select', onSelect).on('reInit', () => {
      setSlideCount(api.scrollSnapList().length)
      onSelect(api)
    })
  }, [api, onSelect])

  const progress = ((selectedIndex + 1) / slideCount) * 100

  return (
    <div className={cn(currentVariant?.bar.className, className)}>
      <div className={currentVariant?.progress.className} style={{ width: `${progress}%` }} />
    </div>
  )
}

export default memo(CarouselProgressUi)
CarouselProgressUi.displayName = 'CarouselProgressComponent'
