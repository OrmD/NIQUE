'use client'
import { FC } from 'react'

import { useNavBarStore } from '@/core/shared/store/navbar/navbar.provider'
import { IconUI } from '@/core/shared/ui/icons'
import cn from '@/core/shared/utils/cn'

interface INavbarComponentProps {
  className?: string
}

const NavbarComponent: FC<INavbarComponentProps> = ({ className }) => {
  const navbar = useNavBarStore((store) => store.initialState)
  return (
    <nav className={cn('w-full', className)}>
      <ul className='mx-auto max-w-[600px] rounded-100 bg-white p-2.5'>
        <li>
          <IconUI variant='watch' className='text-dark' />
        </li>
        {navbar.sort((a,b)=>(a.id-b.id)).map((navItem) => (
          <li key={navItem.id} className='mx-5 inline-block font-medium text-dark'>
            {navItem.title}{navItem.id}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavbarComponent
