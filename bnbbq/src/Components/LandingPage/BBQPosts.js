import React from 'react';
import PostCard from '../PostCard';
import { Link } from 'react-router-dom';

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
					<Link to="/bbqPage">
						<button className="moreQButton">More Q</button>
					</Link>
				</div>
			</div>
		);
	}
}

export default BBQPosts;
