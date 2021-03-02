import React from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './Components/Nav/Nav';
import LandingPage from './Components/LandingPage/LandingPage';
import AboutPage from './Components/AboutPage/AboutPage';
import Footer from './Components/Footer';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			featuredPosts: [],
			beardPosts: [],
			bbqPosts: [],
		};
	}

	componentDidMount() {
		this.getPosts();
	}

	render() {
		return (
			<div>
				<NavBar />
				<BrowserRouter>
					<Switch>
						<Route path="/" exact>
							<LandingPage
								feature={this.state.featuredPosts}
								beard={this.state.beardPosts}
								bbq={this.state.bbqPosts}
							/>
						</Route>
						<Route path="/about" component={AboutPage} />
					</Switch>
				</BrowserRouter>
				<Footer />
			</div>
		);
	}

	getPosts = () => {
		axios.get('/posts').then((response) => {
			const posts = response.data;
			const feature = [];
			const beard = [];
			const bbq = [];
			posts.map((post) => {
				if (post.tags[0] === 'featured') {
					return feature.push(post);
				}
				if (post.tags[0] === 'beard') {
					return beard.push(post);
				}
				if (post.tags[0] === 'barbecue') {
					return bbq.push(post);
				}
				return null;
			});

			this.setState({ featuredPosts: feature });
			this.setState({ beardPosts: beard });
			this.setState({ bbqPosts: bbq });
			return console.log(feature);
		});
	};
}

export default App;
