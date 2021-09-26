import React, { useState, useEffect, useContext, createContext } from 'react';
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
import CreateAdmin from './views/CreateAdmin';
import Error from './components/error.jsx';
import Admin from './views/Admin';
import DynamicInput from './components/DynamicInput';
import get from 'axios';

const UserContext = createContext({ 'user': {}, 'setUser': () => { } });
const ErrorContext = createContext({ 'error': {}, 'setError': () => { } });


const RequireAuth = (props) => {
	const [pageContents, setPageContents] = useState(<></>);
	const { user, setUser } = useContext(UserContext);

	console.log(user);

	useEffect(() =>
		setPageContents((user.id !== undefined &&
			(!props.admin ||
				(props.admin && user.is_admin)))
			? props.children : <WelcomePageView />)
		, [user]);

	return props.children;
}


const App = (props) => {

	const [error, setError] = useState({})
	const [user, setUser] = useState({})
	const [context, setContext] = useState({
		error: error,
		setError: setError,
		user: user,
		setUser: setUser
	});


	return (
		<>
			<UserContext.Provider value={{ 'user': user, 'setUser': setUser }}>
				<ErrorContext.Provider value={{ 'error': error, 'setError': setError }}>
					<Error {...error} />
					<HashRouter>
						<Switch>
							<Route path="/signup" component={SignUpView} exact />
							<Route path="/login" component={LoginView} exact />

							<RequireAuth>
								<Route path="/install" component={CreateAdmin} />
								<Route path="/admin" component={Admin} />
								<Route path="/" component={FeedView} exact />
								<Route path="/home" component={FeedView} exact />
								<Route path="/u/:user_id/" exact>
									<ProfileView />
								</Route>
								<Route path="/network" component={NetworkView} exact />
								<Route path="/jobs" component={JobView} exact />
								<Route path="/conversations/:thread_id" component={MessagesView} exact />
								<Route path="/conversations/" component={MessagesView} exact />
							</RequireAuth>

						</Switch>
					</HashRouter>
				</ErrorContext.Provider>
			</UserContext.Provider>
		</>);
}

App.UserContext = UserContext;
App.ErrorContext = ErrorContext;
export default App;

