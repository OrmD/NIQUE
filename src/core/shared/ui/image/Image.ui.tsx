'use client'

import { ComponentProps, FC, memo, useState } from 'react'
import Image from 'next/image'

import { cn } from '@/core/shared/utils/cn'

interface IImageProps extends Omit<ComponentProps<typeof Image>, 'src' | 'alt'> {
  className?: string
  src?: string | null
  alt?: string | null
  withSkeleton?: boolean
  imageClassName?: string
  skeletonClassName?: string
  inView?: boolean
  fetchpriority?: 'high' | 'low' | 'auto' | undefined
}

const ImageUi: FC<IImageProps> = ({
                                    className,
                                    src,
                                    alt,
                                    fill,
                                    withSkeleton = true,
                                    imageClassName,
                                    // placeholder = 'blur',
                                    skeletonClassName,
                                    inView = true,
                                    fetchpriority,
                                    ...props
                                  }) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(false)

  const imageSrc = !inView
    ? '/images/placeholder-img.webp'
    : !src || error
      ? '/images/placeholder-img.webp'
      : src

  return (
    <div className={cn('relative', fill && 'absolute inset-0', className)}>
      {withSkeleton && !isLoaded && inView && (
        <div
          className={cn(
            'absolute inset-0 z-[-1] animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200',
            skeletonClassName,
          )}
        />
      )}
      <Image
        src={imageSrc}
        alt={alt || 'image'}
        fill={fill}
        fetchPriority={fetchpriority ?? 'high'}
        // placeholder={placeholder}
        onLoad={() => setIsLoaded(true)}
        onError={() => setError(true)}
        className={cn(
          'size-full object-contain transition-opacity duration-500',
          isLoaded ? 'opacity-100' : 'opacity-0',
          imageClassName,
        )}
        {...props}
      />
    </div>
  )
}

export default memo(ImageUi)
