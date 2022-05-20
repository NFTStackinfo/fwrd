import * as React from 'react'
import { theme } from '../../../styles/global/theme'
import { Icon } from '../Icons/Icon'

export const Button = ({
                         className = [],
                         children,
                         variant = 'primary',
                         onClick,
                         iconName = 'arrow-right-down',
                         withIcon = true,
                         to = '#',
                         newTab = true,
                         isLink = true,
                         ...props
                       }) => {
  return (
    <>
      {
        isLink ? (
          <a
            onClick={onClick}
            className={[...className, 'btn', 'btn_secondary'].join(' ')}
            rel='noreferrer'
            href={to}
            target={newTab ? '_blank' : '_self'}
            {...props}
          >
            {children}
            {withIcon && <Icon name={iconName} color={theme.colors.white} />}
          </a>
        ) : (
          <button
            onClick={onClick}
            className={[...className, 'btn', 'btn_secondary'].join(' ')}
            {...props}
          >
            {children}
            {withIcon && <Icon name={iconName} color={theme.colors.white} />}
          </button>
        )
      }
    </>
  )
}
