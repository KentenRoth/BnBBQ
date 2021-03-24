import React from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './Components/Nav/Nav';
import LandingPage from './Components/LandingPage/LandingPage';
import AboutPage from './Components/AboutPage/AboutPage';
import SearchPage from './Components/SearchPage/SearchPage';
import BeardPage from './Components/BeardPage/BeardPage';
import BBQPage from './Components/BBQPage/BBQPage';
import Post from './Components/PostPage/Post';
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
				<BrowserRouter>
					<NavBar />
					<Switch>
						<Route path="/" exact>
							<LandingPage
								feature={this.state.featuredPosts}
								beard={this.state.beardPosts}
								bbq={this.state.bbqPosts}
							/>
						</Route>
						<Route path="/about" component={AboutPage} />
						<Route path="/search" component={SearchPage} />
						<Route path="/beardPage" component={BeardPage} />
						<Route path="/bbqPage" component={BBQPage} />
						<Route path="/posts" component={Post} />
					</Switch>
				</BrowserRouter>
				<Footer />
			</div>
		);
	}

	getPosts = () => {
		axios.get('https://bnbbq-api.herokuapp.com/posts').then((response) => {
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
			const limitedBeard = beard.slice(-4).reverse();
			const limitedbbq = bbq.slice(-4).reverse();
			this.setState({
				featuredPosts: feature,
				beardPosts: limitedBeard,
				bbqPosts: limitedbbq,
			});
		});
	};
}

export default App;
