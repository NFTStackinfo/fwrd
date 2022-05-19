import React from 'react'
import { CollectionItemStyle } from './CollectionItem.style'

function CollectionItem({ image, title, list = [], className = [''] }) {
	return (
		<CollectionItemStyle>
			<div className={['collection-item-container', ...className].join(' ')}>
				<div className="collection-item-image">
					<img src={image} alt="collection-item" />
				</div>

				<div className="collection-item-info">
					<h4 className="collection-item-title">{title}</h4>

					<ul className="collection-item-list">
						{list.map((item, idx) => (
							<li key={`cl_${idx}`}>
								<span>&#9679;</span> {item}
							</li>
						))}
					</ul>
				</div>
			</div>
		</CollectionItemStyle>
	)
}

export default CollectionItem
