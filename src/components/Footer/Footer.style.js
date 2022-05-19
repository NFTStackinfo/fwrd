import styled from 'styled-components'

export const FooterStyle = styled.footer`
	margin-top: 224px;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 24px;

	@media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
		margin-top: 186px;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		margin-top: 144px;
	}

	> p {
		font-size: ${({ theme }) => theme.font.size.subheading2};
		font-family: ${({ theme }) => theme.font.secondary};
		margin-top: 20px;
	}
`
