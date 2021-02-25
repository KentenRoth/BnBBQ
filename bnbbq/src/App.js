import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import NavBar from './Components/Nav';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {}

	render() {
		return (
			<div>
				<NavBar />
				<BrowserRouter>
					<Switch>
						<Route path="/" component={LandingPage} exact />
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
