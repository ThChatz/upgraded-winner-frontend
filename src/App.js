import React, { useState, useEffect, createContext} from 'react';
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



const UserContext = createContext({ 'user': {}, 'setUser': () => { } });
const ErrorContext = createContext({ 'error': {}, 'setError': () => { } });


const RequireAuth = (props) => {
    const [pageContents, setPageContents] = useState(<WelcomePageView />);

    useEffect(() =>
	setPageContents(props.userPred(props.user) ? props.children : <WelcomePageView />)
	, [props.user]);

    return pageContents;
}


const App = (props) => {

    const [error, setError] = useState({})
    const [user, setUser] = useState({})

    return (
	<>
	    <UserContext.Provider value={{ 'user': user, 'setUser': setUser }}>
		<Error {...error} />
		<HashRouter>
		    
		    {/* <RequireNotAuth> */}
		    <Switch>
			
			<Route path="/signup" component={SignUpView} exact/>
			<Route path="/login" component={LoginView} exact />
			<RequireAuth user={user} userPred={(user) => user.id !== undefined}>
			    <Route path="/install" component={CreateAdmin} />
			    <Route path="/admin" component={Admin} />
			    <Route path="/" component={FeedView} exact />
			    <Route path="/home" component={FeedView} exact />
			    <Route path="/u/:user_id/" component={ProfileView} exact />
			    <Route path="/network" component={NetworkView} exact />
			    <Route path="/jobs" component={JobView} exact />
			    <Route path="/conversations/:thread_id" component={MessagesView} exact />
			    <Route path="/conversations/" component={MessagesView} exact />
			</RequireAuth>
		    </Switch>
		</HashRouter>
	    </UserContext.Provider>
	</>);
}

App.UserContext = UserContext;
export default App;

