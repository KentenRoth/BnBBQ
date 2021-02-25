import React from 'react';

class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			active: 'home',
		};
	}
	render() {
		return <div className="nav"></div>;
	}
}

export default NavBar;
