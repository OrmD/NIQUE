'use client'

import { FC } from 'react'

import { useNavBarStore } from '@/core/shared/store/navbar/navbar.provider'
import cn from '@/core/shared/utils/cn'
import NavbarList from '@/core/widgets/layout/elements/navbar/elements/navbar-list'

interface INavbarComponentProps {
  className?: string
}

const NavbarComponent: FC<INavbarComponentProps> = ({ className }) => {
  const navbar = useNavBarStore((store) => store.navbar)
  const openHours = useNavBarStore((store) => store.openHours)

  return (
    <nav className={cn('w-full', className)}>
      <NavbarList data={navbar} openHours={openHours} />
    </nav>
  )
}

export default NavbarComponent
