import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Redux/store';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Router>
				<Routes>
					<Route path="/*" element={<App />}></Route>
				</Routes>
			</Router>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
