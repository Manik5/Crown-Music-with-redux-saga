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

//  using redux
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {
	//  with redux, we can cancel the constructor,, because we are passing the state in the redux store.js

	//  without redux
	// constructor () {
	// 	super ()
	// 	this.state = {
	// 		// Log in with Google via Firebase
	// 		currentUser: null,
	// 	}
	// }

	//  Log in with Google via Firebase
	unsubscribeFromAuth = null

	//  Storing user in a database and in the state of the App, so we could use it
	componentDidMount() {
		const { setCurrentUser } = this.props;

		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userRef = await  createUserProfileDocument(userAuth);

				userRef.onSnapshot(snapShot => {
					// this.setState({ { without redux }
					//  with redux
						setCurrentUser({
							id: snapShot.id,
							...snapShot.data
						})
					// }); without redux
				});
			}
			//  with redux
			setCurrentUser(userAuth);
				// setCurrentUser({currentUser: userAuth});   ----> without redux
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return(
			<div>
				{/* without redux */}
				{/* <Header currentUser={this.state.currentUser} /> */}
				{/* with redux, we can cancel "this.state" because we set up the configuration in the Header.jsx */}
				<Header />
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

// using redux
const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user))
})

// with redux
export default connect(null, mapDispatchToProps )(App);


// without redux
// export default App;
