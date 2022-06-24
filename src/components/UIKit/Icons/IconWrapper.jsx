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
  cursor: pointer;
  width: fit-content;

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

function IconWrapper({ to, iconName = 'twitter', size="sm", onClick, className }) {
	return (
    <>
      {to ?
        <IconWrapperStyle href={to} target="_blank" rel="noreferrer" size={size}
                          className={className}>
          <Icon name={iconName} size={size === 'sm' ? '22px' : '32px'} />
        </IconWrapperStyle>
        :
        <IconWrapperStyle size={size} onClick={onClick} className={className}>
          <Icon name={iconName} size={size === 'sm' ? '22px' : '32px'} />
        </IconWrapperStyle>
      }
    </>

	)
}

export default IconWrapper
