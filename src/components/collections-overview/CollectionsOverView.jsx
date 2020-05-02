import React from 'react';

import  CollectionPreview  from '../collection-preview/CollectionPreview';
import { selectCollections } from "../../redux/shop/shop.selector";

import './collectionoverview.scss';

//  import redux
import { connect } from  'react-redux';

// import reselect
import { createStructuredSelector } from 'reselect';

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
		{collections.map(({ id, ...otherCollectionsProps }) => (
		<CollectionPreview key={id} {...otherCollectionsProps} />
		))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(CollectionsOverview);
