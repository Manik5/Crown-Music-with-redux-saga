

//  COMMENTED THIS BECAUSE WE STORED THESE DATA IN FIREBASE
// import ShopData from './shopdata';

import ShopActionTypes from './shop.types';

//  the INITIAL_STATE, BEFORE STORING THE DATA IN FIREBASE WAS ---> ShopData

const INITIAL_STATE = {
	collections: null
};


const shopReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ShopActionTypes.UPDATE_COLLECTIONS:
			return {
				...state,
				collections: action.payload
			}
		default:
			return state;
	}
};

export default shopReducer;
