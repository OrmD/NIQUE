'use client'

import { ElementType, forwardRef, HTMLAttributes, memo } from 'react'

import { useCarousel } from '../carrousel-context'

import cn from '@/core/shared/utils/cn'

interface ICarouselContentProps extends HTMLAttributes<HTMLDivElement> {
  containerClassName?: string
  as?: ElementType
}

const CarouselContentUi = forwardRef<HTMLDivElement, ICarouselContentProps>(
  ({ className, containerClassName, as: Component = 'div', ...props }, ref) => {
    const { carouselRef } = useCarousel()

    return (
      <div ref={carouselRef} className={cn('overflow-hidden', containerClassName)}>
        <Component ref={ref} className={cn('flex', className)} {...props} />
      </div>
    )
  },
)

export default memo(CarouselContentUi)

CarouselContentUi.displayName = 'CarouselContentComponent'
