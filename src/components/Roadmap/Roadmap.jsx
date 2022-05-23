import React, { forwardRef } from 'react'
import { RoadmapStyle } from './Roadmap.style'
import RoadmapItem from './RoadmapItem/RoadmapItem'
import { roadmapData } from './roadmapData'

const Roadmap = forwardRef((props, ref) => {
	return (
		<RoadmapStyle ref={ref} id="roadmap" className="wrapper">
			<div className="container">
				<h2 className="h1">ROADMAP</h2>

				<div className="roadmap-body">
					{roadmapData.map((item, index) => (
						<RoadmapItem
							key={`roadmap-item-${index}`}
							{...item}
              className={`roadmap-item-${index+1}`}
							space={index !== roadmapData.length - 1}
						/>
					))}
				</div>
			</div>
		</RoadmapStyle>
	)
})

export default Roadmap
