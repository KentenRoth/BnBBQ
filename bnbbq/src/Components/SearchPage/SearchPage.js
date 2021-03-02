import React from 'react';
import axios from 'axios';
import PostCard from '../PostCard';

class SearchPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: [],
		};
	}

	componentDidMount() {}

	render() {
		return (
			<div className="searchContent">
				<div className="container">
					<div className="title">
						<h1>Lets Find It!</h1>
					</div>
				</div>
			</div>
		);
	}
}

export default SearchPage;
