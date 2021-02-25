import React from 'react';
import Header from './Header';
import FeaturedPosts from './FeaturedPosts';

class LandingPage extends React.Component {
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
