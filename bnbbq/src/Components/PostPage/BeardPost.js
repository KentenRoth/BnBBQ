import React from 'react';
import Ad from '../Ad/Ad';

class BeardPost extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}

	render() {
		const image = this.props.post.f_image;
		const alt = this.props.post.alt;
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
								alt={alt}
							/>
						</div>
						<div className="postTitle">
							<h2>{this.props.post.title}</h2>
						</div>
						<div className="postSecondaryTitle">
							<p>Location: {this.props.post.location}</p>
							<p>
								Posted: {month}/{day}/{year}
							</p>
						</div>
						<div className="ad">
							<Ad />
						</div>
						<div className="sectionHeading">
							<h3>The Breakdown!</h3>
						</div>
						<div className="contentSection">
							{this.props.post.content.map((para, i) => {
								return (
									<p className="contentSectionLi" key={i}>
										{para}
									</p>
								);
							})}
						</div>
						<div className="ingredientsSection">
							<p>Beard oil ingredients:</p>
							<ul className="ingUl">
								{this.props.post.ingredients.map((ing, i) => {
									return (
										<li className="ingLi" key={i}>
											{ing}
										</li>
									);
								})}
							</ul>
						</div>
						<br />
						<div className="ingredientsSection">
							<p>Beard butter ingredients:</p>
							<ul className="ingUl">
								{this.props.post.ingredients2.map((ing, i) => {
									return (
										<li className="ingLi" key={i}>
											{ing}
										</li>
									);
								})}
							</ul>
						</div>
						<div className="ad">
							<Ad />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default BeardPost;
