import { useMemo } from 'react'

export enum EPosition {
  NONE = 'none',
  CENTERED_VERTICAL = 'centered-vertical',
  CENTERED_HORIZONTAL = 'centered-horizontal',
}

export type TPosition = (typeof EPosition)[keyof typeof EPosition] | string

interface IUsePositionProps {
  position?: TPosition
}

interface IUsePositionReturn {
  className: string
}

const map = new Map<TPosition, IUsePositionReturn>([
  [
    EPosition.CENTERED_VERTICAL,
    {
      className: 'absolute left-0 top-1/2 -translate-y-1/2',
    },
  ],
  [
    EPosition.CENTERED_HORIZONTAL,
    {
      className: 'absolute left-1/2 top-0 -translate-x-1/2 rotate-90',
    },
  ],
])

export const usePosition = ({
  position = EPosition.NONE,
}: IUsePositionProps): IUsePositionReturn | null => {
  return useMemo(() => map.get(position)!, [position])
}
