import Layout from './Layout';
import RatesPanel from './components/RatesPanel';
import ConversionPanel from './components/ConversionPanel';

import { Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div id="app-container">
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="rates" element={<RatesPanel />} />
					<Route path="pair-conversion" element={<ConversionPanel />} />
				</Route>
				<Route
					path="*"
					element={<h4 className="text-center pt-4">(Missing)</h4>}
				/>
			</Routes>
		</div>
	);
}

export default App;
