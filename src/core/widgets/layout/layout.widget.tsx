'use client'

import { FC, ReactNode } from 'react'

import { FullscreenLoaderUi } from '@/core/shared/ui/fullscreen-loader'

interface ILayoutWidgetProps {
  children: ReactNode
}

const LayoutWidget: FC<ILayoutWidgetProps> = ({ children }) => {
  return (
    <main className='relative flex h-screen w-screen overflow-hidden'>
      {children}
      <FullscreenLoaderUi isLoading={false} />
    </main>
  )
}
export default LayoutWidget
