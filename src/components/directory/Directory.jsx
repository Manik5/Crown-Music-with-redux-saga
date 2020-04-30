import React from 'react';

import MenuItem from '../menu-item/MenuItem';

import './directory.scss';

class Directory extends React.Component {
	constructor() {
		super()
		this.state = {
			sections: [
				 {
					title: 'HATS',
					imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
					id: 1,
					linkUrl: 'shop/hats'
				},
				{
					title: 'JACKETS',
					imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
					id: 2,
					linkUrl: 'shop/jackets'
				},
				{
					title: 'SNEAKERS',
					imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
					id: 3,
					linkUrl: 'shop/sneakers'
				},
				{
					title: 'WOMENS',
					imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
					size: 'large',
					id: 4,
					linkUrl: 'shop/womens'
				},
				{
					title: 'MENS',
					imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
					size: 'large',
					id: 5,
					linkUrl: 'shop/mens'
				}
			]
		}
	}
	render () {
		return (
			<div className="directory-menu">
				{
					//  Deconstruct the props
					//  an use map on the sections so it will return a new array iterating over each elements in the sections state
					this.state.sections.map(({ id,  title, imageUrl,  size }) => (
						<MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
					))
				}
			</div>
		)
	};
}

export default Directory;

//  It is a Class components because it holds the state of the menu  items and the props of menu items
//  Directory will render the MenuItem,jsx
