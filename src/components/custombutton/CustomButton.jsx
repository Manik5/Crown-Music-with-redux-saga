import React from 'react';

import './custombutton.scss';

//  children is the "Sign In" between the CustomButton component in SignIn.jsx
const CustomButton = ({ children, ...otherProps}) => (
	<button className="custom-button" {...otherProps}>
		{children}
	</button>
);

export default CustomButton;
