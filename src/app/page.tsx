import { prisma } from '@g/prisma/prisma-client'
import { HeroSection } from '@/core/widgets/elements/hero-section'





export default async function Home() {
const pages = await prisma.pages.findUnique({
  where:{
    slug: 'home'
  },
  include:{
    images: true
  }
})
  return (
   <main>
     <HeroSection data={pages}>

     </HeroSection>
   </main>
  );
}
