import styled from 'styled-components'

export const TeamStyle = styled.section`
	padding-top: 128px;
	margin-top: 72px;

	@media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
		margin-top: 32px;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		margin-top: 0;
		padding-top: 120px;
	}

	.team__container {
		margin-top: 24px;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 24px;

		@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
			gap: 16px 24px;
		}

		@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
			display: none;
		}
	}

	.team-carousel {
		display: none;

		@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
			display: block;
		}
	}
`
