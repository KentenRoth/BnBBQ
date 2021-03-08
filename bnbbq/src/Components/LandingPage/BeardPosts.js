import React from 'react';
import PostCard from '../PostCard';
import { Link } from 'react-router-dom';

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
					<Link to="/beardPage">
						<button className="moreBeardButton">
							More Bearded
						</button>
					</Link>
				</div>
			</div>
		);
	}
}

export default BeardPosts;
