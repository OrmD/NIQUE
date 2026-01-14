import { useMemo } from 'react'

export enum EColor {
  WHITE = 'white',
  BLACK = 'black',
}

export type TColor = (typeof EColor)[keyof typeof EColor] | string

interface IUseColorProps {
  color?: TColor
}

interface IUseColorReturn {
  classNames: {
    selected: string
    unselected: string
  }
}

const map = new Map<TColor, IUseColorReturn>([
  [
    EColor.WHITE,
    {
      classNames: {
        selected: 'size-[10px] bg-white',
        unselected: 'size-[6px] bg-[white]/30',
      },
    },
  ],
  [
    EColor.BLACK,
    {
      classNames: {
        selected: 'size-[10px] bg-black',
        unselected: 'size-[6px] bg-gray-200',
      },
    },
  ],
])

export const useColor = ({ color = EColor.WHITE }: IUseColorProps): IUseColorReturn => {
  return useMemo(() => map.get(color)!, [color])
}
