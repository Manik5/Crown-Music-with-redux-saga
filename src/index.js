import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//  importing react router dom
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
	//  It will be wrapping the  App.js component
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	 document.getElementById('root')
);
