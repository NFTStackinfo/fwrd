import React, { useEffect, useState } from 'react'
import { TeamItemStyle } from './TeamItem.style'
import IconWrapper from '../../UIKit/Icons/IconWrapper'
import { Button, Icon } from '../../UIKit'

function TeamItem({ name, description, socials, image, onReadMore }) {
  useEffect(() => {
    console.log('onReadMore : ', onReadMore)
  }, [])

  return (
    <TeamItemStyle className='team-item'>
      <div className='team-item__image'>
        <img src={image} alt={name} />
      </div>

      <div className='team-item__info'>
        <h3 className='team-item__name subheading1'>{name}</h3>

        <p className='team-item__description subheading2'>{description}</p>

        <div className='team-item__socials'>
          {socials.map((social, index) => (
            <IconWrapper key={index} to={social.link}
                         iconName={social.name} />
          ))}
        </div>

        <button
          className='team-item__btn-read-more subheading1j'
          onClick={() => onReadMore()}
        >
          Read More <Icon name='arrow-right' />
        </button>
      </div>
    </TeamItemStyle>
  )
}

export default TeamItem
