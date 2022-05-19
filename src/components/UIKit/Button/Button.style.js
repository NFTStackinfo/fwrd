import styled, { css } from 'styled-components'

export const ButtonStyle = styled.a`
	display: inline-flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 12px 16px;
	gap: 10px;
	height: 40px;
	color: ${({ theme }) => theme.colors.white};
	transition: 0.3s;
	cursor: pointer;
	text-transform: uppercase;
	font-size: ${({ theme }) => theme.font.size.subheading2};
	font-weight: 700;
	border: 2px solid #ffffff;
	border-radius: 40px;

	&:hover {
		background-color: ${({ theme }) => theme.colors.white};
		color: ${({ theme }) => theme.colors.orange};

		.icon path {
			fill: ${({ theme }) => theme.colors.orange} !important;
		}
	}

	.icon {
		path {
			transition: 0.3s;
		}
	}

	&.fade-in-button {
		opacity: 1;
		visibility: visible;
	}
`
