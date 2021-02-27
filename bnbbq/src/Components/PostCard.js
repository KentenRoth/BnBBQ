import React from 'react';

class PostCard extends React.Component {
	componentDidMount() {}
	render() {
		const title = this.props.post.title;
		const image = this.props.post.f_image;
		return (
			<div className="postCard">
				<div className="postCardImage">
					<img
						src={`${process.env.PUBLIC_URL}/assets/images/${image}`}
						alt="logo"
					/>
				</div>
				<div className="postCardText">
					<p>{title}</p>
				</div>
				<div className="postCardSecondary">{this.secondaryText()}</div>
				<div className="postCardButton">{this.postButton()}</div>
			</div>
		);
	}

	secondaryText = () => {
		const time = this.props.post.time;
		const location = this.props.post.location;
		if (time !== undefined) {
			return <p>Time: {time}</p>;
		} else {
			return <p>Location: {location}</p>;
		}
	};

	postButton = () => {
		const beardOrBBQ = this.props.post.tags[1];
		if (beardOrBBQ === 'barbecue') {
			return <button className="red">Lets Grill</button>;
		} else {
			return <button className="green">Get Bearded</button>;
		}
	};
}

export default PostCard;
