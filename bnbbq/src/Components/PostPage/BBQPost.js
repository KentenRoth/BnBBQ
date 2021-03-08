import React from 'react';
import Ad from '../Ad/Ad';

class BBQPost extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0);
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
						</div>
						<div className="postSecondaryTitle">
							<p>Time: {this.props.post.time}</p>
							<p>
								Posted: {month}/{day}/{year}
							</p>
						</div>
						<div className="ad">
							<Ad />
						</div>
						<div className="contentSection">
							{this.props.post.content.map((para, i) => {
								return <p key={i}>{para}</p>;
							})}
						</div>
						<div className="sectionHeading">
							<h3>What You Need</h3>
						</div>
						<div className="foodIng">
							<ul>
								{this.props.post.ingredients.map((ing, i) => {
									return <li key={i}>{ing}</li>;
								})}
							</ul>
						</div>
						<div className="sectionHeading">
							<h3>Lets Start!</h3>
						</div>
						<div>
							<ol>
								{this.props.post.steps.map((step, i) => {
									return (
										<li className="stepsLi" key={i}>
											{step}
										</li>
									);
								})}
							</ol>
						</div>
						<div>
							<br />
							<div className="sectionHeading">
								<h3>TLDR</h3>
							</div>
							<ol>
								{this.props.post.TLDR.map((tldr, i) => {
									return (
										<li className="tldrLi" key={i}>
											{tldr}
										</li>
									);
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
