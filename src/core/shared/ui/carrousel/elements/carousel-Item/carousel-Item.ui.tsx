'use client'

import { ElementType, forwardRef, HTMLAttributes, memo } from 'react'

import cn from '@/core/shared/utils/cn'

interface ICarrouselItem extends HTMLAttributes<HTMLDivElement> {
  as?: ElementType
}

const CarouselItemUi = forwardRef<HTMLDivElement, ICarrouselItem>(
  ({ className, as: Component = 'div', ...props }, ref) => {
    return (
      <Component
        ref={ref}
        // role='group'
        // aria-roledescription='slide'
        className={cn('min-w-0 shrink-0 grow-0 basis-full', className)}
        {...props}
      />
    )
  },
)

export default memo(CarouselItemUi)

CarouselItemUi.displayName = 'CarouselItemComponent'
