import React from 'react'
import { Icon } from '../Icons/Icon'
import styled from 'styled-components'

const SectionTitleStyle = styled.div`
	display: flex;
	gap: 8px;
	align-items: center;

	> h5 {
		text-transform: uppercase;
	}
`

function SectionTitle({ children }) {
	return (
		<SectionTitleStyle>
			<Icon name="arrow-right" />
			<h5>{children}</h5>
		</SectionTitleStyle>
	)
}

export default SectionTitle
