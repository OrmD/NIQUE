'use client'

import { FC, memo, SVGProps } from 'react'

import { TVariant, useVariant } from './service'

import { cn } from '@/core/shared/utils/cn'

interface IIconProps extends SVGProps<SVGElement> {
  className?: string
  variant: TVariant
}

const IconUi: FC<IIconProps> = ({ variant: variantProps, className, ...otherProps }) => {
  const variant = useVariant({ variant: variantProps })

  if (!variant) {
    return null
  }
  return <variant.icon className={cn(variant.className, className)} {...otherProps} />
}

export default memo(IconUi)
