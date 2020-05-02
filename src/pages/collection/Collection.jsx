import React from 'react';

import CollectionItem from '../../components/collections-item/CollectionItem';

// importing redux
import { connect } from 'react-redux';
//  defining the route for each category
import { selectCollection } from '../../redux/shop/shop.selector';

import './collection.scss';

const CollectionPage = ({ collection }) => {
	console.log(collection)
	return (
		<div className="collection-page">
			<h2>COLLECTION PAGE</h2>
		</div>
	);
};

//  defining the route for each category
const mapStateToProps = (state, ownProps ) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(
	mapStateToProps
) (CollectionPage);
