import React from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/original.svg';
// implementing redux
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.action'

import './carticon.scss';


const CartIcon = ({ toggleCartHidden }) => (
	<div className="cart-icon" onClick={toggleCartHidden}> {/* adding toggleCartHidden to fire  the action */}
		<ShoppingIcon className="shopping-icon" />
		<span className="item-count">0</span>
	</div>
);

//  implementing redux
const mapDispatchToProps = dispatch => ({
	toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(
	null,
	mapDispatchToProps
)
(CartIcon);
