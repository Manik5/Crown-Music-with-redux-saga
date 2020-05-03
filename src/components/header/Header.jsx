import React from 'react';

import { Link } from 'react-router-dom';

import { createStructuredSelector } from 'reselect';
//  Sign Out function
import { auth } from '../../firebase/firebase.utils';
// end
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';

import  { ReactComponent as Logo } from '../../assets/music.svg';
import './header.scss';

//  using redux
import { connect } from 'react-redux';

// importing styled library
import { HeaderContainer, LogoContainer, OptionContainer, OptionLink, OptionDiv} from './header.styles';

//  with hidden, we add the function of toggling the CartIcon.jsx
export const Header = ({ currentUser, hidden  }) => (
	<HeaderContainer>
		<LogoContainer to='/'>
			<Logo  className="logo"/>
		</LogoContainer>
		<OptionContainer>
			<OptionLink to="/shop" >
				SHOP
			</OptionLink>
			<OptionLink to="/contact" >
				CONTACT
			</OptionLink>
			{/* Sign Out function */}
			{
				currentUser ? (
				<OptionDiv  onClick={() => auth.signOut()}>
					SIGN OUT
				</OptionDiv>
				) : (
				<OptionLink to='/signin'>
					SIGN IN
				</OptionLink>
				)}
				<CartIcon />
		</OptionContainer>
		{
			//  implementing the toggle function from CartIcon.jsx
			hidden ? null : <CartDropdown />
		}
		</HeaderContainer>
);


// using redux
const mapStateToProps = createStructuredSelector ({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden
});

//  using redux
export default  connect(mapStateToProps)(Header);

// without redux
// export default Header;
