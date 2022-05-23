import * as React from 'react'
import { theme } from '../../../styles/global/theme'
import { Icon } from '../Icons/Icon'

export const ButtonPrimary = ({
                                className = [],
                                children,
                                onClick,
                                to = '#',
                                newTab = true,
                                iconName = 'arrow-right-down',
                                isLink = true,
                                ...props
                              }) => {
  return (
    <div className={[...className, 'btn_primary'].join(' ')} {...props}>
      {isLink ? (
          <>
            <a
              rel='noreferrer'
              href={to}
              target={newTab ? '_blank' : '_self'}
              className='btn_primary__icon_wrapper'
              onClick={onClick}
            >
              <Icon name={iconName} color={theme.colors.white} />
            </a>
            <a
              rel='noreferrer'
              href={to}
              target={newTab ? '_blank' : '_self'}
              className='btn btn_primary__btn'
              onClick={onClick}
            >
              {children}
            </a>

            <a
              rel='noreferrer'
              href={to}
              target={newTab ? '_blank' : '_self'}
              className='btn_primary__icon_wrapper'
              onClick={onClick}
            >
              <Icon name={iconName} color={theme.colors.white} />
            </a>
          </>
        )
        : (
          <>
            <button
              className='btn_primary__icon_wrapper'
              onClick={onClick}
            >
              <Icon name={iconName} color={theme.colors.white} />
            </button>
            <button
              className='btn btn_primary__btn'
              onClick={onClick}
            >
              {children}
            </button>

            <button
              className='btn_primary__icon_wrapper'
              onClick={onClick}
            >
              <Icon name={iconName} color={theme.colors.white} />
            </button>
          </>
        )}

    </div>
  )
}
