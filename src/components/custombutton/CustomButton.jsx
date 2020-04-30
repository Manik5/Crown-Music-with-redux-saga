import React from 'react';

import './custombutton.scss';

//  children is the "Sign In" between the CustomButton component in SignIn.jsx
const CustomButton = ({ children,  isGoogleSignIn, ...otherProps }) => (
	<button
		className= {`${isGoogleSignIn ?  'google-sign-in' : ' '} custom-button` }
		{...otherProps}
		>
		{children}
	</button>
);

export default CustomButton;
