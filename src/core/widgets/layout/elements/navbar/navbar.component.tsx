'use client'

import { FC } from 'react'

import { useNavBarStore } from '@/core/shared/store/navbar/navbar.provider'
import { usePageStore } from '@/core/shared/store/page/page.provider'
import cn from '@/core/shared/utils/cn'
import NavbarList from '@/core/widgets/layout/elements/navbar/elements/navbar-list'

interface INavbarComponentProps {
  className?: string
}

const NavbarComponent: FC<INavbarComponentProps> = ({ className }) => {
  const navbar = useNavBarStore((store) => store.navbar)
  const openHours = useNavBarStore((store) => store.openHours)
  const halfPage = usePageStore((store) => store.halfPage)

  return (
    <nav
      className={cn(
        'absolute bottom-[64px] left-1/4 z-10 -translate-x-1/2',
        className,
        halfPage ? 'left-1/4' : 'left-1/2',
      )}
    >
      <NavbarList data={navbar} openHours={openHours} />
    </nav>
  )
}

export default NavbarComponent
