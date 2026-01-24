'use client'

import { ComponentProps, FC, memo, MouseEventHandler } from 'react'

import { Link } from '@/core/shared/lib/i18n'

interface ILinkProps extends ComponentProps<typeof Link> {
  className?: string
  ariaLabel?: string
}

const LinkUI: FC<ILinkProps> = ({ onClick, href, ariaLabel, ...otherProps }) => {
  const onClickHandler: MouseEventHandler<HTMLAnchorElement> = (event) => {
    if (onClick) {
      onClick(event)
    }

    if (event.defaultPrevented) return

    const targetHref = new URL(
      (event.currentTarget as HTMLAnchorElement).href,
      window.location.origin,
    )
    const currentHref = new URL(window.location.href)

    const isSameLocation =
      targetHref.pathname === currentHref.pathname &&
      targetHref.search === currentHref.search &&
      targetHref.hash === currentHref.hash
  }

  return (
    <Link
      href={href || '#'}
      {...otherProps}
      aria-label={ariaLabel || 'link'}
      onClick={onClickHandler}
    />
  )
}

export default memo(LinkUI)
