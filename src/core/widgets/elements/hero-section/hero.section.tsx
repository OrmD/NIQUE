import { FC } from 'react'
import cn from '@/core/shared/utils/cn'
import { ImageUI } from '@/core/shared/ui/image'
import { TitleUi } from '@/core/shared/ui/title'
import { SubTitleUi } from '@/core/shared/ui/sub-title'
import {  Pages, Prisma } from '@prisma/client'


type THeroData = Pick<Pages, 'title' | 'sub_title' | 'description' > &   {
  images?: Prisma.PagesGetPayload<{ include: { images: true } }>['images'];
}


interface IHeroSectionProps {
  className?: string
  data?: THeroData | null | undefined
}

const HeroSection:FC<IHeroSectionProps> = ({
  className,
  data
                                           }) => {
  return(
    <section className={cn('size-full flex flex-col items-center justify-center relative ',className)}>
      {data?.images?.[0].src && <ImageUI src={data?.images?.[0].src} fill sizes='100vw' className='z-[9]' imageClassName='object-cover absolute insert-0 z-[9]'  />}
      <div className='relative z-[10]'>
      <SubTitleUi as='h2'>
        {data?.sub_title}
      </SubTitleUi>
       <TitleUi as='h1' size='xl' className='mb-8'>
        {data?.title}
      </TitleUi>
      <p>
        {data?.description}
      </p>
      </div>

    </section>
  )
}
export default HeroSection