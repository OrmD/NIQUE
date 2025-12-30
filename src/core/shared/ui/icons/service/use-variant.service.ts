import { IconFacebook, IconInstagram, IconLeaflet, IconTwitter, IconWatch } from '../assets'
import { FC, SVGProps, useMemo } from 'react'


export enum EVariant {
  INSTAGRAM = 'instagram',
  FACEBOOK = 'facebook',
  TWITTER = 'twitter',
  WATCH = 'watch',
  LEAFLET = 'leaflet',
}

export type TVariant = (typeof EVariant)[keyof typeof EVariant] | string

interface IUseVariantProps{
  variant: TVariant
}

interface IUseVariantReturn {
  className: string
  icon: FC<SVGProps<SVGElement>>
}

 const map = new Map<TVariant, { className: string; icon: FC<SVGProps<SVGElement>> }>([
  [
    EVariant.FACEBOOK,
    {
      className: 'h-5 text-white', icon: IconFacebook
    }
  ],
  [
    EVariant.INSTAGRAM,
    {
      className: 'h-5 text-white', icon: IconInstagram
    }
  ],
  [
    EVariant.TWITTER,
    {
      className: 'h-5 text-white', icon: IconTwitter
    }
  ],
  [
    EVariant.WATCH,
    {
      className: 'h-4  ', icon: IconWatch
    }
  ],
  [
    EVariant.LEAFLET,
    {
      className: 'h-3 text-primary', icon: IconLeaflet
    }
  ]
])

export const useVariant = ({ variant }: IUseVariantProps): IUseVariantReturn | null => {
  return useMemo(() => map.get(variant)!, [variant])
}
