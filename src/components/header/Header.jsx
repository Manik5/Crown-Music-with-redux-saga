import React from 'react';

import { Link } from 'react-router-dom';

//  Sign Out function
import { auth } from '../../firebase/firebase.utils';

import  { ReactComponent as Logo } from '../../assets/music.svg';
import './header.scss';

export const Header = ({ currentUser }) => (
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
				currentUser ?
				<div className="option" onClick={() => auth.signOut()}>
					SIGN OUT
				</div>
				:
				<Link className="option" to='/signin'>
					SIGN IN
				</Link>
			}
		</div>
	</div>
)

export default Header;
