import React from 'react';

class PostCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			articals: [],
			color: '',
			text: 'location',
		};
	}

	render() {
		return (
			<div>
				<div>{/* image */}</div>
				<div>
					<p>{this.props.text}</p>
				</div>
			</div>
		);
	}
}

export default PostCard;
