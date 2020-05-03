import React from 'react';

import CollectionsOverView from '../../components/collections-overview/CollectionsOverView';
import CollectionPage from '../collection/Collection';
//  importing rout
import { Route } from 'react-router-dom';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

// remove this after using redux
// import ShopData from './shopdata';
//  MOVED THESE 3 INTO CollectionsOverview.jsx
		// import  CollectionPreview from '../../components/collection-preview/CollectionPreview';
		// import { connect } from 'react-redux';
		// import { createStructuredSelector } from 'reselect';
//  end

//  MOVED INTO CollectionsOverView.jsx
		// import { selectCollections } from '../../redux/shop/shop.selector';
// end

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
class ShopPage extends React.Component {
	unsubscribeFromSnapshot = null;

	componentDidMount() {
		const collectionRef = firestore.collection("collections");
		collectionRef.onSnapshot(async snapshot => {
			convertCollectionsSnapshotToMap(snapshot)
		});
	}

	render() {
		const { match} = this.props
		return (
			<div className="shop-page">
				<Route exact path={`${match.path}`} component={CollectionsOverView} />
				<Route path={`${match.path}/:collectionId`} component={CollectionPage} />
				{/*  MOVED INTO CollectionsOverview.jsx */}
				{/* {collections.map(({ id, ...otherCollectionsProps}) => (
						<CollectionPreview key={id} {...otherCollectionsProps} />
					))} */}
			</div>
		)
	}
}


//  MOVED TO CollectionsOverView.jsx
// const mapStateToProps = createStructuredSelector({
// 	collections: selectCollections
// });

export default ShopPage;

//  REMOVE IT AFTER CREATED THE CollectionsOverView.jsx
// export default connect(
// 	mapStateToProps
// ) (ShopPage);
