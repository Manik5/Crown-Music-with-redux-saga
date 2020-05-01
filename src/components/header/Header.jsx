import React from 'react';

import { Link } from 'react-router-dom';

//  Sign Out function
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';

import  { ReactComponent as Logo } from '../../assets/music.svg';
import './header.scss';

//  using redux
import { connect } from 'react-redux';

//  with hidden, we add the function of toggling the CartIcon.jsx
export const Header = ({ currentUser, hidden  }) => (
	<div className="header">
		<Link className="logo-container" to="/">
			<Logo  className="logo"/>
		</Link>
		<div className="options">
			<Link className="option" to="/shop" >
				SHOP
			</Link>
			<Link className="option" to="/contact" >
				CONTACT
			</Link>
			{/* Sign Out function */}
			{
				currentUser ? (
				<div className="option" onClick={() => auth.signOut()}>
					SIGN OUT
				</div>
				) : (
				<Link className="option" to='/signin'>
					SIGN IN
				</Link>
				)}
				<CartIcon />
		</div>
		{
			//  implementing the toggle function from CartIcon.jsx
			hidden ? null : <CartDropdown />
		}
	</div>
);

// using redux
const mapStateToProps = ({user: { currentUser}, cart: { hidden } })=> ({
	currentUser,
	hidden
});

//  using redux
export default  connect(mapStateToProps)(Header);

// without redux
// export default Header;
