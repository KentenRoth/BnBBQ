import React from 'react';
import Burger from './Burger';

import { Link } from 'react-router-dom';

class NavBar extends React.Component {
	render() {
		return (
			<div className="nav">
				<div className="navLogo">
					<Link to="/">
						<img
							src={`${process.env.PUBLIC_URL}/assets/images/logo.png`}
							alt="logo"
						/>
					</Link>
				</div>
				<Burger />
			</div>
		);
	}
}

export default NavBar;
