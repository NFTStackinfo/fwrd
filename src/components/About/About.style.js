import styled from 'styled-components'

export const AboutStyle = styled.section`
	padding-top: 40px;

	@media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
		padding-top: 0;
	}

	.title {
		display: flex;
		gap: 8px;
		align-items: center;
	}

	.content {
		display: flex;
		align-items: center;
		position: relative;
		z-index: 1;
		overflow: hidden;
		margin-top: 16px;
		padding-right: 16px;

		.border-right {
			position: absolute;
			right: 0;
			display: block;
			width: 2px;
			height: calc(100% - 18px);
			background-image: ${({ theme }) => theme.gradients.gradient3};
			transform: scale(-1);

			::before,
			::after {
				content: '';
				position: absolute;
				width: 17px;
				height: 2px;
			}

			::before {
				top: 0;
				background-color: #df5d42;
			}

			::after {
				bottom: 0;
				background-color: #91caff;
			}
		}

		&__text {
			position: relative;
			z-index: 1;
			color: ${({ theme }) => theme.colors.white};
			width: calc(100% - 340px);

			@media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
				width: calc(100% - 366px);
			}

			@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
				width: calc(100% - 248px);
			}

			@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
				width: 100%;
			}

			&-overlay {
				width: 100%;
				position: absolute;
				z-index: 2;
				top: 0;
				background: linear-gradient(109.3deg, #ec4e27 44.67%, #7ec1ff 74.37%);
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
				height: auto;
				overflow: hidden;
			}
		}

		> img {
			width: 336px;
			height: 336px;
			flex-shrink: 0;
			position: absolute;
			right: 36px;

			@media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
				right: 16px;
			}

			@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
				height: 266px;
				width: 266px;
			}

			@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
				display: none;
			}
		}

		.bg {
			position: absolute;
			z-index: -1;
			inset: 0;
			display: flex;
			flex-direction: column;
			flex-wrap: wrap;
			gap: 22px;

			@media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
				gap: 19px;
			}

			@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
				gap: 17px;
			}

			> div {
				position: relative;
				height: 36px;
				width: 100%;
				top: 10px;

				@media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
					height: 29px;
				}

				@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
					height: 26px;
				}

				:before,
				:after {
					content: '';
					position: absolute;
					width: 100%;
					height: 2px;
					background-image: url('/assets/common/dotted-line-pattern-horizontal.svg');
					background-repeat: repeat-x;
				}

				:before {
					top: 0;
				}

				:after {
					bottom: 0;
				}
			}
		}

		.left-border {
			position: absolute;
			inset: 0 0 0 auto;
			background-color: green;
			background-attachment: fixed;

			> div {
				width: 2px;
				height: 100%;
				background-color: transparent;
				position: relative;

				:before {
					content: '';
					height: 2px;
					width: 18px;
					position: absolute;
					background-color: transparent;
					top: 0;
					right: 0;
				}
			}
		}
	}
`
