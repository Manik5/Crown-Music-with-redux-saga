import React from 'react';
import ShopData from './shopdata';
import  CollectionPreview from '../../components/collection-preview/CollectionPreview';

class ShopPage extends React.Component {
	constructor () {
		super ()
		this.state = {
			// calling it from shopdata.js
			collections: ShopData,
		}
	}

	render () {

		const { collections } = this.state;

		return (
			<div className="shop-page">
				{
					collections.map(({ id, ...otherCollectionsProps}) => (
						<CollectionPreview key={id} {...otherCollectionsProps} />
					))
				}
			</div>
		)
	}
}

export default ShopPage;
