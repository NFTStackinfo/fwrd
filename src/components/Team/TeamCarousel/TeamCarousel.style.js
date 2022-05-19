import styled, { keyframes } from 'styled-components'

export const TeamCarouselStyle = styled.div`
	margin-top: 24px;

	max-width: 548px;
	margin-inline: auto;

	.slick-slider {
		padding-bottom: 24px;
	}

	.slick-slide {
		padding: 0 12px;
	}

	.slick-slider {
		padding-bottom: 50px;
	}

	.slick-dots {
		bottom: 20px;
		gap: 8px;

		li {
			width: 8px;
			height: 8px;
			transition: 0.3s;

			button {
				height: 100%;
				width: 100%;
				border-radius: 50%;
				background-color: ${({ theme }) => theme.colors.lightRose} !important;

				&:before {
					content: none;
				}
			}

			&.slick-active {
				button {
					background-color: ${({ theme }) => theme.colors.orange} !important;
				}
			}
		}
	}
`
