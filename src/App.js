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

const AppContext = createContext({'context': {}, 'setContext': () => {}});

const App = (props) => {
    
    const [error, setError] = useState({})    
    const [context, setContext] = useState({error, setError});


    return (
	<>
	    <Error {...error}/>
	<HashRouter>
		<Switch>
		    <AppContext.Provider value={{'context': context, 'setContext': setContext}}>
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
		    </AppContext.Provider>
		</Switch>
	</HashRouter>
	    </>);
}

App.Context = AppContext;
export default App;

