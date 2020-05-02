import React from 'react';
// remove this after using redux
// import ShopData from './shopdata';
import  CollectionPreview from '../../components/collection-preview/CollectionPreview';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollections } from '../../redux/shop/shop.selector';
// USED BEFORE REDUX
// class ShopPage extends React.Component {
	// constructor () {
	// 	super ()
	// 	this.state = {
	// 		// calling it from shopdata.js
	// 		collections: ShopData,
	// 	}
	// }

	// AFTER REDUX
const ShopPage = ({ collections }) => (
	<div className="shop-page">
		{collections.map(({ id, ...otherCollectionsProps}) => (
				<CollectionPreview key={id} {...otherCollectionsProps} />
			))
		}
	</div>
);

const mapStateToProps = createStructuredSelector({
	collections: selectCollections
});

export default connect(
	mapStateToProps
) (ShopPage);
