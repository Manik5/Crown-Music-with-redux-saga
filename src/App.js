import React from 'react';

//  importing react router dom
import { Switch, Route} from 'react-router-dom';

import HomePage from './pages/homepage/homepage';
import './App.css';

//  importing react  router dom

const HatsPage = () => (
	<div>
		<h1>HATS PAGE</h1>
	</div>
);

class App extends React.Component {
	render() {
		return(
			<div>
				{/* Importing react router dom */}
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route path='/hats' component={HatsPage} />
				</Switch>
			</div>
		)
	};
}

export default App;
