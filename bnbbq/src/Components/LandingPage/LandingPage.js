import React from 'react';
import Header from './Header';
import FeaturedPosts from './FeaturedPosts';
import BeardPosts from './BeardPosts';
import BBQPosts from './BBQPosts';
import Ad from '../Ad/Ad';

class LandingPage extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<FeaturedPosts feature={this.props.feature} />
				<BeardPosts beard={this.props.beard} />
				<Ad />
				<BBQPosts bbq={this.props.bbq} />
			</div>
		);
	}
}

export default LandingPage;
