//fetching data stored data from firebase

import ShopActionTypes from './shop.types';

export const updateCollections = (collectionsMap) => ({
	type: ShopActionTypes.UPDATE_COLLECTIONS,
	payload: collectionsMap
});

