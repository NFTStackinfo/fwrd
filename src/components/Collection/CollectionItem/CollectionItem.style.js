import styled from 'styled-components'

export const CollectionItemStyle = styled.div`
	max-width: 308px;

	.collection-item-image {
		img {
			max-width: 100%;
			border-radius: 15px;
			-webkit-box-shadow: 0px 0px 40px 24px rgba(255, 255, 255, 0.15);
			-moz-box-shadow: 0px 0px 40px 24px rgba(255, 255, 255, 0.15);
			box-shadow: 0px 0px 40px 24px rgba(255, 255, 255, 0.15);
		}
	}

	.collection-item-info {
		text-align: left;

		> h4 {
			margin-top: 16px;
			font-size: ${({ theme }) => theme.font.size.subheading1};
		}

		> ul {
			font-size: 14px;
			line-height: 20px;
			margin-top: 4px;
		}
	}
`
