import React from 'react';

import   CollectionPreview   from '../collection-preview/CollectionPreview';

	//  converting objects into array
import { selectCollectionsForPreview } from "../../redux/shop/shop.selector";

import './collectionoverview.scss';

//  import redux
import { connect } from  'react-redux';
// import reselect
import { createStructuredSelector } from 'reselect';

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
		{collections.map(({id, ...otherCollectionsProps }) => (
		<CollectionPreview key={id} {...otherCollectionsProps} />
		))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  //  converting objects into array
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
