import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './Redux/store';

import Loading from './util/Loading';
import Header from './components/Header';
import Nav from './components/Nav';
import Error from './components/Error';
import RatesPanel from './pages/RatesPanel';
import ConversionPanel from './pages/ConversionPanel';

function App() {
	return (
		<div id="App" className="d-flex flex-column">
			<Provider store={store}>
				<Loading />
				<Router>
					<Header />
					<Nav />
					<Error />
					<Routes>
						<Route path="/" element={<RatesPanel />} />
						<Route path="pair-conversion" element={<ConversionPanel />} />
						<Route
							path="*"
							element={<h4 className="text-center pt-4">(Missing)</h4>}
						/>
					</Routes>
				</Router>
			</Provider>
		</div>
	);
}

export default App;
