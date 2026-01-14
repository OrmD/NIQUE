'use client'

import { ReactNode, useState } from 'react'
import { QueryClientProvider } from '@tanstack/react-query'

import { getQueryClient } from '@/core/shared/lib/tanstack'

export function TanstackQueryProvider({ children }: { children: ReactNode }) {
  {
    const [client] = useState(() => getQueryClient())

    return <QueryClientProvider client={client}> {children}</QueryClientProvider>
  }
}
