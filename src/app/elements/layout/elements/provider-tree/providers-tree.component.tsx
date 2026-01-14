import { FC, memo, ReactNode } from 'react'
import { NextIntlClientProvider } from 'next-intl'

import { TanstackQueryProvider } from '@/core/shared/lib/tanstack'

interface ProvidersThreeProps {
  children: ReactNode
}

const ProvidersTreeComponent: FC<ProvidersThreeProps> = ({ children }) => {
  return (
    <NextIntlClientProvider>
      <TanstackQueryProvider>{children}</TanstackQueryProvider>
    </NextIntlClientProvider>
  )
}

export default memo(ProvidersTreeComponent)
