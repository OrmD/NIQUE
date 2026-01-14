import { ComponentProps, ElementType, FC, memo } from 'react'
import { useTranslations } from 'next-intl'

import { titleMap, TSize } from './variant-size.styles'

import { useSize } from '@/core/shared/hooks/use-size.service'
import cn from '@/core/shared/utils/cn'

interface ITitleProps extends ComponentProps<any> {
  className?: string
  size?: TSize
  as?: ElementType | null
}

const TitleUi: FC<ITitleProps> = ({
  className,
  size,
  children,
  as: Component = 'h2',
  ...otherProps
}) => {
  const t = useTranslations('_.save_variant')
  const currentSize = useSize({ size, map: titleMap })
  const Tag = Component || 'h2'

  return (
    <Tag
      className={cn(currentSize?.className, 'text-center font-medium !text-white', className)}
      {...otherProps}
    >
      {children ? children : t('title')}
    </Tag>
  )
}
export default memo(TitleUi)
