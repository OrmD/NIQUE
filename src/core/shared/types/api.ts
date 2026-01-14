import { Images, Pages, Prisma } from '@prisma/client'

export type IPagesApi = Pick<Pages, 'title' | 'sub_title' | 'description'> & {
  images?: Prisma.PagesGetPayload<{ include: { images: true } }>['images']
}

export type TPagesPrismaData = Pages & {
  images?: Images[]
}

export type TNavBarPrismaItem = Prisma.NavbarGetPayload<{
  include: {
    link: {
      select: {
        slug: true
      }
    }
  }
}>

export type TNavBarPrismaApi = TNavBarPrismaItem[]
