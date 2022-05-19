import React, { forwardRef, useEffect, useRef, useState } from 'react'
import { AboutStyle } from './About.style'
import SectionTitle from '../UIKit/SectionTitle/SectionTitle'
import { normalizeRange } from '../../utils/math'

const About = forwardRef((props, ref) => {
	const contentTextRef = useRef()
	const [loadedHeight, setLoadedHeight] = useState(0)

	const handleResize = () => {
		handleScroll()
	}

	const handleScroll = () => {
		const rect = contentTextRef.current?.getBoundingClientRect()
		if (rect) {
			const windowHeight =
				window.innerHeight || document.documentElement.clientHeight
			const topPart = (windowHeight * 2) / 3
			const loadedHeight = ~~(rect.height - rect.bottom + topPart)
			setLoadedHeight(normalizeRange(loadedHeight, 0, rect.height))
		}
	}

	useEffect(() => {
		handleResize()
		window.addEventListener('resize', handleResize)
		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('resize', handleResize)
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<AboutStyle ref={ref} id="about" className="wrapper">
			<div className="container">
				<SectionTitle>ABOUT</SectionTitle>

				<div className="content">
					<div className="bg">
						{new Array(16).fill('').map((item, idx) => (
							<div key={`line_${idx}`} />
						))}
					</div>

					<div className="content__text" ref={contentTextRef}>
						<h1>
							Lorem ipsum dolor sit amet,consectetur adipiscing elit. Phasellus
							fermentum ultrices quam nec vehicula. Sed eu sodales nunc, in
							imperdiet metus. Nunc feugiat dolor ac aliquam aliquet. Maecenas
							et facilisis lectus.
						</h1>

						<h1
							className="content__text-overlay"
							style={{ height: `${loadedHeight}px` }}
						>
							Lorem ipsum dolor sit amet,consectetur adipiscing elit. Phasellus
							fermentum ultrices quam nec vehicula. Sed eu sodales nunc, in
							imperdiet metus. Nunc feugiat dolor ac aliquam aliquet. Maecenas
							et facilisis lectus.
						</h1>
					</div>

					<img src="/assets/about/about-elemental.png" alt="ELEMENTAL" />

					<div className="border-right" />
				</div>
			</div>
		</AboutStyle>
	)
})

export default About
