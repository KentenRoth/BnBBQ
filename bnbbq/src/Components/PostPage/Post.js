import React from 'react';
import axios from 'axios';
import BeardPost from './BeardPost';
import BBQPost from './BBQPost';

class Post extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			post: [],
		};
	}

	componentDidMount() {
		// this code block will grab the the ID from the URL
		// const queryString = window.location.search;
		// const urlParams = new URLSearchParams(queryString);
		// const search = urlParams.get('search');
		// console.log(search);
		// axios call to get specific post
	}

	render() {
		return (
			<div>
				<h1>Post Page</h1>
			</div>
		);
	}
}

export default Post;
