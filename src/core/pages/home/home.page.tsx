'use client'
import { FC } from 'react'

import { usePageStore } from '@/core/shared/store/page/page.provider'
import { HeroSection } from '@/core/widgets/elements/hero-section'

interface IHomePageProps {}

const HomePage: FC<IHomePageProps> = () => {
  const page = usePageStore((store) => store.initialState)
  return <HeroSection data={page}></HeroSection>
}
export default HomePage
