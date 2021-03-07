import React from 'react';
import Ad from '../Ad/Ad';

class BBQPost extends React.Component {
	componentDidMount() {
		console.log(this.props.post);
	}

	render() {
		return (
			<div className="pageContent">
				<div className="container">
					<div className="postContainer">
						<div className="postImage"></div>
						<div className="postTitle">
							<h2>{this.props.post.title}</h2>
							<Ad />
						</div>
						<div>
							{this.props.post.content.map((para, i) => {
								return <p key={i}>{para}</p>;
							})}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default BBQPost;
