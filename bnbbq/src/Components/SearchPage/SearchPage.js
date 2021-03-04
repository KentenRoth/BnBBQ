import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import NoResults from './NoResults';
import PostCard from '../PostCard';

class SearchPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: [],
		};
	}

	onSearch = async (searchTerm) => {
		try {
			const response = await axios.get(`/posts?search=${searchTerm}`);
			this.setState({ posts: response.data });
		} catch (e) {
			console.log(e);
		}
	};

	componentDidMount() {}

	render() {
		return (
			<div className="searchContent">
				<div className="container">
					<div className="title">
						<h1>Lets Find It!</h1>
					</div>
					<div>
						<SearchBar search={this.onSearch} />
					</div>
					<div className="resultsContent">
						{this.gettingResults()}
					</div>
				</div>
			</div>
		);
	}

	gettingResults = () => {
		if (this.state.posts.length === 0) {
			return (
				<div className="noResults">
					<NoResults />
				</div>
			);
		}
		return (
			<div className="results">
				<div className="searchPosts">
					{this.state.posts.map((post) => {
						return <PostCard key={post._id} post={post} />;
					})}
				</div>
			</div>
		);
	};
}

export default SearchPage;
