
import  cartActionTypes from './cart.types';

export const toggleCartHidden = ()  => ({
	type: cartActionTypes.TOGGLE_CART_HIDDEN,
});

//  function to add the items in the cart
export const addItem = item => ({
	type: cartActionTypes.ADD_ITEM,
	payload: item
});

//  end
