import axios from 'axios';
import React from 'react';
import PostCard from '../PostCard';

class BeardPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: [],
		};
	}

	componentDidMount() {
		axios.get('/posts?search=beard').then((response) => {
			return this.setState({ posts: response.data });
		});
	}

	render() {
		return (
			<div className="pageContent">
				<div className="container">
					<div className="title">
						<h1>Get Bearded!</h1>
					</div>
					<div className="beardPosts">
						{this.state.posts.map((post) => {
							return <PostCard key={post._id} post={post} />;
						})}
					</div>
				</div>
			</div>
		);
	}
}

export default BeardPage;
