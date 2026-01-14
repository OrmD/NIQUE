import { FC } from 'react'

import { IPagesApi } from '@/core/shared/types/api'
import { ImageUI } from '@/core/shared/ui/image'
import { SubTitleUi } from '@/core/shared/ui/sub-title'
import { TitleUi } from '@/core/shared/ui/title'
import cn from '@/core/shared/utils/cn'

interface IHeroSectionProps {
  className?: string
  data?: IPagesApi | null
}

const HeroSection: FC<IHeroSectionProps> = ({ className, data }) => {
  return (
    <section className={cn('relative flex size-full items-center justify-center', className)}>
      {data?.images?.length !== 0 && (
        <ImageUI
          src={data?.images?.[0]?.src}
          fill
          sizes='100vw'
          className='z-[9]'
          imageClassName='object-cover absolute insert-0 z-[9]'
        />
      )}
      <div className='relative z-[10] flex flex-col items-center'>
        <SubTitleUi as='h2'>{data?.sub_title}</SubTitleUi>
        <TitleUi as='h1' size='xl' className='mb-8'>
          {data?.title}
        </TitleUi>
        <p className='max-w-[610px] text-center text-24s font-light'>{data?.description}</p>
      </div>
    </section>
  )
}
export default HeroSection
