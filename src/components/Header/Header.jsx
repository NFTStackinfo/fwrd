import { useEffect, useState } from 'react'
import { HeaderStyle } from './Header.style'
import { Icon } from '../UIKit'
import { useLockedBody } from '../../hooks/useLockedBody'
import { navList } from './header-data'
import IconWrapper from '../UIKit/Icons/IconWrapper'

const Header = ({ onLinkClick }) => {
	const [drawerOpened, setDrawerOpened] = useState(false)
	const [locked, setLocked] = useLockedBody()

	useEffect(() => {
		if (drawerOpened) {
			document.body.classList.add('overflow-hidden')
		}
		return () => {
			document.body.classList.remove('overflow-hidden')
		}
	}, [drawerOpened])

	const handleDrawerToggle = () => {
		setDrawerOpened(!drawerOpened)
		setLocked(!locked)
	}

	const handleMenuLinkClick = to => {
		if (drawerOpened) {
			setDrawerOpened(false)
			setLocked(false)
		}
		onLinkClick(to)
	}
	return (
		<HeaderStyle className={[drawerOpened && 'open', 'wrapper'].join(' ')}>
			<div className="container">
				<div className="header-content">
					<nav className="header-nav">
						<div className="header-nav-inner">
							<ul className="header-nav-list">
								{navList.map(({ to, title }) => {
									return (
										<li key={to} onClick={() => handleMenuLinkClick(to)}>
											{title}
										</li>
									)
								})}
							</ul>
						</div>
					</nav>
					<ul className="social">
						<li>
							<IconWrapper iconName="twitter" size="lg" />
						</li>
						<li>
							<IconWrapper iconName="instagram" size="lg" />
						</li>
						<li>
							<IconWrapper iconName="discord" size="lg" />
						</li>
					</ul>
					<button
						className="hamburger"
						type="button"
						onClick={handleDrawerToggle}
					>
						<Icon name={drawerOpened ? 'close' : 'menu'} size="32px" />
					</button>
				</div>
			</div>
		</HeaderStyle>
	)
}

export default Header
