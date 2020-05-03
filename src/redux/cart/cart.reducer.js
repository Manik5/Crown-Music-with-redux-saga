import cartActionTypes from './cart.types';

//  function to add items in the cart
import { addItemToCart, removeItemFromCart } from './cart.utils';
// import { clearItemFromCart } from './cart.action';

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
			//  function to remove the items from the cart
		case cartActionTypes.CLEAR_ITEM_FROM_CART:
			return {
				...state,
				cartItems: state.cartItems.filter(
					cartItem => cartItem.id !== action.payload.id
				)
				// end
			}
			// function to remove items directly from the checkout page with the arrow
		case cartActionTypes.REMOVE_ITEM:
			return {
				...state,
				cartItems: removeItemFromCart(state.cartItems, action.payload)
			}
		default:
			return state;
	}
}

export default cartReducer;
