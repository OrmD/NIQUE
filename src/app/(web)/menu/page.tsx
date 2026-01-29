import { FC } from 'react'
import { prisma } from '@g/prisma/prisma-client'

import { MenuPage } from '@/core/pages/menu'
import { PageStoreProvider } from '@/core/shared/store/page/page.provider'

interface IPageProps {}

const Page: FC<IPageProps> = async ({}) => {
  const page = await prisma.pages.findUnique({
    where: {
      slug: 'menu',
    },
    include: {
      images: true,
    },
  })

  return (
    <PageStoreProvider
      initialData={{
        initialState: page,
        halfPage: true,
      }}
    >
      <MenuPage />
    </PageStoreProvider>
  )
}

export default Page
