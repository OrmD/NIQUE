'use client'

import { ComponentProps, forwardRef, memo } from 'react'

import { useCarousel } from '../carrousel-context'

import { usePosition } from './services/use-position.service'

import { ArrowButtonUi } from '@/core/shared/ui/buttons/arrow-button'
import { TPosition } from '@/core/shared/ui/carrousels/carrousel/elements/carousel-previous/services/use-position.service'
import cn from '@/core/shared/utils/cn'

interface ICarouselNextComponent extends ComponentProps<typeof ArrowButtonUi> {
  position?: TPosition
}

const CarouselNextUi = forwardRef<HTMLButtonElement, ICarouselNextComponent>(
  ({ className, position, ...props }, ref) => {
    const { scrollNext, canScrollNext, isScrollable } = useCarousel()
    const currentPosition = usePosition({ position })

    if (!isScrollable) return null

    return (
      <ArrowButtonUi
        ref={ref}
        iconVariant='arrow-right'
        className={cn(currentPosition?.className, className)}
        disabled={!canScrollNext}
        onClick={scrollNext}
        aria-label='arrow-right'
        type='button'
        {...props}
      >
        <span className='sr-only'>Next slide</span>
      </ArrowButtonUi>
    )
  },
)

export default memo(CarouselNextUi)

CarouselNextUi.displayName = 'CarouselNextComponent'
