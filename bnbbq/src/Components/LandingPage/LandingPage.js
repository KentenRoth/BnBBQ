import React from 'react';
import Header from './Header';
import FeaturedPosts from './FeaturedPosts';

class LandingPage extends React.Component {
	componentDidMount() {
		console.log(this.props);
	}
	render() {
		return (
			<div>
				<Header />
				<FeaturedPosts />
			</div>
		);
	}
}

export default LandingPage;
