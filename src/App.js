import { Routes, Route } from 'react-router-dom';

import Layout from './Layout';
import ExchangeRates from './ExchangeRates';
import PairConversion from './PairConversion';

function App() {
	return (
		<div id="app-container">
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<ExchangeRates />} />
					<Route path="pair-conversion" element={<PairConversion />} />
				</Route>
				<Route path="*" element={<h1>Missing</h1>} />
			</Routes>
		</div>
	);
}

export default App;
