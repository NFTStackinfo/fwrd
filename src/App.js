import React, { useEffect, useRef, useState } from 'react'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Team from './components/Team/Team'
import FAQ from './components/FAQ/FAQ'
import Collection from './components/Collection/Collection'
import Roadmap from './components/Roadmap/Roadmap'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Preloader from './components/Preloader/Preloader'
import { useLockedBody } from './hooks/useLockedBody'

const scrollIntoView = require('scroll-into-view')

function App(props) {
	const [loading, setLoading] = useState(true)
	const [, setLocked] = useLockedBody(true)

	const [scrollTo, setScrollTo] = useState(null)
	const aboutRef = useRef(null)
	const collectionRef = useRef(null)
	const roadmapRef = useRef(null)
	const teamRef = useRef(null)
	const faqRef = useRef(null)

	useEffect(() => {
		window.history.scrollRestoration = 'manual'
	}, [])

	const refMapping = {
		'#about': aboutRef,
		'#collection': collectionRef,
		'#roadmap': roadmapRef,
		'#team': teamRef,
		'#faq': faqRef,
	}

	useEffect(() => {
		if (scrollTo) {
			scrollIntoView(refMapping[scrollTo]?.current, {
				align: {
					top: 0,
				},
			})
			setScrollTo(false)
		}
	}, [scrollTo])

	const handleLinkClick = to => {
		setScrollTo(to)
		setLocked(false)
	}

	const handleLoad = () => {
		setLoading(false)
		setLocked(false)
	}

	return (
		<>
			<Preloader onLoad={handleLoad} />

			<Header onLinkClick={handleLinkClick}/>
			<Hero loading={loading}/>
			<About ref={aboutRef} />
			<Collection ref={collectionRef} />
			<Roadmap ref={roadmapRef} />
			<Team ref={teamRef} />
			<FAQ ref={faqRef} />
			<Footer />
		</>
	)
}

export default App
