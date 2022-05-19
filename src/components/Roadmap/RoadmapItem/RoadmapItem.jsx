import React from 'react'
import Fade from 'react-reveal/Fade'
import { RoadmapItemStyle } from './RoadmapItem.style'

function RoadmapItem({ step, title, content, space = true }) {
	return (
		<RoadmapItemStyle className={space && 'space'}>
			<div className="progress">
				<div className="progress__circle" />
				<div className="progress__bar" />
			</div>

			<Fade bottom duration={1000} distance="25%">
				<div className="content">
					<span>{step}</span>

					<h4>{title}</h4>

					<div className="description">{content}</div>
				</div>
			</Fade>
		</RoadmapItemStyle>
	)
}

export default RoadmapItem
