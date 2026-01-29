'use client'

import { FC } from 'react'

import { usePageStore } from '@/core/shared/store/page/page.provider'
import { MainSection } from '@/core/widgets/elements/main-section'

interface IHomePageProps {}

const HomePage: FC<IHomePageProps> = () => {
  const page = usePageStore((store) => store.initialState)
  return <MainSection data={page}></MainSection>
}
export default HomePage
