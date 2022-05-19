import * as React from 'react'
import { ButtonPrimaryStyle } from './ButtonPrimary.style'
import { theme } from '../../../styles/global/theme'
import { Icon } from '../Icons/Icon'

export const ButtonPrimary = ({
	className,
	children,
	onClick,
	to = '#',
	newTab = true,
	iconName = 'arrow-right-down',
	...props
}) => {
	return (
		<ButtonPrimaryStyle onClick={onClick} className={className} {...props}>
			<a
				rel="noreferrer"
				href={to}
				target={newTab ? '_blank' : '_self'}
				className="button"
			>
				{children}
			</a>

			<a
				rel="noreferrer"
				href={to}
				target={newTab ? '_blank' : '_self'}
				className="icon-container"
			>
				<Icon name={iconName} color={theme.colors.white} />
			</a>
		</ButtonPrimaryStyle>
	)
}
