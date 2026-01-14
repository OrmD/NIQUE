import { IVariantReturn } from '@/core/shared/types/hooks'

export enum ESize {
  M = 'm',
  S = 's',
  XL = 'xl',
}

export type TSize = (typeof ESize)[keyof typeof ESize] | string

export const titleMap = new Map<TSize, IVariantReturn>([
  [
    ESize.M,
    {
      className: 'text-40s',
    },
  ],
  [
    ESize.S,
    {
      className: 'text-80s',
    },
  ],
  [
    ESize.XL,
    {
      className: 'text-160s',
    },
  ],
])
