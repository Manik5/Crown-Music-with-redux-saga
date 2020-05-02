//  importing Redux

//  in here there is all the reducer

import { combineReducers } from 'redux';

// importing redux persist
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from  './user/user-reducer';
import cartReducer from './cart/cart.reducer';

// storing all the directory data in a reducer
import directoryReducer from './directory/directory.reducer';

// importing redux persist
const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['cart']
}

const rootReducer = combineReducers({
	user: userReducer,
	cart: cartReducer,
	directory: directoryReducer,
})

export default persistReducer(persistConfig, rootReducer)

