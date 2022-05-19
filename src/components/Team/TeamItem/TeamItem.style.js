import styled from 'styled-components'

export const TeamItemStyle = styled.div`
	display: flex;
	gap: 24px;
	border-radius: 2px 20px;
	background-image: ${({ theme }) => theme.gradients.gradient1};
	padding: 16px;

	.team-item {
		&__image {
			height: auto;
			width: 120px;
			flex-shrink: 0;

			img {
				height: 100%;
			}
		}

		&__name {
			text-transform: uppercase;
		}

		&__description {
			color: ${({ theme }) => theme.colors.lightRose};
			margin-top: 4px;
			margin-bottom: 16px;
		}
	}

	.team_item__socials {
		display: flex;
		gap: 8px;
	}
`
