'use client'

import { FC } from 'react'
import { motion } from 'motion/react'
import { useTranslations } from 'next-intl'

import { usePathname } from '@/core/shared/lib/i18n'
import { LinkUI } from '@/core/shared/ui/link'
import cn from '@/core/shared/utils/cn'

interface ILogoComponentProps {
  className?: string
}

const animateStyle = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
}

const LogoComponent: FC<ILogoComponentProps> = ({ className }) => {
  const t = useTranslations('_')
  const pathname = usePathname()
  return (
    <motion.div
      className={cn('w-full text-center text-32s font-medium', className)}
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
