import styled from 'styled-components'

export const HeroStyle = styled.section`
	background-image: url('/assets/hero/background.png');
	background-repeat: no-repeat;
	background-size: cover;
  background-position: center bottom;
	padding-bottom: 164px;
	padding-top: 144px;

	.container {
		background: ${({ theme }) => theme.colors.lightBlue};
		padding: 48px 40px;
		display: flex;
		flex-direction: column;
		align-items: center;
		border-radius: 20px;

		@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
			padding: 32px 16px;
		}

    .mint-container {
      margin-top: 48px;
    }

		> img {
			height: 24px;
		}

		> p {
			font-size: ${({ theme }) => theme.font.size.subheading1};
			text-align: center;
			margin-top: 24px;
		}

		.banner {
			width: 100%;
			display: flex;
			justify-content: center;
			margin-top: 40px;
			margin-bottom: 60px;
			background-image: url('/assets/hero/logo-wordmark.svg');
			background-repeat: no-repeat;
			background-size: 80% auto;
      background-position: center top;

			@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
				padding-top: 16px;
			}

			img {
        width: 100%;
        max-width: 100%;
        display: block;
			}
		}
	}
`
