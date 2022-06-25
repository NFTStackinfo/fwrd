import React, { forwardRef, useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { TeamStyle } from './Team.style'
import SectionTitle from '../UIKit/SectionTitle/SectionTitle'
import TeamItem from './TeamItem/TeamItem'
import { teamList } from './teamData'
import TeamCarousel from './TeamCarousel/TeamCarousel'
import TeamItemModal from './TeamItemModal/TeamItemModal'

gsap.registerPlugin(ScrollTrigger)

const Team = forwardRef((props, ref) => {
	const teamContainerRef = useRef()
	const teamContainerGsap = gsap.utils.selector(teamContainerRef)
	const tl = useRef()

	useEffect(() => {
		const stagger = 0.2
		const ease = 'elastic.out(1, .5)'
		const duration = 1.5

		tl.current = gsap
			.timeline({
				scrollTrigger: {
					trigger: '.team__container',
					start: '30% bottom',
				},
			})
			.fromTo(
				teamContainerGsap('.team-item'),
				{
					y: 20,
					stagger,
					opacity: 0,
					ease,
					duration,
				},
				{
					y: 0,
					stagger,
					opacity: 1,
					ease,
					duration,
				}
			)
	}, [])

  const [isModalActive, setIsModalActive] = useState(false)
  const [modalMemberId, setModalMemberId] = useState(0)

  const handleReadMore = (idx) => {
    setModalMemberId(idx)
    setIsModalActive(true)
  }

  const handleModalToggle = (state) => {
    console.log('modalState : ', state)
    setIsModalActive(state)
  }

  return (
		<TeamStyle ref={ref} id="team" className="wrapper">
			<div className="container">
				<SectionTitle>OUR TEAM</SectionTitle>

				<div className="team__container" ref={teamContainerRef}>
					{teamList.map((data, idx) => (
						<TeamItem key={`${data.name}_${idx}`} {...data} onReadMore={() => handleReadMore(idx)} />
					))}
				</div>

				<TeamCarousel onReadMoreCarousel={handleReadMore}/>

        <TeamItemModal
          isActive={isModalActive}
          onModalToggle={handleModalToggle}
          {...teamList[modalMemberId]}
        />
			</div>
		</TeamStyle>
	)
})

export default Team
