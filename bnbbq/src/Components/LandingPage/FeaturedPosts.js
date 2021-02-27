import React from 'react';
import PostCard from '../PostCard';

class FeaturedPost extends React.Component {
	componentDidMount() {}
	render() {
		return (
			<div className="content">
				<div className="container">
					<div className="featuredTitle">
						<h1>Featured Posts</h1>
					</div>
					<div className="featuredPosts">
						{this.props.feature.map((post) => {
							return <PostCard post={post} key={post._id} />;
						})}
					</div>
				</div>
			</div>
		);
	}
}

export default FeaturedPost;
