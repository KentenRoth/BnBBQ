import React from 'react';
import axios from 'axios';
import BeardPost from './BeardPost';
import BBQPost from './BBQPost';
import GettingPost from './GettingPost';

class Post extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			post: [],
		};
	}

	componentDidMount() {
		this.getPost();
		window.scrollTo(0, 0);
	}

	render() {
		return (
			<div className="pageContent">
				<div className="container">
					<div className="title">{this.whatTypeOfPost()}</div>
				</div>
			</div>
		);
	}

	getPost = () => {
		const queryString = window.location.pathname;
		axios
			.get(`https://bnbbq-api.herokuapp.com${queryString}`)
			.then((response) => this.setState({ post: response.data }));
	};

	whatTypeOfPost = () => {
		const post = this.state.post;
		if (post.length === 0 || post.length > 1) {
			return <GettingPost />;
		} else if (post.tags[0] === 'barbecue' || post.tags[1] === 'barbecue') {
			return <BBQPost post={post} />;
		} else {
			return <BeardPost post={post} />;
		}
	};
}

export default Post;
