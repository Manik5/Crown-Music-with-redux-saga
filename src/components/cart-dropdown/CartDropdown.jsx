import React from 'react';

//  using redux
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';


import CustomButton from '../custombutton/CustomButton';
import CartItem from '../cart-item/CartItem';

// importing the reusable state from cart.selector.js
import { selectCartItems } from '../../redux/cart/cart.selectors';

import './cartdropdown.scss';


const CartDropdown = ({ cartItems }) => (
	<div className="cart-dropdown">
		<div className="cart-items">
			{
				cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />
				)
			}
		</div>
			<CustomButton> GO TO CHECKOUT </CustomButton>
	</div>
);

// using redux

const mapStateToProps = createStructuredSelector ({
	cartItems: selectCartItems
});

// with redux
export default connect(
	mapStateToProps
)(CartDropdown);

// without redux
// export default  CartDropdown;
