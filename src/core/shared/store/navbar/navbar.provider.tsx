'use client'

import { createContext, ReactNode, useContext, useRef } from 'react'
import { useStore } from 'zustand/react'

import {
  createNavBarStore,
  INavBarStoreState,
  TNavBarStore,
} from '@/core/shared/store/navbar/navbar.store'

type TNavBarStoreContext = ReturnType<typeof createNavBarStore> | undefined

export const NavBarStoreContext = createContext<TNavBarStoreContext>(undefined)

interface INavBarStoreProviderProps {
  children: ReactNode
  initialData: INavBarStoreState
}

export const NavBarStoreProvider = ({ initialData, children }: INavBarStoreProviderProps) => {
  const storeRef = useRef<TNavBarStoreContext | null>(null)
  if (storeRef.current === null) {
    storeRef.current = createNavBarStore(initialData)
  }

  return (
    <NavBarStoreContext.Provider value={storeRef.current}>{children}</NavBarStoreContext.Provider>
  )
}

export const useNavBarStore = <T,>(selector: (store: TNavBarStore) => T): T => {
  const counterStoreContext = useContext(NavBarStoreContext)
  if (!counterStoreContext) {
    throw new Error(`useNavBarStore must be used within NavBarStoreProvider`)
  }

  return useStore(counterStoreContext, selector)
}
