import { HeroStyle } from './Hero.style'
import React, { forwardRef } from 'react'
import Fade from 'react-reveal/Fade'
import { ButtonPrimary } from '../UIKit/ButtonPrimary/ButtonPrimary'
import ConnectButton from '../ConnectButton/ConnectButton'

const Hero = forwardRef(({ loading }, ref) => {
	return (
		<HeroStyle ref={ref} className="wrapper">
			<div className="container">
				<Fade when={!loading}>
					<img src="/assets/logo/logo.svg" alt="ELEMENTALS" />

					<p>
						Lorem ipsum The message we want to spread is simple, but important
						to us and hopefully, to many more.
					</p>

          {/*<div className='mint-container'>*/}
          {/*  <ConnectButton />*/}
          {/*</div>*/}

					<div className="banner">
						<img src="/assets/hero/elementals.png" alt="" />
					</div>
				</Fade>

				<ButtonPrimary>JOIN OUR DISCORD</ButtonPrimary>
			</div>
		</HeroStyle>
	)
})

export default Hero
