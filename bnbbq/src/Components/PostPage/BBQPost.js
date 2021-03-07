import React from 'react';
import Ad from '../Ad/Ad';

class BBQPost extends React.Component {
	componentDidMount() {
		console.log(this.props.post);
	}

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
							<p>Time: {this.props.post.time}</p>
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
							<h3>Lets Start!</h3>
						</div>
						<div>
							<ol>
								{this.props.post.steps.map((step, i) => {
									return <li key={i}>{step}</li>;
								})}
							</ol>
						</div>
						<div>
							<div>
								<h3>TLDR</h3>
							</div>
							<ol>
								{this.props.post.TLDR.map((tldr, i) => {
									return <li key={i}>{tldr}</li>;
								})}
							</ol>
						</div>
						<Ad />
					</div>
				</div>
			</div>
		);
	}
}

export default BBQPost;
