import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['uk'],
  defaultLocale: 'uk',
  localePrefix: 'as-needed',
  localeDetection: false,
  alternateLinks: true,
})

export type TLocale = (typeof routing.locales)[number]
