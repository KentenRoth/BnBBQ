import React from 'react';
import Header from './Header';
import FeaturedPosts from './FeaturedPosts';

class LandingPage extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<FeaturedPosts feature={this.props.feature} />
			</div>
		);
	}
}

export default LandingPage;
