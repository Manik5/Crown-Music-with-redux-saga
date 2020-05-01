import React from 'react';

//  importing react router dom
import { Switch, Route} from 'react-router-dom';

import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/Shop';
import Header from './components/header/Header';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/SignInAndSignUp';
//  Log in with Google via Firebase
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import './App.css';

//  importing react  router dom


class App extends React.Component {
	constructor () {
		super ()
		this.state = {
			// Log in with Google via Firebase
			currentUser: null,
		}
	}
	//  Log in with Google via Firebase
	unsubscribeFromAuth = null

	//  Storing user in a database and in the state of the App, so we could use it
	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userRef = await  createUserProfileDocument(userAuth);

				userRef.onSnapshot(snapShot => {
					this.setState({
						currentUser: {
							id: snapShot.id,
							...snapShot.data
						}
					});
				});
			}
				this.setState({currentUser: userAuth});
		});
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
