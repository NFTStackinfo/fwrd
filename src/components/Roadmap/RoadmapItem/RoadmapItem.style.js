import styled from 'styled-components'

export const RoadmapItemStyle = styled.div`
	display: flex;
	gap: 40px;
	height: fit-content;

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		gap: 32px;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		gap: 24px;
	}

	&.space {
		margin-bottom: 8px;

		.content {
			padding-bottom: 40px;
		}
	}

	.progress {
		width: 24px;
		height: auto;
		//background-color: #f5f5f5;
		flex-shrink: 0;
		position: relative;

		&__circle {
			width: 24px;
			height: 24px;
			border-radius: 50%;
			background-color: ${({ theme }) => theme.colors.white};
			opacity: 0.2;
		}

		&__bar {
			height: calc(100% - 12px - 24px);
			background-color: ${({ theme }) => theme.colors.white};
			opacity: 0.2;
			border-radius: 8px;
			width: 6px;
			margin-inline: auto;
			margin-top: 12px;
		}
	}

	.content {
		height: fit-content;

		> span {
			font-family: ${({ theme }) => theme.font.secondary};
			font-size: ${({ theme }) => theme.font.size.subheading1};
			font-weight: 700;
			background: ${({ theme }) => theme.gradients.gradient2};
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
		}

		> h4 {
			margin-top: 8px;
			text-transform: uppercase;
		}

		.description {
			margin-top: 8px;
		}
	}
`
