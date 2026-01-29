'use client'

import { FC, memo } from 'react'

import { usePageStore } from '@/core/shared/store/page/page.provider'
import { MainSection } from '@/core/widgets/elements/main-section'

interface IMenuPageProps {}

const MenuPage: FC<IMenuPageProps> = () => {
  const data = usePageStore((store) => store.initialState)
  return (
    <>
      <MainSection className='w-[50%]' data={data} />
    </>
  )
}
export default memo(MenuPage)
