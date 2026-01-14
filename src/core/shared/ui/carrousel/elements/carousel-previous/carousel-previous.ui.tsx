import { ComponentProps, forwardRef, memo } from 'react'

import { useCarousel } from '../carrousel-context'

import { TPosition, usePosition } from './services/use-position.service'

import { ArrowButtonUi } from '@/core/shared/ui/buttons/arrow-button'
import cn from '@/core/shared/utils/cn'

interface ICarouselPreviousProps extends ComponentProps<typeof ArrowButtonUi> {
  position?: TPosition
}

const CarouselPreviousUi = forwardRef<HTMLButtonElement, ICarouselPreviousProps>(
  ({ className, position, ...props }, ref) => {
    const { scrollPrev, canScrollPrev, isScrollable } = useCarousel()
    const currentPosition = usePosition({ position })

    if (!isScrollable) return null

    return (
      <ArrowButtonUi
        ref={ref}
        iconVariant='arrow-left'
        className={cn(currentPosition?.className, className)}
        disabled={!canScrollPrev}
        onClick={scrollPrev}
        type='button'
        aria-label='arrow-left'
        {...props}
      >
        <span className='sr-only'>Previous slide</span>
      </ArrowButtonUi>
    )
  },
)

export default memo(CarouselPreviousUi)

CarouselPreviousUi.displayName = 'CarouselPreviousComponent'
