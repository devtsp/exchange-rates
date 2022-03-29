import Loading from './Loading';
import Header from './Header';
import Nav from './Nav';
import Error from './Error';

import { Outlet } from 'react-router-dom';

const Layout = () => {
	return (
		<div className="App">
			<Loading />
			<Header />
			<Nav />
			<Error />
			<Outlet />
		</div>
	);
};

export default Layout;
