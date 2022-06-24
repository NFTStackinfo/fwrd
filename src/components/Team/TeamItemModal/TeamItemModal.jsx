import React, { useEffect, useState } from 'react'
import IconWrapper from '../../UIKit/Icons/IconWrapper'
import { useLockedBody } from '../../../hooks/useLockedBody'
import { TeamItemModalStyle } from './TeamItemModal.style'

function TeamItem({ name, description, socials, image, about, isActive, onModalToggle }) {
  const [locked, setLocked] = useLockedBody()
  const [isModalActive, setIsModalActive] = useState(false)

  const toggleModal = () => {
    onModalToggle(!isModalActive)
    setLocked(() => !locked)
    setIsModalActive(() => !isModalActive)
  }

  const handleClose = e => {
    e.stopPropagation()
    if (e.target.dataset.overlay) {
      toggleModal()
    }
  }

  useEffect(() => {
    setLocked(() => isActive)
    setIsModalActive(() => isActive)
  }, [isActive])


  return (

    <TeamItemModalStyle
      className={['team-item-modal', isModalActive ? 'active' : ''].join(' ')}
      data-overlay onClick={handleClose}>
      <div className='container-sm'>
        <div className='content'>
          <div className='modal-header'>
            <IconWrapper iconName='close' onClick={toggleModal} size='md'
                         className='modal-header__btn-close
                           ' />
          </div>

          <div className='modal-body'>
            <div className='modal-body__about'>
              <div className='modal-body__image'>
                <img src={image} alt={name} />
              </div>

              <div className='modal-body__info'>
                <h3 className='modal-body__name subheading1'>{name}</h3>

                <p
                  className='modal-body__description subheading2'>{description}</p>

                <div className='modal-body__socials'>
                  {socials.map((social, index) => (
                    <IconWrapper key={index} to={social.link}
                                 iconName={social.name} />
                  ))}
                </div>
              </div>
            </div>

            <div className='modal-body__text'>
              {about.map((text, idx) => (
                <p>{text}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </TeamItemModalStyle>
  )
}

export default TeamItem
