'use client'

import { FC } from 'react'
import { motion } from 'motion/react'
import { useTranslations } from 'next-intl'

import { usePathname } from '@/core/shared/lib/i18n'
import { usePageStore } from '@/core/shared/store/page/page.provider'
import { LinkUI } from '@/core/shared/ui/link'
import cn from '@/core/shared/utils/cn'

interface ILogoComponentProps {
  className?: string
}

const animateStyle = {
  hidden: {
    x: '-50%',
    y: -100,
    opacity: 0,
  },
  visible: {
    x: '-50%',
    y: 0,
    opacity: 1,
  },
}

const LogoComponent: FC<ILogoComponentProps> = ({ className }) => {
  const t = useTranslations('_')
  const halfPage = usePageStore((store) => store.halfPage)
  const pathname = usePathname()
  return (
    <motion.div
      className={cn(
        'absolute top-[64px] z-10 text-center text-32s font-medium',
        halfPage ? 'left-1/4' : 'left-1/2',
        className,
      )}
      initial='hidden'
      animate='visible'
      variants={animateStyle}
      transition={{
        type: 'tween',
        duration: 0.8,
      }}
    >
      <LinkUI href='/' className={cn('', pathname === '/' && 'pointer-events-none')}>
        <h3>{t('logo')}</h3>
      </LinkUI>
    </motion.div>
  )
}
export default LogoComponent
