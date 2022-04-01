import Loading from './components/Loading';
import Header from './components/Header';
import Nav from './components/Nav';
import Error from './components/Error';

import { Outlet } from 'react-router-dom';

const Layout = () => {
	return (
		<>
			<Loading />
			<div id="app">
				<Header />
				<Nav />
				<Error />
				<Outlet />
			</div>
		</>
	);
};

export default Layout;
