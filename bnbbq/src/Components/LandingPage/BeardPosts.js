import React from 'react';
import PostCard from '../PostCard';

class BeardPosts extends React.Component {
	componentDidMount() {}
	render() {
		return (
			<div className="container">
				<div className="title">
					<h1>Beard Posts</h1>
				</div>
				<div className="beardPosts">
					{this.props.beard.map((post) => {
						return <PostCard post={post} key={post._id} />;
					})}
				</div>
				<div className="largeButton">
					<button className="moreBeardButton">More Bearded</button>
				</div>
			</div>
		);
	}
}

export default BeardPosts;
