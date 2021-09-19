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

import get from 'axios';

const RequireAuth = (props) => {
	const [pageContents, setPageContents] = useState(<></>);

	useEffect(() =>
		get(process.env.REACT_APP_API_ROOT+"/session")
			.then((resp) => resp.status === 200 && setPageContents(props.children))
			.catch((resp) => setPageContents(<WelcomePageView />)),
		[props.children])
	return <>{pageContents}</>;
}

const UserContext = createContext({'user': {}, 'setUser': () => {}});
const ErrorContext = createContext({'error': {}, 'setError': () => {}});

const App = (props) => {
    
    const [error, setError] = useState({})
    const [user, setUser] = useState({})    
    const [context, setContext] = useState({error: error,
					    setError: setError,
					    user: user,
					    setUser: setUser});


    return (
	<>
	    <UserContext.Provider value={{'user': user, 'setUser': setUser}}>
		<ErrorContext.Provider value={{'error': error, 'setError': setError}}>
		    <Error {...error}/>
		    <HashRouter>
			<Switch>
			    <Route path="/signup" component={SignUpView} exact />
			    <Route path="/login" component={LoginView} exact />
			    <Route path="/install" component={CreateAdmin} />
			    <RequireAuth>
				<Route path="/" component={FeedView} exact />
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
		</ErrorContext.Provider>
	    </UserContext.Provider>
	</>);
}

App.UserContext = UserContext;
App.ErrorContext = ErrorContext;
export default App;

