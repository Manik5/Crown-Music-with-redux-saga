import React from 'react';

// importing redux
import { connect } from 'react-redux';
// importing reselect
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import './checkout.scss';


const CheckOut = ({cartItems, total}) => (
	<div className="checkout-page">
		<div className="checkout-header">
			<div className="header-block">
				<span>Product</span>
			</div>
			<div className="header-block">
				<span>Description</span>
			</div>
			<div className="header-block">
				<span>Quantity</span>
			</div>
			<div className="header-block">
				<span>Price</span>
			</div>
			<div className="header-block">
				<span>Remove</span>
			</div>
		</div>
		{
			cartItems.map(cartItem =>
				cartItem.name
			)
		}
		<div className="total">
			<span>TOTAL:  ${total}</span>
		</div>
	</div>
);

// importing redux
const  mapStateProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal
});

export default connect(
	mapStateProps
)
(CheckOut);
