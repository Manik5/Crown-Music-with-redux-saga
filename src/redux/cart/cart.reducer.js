import cartActionTypes from './cart.types';

//  function to add items in the cart
import { addItemToCart } from './cart.utils';

const INITIAL_STATE = {
	hidden: true,
	//  function to add the items in the cart
	cartItems: []
};

const cartReducer = (state= INITIAL_STATE, action) => {
	switch (action.type) {
		case cartActionTypes.TOGGLE_CART_HIDDEN:
			return {
				...state,
				hidden: !state.hidden
		}
		//  function to add the items in the cart
		case cartActionTypes.ADD_ITEM:
			return {
				...state,
				cartItems: addItemToCart(state.cartItems, action.payload)
				//  end
			}
		default:
			return state;
	}
}

export default cartReducer;
