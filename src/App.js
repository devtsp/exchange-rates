import { Routes, Route } from 'react-router-dom';

import Layout from './Layout';
import ExchangeRates from './ExchangeRates';

function App() {
	return (
		<div id="app-container">
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index path="exchange-rates" element={<ExchangeRates />} />
				</Route>
				<Route path="*" element={<h1>Missing</h1>} />
			</Routes>
		</div>
	);
}

export default App;
