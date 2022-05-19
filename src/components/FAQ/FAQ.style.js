import styled from 'styled-components'

export const FAQStyle = styled.section`
	padding-top: 128px;
	margin-top: 72px;

	@media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
		margin-top: 32px;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		margin-top: 0;
		padding-top: 120px;
	}

	.faqs-container {
		display: flex;
		gap: 24px;
		position: relative;
		margin-top: 24px;
		padding: 64px 0 114px;

		@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
			gap: 20px;
			padding-bottom: 96px;
		}

		@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
			padding-top: 40px;
			padding-bottom: 48px;
		}

		.border-top,
		.border-bottom {
			position: absolute;
			display: block;
			width: 100%;
			height: 2px;
			background-image: ${({ theme }) => theme.gradients.gradient3};
		}

		.border-top {
			top: 0;
		}

		.border-bottom {
			bottom: 0;
		}

		> img {
			width: 456px;
			height: auto;
			margin-block: auto;

			@media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
				width: 366px;
			}

			@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
				width: 295px;
			}

			@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
				display: none;
			}
		}
	}

	.Collapsible {
		position: relative;

		&:not(:first-child) {
			margin-top: 40px;
		}

		::after {
			content: '';
			display: block;
			position: absolute;
			bottom: 0;
			width: 100%;
			height: 1px;
			background: ${({ theme }) => theme.gradients.gradient3};
		}
	}

	.Collapsible__trigger {
		display: block;
	}

	.Collapsible__contentInner {
		padding-bottom: 40px;
		font-size: ${({ theme }) => theme.font.size.subheading2};
	}

	.trigger-inner {
		position: relative;
		padding-bottom: 24px;
		cursor: pointer;
		color: ${({ theme }) => theme.colors.black};
		text-transform: uppercase;

		h3 {
			font-size: ${({ theme }) => theme.font.size.h5};
		}
	}

	.bg {
		position: absolute;
		z-index: -1;
		inset: 0;
		display: flex;

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

			:before,
			:after {
				content: '';
				position: absolute;
				width: 2px;
				height: 5px;
			}

			:nth-child(1),
			:nth-child(2),
			:nth-child(3) {
				:before,
				:after {
					background-color: #7fc1ff;
				}
			}

			:nth-child(4) {
				:before,
				:after {
					background-color: #90b0de;
				}
			}

			:nth-child(5) {
				:before,
				:after {
					background-color: #a49ab6;
				}
			}

			:nth-child(6) {
				:before,
				:after {
					background-color: #b78791;
				}
			}

			:nth-child(7) {
				:before,
				:after {
					background-color: #c57875;
				}
			}

			:nth-child(8) {
				:before,
				:after {
					background-color: #da634d;
				}
			}

			:first-child,
			:last-child {
				:before,
				:after {
					height: 17px;
				}
			}

			:before {
				top: 0;
			}

			:after {
				bottom: 0;
			}
		}
	}
`
