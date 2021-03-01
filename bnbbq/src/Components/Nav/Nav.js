import React from 'react';
import Burger from './Burger';

class NavBar extends React.Component {
	render() {
		return (
			<div className="nav">
				<div className="navLogo">
					<img
						src={`${process.env.PUBLIC_URL}/assets/images/logo.png`}
						alt="logo"
					/>
				</div>
				<Burger />
			</div>
		);
	}
}

export default NavBar;
