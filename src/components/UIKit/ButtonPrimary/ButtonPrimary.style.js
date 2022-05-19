import styled, { css } from 'styled-components'

export const ButtonPrimaryStyle = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	padding: 0;
	gap: 8px;

	.button {
		display: inline-flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding: 12px 16px;
		gap: 10px;
		color: ${({ theme }) => theme.colors.white};
		transition: 0.3s;
		cursor: pointer;
		text-transform: uppercase;
		font-size: ${({ theme }) => theme.font.size.subheading2};
		font-weight: 500;
		border-radius: 28px;
		border: 2px solid #ffffff;

		background-color: transparent;
	}

	.icon-container {
		background-color: ${({ theme }) => theme.colors.orange};
		border-radius: 50%;
		height: 48px;
		width: 48px;
		display: flex;
		justify-content: center;
		align-items: center;

		path {
			transition: 0.3s;
		}
	}

	&.fade-in-button {
		opacity: 1;
		visibility: visible;
	}
`
