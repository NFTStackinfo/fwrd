import React, { forwardRef, useState } from 'react'
import { FAQStyle } from './FAQ.style'
import Collapsible from 'react-collapsible'
import Fade from 'react-reveal/Fade'
import data from './dataFAQ'
import SectionTitle from '../UIKit/SectionTitle/SectionTitle'

const FAQ = forwardRef((props, ref) => {
	const [openPosition, setOpenPosition] = useState(null)

	const handleTriggerClick = position => {
		if (openPosition === position) {
			setOpenPosition(null)
		} else {
			setOpenPosition(position)
		}
	}
	return (
		<FAQStyle ref={ref} id="faq" className="wrapper">
			<div className="container">
				<SectionTitle>OUR FAQS</SectionTitle>

				<div className="faqs-container">
					<div className="bg">
						{new Array(8).fill('').map((item, idx) => (
							<div key={`line_${idx}`} />
						))}
					</div>

					<div className="border-top" />

					<img src="/assets/faqs/faqs-elemental.png" alt="ELEMENTAL" />

					<div className="questions">
						{data.map((q, i) => {
							return (
								<Collapsible
									key={'Collapsible' + i}
									handleTriggerClick={handleTriggerClick}
									transitionTime={400}
									accordionPosition={i}
									open={openPosition === i}
									trigger={
										<Fade
											triggerOnce
											cascade
											bottom
											fraction={0.8}
											duration={600}
										>
											<div className="trigger-inner">
												<h3 className="subheading1">{q.question}</h3>
											</div>
										</Fade>
									}
								>
									<p>{q.answer}</p>
								</Collapsible>
							)
						})}
					</div>

					<div className="border-bottom" />
				</div>
			</div>
		</FAQStyle>
	)
})

export default FAQ
