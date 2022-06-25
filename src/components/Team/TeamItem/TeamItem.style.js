import styled from 'styled-components'

export const TeamItemStyle = styled.div`
	display: grid;
	column-gap: 24px;
  grid-template-columns: 120px auto;
	border-radius: 2px 20px;
	background-image: ${({ theme }) => theme.gradients.gradient1};
	padding: 16px;

	.team-item {
		&__image {
			height: auto;

			img {
				height: 100%;
			}
		}

    &__info {
      display: flex;
      flex-direction: column;
      justify-content: left;
    }

    &__name {
      text-transform: uppercase;
      font-family: ${({ theme }) => theme.font.primary};
      font-weight: 300;
    }

		&__description {
			color: ${({ theme }) => theme.colors.lightRose};
			margin-top: 4px;
			margin-bottom: 16px;
		}

    &__btn-read-more {
      margin-top: auto;
      display: inline-flex;
      align-items: center;
      color: ${({ theme }) => theme.colors.white};
      cursor: pointer;
      width: fit-content;

      .icon {
        margin-left: 10px;
      }
    }
	}

	.team-item__socials {
		display: grid;
    grid-auto-flow: column;
    grid-auto-columns: max-content;
    column-gap: 8px;
	}
`
