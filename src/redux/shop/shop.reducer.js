

//  COMMENTED THIS BECAUSE WE STORED THESE DATA IN FIREBASE
// import ShopData from './shopdata';

import ShopActionTypes from './shop.types';
// import Shop from '../../pages/shop/Shop';

//  the INITIAL_STATE, BEFORE STORING THE DATA IN FIREBASE WAS ---> ShopData

const INITIAL_STATE = {
	collections: null,
	isFetching: false,
	errorMessage: undefined
};


const shopReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ShopActionTypes.FETCH_COLLECTIONS_START:
			return {
				...state,
				isFetching: true
			}
		case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
			return {
				...state,
				isFetching: false,
				collections: action.payload
			}
		case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
			return {
				...state,
				isFetching: false,
				errorMessage: action.payload
			}
		default:
			return state;
	}
};

export default shopReducer;
