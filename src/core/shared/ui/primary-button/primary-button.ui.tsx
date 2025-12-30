import React, { memo } from 'react'

import cn from '@/core/shared/utils/cn'
import { Slot } from '@radix-ui/react-slot'
import { cva, VariantProps } from 'class-variance-authority'

const buttonVariants = cva('bg-primary text-dark',{
  variants:{
    variant: {

    primary: 'py-4 px-6 rounded-500 w-full max-w-[560px] uppercase text-center',
      circle:'',
    }

  },
  defaultVariants:{
    variant: 'primary'
  }
})

interface IPrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants>{
  asChild?: boolean
}


const PrimaryButtonUI = React.forwardRef<HTMLButtonElement,IPrimaryButtonProps> (({
  className,
  variant,
  type = 'button',
  asChild = false,
  children,
  'aria-label': ariaLabel = 'button',
  ...otherProps
                                  }, ref,)=>{

  const Comp = asChild ? Slot : 'button'

  return (
    <Comp aria-label={ariaLabel}
          type={type}  ref={ref} className={cn(buttonVariants({variant ,className}))} {...otherProps}>
      {children}
    </Comp>
  )
},
  )


export default memo(PrimaryButtonUI)