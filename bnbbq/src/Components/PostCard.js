import React from 'react';
import { Link } from 'react-router-dom';

class PostCard extends React.Component {
	constructor(props) {
		super(props);
		this.getPostInfo = this.getPostInfo.bind(this);
	}
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
				<div className="postCardTitle">
					<p>{title}</p>
				</div>
				<div className="postCardSecondary">{this.secondaryText()}</div>
				<div className="postCardButton">{this.postButton()}</div>
			</div>
		);
	}

	getPostInfo = (e) => {
		console.log(e.target.id);
	};

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
		const beardOrBBQ = this.props.post.tags;
		const id = this.props.post._id;
		if (beardOrBBQ[0] === 'barbecue' || beardOrBBQ[1] === 'barbecue') {
			return (
				<Link to={`/posts/${id}`}>
					<button
						className="postButton red"
						id={id}
						onClick={this.getPostInfo}
					>
						Lets Grill
					</button>
				</Link>
			);
		} else {
			return (
				<Link to={`/posts/${id}`}>
					<button
						className="postButton green"
						onClick={this.getPostInfo}
					>
						Get Bearded
					</button>
				</Link>
			);
		}
	};
}

export default PostCard;
