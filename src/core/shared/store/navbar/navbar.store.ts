import { FreeHours } from '@prisma/client'
import { createStore } from 'zustand/vanilla'

import { TNavBarPrismaApi } from '@/core/shared/types/api'

export interface INavBarStoreState {
  navbar: TNavBarPrismaApi
  openHours: FreeHours[]
}

interface INavBarStoreActions {}

export type TNavBarStore = INavBarStoreState & INavBarStoreActions

export const createNavBarStore = (initialState: INavBarStoreState) => {
  return createStore<TNavBarStore>(() => ({
    ...initialState,
  }))
}
