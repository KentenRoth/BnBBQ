import React from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import NavBar from './Components/Nav';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: [],
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
							<LandingPage posts={this.state.posts} />
						</Route>
					</Switch>
				</BrowserRouter>
			</div>
		);
	}

	getPosts = () => {
		axios.get('/posts').then((response) => {
			this.setState({ posts: response.data });
		});
	};
}

export default App;
