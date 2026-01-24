'use client'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import * as HoverCard from '@radix-ui/react-hover-card'

import cn from '@/core/shared/utils/cn'

const HoverCardUI = HoverCard.Root

const HoverCardTriggerUI = HoverCard.Trigger

const HoverCardContentUI = forwardRef<
  ElementRef<typeof HoverCard.Content>,
  ComponentPropsWithoutRef<typeof HoverCard.Content>
>(({ className, align = 'center', side = 'top', sideOffset = 10, ...props }, ref) => (
  <HoverCard.Portal>
    <HoverCard.Content
      ref={ref}
      side={side}
      align={align}
      sideOffset={sideOffset}
      className={cn('z-50 w-max rounded-lg bg-red-600 p-4 shadow-lg', className)}
      {...props}
    />
  </HoverCard.Portal>
))

HoverCardContentUI.displayName = HoverCard.Content.displayName

const HoverCardArrowUi = forwardRef<
  React.ElementRef<typeof HoverCard.Arrow>,
  React.ComponentPropsWithoutRef<typeof HoverCard.Arrow>
>(({ className, ...props }, ref) => (
  <HoverCard.Arrow ref={ref} className={cn('size-2.5', className)} {...props} />
))
HoverCardArrowUi.displayName = HoverCard.Arrow.displayName

export { HoverCardArrowUi, HoverCardContentUI, HoverCardTriggerUI, HoverCardUI }
