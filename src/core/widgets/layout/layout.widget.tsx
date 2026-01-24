'use server'

import { FC, ReactNode } from 'react'

import { FullscreenLoaderUi } from '@/core/shared/ui/fullscreen-loader'
import LogoComponent from '@/core/widgets/layout/elements/logo/logo.component'
import NavbarComponent from '@/core/widgets/layout/elements/navbar/navbar.component'

interface ILayoutWidgetProps {
  children: ReactNode
}

const LayoutWidget: FC<ILayoutWidgetProps> = ({ children }) => {
  return (
    <main className='relative size-full max-h-vh max-w-vw overflow-hidden'>
      <LogoComponent className='absolute left-0 top-[64px] z-10' />
      {children}
      <NavbarComponent className='absolute bottom-[64px] left-0 z-10'></NavbarComponent>
      <FullscreenLoaderUi isLoading={false} />
    </main>
  )
}
export default LayoutWidget
