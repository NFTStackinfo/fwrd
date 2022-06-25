import styled from 'styled-components'

export const CollectionStyle = styled.section`
	padding-top: 128px;
	margin-top: 72px;

	@media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
		margin-top: 42px;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		margin-top: 0;
		padding-top: 120px;
	}

	.container {
		text-align: center;

		> h3 {
			color: ${({ theme }) => theme.colors.orange};
		}

		> h5 {
			margin-top: 24px;
      letter-spacing: 0.03em;
		}

		.socials {
			margin-top: 32px;
			display: inline-flex;
			gap: 24px;
		}

		.collection__items {
			display: flex;
			margin-top: 40px;
			position: relative;
			gap: 24px;

			@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
				flex-direction: column;
				gap: 32px;
			}

			.border-top {
				position: absolute;
				top: 0;
				display: block;
				width: 100%;
				height: 2px;
				background-image: ${({ theme }) => theme.gradients.gradient3};
			}

			.col {
				display: flex;
				flex-direction: column;
				align-items: center;
				padding: 64px 24px 24px;
				gap: 48px;
				position: relative;
				width: 100%;

				@media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
					padding: 56px 16px 16px;
					gap: 40px;
				}

				@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
					gap: 28px;
				}

				@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
					padding-inline: 16px;
					padding-block: 0;
					gap: 32px;

					&.col-1 {
						padding-top: 56px;
					}
				}

				:not(:last-child) {
					margin-right: auto;
				}

				.bg {
					position: absolute;
					z-index: -1;
					inset: 0;
					display: flex;
					height: calc(100% - 138px);

					> div {
						position: relative;
						width: 2px;
						height: 100%;
						background-image: url('/assets/common/dotted-line-pattern-vertical.svg');
						background-repeat: repeat-y;
						margin-right: auto;

						&:last-child {
							margin-right: 0;
						}

						:before {
							content: '';
							position: absolute;
							width: 2px;
							left: 0;
						}

						:before {
							top: 0;
						}

						:after {
							bottom: 0;
						}
					}

					.line-1-1,
					.line-1-2,
					.line-2-1 {
						:before {
							background-color: #7fc1ff;
						}
					}

					.line-2-2::before {
						background-color: #a896ad;
					}

					.line-3-1::before {
						background-color: #ad91a4;
					}

					.line-3-2::before {
						background-color: #d76552;
					}

					.line-1-1,
					.line-3-2 {
						::before {
							height: 18px;
						}
					}

					.line-1-2,
					.line-2-1,
					.line-2-2,
					.line-3-1 {
						::before {
							height: 6px;
						}
					}

					@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
						[class*='line-']:not(.line-1-1, .line-1-2) {
							background: transparent;

							::before,
							::after {
								height: 0;
								background: transparent;
							}
						}

						.line-1-1,
						.line-1-2 {
							::before {
								height: 18px;
							}
						}

						.line-1-2::before {
							background-color: #d76552;
						}
					}
				}
			}
		}
	}
`
