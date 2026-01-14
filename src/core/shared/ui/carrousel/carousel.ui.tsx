'use client'

import { forwardRef, HTMLAttributes, memo, useCallback, useEffect, useState } from 'react'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'

import { ICarouselApi, ICarouselProps } from './types'

import { cn } from '@/core/shared/utils/cn'
import { CarrouselContext } from './elements/carrousel-context'

const CarouselUi = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement> & ICarouselProps>(
  (
    {
      orientation = 'horizontal',
      opts,
      setApi,
      plugins,
      className,
      children,
      isAutoplay,
      ...props
    },
    ref,
  ) => {
    const [canScrollPrev, setCanScrollPrev] = useState(false)
    const [canScrollNext, setCanScrollNext] = useState(false)
    const [isScrollable, setIsScrollable] = useState(false)

    const carouselPlugins = [
      ...(plugins || []),
      isAutoplay ? Autoplay({ delay: 5000, stopOnInteraction: true }) : undefined,
    ].filter(Boolean)

    const [carouselRef, api] = useEmblaCarousel(
      {
        axis: orientation === 'horizontal' ? 'x' : 'y',
        loop: true,
        dragFree: false,
        skipSnaps: true,
        active: true,
        align: 'start',
        ...opts,
      },
      carouselPlugins as ICarouselProps['plugins'],
    )

    const checkScrollability = useCallback((api: ICarouselApi) => {
      if (!api) return

      const container = api.containerNode()
      const slides = api.slideNodes()

      if (!container || slides.length === 0) return

      const totalWidth = slides.reduce((sum, slide) => sum + slide.getBoundingClientRect().width, 0)
      const containerWidth = container.getBoundingClientRect().width

      const scrollable = totalWidth > containerWidth

      setIsScrollable(scrollable)
      setCanScrollPrev(scrollable && api.canScrollPrev())
      setCanScrollNext(scrollable && api.canScrollNext())
    }, [])

    const scrollPrev = useCallback(() => {
      api?.scrollPrev()
    }, [api])

    const scrollNext = useCallback(() => {
      api?.scrollNext()
    }, [api])

    useEffect(() => {
      if (!api || !setApi) return
      setApi(api)
    }, [api, setApi])

    useEffect(() => {
      if (!api) return

      checkScrollability(api)
      api.on('reInit', checkScrollability)
      api.on('select', checkScrollability)

      return () => {
        api.off('select', checkScrollability)
        api.off('reInit', checkScrollability)
      }
    }, [api, checkScrollability])

    return (
      <CarrouselContext.Provider
        value={{
          carouselRef,
          api,
          opts,
          orientation,
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
          isScrollable,
        }}
      >
        <div
          ref={ref}
          className={cn('relative', className)}
          role='region'
          aria-roledescription='carousel'
          {...props}
        >
          {children}
        </div>
      </CarrouselContext.Provider>
    )
  },
)

CarouselUi.displayName = 'CarrouselComponent'

export default memo(CarouselUi)
