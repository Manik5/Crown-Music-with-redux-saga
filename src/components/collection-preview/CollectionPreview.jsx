import React from 'react';

import CollectionItem  from '../collections-item/CollectionItem';

import './collectionpreview.scss';

export const CollectionPreview = ({ title, items }) => (
	<div className="collection-preview">
		<h1 className="title">{title.toUpperCase()}</h1>
		<div className="preview">
			{items
				.filter((item, index) => index < 4)
				//  without redux
				// .map(({ id, ...otherItemProps}) => (
					// props rendered fin CollectionItem.jsx
					// <CollectionItem  key={id} {...otherItemProps} />
					// with redux
					.map(( item) => (
						<CollectionItem key={item.id} item={item} />
				))}
		</div>
	</div>
);

export default CollectionPreview;
