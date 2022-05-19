import * as React from 'react'
import { ButtonStyle } from './Button.style'
import { theme } from '../../../styles/global/theme'
import { Icon } from '../Icons/Icon'

export const Button = ({
	className,
	children,
	variant = 'primary',
	onClick,
	iconName = 'arrow-right-down',
	withIcon = true,
	to = '#',
	newTab = true,
	...props
}) => {
	return (
		<ButtonStyle
			variant={variant}
			onClick={onClick}
			className={className}
			rel="noreferrer"
			href={to}
			target={newTab ? '_blank' : '_self'}
			{...props}
		>
			{children}
			{withIcon && <Icon name={iconName} color={theme.colors.white} />}
		</ButtonStyle>
	)
}
