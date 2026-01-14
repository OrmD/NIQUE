import { useMemo } from 'react'

export enum EVariant {
  DEFAULT = 'default',
  SCROLL = 'scroll',
}

export type TVariant = (typeof EVariant)[keyof typeof EVariant] | string

interface IUseVariantProps {
  variant?: TVariant
}

interface IUseVariantReturn {
  progress: {
    className: string
  }
  bar: {
    className: string
  }
}

const map = new Map<TVariant, IUseVariantReturn>([
  [
    EVariant.DEFAULT,
    {
      bar: {
        className: 'relative h-[2px] w-full overflow-hidden bg-gray-200',
      },
      progress: {
        className: 'absolute left-0 top-0 h-full bg-black transition-all duration-300 ease-in-out',
      },
    },
  ],
  [
    EVariant.SCROLL,
    {
      bar: {
        className: 'relative h-1 w-full overflow-hidden bg-gray-200',
      },
      progress: {
        className:
          'absolute left-0 top-0 h-full bg-gray-400 transition-all duration-300 ease-in-out',
      },
    },
  ],
])

export const useVariant = ({
  variant = EVariant.DEFAULT,
}: IUseVariantProps): IUseVariantReturn | null => {
  return useMemo(() => map.get(variant)!, [variant])
}
