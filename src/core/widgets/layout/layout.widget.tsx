'use server'

import { FC, ReactNode } from 'react'

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
    </main>
  )
}
export default LayoutWidget
