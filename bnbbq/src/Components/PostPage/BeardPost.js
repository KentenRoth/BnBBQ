import React from 'react';
import Ad from '../Ad/Ad';

class BeardPost extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {}

	render() {
		const image = this.props.post.f_image;
		var date = new Date(this.props.post.created);
		var year = date.getFullYear();
		var month = ('0' + (date.getMonth() + 1)).slice(-2);
		var day = ('0' + date.getDate()).slice(-2);
		return (
			<div className="pageContent">
				<div className="container">
					<div className="postContainer">
						<div className="postImage">
							<img
								src={`${process.env.PUBLIC_URL}/assets/images/${image}`}
								alt={image}
							/>
						</div>
						<div className="postTitle">
							<h2>{this.props.post.title}</h2>
							<p>Location: {this.props.post.location}</p>
							<p>
								Posted: {month}/{day}/{year}
							</p>
							<Ad />
						</div>
						<div>
							{this.props.post.content.map((para, i) => {
								return <p key={i}>{para}</p>;
							})}
						</div>
						<div>
							<p>Beard oil ingredients</p>
							<ul>
								{this.props.post.ingredients.map((ing, i) => {
									return <li key={i}>{ing}</li>;
								})}
							</ul>
						</div>
						<div>
							<p>Beard butter ingredients</p>
							<ul>
								{this.props.post.ingredients2.map((ing, i) => {
									return <li key={i}>{ing}</li>;
								})}
							</ul>
						</div>
						<div>
							<Ad />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default BeardPost;
