import {secondaryFont} from "@/core/shared/fonts";
import { IVariantReturn } from '@/core/shared/types/hooks'

export enum ESize{
    S = 's',
    XL = 'xl'
}

export type TSize = (typeof ESize)[keyof typeof ESize] | string

export const subTitleMap = new Map<TSize, IVariantReturn>(
    [
        [
            ESize.S,{
            className: `text-64s ${secondaryFont.className}`
        }
        ],
        [
            ESize.XL,{
            className: `text-80s  ${secondaryFont.className}`
        }
        ]

    ]
)

