import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './Redux/store';
import Layout from './Layout';
import ExchangeRates from './components/ExchangeRates';
import PairConversion from './components/PairConversion';

function App() {
	return (
		<div id="app-container">
			<Provider store={store}>
				<Router>
					<Routes>
						<Route path="/" element={<Layout />}>
							<Route index element={<ExchangeRates />} />
							<Route path="pair-conversion" element={<PairConversion />} />
						</Route>
						<Route path="*" element={<h1>Missing</h1>} />
					</Routes>
				</Router>
			</Provider>
		</div>
	);
}

export default App;
