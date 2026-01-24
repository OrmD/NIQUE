import React, { forwardRef, memo } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, VariantProps } from 'class-variance-authority'

import cn from '@/core/shared/utils/cn'

const buttonVariants = cva('bg-primary text-dark', {
  variants: {
    variant: {
      primary: 'py-4 px-6 rounded-500 w-full max-w-[560px] uppercase text-center',
      circle: '',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

interface IPrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const PrimaryButtonUI = forwardRef<HTMLButtonElement, IPrimaryButtonProps>(
  (
    {
      className,
      variant,
      type = 'button',
      asChild = false,
      children,
      'aria-label': ariaLabel = 'button',
      ...otherProps
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button'

    return (
      <Comp
        aria-label={ariaLabel}
        type={type}
        ref={ref}
        className={cn(buttonVariants({ variant, className }))}
        {...otherProps}
      >
        {children}
      </Comp>
    )
  },
)

PrimaryButtonUI.displayName = 'PrimaryButtonComponent'

export default memo(PrimaryButtonUI)
