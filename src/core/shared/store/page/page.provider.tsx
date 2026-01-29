'use client'
import { createContext, ReactNode, useContext, useRef } from 'react'
import { useStore } from 'zustand/react'

import { createPageStore, IPageStoreState, TPageStore } from '@/core/shared/store/page/page.store'

type TPageStoreContext = ReturnType<typeof createPageStore> | undefined

export const PageStoreContext = createContext<TPageStoreContext>(undefined)

interface IPageStoreProviderProps {
  children: ReactNode
  initialData: IPageStoreState
}

export const PageStoreProvider = ({ initialData, children }: IPageStoreProviderProps) => {
  const storeRef = useRef<TPageStoreContext | null>(null)
  if (storeRef.current === null) {
    storeRef.current = createPageStore(initialData)
  }

  return <PageStoreContext.Provider value={storeRef.current}>{children}</PageStoreContext.Provider>
}

export const usePageStore = <T,>(selector: (store: TPageStore) => T): T => {
  const counterStoreContext = useContext(PageStoreContext)
  if (!counterStoreContext) {
    throw new Error(`usePageStore must be used within PageStoreProvider`)
  }

  return useStore(counterStoreContext, selector)
}
