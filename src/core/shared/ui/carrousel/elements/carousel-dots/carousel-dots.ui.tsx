'use client'

import { FC, memo, useEffect, useState } from 'react'

import { useCarousel } from '../carrousel-context'

import { TColor, useColor } from './services/use-color.service'

import { ClearButtonUi } from '@/core/shared/ui/buttons/clear-button'
import cn from '@/core/shared/utils/cn'

interface ICarouselDotsProps {
  className?: string
  color?: TColor
}

const CarouselDotsUi: FC<ICarouselDotsProps> = ({ className, color }) => {
  const { api, isScrollable } = useCarousel()
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [totalSlides, setTotalSlides] = useState(0)
  const currentColor = useColor({ color })

  useEffect(() => {
    if (!api) return

    const updateDots = () => {
      setSelectedIndex(api.selectedScrollSnap())
      setTotalSlides(api.scrollSnapList().length)
    }

    updateDots()
    api.on('select', updateDots)
    api.on('reInit', updateDots)

    return () => {
      api.off('select', updateDots)
      api.off('reInit', updateDots)
    }
  }, [api])

  if (!isScrollable || totalSlides <= 1) return null

  return (
    <div className={cn('flex justify-center gap-2', className)}>
      {Array.from({ length: totalSlides }).map((_, index) => {
        const isSelected = selectedIndex === index
        return (
          <ClearButtonUi
            key={index}
            className='box-content flex size-[10px] items-center justify-center p-2 transition-colors'
            onClick={() => api?.scrollTo(index)}
            aria-label={`Slide to ${index + 1}`}
          >
            <span
              className={cn('rounded-full transition-all', {
                [currentColor.classNames.selected]: isSelected,
                [currentColor.classNames.unselected]: !isSelected,
              })}
            />
          </ClearButtonUi>
        )
      })}
    </div>
  )
}

export default memo(CarouselDotsUi)

CarouselDotsUi.displayName = 'CarouselDotsComponent'
