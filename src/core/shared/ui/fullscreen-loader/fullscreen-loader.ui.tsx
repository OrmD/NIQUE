import { FC, memo } from 'react'
import { Portal } from '@radix-ui/react-portal'

import { LoaderUI } from '@/core/shared/ui/loader'
import { cn } from '@/core/shared/utils/cn'

interface IFullscreenLoaderProps {
  className?: string
  isLoading: boolean
}

const FullscreenLoaderUi: FC<IFullscreenLoaderProps> = ({ className, isLoading }) => {
  if (isLoading) {
    return (
      <Portal
        className={cn(
          'pointer-events-auto fixed inset-0 z-50 flex size-full items-center justify-center bg-[black]/90',
          className,
        )}
      >
        <LoaderUI />
      </Portal>
    )
  }

  return null
}

export default memo(FullscreenLoaderUi)
