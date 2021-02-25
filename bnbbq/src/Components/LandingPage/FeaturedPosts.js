import React from 'react';

class FeaturedPost extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			articles: [],
		};
	}

	render() {
		return (
			<div className="content">
				<div className="container">
					<div className="featuredTitle">
						<h1>Featured Posts</h1>
					</div>
				</div>
			</div>
		);
	}
}

export default FeaturedPost;
