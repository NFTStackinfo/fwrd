import React, { forwardRef, useEffect, useRef } from 'react'
import { CollectionStyle } from './Collection.style'
import { Button } from '../UIKit'
import CollectionItem from './CollectionItem/CollectionItem'
import { collectionList } from './collectionData'
import { gsap } from 'gsap'

const Collection = forwardRef((props, ref) => {
  const collectionItemsRef = useRef()
  const collectionItemsGsap = gsap.utils.selector(collectionItemsRef)
  const tl = useRef()

  useEffect(() => {
    createAnimation()
  }, [])

  function createAnimation() {
    const windowWidth = window.innerWidth

    tl.current = gsap.timeline({
      scrollTrigger: {
        trigger: '.collection__items',
        start: '30% bottom',
      },
    })

    const ease = 'elastic.out(1, .5)'
    const duration = 2
    const delay = duration - 0.2
    const animation = [
      {
        y: 20,
        opacity: 0,
        ease,
        duration,
      },
      {
        y: 0,
        opacity: 1,
        ease,
        duration,
      },
    ]
    const itemsClasses =
      windowWidth >= 768
        ? [
          '.collection-item-1-1',
          '.collection-item-2-1',
          '.collection-item-3-1',
          '.collection-item-1-2',
          '.collection-item-2-2',
          '.collection-item-3-2',
        ]
        : [
          '.collection-item-1-1',
          '.collection-item-1-2',
          '.collection-item-2-1',
          '.collection-item-2-2',
          '.collection-item-3-1',
          '.collection-item-3-2',
        ]

    itemsClasses.forEach(itemClass => {
      tl.current.fromTo(
        collectionItemsGsap(itemClass),
        ...animation,
        `-=${delay}`,
      )
    })
  }

  return (
    <CollectionStyle ref={ref} id='collection' className='wrapper'>
      <div className='container'>
        <h3 className='subheading2'>JOIN THE COMMUNITY</h3>

        <h5>
          The Elementals live in The Social Spa - a space to take a breath, move
          your body, and shake it all off. A community to share what you’ve
          built, what you love, and to explore new ways to be better.
        </h5>

        <div className='socials'>
          <Button
            isLink={true}
            to='https://discord.gg/elementalsnft'
          >DISCORD</Button>

          <Button
            isLink={true}
            to='https://twitter.com/weareelementals'
          >TWITTER</Button>
        </div>

        <div className='collection__items' ref={collectionItemsRef}>
          <div className='border-top' />

          {collectionList.map((col, cIdx) => (
            <div
              className={['col', `col-${cIdx + 1}`].join(' ')}
              key={`com-col-${cIdx}`}
            >
              <div className='bg'>
                {new Array(2).fill('').map((item, iIdx) => (
                  <div
                    key={`line_${iIdx}`}
                    className={`line-${cIdx + 1}-${iIdx + 1}`}
                  />
                ))}
              </div>

              {col.map((item, iIdx) => (
                <CollectionItem
                  key={`com_col_item_${iIdx}`}
                  className={[`collection-item-${cIdx + 1}-${iIdx + 1}`]}
                  {...item}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </CollectionStyle>
  )
})

export default Collection
