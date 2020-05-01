import React from 'react';

import './custombutton.scss';

//  children is the "Sign In" between the CustomButton component in SignIn.jsx
//  inverted is the props to change the color
const CustomButton = ({ children,  isGoogleSignIn, inverted, ...otherProps }) => (
	<button
		className= { `${inverted  ? 'inverted' :  ' '} ${
			isGoogleSignIn  ?  'google-sign-in' :  ' '
			} custom-button` }
			{...otherProps}
		>
		{children}
	</button>
);

export default CustomButton;
