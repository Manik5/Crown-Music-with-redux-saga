import React from 'react';

//  importing react router dom
import { Switch, Route} from 'react-router-dom';

import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/Shop';

import './App.css';

//  importing react  router dom


class App extends React.Component {
	render() {
		return(
			<div>
				{/* Importing react router dom */}
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route path='/shop' component={ShopPage} />
				</Switch>
			</div>
		)
	};
}

export default App;
