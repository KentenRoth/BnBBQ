import React from 'react';

class SearchBar extends React.Component {
	state = {
		searchTerm: '',
	};

	onSearchSubmit = (e) => {
		e.preventDefault();
		this.props.search(this.state.searchTerm);
	};
	render() {
		return (
			<div>
				<div>
					<input
						onChange={(e) =>
							this.setState({ searchTerm: e.target.value })
						}
						type="text"
					></input>
					<button onClick={this.onSearchSubmit}>Search</button>
				</div>
			</div>
		);
	}
}

export default SearchBar;
