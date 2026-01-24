'use client'

import { FC, memo } from 'react'
import { FreeHours } from '@prisma/client'
import { useTranslations } from 'next-intl'

import { TNavBarPrismaApi } from '@/core/shared/types/api'
import { ClearButtonUi } from '@/core/shared/ui/buttons/clear-button'
import {
  HoverCardContentUI,
  HoverCardTriggerUI,
  HoverCardUI,
} from '@/core/shared/ui/hover-card/hover-card.ui'
import { IconUI } from '@/core/shared/ui/icons'
import { LinkUI } from '@/core/shared/ui/link'

interface INavBarListProps {
  data?: TNavBarPrismaApi
  openHours?: FreeHours[]
}

const NavbarList: FC<INavBarListProps> = ({ data, openHours }) => {
  const t = useTranslations()

  return (
    <ul className='mx-auto flex max-w-[540px] items-center justify-between rounded-100 bg-white p-2.5'>
      <li className='ml-6 mr-4 inline-block'>
        <IconUI variant='watch' className='h-5 w-5 text-dark' />
      </li>
      {data
        ?.sort((a, b) => a.id - b.id)
        .map((navItem, index) =>
          index !== data?.length - 1 ? (
            <li key={navItem.id} className='inline-block font-medium text-dark'>
              <ClearButtonUi variant='navWhiteButton'>
                <LinkUI href={navItem.link?.slug || ''} ariaLabel={'navbar-link ' + navItem.title}>
                  {navItem.title}
                </LinkUI>
              </ClearButtonUi>
            </li>
          ) : (
            <li key={navItem.id} className='inline-block font-medium text-white'>
              <HoverCardUI openDelay={100} closeDelay={100}>
                <HoverCardTriggerUI asChild>
                  <ClearButtonUi
                    variant='darkButton'
                    aria-label={'navbar-trigger-button ' + navItem.title}
                    className='w-full rounded-100 px-6 py-4'
                  >
                    <LinkUI
                      className='text-sm uppercase tracking-[1px]'
                      href={navItem.link?.slug || ''}
                      ariaLabel={'navbar-link ' + navItem.title}
                    >
                      {navItem.title}
                    </LinkUI>
                  </ClearButtonUi>
                </HoverCardTriggerUI>

                <HoverCardContentUI
                  side='top'
                  align='end'
                  sideOffset={22}
                  alignOffset={-130}
                  className='w-full max-w-[250px] overflow-hidden rounded-lg bg-white px-5 py-4 leading-[160%] text-dark shadow-lg data-[state=closed]:animate-slideTopToBottom data-[state=open]:animate-slideBottomToTop'
                  aria-label='navbar-hovercard-content open hours'
                >
                  <h3 className='text-lg font-light'>{t('_.open_hours')}</h3>
                  {!!openHours?.length ? (
                    <ul className='w-full'>
                      {openHours?.map((item, i) => (
                        <li key={i} className='mt-2 flex justify-between gap-[45px]'>
                          <span className='font-medium'>{item.day}</span>
                          <span className='font-light'>
                            {item.closed ? t('_.closed') : item.hours}
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>{t('_.save_variant.open_hours_alert')}</p>
                  )}
                </HoverCardContentUI>
              </HoverCardUI>
            </li>
          ),
        )}
    </ul>
  )
}
export default memo(NavbarList)
