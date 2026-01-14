import { prisma } from '@g/prisma/prisma-client'

import { HomePage } from '@/core/pages/home'
import { PageStoreProvider } from '@/core/shared/store/page/page.provider'

const Page = async () => {
  const page = await prisma.pages.findUnique({
    where: {
      slug: 'home',
    },
    include: {
      images: true,
    },
  })

  if (page === null) {
    return null
  }
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
