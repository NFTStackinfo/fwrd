import React from 'react'
import { TeamItemStyle } from './TeamItem.style'
import IconWrapper from '../../UIKit/Icons/IconWrapper'

function TeamItem({ name, description, socials, image }) {
	return (
		<TeamItemStyle className="team-item">
			<div className="team-item__image">
				<img src={image} alt="" />
			</div>

			<div className="team-item__info">
				<h3 className="team-item__name subheading1">{name}</h3>

				<p className="team-item__description subheading2">{description}</p>

				<div className="team_item__socials">
					{socials.map((social, index) => (
						<IconWrapper key={index} to={social.link} iconName={social.name} />
					))}
				</div>
			</div>
		</TeamItemStyle>
	)
}

export default TeamItem
