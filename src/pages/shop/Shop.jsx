import React from 'react';

import CollectionsOverView from '../../components/collections-overview/CollectionsOverView';
import CollectionPage from '../collection/Collection';
//  importing rout
import { Route } from 'react-router-dom';
import  { createStructuredSelector } from 'reselect';
// importing redux
import {connect} from 'react-redux';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.action';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selector';

//  loading function
import WithSpinner from '../../components/with-spinner/WithSpinner';


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
//  loading function
	const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverView);
	const CollectionPageWithSpinner = WithSpinner(CollectionPage);

	// AFTER REDUX
class ShopPage extends React.Component {
	// fetching the data stored  in firebase
	componentDidMount() {
		const { fetchCollectionsStartAsync } = this.props ;
		fetchCollectionsStartAsync();
		//  fetching data from Api  in firebase
	// 	fetch("https://firestore.googleapis.com/v1/projects/music - db - de7c6/databases/(default)/documents/collections")
	// 	.then(response => response.json())
	// 	.then(collections => console.log(collections))
	// }
}
		// this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
		// })
	render() {
		const { match, isCollectionFetching } = this.props;

		return (
			<div className="shop-page">
				<Route
					exact path={`${match.path}`}
					//  loading function
					render={(props =>
						<CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props} />
					)}
					/>
				<Route
					path={`${match.path}/:collectionId`}
					// loading function
					render={(props =>
						<CollectionPageWithSpinner isLoading={isCollectionFetching} {...props} />
					)}
				/>
				{/*  MOVED INTO CollectionsOverview.jsx */}
				{/* {collections.map(({ id, ...otherCollectionsProps}) => (
						<CollectionPreview key={id} {...otherCollectionsProps} />
					))} */}
			</div>
		)
	}
};

const mapStateToProps = createStructuredSelector({
	isCollectionFetching: selectIsCollectionFetching
});

const mapDispatchToProps = dispatch => ({
	fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});


//  MOVED TO CollectionsOverView.jsx
// const mapStateToProps = createStructuredSelector({
// 	collections: selectCollections
// });

export default connect(
	 mapStateToProps,
	 mapDispatchToProps
) (ShopPage);

//  REMOVE IT AFTER CREATED THE CollectionsOverView.jsx
// export default connect(
// 	mapStateToProps
// ) (ShopPage);




