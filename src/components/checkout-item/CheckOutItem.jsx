import React from 'react';

// importing redux
import { connect } from 'react-redux';
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.action';

import './checkoutitem.scss';

const CheckOutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;
	return (
	<div className="checkout-item">
		<div className="image-container">
			<img src={imageUrl} alt="item"  />
		</div>
		<span className="name">{name}</span>
		<span className="quantity">
			{/* onClick to increase or decrease the quantity */}
			<div className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
				<span className="value">{quantity}</span>
			<div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
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
	clearItem: item => dispatch(clearItemFromCart(item)),
	//  function to remove the items from the cart directly on the checkout page with the arrow
	addItem: item => dispatch(addItem(item)),
	removeItem: item => dispatch(removeItem(item))
});

export default connect(
	null,
	mapDispatchToProps
)(CheckOutItem);
