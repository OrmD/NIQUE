import { FC } from 'react'
import { prisma } from '@g/prisma/prisma-client'

import { HomePage } from '@/core/pages/home'
import { PageStoreProvider } from '@/core/shared/store/page/page.provider'

interface IPageProps {
  params: Promise<{ slug: string }>
}

const Page: FC<IPageProps> = async ({ params }) => {
  const { slug } = await params

  const page = await prisma.pages.findUnique({
    where: {
      slug: slug,
    },
    include: {
      images: true,
    },
  })

  if (page === null || undefined) {
    return null
  }
  console.log('pageData:', page)
  return (
    <PageStoreProvider
      initialData={{
        initialState: page,
      }}
    >
      <HomePage />
    </PageStoreProvider>
  )
}

export default Page
