import { createSelector } from 'reselect';

//  defining the route for each category
const COLLECTION_ID_MAP = {
	drums: 1,
	piano: 2,
	bassguitars: 3,
	violins: 4,
	guitars: 5
}

//  defining the route for each category
export const selectCollection = collectionUrlParam =>
	createSelector(
		[selectCollections],
		collections =>collections.find(
			collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
	);

const selectShop = state => state.shop;

export const selectCollections = createSelector(
	[selectShop],
	shop => shop.collections
);


