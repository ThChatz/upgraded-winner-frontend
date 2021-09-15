import React, { useState, useEffect } from 'react';
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

import get from 'axios';

const RequireAuth = (props) => {
	const [pageContents, setPageContents] = useState(<></>);

	useEffect(() =>
		get("/session")
			.then((resp) => resp.status === 200 && setPageContents(props.children))
			.catch((resp) => setPageContents(<WelcomePageView />)),
		[props.children])
	return <>{pageContents}</>;
}


const App = (props) =>

	<HashRouter>
		<Switch>
			<Route path="/" component={FeedView} exact />
			<Route path="/signup" component={SignUpView} exact />
			<Route path="/login" component={LoginView} exact />
			<RequireAuth>
				<Route path="/home" component={FeedView} exact />
				<Route path="/u/:user_id/" exact>
					<ProfileView />
				</Route>
				<Route path="/network" component={NetworkView} exact />
				<Route path="/jobs" component={JobView} exact />
				<Route path="/messages/:thread_id" component={MessagesView} exact />
			</RequireAuth>
		</Switch>
	</HashRouter>


export default App;

