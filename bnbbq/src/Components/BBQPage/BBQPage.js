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
			<div className="title">
				<h1>Get Grillin'</h1>
			</div>
		);
	}
}

export default BBQPage;
