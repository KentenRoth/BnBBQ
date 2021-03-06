import React from 'react';
import axios from 'axios';
import PostCard from '../PostCard';

class BBQPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: [],
		};
	}

	componentDidMount() {
		axios.get('/posts?search=barbecue').then((response) => {
			this.setState({ posts: response.data });
		});
	}

	render() {
		return (
			<div className="pageContent">
				<div className="container">
					<div className="title">
						<h1>Get Grillin'</h1>
					</div>
					<div className="bbqPosts">
						{this.state.posts.map((post) => {
							return <PostCard key={post._id} post={post} />;
						})}
					</div>
				</div>
			</div>
		);
	}
}

export default BBQPage;
