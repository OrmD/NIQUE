import * as React from 'react'
import { memo } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/core/shared/utils/cn'

const buttonVariants = cva(
  'inline-flex items-center justify-start gap-2 text-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-95 transition-transform disabled:pointer-events-none [&_svg]:pointer-events-none transition-all leading-[100%] disabled:text-gray-300 text-left p-4',
  {
    variants: {
      variant: {
        default: '',
        navWhiteButton:
          'p-4 text-dark tablet:hover:bg-gray rounded-100 bg-white transition-colors duration-500 ease-in-out ',
        darkButton: 'bg-background text-white hover:bg-dark',
      },
      size: {
        default: 'text-base font-medium',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface PrimaryButtonComponentProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const ClearButtonUi = React.forwardRef<HTMLButtonElement, PrimaryButtonComponentProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      'aria-label': ariaLabel = 'button',
      type = 'button',
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
        ref={ref}
        type={type}
        aria-label={ariaLabel}
      />
    )
  },
)
ClearButtonUi.displayName = 'ClearButtonComponent'

export default memo(ClearButtonUi)
export { buttonVariants }
