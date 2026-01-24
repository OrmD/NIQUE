'use client'
import { FC, memo } from 'react'
import { motion } from 'motion/react'
import { useTranslations } from 'next-intl'

const LoaderUI: FC = ({}) => {
  const t = useTranslations()
  return (
    <div className='relative'>
      <motion.div
        animate={{
          width: ['0%', '100%'],
        }}
        transition={{ duration: 3, repeat: Infinity, repeatType: 'loop' }}
        className='relative z-[42] overflow-hidden text-64s text-primary'
      >
        {t('_.logo')}
      </motion.div>
      <div className='absolute left-0 top-0 z-[41] text-64s text-white-80'>{t('_.logo')}</div>
    </div>
  )
}
export default memo(LoaderUI)
