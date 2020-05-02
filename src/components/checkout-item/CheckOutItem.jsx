import React from 'react';

// importing redux
import { connect } from 'react-redux';
import { clearItemFromCart } from '../../redux/cart/cart.action';

import './checkoutitem.scss';

const CheckOutItem = ({ cartItem, clearItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;
	return (
	<div className="checkout-item">
		<div className="image-container">
			<img src={imageUrl} alt="item"  />
		</div>
		<span className="name">{name}</span>
		<span className="quantity">
			<div className="arrow">&#10094;</div>
				<span className="value">{quantity}</span>
			<div className="arrow">&#10095;</div>
		</span>
		<span className="price">${price}</span>
		{/* onClick to remove items from the cart */}
		<div className="remove-button" onClick={() => clearItem(cartItem)}>
			{/* using utf  */}
			&#10005;
		</div>
	</div>
)};

//  importing redux function and state to remove elements from the cart
const mapDispatchToProps = dispatch => ({
	clearItem: item => dispatch(clearItemFromCart(item))
});

export default connect(
	null,
	mapDispatchToProps
)(CheckOutItem);
