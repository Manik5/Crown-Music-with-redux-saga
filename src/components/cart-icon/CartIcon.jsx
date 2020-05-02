import React from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/original.svg';
// implementing redux
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.action';

//  importing reusable cart state from cart.selector.,js
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import './carticon.scss';


const CartIcon = ({ toggleCartHidden, itemCount }) => (
	<div className="cart-icon" onClick={toggleCartHidden}> {/* adding toggleCartHidden to fire  the action */}
		<ShoppingIcon className="shopping-icon" />
		<span className="item-count">{ itemCount }</span>
	</div>
);

//  implementing redux
const mapDispatchToProps = dispatch => ({
	toggleCartHidden: () => dispatch(toggleCartHidden())
});


//  updating the number of the elements added in the icon
const mapStateToProps = state => ({
	itemCount: selectCartItemsCount(state)
});


export default connect(
	mapStateToProps,
	mapDispatchToProps
)
(CartIcon);
