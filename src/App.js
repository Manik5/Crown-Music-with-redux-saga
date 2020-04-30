import React from 'react';

//  importing react router dom
import { Switch, Route} from 'react-router-dom';

import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/Shop';
import Header from './components/header/Header';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/SignInAndSignUp';
//  Saving user in Firebase
import { auth } from './firebase/firebase.utils';
import './App.css';

//  importing react  router dom


class App extends React.Component {
	constructor () {
		super ()
		this.state = {
			// Saving user in Firebase
			currentUser: ""
		}
	}
	//  Saving user in Firebase
	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
			this.setState({ currentUser: user });
		})
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return(
			<div>
				<Header currentUser={this.state.currentUser} />
				{/* Importing react router dom */}
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route path='/shop' component={ShopPage} />
					<Route path='/signin' component={SignInAndSignUpPage} />
				</Switch>
			</div>
		)
	};
}

export default App;
