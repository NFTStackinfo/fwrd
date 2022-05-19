import { TeamCarouselStyle } from './TeamCarousel.style'
import { Carousel } from '../../UIKit'
import React, { useMemo } from 'react'
import teamList from '../teamData'
import TeamItem from '../TeamItem/TeamItem'

function TeamCarousel() {
	const settings = useMemo(() => {
		return {
			dots: true,
			infinite: true,
			arrows: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			pauseOnHover: false,
			speed: 500,
			autoplaySpeed: 1000,
		}
	}, [])

	return (
		<TeamCarouselStyle className="team-carousel">
			<Carousel settings={settings}>
				{teamList.map((data, idx) => (
					<TeamItem key={`${data.name}_${idx}`} {...data} />
				))}
			</Carousel>
		</TeamCarouselStyle>
	)
}

export default TeamCarousel
