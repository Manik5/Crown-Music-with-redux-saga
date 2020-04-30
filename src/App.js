import React from 'react';

//  importing react router dom
import { Switch, Route} from 'react-router-dom';

import HomePage from './pages/homepage/homepage';
import './App.css';

//  importing react  router dom

const DrumsPage = () => (
	<div>
		<h1>DRUMS</h1>
	</div>
);

class App extends React.Component {
	render() {
		return(
			<div>
				{/* Importing react router dom */}
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route path='/drums' component={DrumsPage} />
				</Switch>
			</div>
		)
	};
}

export default App;
