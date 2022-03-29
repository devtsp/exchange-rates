const Nav = () => {
	return (
		<nav>
			<ul className="nav">
				<li className="nav-item">
					<button className="" type="button" data-cy="link-to-rates-panel">
						<span className="d-inline d-sm-none">Exchange Rates</span>
						<span className="d-none d-sm-inline">Global Exchange Rates</span>
					</button>
				</li>
				<li className="nav-item">
					<button className="" type="button" data-cy="link-to-conversion-panel">
						<span className="d-inline d-sm-none">Conversion</span>
						<span className="d-none d-sm-inline">Pair Conversion</span>
					</button>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
