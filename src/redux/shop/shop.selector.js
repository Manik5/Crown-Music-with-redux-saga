import { createSelector } from 'reselect';


const selectShop = state => state.shop;

export const selectCollections = createSelector(
	[selectShop],
	shop => shop.collections
	);

	//  converting objects into array
	export const selectCollectionsForPreview = createSelector(
		[selectCollections],
		collections => collections ?  Object.keys(collections).map(key => collections[key])
		:
		[]
	);

	//  defining the route for each category
	export const selectCollection = collectionUrlParam =>
		createSelector(
			[selectCollections],
			collections => (collections ? collections[collectionUrlParam] : null)
	);

