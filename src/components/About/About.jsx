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
    <AboutStyle ref={ref} id='about' className='wrapper'>
      <div className='container'>
        <SectionTitle>ABOUT</SectionTitle>

        <div className='content'>
          <div className='bg'>
            {new Array(16).fill('').map((item, idx) => (
              <div key={`line_${idx}`} />
            ))}
          </div>

          <div className='content__text' ref={contentTextRef}>
            <h1>
              We are rebuilding our world on three essential nutrients vital to
              human flourishing: Inspiration, Transformation and Connection. The
              Elementals will guide you to a world where we have it all by
              taking care of ourselves first. A place where your worries are
              left behind, taking a time out is the point, and getting in the
              flow is a snap.
            </h1>

            <h1
              className='content__text-overlay'
              style={{ height: `${loadedHeight}px` }}
            >
              We are rebuilding our world on three essential nutrients vital to
              human flourishing: Inspiration, Transformation and Connection. The
              Elementals will guide you to a world where we have it all by
              taking care of ourselves first. A place where your worries are
              left behind, taking a time out is the point, and getting in the
              flow is a snap.
            </h1>
          </div>

          <img src='/assets/about/about-elemental.png' alt='ELEMENTAL' />

          <div className='border-right' />
        </div>
      </div>
    </AboutStyle>
  )
})

export default About
