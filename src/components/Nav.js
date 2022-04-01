import { NavLink } from 'react-router-dom';

const Nav = () => {
	return (
		<nav>
			<ul className="d-flex justify-content-evenly list-unstyled px-4 m-0">
				<li className="flex-fill text-center">
					<NavLink
						style={({ isActive }) => {
							return {
								display: 'inline-block',
								height: '100%',
								width: '100%',
								textDecoration: 'none',
								color: isActive ? 'rgba(93, 101, 153, 1)' : '#c4c4c4',
								borderBottom:
									'3px solid ' +
									(isActive ? 'rgba(93, 101, 153, 1)' : 'transparent'),
							};
						}}
						to="rates"
					>
						Exchange Rates
					</NavLink>
				</li>
				<li className="flex-fill text-center">
					<NavLink
						style={({ isActive }) => {
							return {
								display: 'inline-block',
								height: '100%',
								width: '100%',
								textDecoration: 'none',
								color: isActive ? 'rgba(93, 101, 153, 1)' : '#c4c4c4',
								borderBottom:
									'3px solid ' +
									(isActive ? 'rgba(93, 101, 153, 1)' : 'transparent'),
							};
						}}
						to="pair-conversion"
					>
						Conversion
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
