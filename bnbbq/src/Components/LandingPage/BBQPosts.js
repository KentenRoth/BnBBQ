import React from 'react';
import PostCard from '../PostCard';

class BBQPosts extends React.Component {
	componentDidMount() {}
	render() {
		return (
			<div className="container bbqContainer">
				<div className="title">
					<h1>Barbeque Posts</h1>
				</div>
				<div className="bbqPosts">
					{this.props.bbq.map((post) => {
						return <PostCard post={post} key={post._id} />;
					})}
				</div>
				<div className="largeButton">
					<button className="moreQButton">More Q</button>
				</div>
			</div>
		);
	}
}

export default BBQPosts;
