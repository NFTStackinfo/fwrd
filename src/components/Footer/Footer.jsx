import React from 'react'
import { FooterStyle } from './Footer.style'
import { ButtonPrimary } from '../UIKit/ButtonPrimary/ButtonPrimary'

function Footer() {
	return (
		<FooterStyle>
			<ButtonPrimary
        isLink={true}
        to="https://discord.gg/elementalsnft"
      >JOIN OUR DISCORD</ButtonPrimary>

			<p>© 2022. All Rights Reserved</p>
		</FooterStyle>
	)
}

export default Footer
