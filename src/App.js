import './App.css';
import Loading from './components/Loading';
import Header from './components/Header';

function App() {
	return (
		<>
			<div id="app-container">
				<div className="App">
					<Loading />
					<Header />
				</div>
			</div>
		</>
	);
}

export default App;
