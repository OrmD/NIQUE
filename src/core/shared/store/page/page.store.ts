import { createStore } from 'zustand/vanilla'

import { TPagesPrismaData } from '@/core/shared/types/api'

export interface IPageStoreState {
  initialState: TPagesPrismaData | null
  halfPage?: boolean
}

interface IPageStoreActions {}

export type TPageStore = IPageStoreState & IPageStoreActions

export const createPageStore = (initialState: IPageStoreState) => {
  return createStore<TPageStore>(() => ({
    ...initialState,
  }))
}
