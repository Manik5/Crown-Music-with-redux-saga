import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//  importing react router dom
import { BrowserRouter } from 'react-router-dom';

// importing redux persist

import { PersistGate } from 'redux-persist/integration/react';
//  importing Redux
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';


ReactDOM.render(
	//  importing Redux by wrapping all in Provider
	<Provider store={store}>
		<BrowserRouter>
		{/* importing redux-persist */}
			<PersistGate persistor={persistor}>
					<App />
			</PersistGate>
		</BrowserRouter>
	</Provider>,
	//  It will be wrapping the  App.js component
	 document.getElementById('root')
);
