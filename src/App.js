import React from 'react';
import './App.css';
import FeedView from "./views/FeedView"
import ProfileView from "./views/ProfileView"
import NetworkView from "./views/NetworkView"
import MessagesView from "./views/MessagesView"
import JobView from "./views/JobView"
import { HashRouter, Route, Switch } from "react-router-dom"
import SignUpView from './views/SignUpView';
import LoginView from './views/LoginView';
import WelcomePageView from './views/WelcomePageView';

const App = (props) =>
	<>
		<HashRouter>
			<Switch>
				<Route path="/" component={WelcomePageView} exact />
				<Route path="/signup" component={SignUpView} exact />
				<Route path="/login" component={LoginView} exact />
				<Route path="/home" component={FeedView} exact />
				<Route path="/u/:user_id/" exact>
					<ProfileView />
				</Route>
				<Route path="/network" component={NetworkView} exact />
				<Route path="/jobs" component={JobView} exact />
				<Route path="/messages/:thread_id" component={MessagesView} exact />
			</Switch>
		</HashRouter>
		{/* <WelcomePage /> */}
	</>

export default App;
