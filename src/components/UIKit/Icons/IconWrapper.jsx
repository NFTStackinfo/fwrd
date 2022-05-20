import React from 'react'
import { Icon } from './Icon'
import styled from 'styled-components'

const IconWrapperStyle = styled.a`
	background: hsl(0, 0%, 100%, 0.15);
	border-radius: 4px;
	padding: ${({ size }) => size === 'sm' ? '5px' : '8px'};
	display: flex;
	align-items: center;
	justify-content: center;
	transition: 0.3s;

	&:hover {
		background-color: ${({ theme }) => theme.colors.white};

		.icon path {
			fill: ${({ theme }) => theme.colors.darkBlue} !important;
		}
	}

	.icon {
		path {
			transition: 0.3s;
		}
	}
`

function IconWrapper({ to = '#', iconName = 'twitter', size="sm" }) {
	return (
		<IconWrapperStyle href={to} target="_blank" rel="noreferrer" size={size}>
			<Icon name={iconName} size={size === 'sm' ? '22px' : '32px'} />
		</IconWrapperStyle>
	)
}

export default IconWrapper
