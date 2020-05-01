import React from 'react';

import CustomButton from '../custombutton/CustomButton';

import './cartdropdown.scss';


const CartDropdown = () => (
	<div className="cart-dropdown">
		<div className="cart-items">
			<CustomButton> GO TO CHECKOUT </CustomButton>
		</div>
	</div>
);

export default CartDropdown;
