import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//  importing react router dom
import { BrowserRouter } from 'react-router-dom';

//  importing Redux
import { Provider } from 'react-redux';
import store from './redux/store';


ReactDOM.render(
	//  importing Redux by wrapping all in Provider
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	//  It will be wrapping the  App.js component
	 document.getElementById('root')
);
