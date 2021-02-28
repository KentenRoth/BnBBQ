import React from 'react';
import Header from './Header';
import FeaturedPosts from './FeaturedPosts';
import BeardPosts from './BeardPosts';
import BBQPosts from './BBQPosts';

class LandingPage extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<FeaturedPosts feature={this.props.feature} />
				<BeardPosts beard={this.props.beard} />
				<BBQPosts bbq={this.props.bbq} />
			</div>
		);
	}
}

export default LandingPage;
