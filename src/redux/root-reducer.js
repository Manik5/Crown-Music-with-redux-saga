//  importing Redux

//  in here there is all the reducer

import { combineReducers } from 'redux';

// importing redux persist
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from  './user/user-reducer';
import cartReducer from './cart/cart.reducer';

// importing redux persist
const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['cart']
}

const rootReducer = combineReducers({
	user: userReducer,
	cart: cartReducer
})

export default persistReducer(persistConfig, rootReducer)

